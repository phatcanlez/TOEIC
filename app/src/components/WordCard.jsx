import { useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { callGroq } from "../lib/groq.js";
import { speak } from "../lib/tts.js";
import HighlightedText from "./HighlightedText.jsx";
import ImageModal from "./ImageModal.jsx";

// Port từ wordCard() bản cũ — thẻ hiển thị 1 từ trong 📒 Từ của tôi.
export default function WordCard({ w, onEdit, onGoSettings }) {
  const { state, dispatch } = useAppState();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [showImg, setShowImg] = useState(false);

  async function enrich() {
    if (!state.apiKey) { alert("Cần Groq API key (⚙️ Cài đặt)."); if (onGoSettings) onGoSettings(); return; }
    setBusy(true); setErr("");
    try {
      const txt = await callGroq(state.apiKey, [{
        role: "user", content: `Từ TOEIC: "${w.w}"${w.p ? " (" + w.p + ")" : ""}${w.vi ? ", nghĩa: " + w.vi : ""}.
Trình bày gọn bằng gạch đầu dòng:
1. 2 câu ví dụ tiếng Anh ngữ cảnh TOEIC/công sở (kèm dịch tiếng Việt ngắn)
2. 3 cụm từ/collocation hay đi cùng từ này
3. Nghĩa tiếng Việt đầy đủ + các dạng từ liên quan (word family)
4. 1 mẹo nhớ nhanh`,
      }], "Gia sư TOEIC. Trả lời gọn, thực dụng, gạch đầu dòng.", 700, state.model);
      dispatch({ type: "UPDATE_MYWORD", id: w.id, patch: { enrich: txt } });
    } catch (e) { setErr(e.message); } finally { setBusy(false); }
  }

  function del() {
    if (confirm(`Xóa từ "${w.w}"?`)) dispatch({ type: "DELETE_MYWORD", id: w.id });
  }

  return (
    <div className="word-card">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div>
          <span className="w">{w.w}</span> <span className="ipa2">{w.ipa}</span>{" "}
          {w.p && <span className="tag">{w.p}</span>}{" "}
          {w.learned && <span className="tag" style={{ color: "var(--ok)" }}>✓ thuộc</span>}
        </div>
        <div className="row btns">
          <button className="btn sec sm" title="Nghe phát âm" onClick={() => speak(w.ex || w.w)}>🔊</button>
          <button className="btn sec sm" title="AI: ví dụ + cụm từ + mẹo nhớ" onClick={enrich}>✨</button>
          {w.img && (
            <button className="btn sec sm" title="Xem ảnh trang sách gốc" onClick={() => setShowImg(true)}>🖼️</button>
          )}
          <button className="btn sec sm" title="Sửa" onClick={onEdit}>✏️</button>
          <button className="btn sec sm" title="Xóa" onClick={del}>🗑️</button>
        </div>
      </div>
      {w.vi && <div style={{ color: "var(--ok)", fontWeight: 600, marginTop: 4 }}>{w.vi}</div>}
      {w.phr && (
        <div style={{ marginTop: 4 }}>
          {w.phr.split(/[,;\n]/).filter((s) => s.trim()).map((s, i) => <span key={i} className="tag">{s.trim()}</span>)}
        </div>
      )}
      {w.ex && (
        <div className="small" style={{ marginTop: 6, fontStyle: "italic", fontSize: 14 }}>
          <HighlightedText text={w.ex} word={w.w} />
        </div>
      )}
      {busy && <div className="ai-out"><span className="spin" /> AI đang tạo ví dụ, cụm từ, mẹo nhớ...</div>}
      {err && <div className="ai-out">❌ {err}</div>}
      {w.enrich && !busy && <div className="ai-out" style={{ marginTop: 8 }}><b>✨ AI bổ trợ:</b><br />{w.enrich}</div>}
      {showImg && <ImageModal src={w.img} onClose={() => setShowImg(false)} />}
    </div>
  );
}
