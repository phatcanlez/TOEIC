import { useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { callGroq } from "../lib/groq.js";

// Port từ section #errors + renderErrors()/removeError()/aiAnalyze() bản cũ.
export default function ErrorsTab({ onGoSettings }) {
  const { state, dispatch } = useAppState();
  const [busyIdx, setBusyIdx] = useState(null);
  const [results, setResults] = useState({});

  function clearAll() {
    if (confirm("Xóa toàn bộ sổ lỗi?")) { dispatch({ type: "CLEAR_ERRORS" }); setResults({}); }
  }
  function remove(i) {
    dispatch({ type: "REMOVE_ERROR", index: i });
    setResults((r) => { const c = { ...r }; delete c[i]; return c; });
  }
  async function analyze(i) {
    if (!state.apiKey) { setResults((r) => ({ ...r, [i]: "⚠️ Cần API key (tab Cài đặt)." })); if (onGoSettings) onGoSettings(); return; }
    const e = state.errors[i];
    setBusyIdx(i);
    try {
      const txt = await callGroq(state.apiKey, [{
        role: "user",
        content: `Câu TOEIC: "${e.q}"\nĐáp án đúng: "${e.correct}". Học viên chọn sai: "${e.your}".\nPhân tích ngắn gọn bằng tiếng Việt: (1) vì sao đáp án đúng, (2) vì sao lựa chọn kia sai, (3) DẤU HIỆU nhận biết dạng này lần sau. Thực dụng, không lý thuyết dài.`,
      }], "Bạn là gia sư TOEIC. Trả lời ngắn gọn, tập trung vào cách nhận diện pattern.", 600, state.model);
      setResults((r) => ({ ...r, [i]: txt }));
    } catch (err) { setResults((r) => ({ ...r, [i]: "❌ " + err.message })); } finally { setBusyIdx(null); }
  }

  return (
    <section>
      <h2>📝 Sổ lỗi sai</h2>
      <div className="sub">Nơi quan trọng nhất. Mỗi câu sai học 5 phút: <b>vì sao đúng, vì sao sai, đổi từ thì sao</b>. Bấm "AI phân tích" để mổ xẻ.</div>
      <div className="row" style={{ marginBottom: 12 }}>
        <button className="btn sec sm" onClick={clearAll}>🗑️ Xóa hết</button>
        <span className="tag">{state.errors.length} lỗi</span>
      </div>
      {!state.errors.length ? (
        <div className="card">🎉 Chưa có lỗi nào. Làm sai câu nào ở Ngữ pháp/Đọc sẽ tự lưu vào đây để ôn.</div>
      ) : (
        state.errors.map((e, i) => (
          <div className="err-item" key={i}>
            <div className="small">{e.type} • {e.date}</div>
            <div style={{ margin: "6px 0", fontSize: 15 }}>{e.q}</div>
            <div className="small">Bạn chọn: <span style={{ color: "var(--bad)" }}>{e.your}</span> • Đúng: <span style={{ color: "var(--ok)" }}>{e.correct}</span></div>
            {e.why && <div className="small" style={{ marginTop: 4 }}>💡 {e.why}</div>}
            <div className="row" style={{ marginTop: 8 }}>
              <button className="btn sec sm" onClick={() => analyze(i)}>🤖 AI phân tích 5 phút</button>
              <button className="btn sec sm" onClick={() => remove(i)}>✔️ Đã hiểu, xóa</button>
            </div>
            {busyIdx === i && <div className="ai-out"><span className="spin" /> AI đang phân tích...</div>}
            {results[i] && busyIdx !== i && <div className="ai-out">{results[i]}</div>}
          </div>
        ))
      )}
    </section>
  );
}
