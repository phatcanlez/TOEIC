import { useRef, useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { callGroq } from "../lib/groq.js";
import { todayStr } from "../state/defaultState.js";

// Theo bảng rate limit Groq (console.groq.com/docs/rate-limits): gpt-oss-120b là model lớn nhất
// (120B tham số) hiện có — ưu tiên chất lượng trả lời khi không cần tốc độ/số lượng request cao.
// Llama 4 Maverick (vision) không còn trong bảng rate limit hiện tại nên bỏ khỏi danh sách.
const MODELS = [
  { v: "openai/gpt-oss-120b", l: "GPT-OSS 120B (Khuyên dùng — chất lượng cao nhất)" },
  { v: "llama-3.3-70b-versatile", l: "Llama 3.3 70B (Cân bằng)" },
  { v: "llama-3.1-8b-instant", l: "Llama 3.1 8B (Nhanh, nhẹ)" },
  { v: "meta-llama/llama-4-scout-17b-16e-instruct", l: "Llama 4 Scout (chỉ dùng nội bộ cho Quét ảnh)" },
];

// Port từ section #settings bản cũ.
export default function SettingsTab() {
  const { state, dispatch } = useAppState();
  const [examDate, setExamDate] = useState(state.examDate);
  const [apiKey, setApiKey] = useState(state.apiKey);
  const [model, setModel] = useState(state.model);
  const [keyStatus, setKeyStatus] = useState(state.apiKey ? "✅ Đã có key." : "");
  const [testing, setTesting] = useState(false);
  const fileRef = useRef(null);

  function saveDate() {
    if (!examDate) return;
    dispatch({ type: "SET_EXAM_DATE", value: examDate });
    alert("Đã lưu ngày thi: " + new Date(examDate).toLocaleDateString("vi-VN"));
  }
  function saveKey() {
    dispatch({ type: "SET_API_KEY", value: apiKey.trim() });
    dispatch({ type: "SET_MODEL", value: model });
    setKeyStatus(apiKey.trim() ? "✅ Đã lưu key." : "Đã xóa key.");
  }
  async function testKey() {
    const k = apiKey.trim();
    dispatch({ type: "SET_API_KEY", value: k });
    dispatch({ type: "SET_MODEL", value: model });
    if (!k) { setKeyStatus("Nhập key trước."); return; }
    setTesting(true); setKeyStatus("");
    try {
      const r = await callGroq(k, [{ role: "user", content: "Say OK" }], "", 20, model);
      setKeyStatus("✅ Kết nối OK! (" + r.trim() + ")");
    } catch (e) { setKeyStatus("❌ " + e.message); } finally { setTesting(false); }
  }
  function exportData() {
    const b = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(b);
    a.download = "toeic-progress-" + todayStr() + ".json";
    a.click();
  }
  function importData(e) {
    const f = e.target.files[0]; e.target.value = "";
    if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        const j = JSON.parse(rd.result);
        if (!j || typeof j !== "object" || (!j.cards && !j.myWords)) throw new Error("File không đúng định dạng tiến độ");
        if (!confirm("Ghi đè toàn bộ tiến độ hiện tại bằng file này?")) return;
        dispatch({ type: "IMPORT_STATE", json: j });
      } catch (err) { alert("Lỗi nhập file: " + err.message); }
    };
    rd.readAsText(f);
  }
  function resetData() {
    if (confirm("Xóa toàn bộ tiến độ?")) dispatch({ type: "RESET_STATE" });
  }

  return (
    <section>
      <h2>Cài đặt</h2>
      <div className="card">
        <h3>🎯 Ngày thi TOEIC</h3>
        <div className="row">
          <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
          <button className="btn sm" onClick={saveDate}>Lưu</button>
        </div>
      </div>
      <div className="card">
        <h3>🤖 Groq API Key</h3>
        <p className="small">
          Bật AI (tạo ví dụ, chat, phân tích lỗi). Lấy key tại{" "}
          <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer">console.groq.com</a>. Key chỉ lưu trên máy bạn.
        </p>
        <label>API Key</label>
        <div className="row">
          <input type="password" style={{ flex: 1, minWidth: 220 }} placeholder="gsk_..." value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            {MODELS.map((m) => <option key={m.v} value={m.v}>{m.l}</option>)}
          </select>
          <button className="btn sm" onClick={saveKey}>Lưu</button>
          <button className="btn sec sm" onClick={testKey} disabled={testing}>Kiểm tra</button>
        </div>
        <div className="small" style={{ marginTop: 8 }}>{testing ? <><span className="spin" /> Đang kiểm tra...</> : keyStatus}</div>
      </div>
      <div className="card">
        <h3>🗄️ Dữ liệu</h3>
        <div className="row">
          <button className="btn sec sm" onClick={exportData}>⬇️ Xuất tiến độ</button>
          <button className="btn sec sm" onClick={() => fileRef.current.click()}>⬆️ Nhập tiến độ</button>
          <button className="btn sec sm" onClick={resetData}>🗑️ Đặt lại</button>
          <input ref={fileRef} type="file" accept=".json,application/json" style={{ display: "none" }} onChange={importData} />
        </div>
        <p className="small" style={{ marginTop: 8 }}>File xuất gồm toàn bộ từ vựng, ghi chú, tiến độ (trừ ảnh đính kèm — ảnh chỉ lưu trên trình duyệt này).</p>
      </div>
    </section>
  );
}
