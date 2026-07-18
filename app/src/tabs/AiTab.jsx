import { useEffect, useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { callGroq } from "../lib/groq.js";
import { unitEmoji, unitOf } from "../lib/units.js";

const QUICK = [
  { label: "Đề mệnh đề quan hệ", q: "Cho tôi 5 câu Part 5 về mệnh đề quan hệ, kèm đáp án và cue nhận biết ngắn." },
  { label: "Từ dễ nhầm", q: "Liệt kê các cặp từ dễ nhầm trong TOEIC (affect/effect, rise/raise...) dạng bảng ngắn." },
  { label: "Collocation", q: "20 collocation TOEIC hay gặp nhất, mỗi cái 1 ví dụ." },
  { label: "Bẫy Part 5", q: "Các bẫy thường gặp trong TOEIC Part 5 và cách tránh." },
];

const QUICK_UNIT = [
  { label: "🎯 Tạo 5 câu drill bài này", q: "Tạo 5 câu trắc nghiệm TOEIC Part 5 về bài này, kèm đáp án và cue nhận biết ngắn." },
  { label: "📝 Tóm tắt công thức", q: "Tóm tắt toàn bộ công thức/pattern của bài này thành bảng ngắn dễ nhớ." },
  { label: "⭐ Từ hay ra thi", q: "Trong bài này, những từ/cụm nào hay ra thi TOEIC nhất? Kèm ví dụ ngắn." },
];

// Ghép ngữ cảnh bài học (pattern các ghi chú + danh sách từ) để AI trả lời bám nội dung bài — cắt ~2000 ký tự.
function buildUnitContext(state, unit) {
  const notes = state.notes.filter((n) => unitOf(n) === unit);
  const words = state.myWords.filter((w) => unitOf(w) === unit);
  let ctx = `Học viên đang hỏi về bài: "${unit}".\n`;
  if (notes.length) {
    ctx += "Các công thức/ghi chú trong bài:\n" + notes.map((n) => `- ${n.title}: ${n.pattern || ""}`).join("\n") + "\n";
  }
  if (words.length) {
    ctx += "Từ vựng trong bài: " + words.slice(0, 60).map((w) => w.w).join(", ") + "\n";
  }
  ctx += "Hãy trả lời bám sát nội dung bài này.";
  return ctx.slice(0, 2000);
}

// 🤖 AI Gia sư — hỗ trợ "hỏi bài": nhận context (tên bài) từ nút 💬 ở các tab khác.
export default function AiTab({ onGoSettings, context, onClearContext }) {
  const { state } = useAppState();
  const [history, setHistory] = useState([]); // {role, content}
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  // Khi được đưa sang từ nút 💬: prefill câu hỏi gợi ý về bài đó
  useEffect(() => {
    if (context) setInput(`Giải thích bài "${context}" cho tôi, kèm ví dụ và mẹo nhận biết dạng đề.`);
  }, [context]);

  async function send(q) {
    q = (q || "").trim();
    if (!q) return;
    if (!state.apiKey) { if (onGoSettings) onGoSettings(); return; }
    const next = [...history, { role: "user", content: q }];
    setHistory(next);
    setInput("");
    setBusy(true);
    let system = "Gia sư TOEIC, giải thích tiếng Việt dễ hiểu, có ví dụ tiếng Anh, tập trung Listening & Reading mục tiêu 800+. Nhấn mạnh DẤU HIỆU nhận biết pattern. Gọn, thực dụng.";
    if (context) system += "\n\n" + buildUnitContext(state, context);
    try {
      const txt = await callGroq(state.apiKey, next, system, 1200, state.model);
      setHistory([...next, { role: "assistant", content: txt }]);
    } catch (e) {
      setHistory([...next, { role: "assistant", content: "❌ " + e.message }]);
    } finally { setBusy(false); }
  }

  return (
    <section>
      <h2>🤖 AI Gia sư TOEIC</h2>
      <div className="sub">Hỏi ngữ pháp, phân biệt từ, tạo đề, dịch, sửa câu. Bấm 💬 ở tab 📒/📓/📌 để hỏi theo bài.</div>
      {!state.apiKey ? (
        <div className="card">
          ⚠️ Chưa có API key. Vào <b>⚙️ Cài đặt</b> để dán key. Các phần khác vẫn chạy offline.
          <div style={{ marginTop: 10 }}><button className="btn" onClick={onGoSettings}>Mở Cài đặt</button></div>
        </div>
      ) : (
        <div className="card">
          {context && (
            <div className="ai-context-banner">
              📚 Đang hỏi về bài: <b>{unitEmoji(context)} {context}</b>
              <button title="Bỏ ngữ cảnh bài, chat thường" onClick={onClearContext}>✕</button>
            </div>
          )}
          <div className="row" style={{ marginBottom: 10 }}>
            {(context ? QUICK_UNIT : QUICK).map((b) => (
              <button className="btn sec sm" key={b.label} onClick={() => send(b.q)}>{b.label}</button>
            ))}
          </div>
          <div className="chat">
            {history.map((m, i) => <div className={"msg " + (m.role === "user" ? "user" : "ai")} key={i}>{m.content}</div>)}
            {busy && <div className="msg ai"><span className="spin" /> Đang trả lời...</div>}
          </div>
          <div className="row" style={{ marginTop: 12 }}>
            <input style={{ flex: 1 }} placeholder="Nhập câu hỏi... (Enter để gửi)" value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(input); }} />
            <button className="btn" onClick={() => send(input)}>Gửi</button>
          </div>
        </div>
      )}
    </section>
  );
}
