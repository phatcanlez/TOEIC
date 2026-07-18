import { useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { GRAMMAR } from "../data/grammar.js";
import { groupByUnit, UNIT_SELF } from "../lib/units.js";
import QuestionBox from "../components/QuestionBox.jsx";
import ImageModal from "../components/ImageModal.jsx";

// Map 15 chủ điểm GRAMMAR builtin → bài, để trộn chung vào cheat-sheet với ghi chú của user.
const GRAMMAR_UNIT = {
  wordform: "NP: Tính từ, Trạng từ & So sánh",
  tense: "NP: Thì",
  relative: "NP: Mệnh đề quan hệ & Điều kiện",
  conjunction: "NP: Liên từ & Giới từ",
  agreement: "NP: Chủ ngữ, Danh từ & Đại từ",
  preposition: "NP: Liên từ & Giới từ",
  gerund: "NP: To-V, V-ing & Phân từ",
  infinitive: "NP: To-V, V-ing & Phân từ",
  passive: "NP: Bị động",
  comparison: "NP: Tính từ, Trạng từ & So sánh",
  pronoun: "NP: Chủ ngữ, Danh từ & Đại từ",
  conditional: "NP: Mệnh đề quan hệ & Điều kiện",
  subordinate: "NP: Liên từ & Giới từ",
  quantifier: "NP: Chủ ngữ, Danh từ & Đại từ",
  article: "NP: Chủ ngữ, Danh từ & Đại từ",
};

function FormulaItem({ item, onLogError }) {
  const [showImg, setShowImg] = useState(false);
  const [showDrill, setShowDrill] = useState(false);
  const drills = item.drills || [];
  return (
    <details className="formula">
      <summary>
        <div className="f-title">{item.title} {item.builtin && <span className="badge">có sẵn</span>}</div>
        {item.pattern && <div className="pattern-mini">🔑 {item.pattern}</div>}
      </summary>
      <div className="formula-body">
        {item.tip && <>💡 {item.tip}{"\n"}</>}
        {item.body}
        <div className="row" style={{ marginTop: 8 }}>
          {item.img && <button className="btn sec sm" onClick={() => setShowImg(true)}>🖼️ Ảnh gốc</button>}
          {drills.length > 0 && (
            <button className="btn sec sm" onClick={() => setShowDrill((v) => !v)}>🎯 Luyện ({drills.length} câu)</button>
          )}
        </div>
        {showDrill && drills.map((d, i) => (
          <QuestionBox key={i} q={d.q} options={d.options} answer={d.a} why={d.why}
            onAnswer={(choice, ok) => { if (!ok) onLogError({ type: "Công thức: " + item.title, q: d.q, your: choice, correct: d.a, why: d.why || "" }); }} />
        ))}
        {showImg && <ImageModal src={item.img} onClose={() => setShowImg(false)} />}
      </div>
    </details>
  );
}

// 📌 Công thức — cheat sheet: mọi pattern (ghi chú user + 15 chủ điểm builtin) gom 1 chỗ, nhóm theo bài.
export default function FormulasTab({ onAskAI }) {
  const { state, dispatch } = useAppState();

  const noteItems = state.notes
    .filter((n) => n.pattern || n.body)
    .map((n) => ({
      title: n.title || "(chưa đặt tên)", pattern: n.pattern, body: n.body || "",
      img: n.img, unit: n.unit || UNIT_SELF, drills: n.ai && n.ai.drills ? n.ai.drills : [],
    }));
  const grammarItems = GRAMMAR.map((g) => ({
    title: g.name, pattern: g.pattern, body: "", tip: g.tip,
    img: null, unit: GRAMMAR_UNIT[g.id] || UNIT_SELF, drills: g.drills, builtin: true,
  }));
  const groups = groupByUnit([...grammarItems, ...noteItems]);

  const logError = (item) => dispatch({ type: "LOG_ERROR", item });

  return (
    <section>
      <h2>📌 Công thức <span className="tag">{noteItems.length + grammarItems.length} pattern</span></h2>
      <div className="sub">Toàn bộ công thức/pattern gom về một chỗ, chia theo bài — bấm để mở nội dung đầy đủ, 🎯 luyện drill ngay tại chỗ, làm sai tự vào 📝 Sổ lỗi.</div>
      {groups.map((g, gi) => (
        <details className="lesson" key={g.name} open={gi === 0}>
          <summary>
            <span>{g.emoji} {g.name}</span>
            <span className="tag">{g.items.length} công thức</span>
            {onAskAI && (
              <button className="btn sec sm" title="Hỏi AI về bài này"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAskAI(g.name); }}>💬</button>
            )}
          </summary>
          <div className="lesson-body">
            {g.items.map((it, i) => <FormulaItem key={i} item={it} onLogError={logError} />)}
          </div>
        </details>
      ))}
    </section>
  );
}
