import { useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { callGroq, extractJson } from "../lib/groq.js";
import ImageModal from "./ImageModal.jsx";
import QuestionBox from "./QuestionBox.jsx";

// Port từ noteCard()/expandNote()/drillBlock() bản cũ — thẻ ghi chú ngữ pháp trong 📓 Ghi chú NP.
export default function NoteCard({ n, onEdit, onGoSettings }) {
  const { state, dispatch } = useAppState();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [showImg, setShowImg] = useState(false);
  const [showDrill, setShowDrill] = useState(false);

  async function expand() {
    if (!state.apiKey) { alert("Cần Groq API key (⚙️ Cài đặt)."); if (onGoSettings) onGoSettings(); return; }
    setBusy(true); setErr("");
    try {
      const txt = await callGroq(state.apiKey, [{
        role: "user", content: `Chủ điểm ngữ pháp TOEIC: "${n.title}". Công thức: "${n.pattern}". Ghi chú của học viên: "${(n.body || "").slice(0, 600)}".
Trả về DUY NHẤT JSON hợp lệ (không markdown):
{"explain":"giải thích ngắn bằng tiếng Việt + DẤU HIỆU nhận biết trong đề","examples":["câu ví dụ 1","câu ví dụ 2","câu ví dụ 3"],"drills":[{"q":"câu TOEIC có chỗ trống ___","options":["a","b","c","d"],"a":"đáp án đúng (trùng 1 option)","why":"cue nhận biết ngắn"}]}
với ĐÚNG 3 phần tử trong drills.`,
      }], "Bạn tạo nội dung học TOEIC. Chỉ trả về JSON hợp lệ.", 1500, state.model);
      dispatch({ type: "UPDATE_NOTE", id: n.id, patch: { ai: extractJson(txt) } });
      setShowDrill(false);
    } catch (e) { setErr(e.message); } finally { setBusy(false); }
  }

  function del() {
    if (confirm(`Xóa ghi chú "${n.title || ""}"?`)) dispatch({ type: "DELETE_NOTE", id: n.id });
  }

  function onDrillAnswer(dr, choice, correct) {
    if (!correct) {
      dispatch({ type: "LOG_ERROR", item: { type: "Ghi chú NP: " + (n.title || ""), q: dr.q, your: choice, correct: dr.a, why: dr.why || "" } });
    }
  }

  return (
    <div className="note-card">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <b style={{ fontSize: 16 }}>{n.title || "(chưa đặt tên)"}</b>
        <div className="row btns">
          <button className="btn sec sm" title="AI giải thích + tạo drill" onClick={expand}>✨</button>
          {n.ai && n.ai.drills && n.ai.drills.length > 0 && (
            <button className="btn sec sm" title="Làm drill" onClick={() => setShowDrill((v) => !v)}>🎯</button>
          )}
          {n.img && (
            <button className="btn sec sm" title="Xem ảnh gốc" onClick={() => setShowImg(true)}>🖼️</button>
          )}
          <button className="btn sec sm" title="Sửa" onClick={onEdit}>✏️</button>
          <button className="btn sec sm" title="Xóa" onClick={del}>🗑️</button>
        </div>
      </div>
      {n.pattern && <div className="pattern-box">🔑 {n.pattern}</div>}
      {n.body && <div style={{ fontSize: 14, lineHeight: 1.6, marginTop: 4, whiteSpace: "pre-line" }}>{n.body}</div>}
      {n.ai && (
        <div className="ai-out" style={{ marginTop: 8 }}>
          <b>✨ AI giải thích:</b><br />{n.ai.explain || ""}
          {n.ai.examples && n.ai.examples.length > 0 && (
            <>
              <br /><br /><b>Ví dụ:</b><br />
              {n.ai.examples.map((e, i) => <span key={i}>• {e}<br /></span>)}
            </>
          )}
        </div>
      )}
      {busy && <div className="ai-out"><span className="spin" /> AI đang giải thích + tạo drill...</div>}
      {err && <div className="ai-out">❌ {err}</div>}
      {showDrill && n.ai && n.ai.drills && (
        <div>
          {n.ai.drills.map((dr, i) => (
            <QuestionBox key={i} q={dr.q} options={dr.options} answer={dr.a} why={dr.why}
              onAnswer={(choice, correct) => onDrillAnswer(dr, choice, correct)} />
          ))}
        </div>
      )}
      {showImg && <ImageModal src={n.img} onClose={() => setShowImg(false)} />}
    </div>
  );
}
