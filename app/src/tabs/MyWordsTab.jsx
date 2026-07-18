import { useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { dueMine } from "../lib/srs.js";
import { todayStr } from "../state/defaultState.js";
import { uid } from "../lib/utils.js";
import { UNITS, UNIT_SELF, groupByUnit } from "../lib/units.js";
import WordCard from "../components/WordCard.jsx";

const FIELDS = [
  ["w", "Từ (bắt buộc)"], ["p", "Loại (n/v/adj...)"], ["ipa", "IPA"],
  ["vi", "Nghĩa tiếng Việt"], ["phr", "Cụm từ (phân cách bằng phẩy)"], ["ex", "Câu ví dụ"],
];

function WordForm({ w, onDone }) {
  const { dispatch } = useAppState();
  const [tmp, setTmp] = useState({ ...w });
  function save() {
    if (!tmp.w.trim()) { alert("Cần nhập từ."); return; }
    dispatch({ type: "UPDATE_MYWORD", id: w.id, patch: { ...tmp, w: tmp.w.trim(), _new: undefined } });
    onDone();
  }
  function cancel() {
    if (w._new) dispatch({ type: "DELETE_MYWORD", id: w.id });
    onDone();
  }
  return (
    <div className="word-card">
      <div className="row">
        {FIELDS.map(([k, l]) => (
          <div className="fld" key={k} style={k === "ex" || k === "phr" ? { flexBasis: "100%" } : undefined}>
            <label>{l}</label>
            <input value={tmp[k] || ""} onChange={(e) => setTmp({ ...tmp, [k]: e.target.value })} />
          </div>
        ))}
        <div className="fld">
          <label>📚 Bài</label>
          <select value={tmp.unit || UNIT_SELF} onChange={(e) => setTmp({ ...tmp, unit: e.target.value })} style={{ width: "100%" }}>
            {UNITS.map((u) => <option key={u.name} value={u.name}>{u.emoji} {u.name}</option>)}
          </select>
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <button className="btn sm" onClick={save}>💾 Lưu</button>
        <button className="btn sec sm" onClick={cancel}>Hủy</button>
      </div>
    </div>
  );
}

// 📒 Từ của tôi — nhóm theo bài (accordion); tìm kiếm thì hiện kết quả phẳng để tra nhanh.
export default function MyWordsTab({ onGoReview, onGoSettings, onAskAI }) {
  const { state, dispatch } = useAppState();
  const [q, setQ] = useState("");
  const [editingId, setEditingId] = useState(null);

  const query = q.trim().toLowerCase();

  function addWord() {
    const id = uid();
    dispatch({
      type: "ADD_MYWORD", word: { id, w: "", p: "", ipa: "", vi: "", ex: "", phr: "", img: null, unit: UNIT_SELF, enrich: "", ease: 2.3, due: todayStr(), reps: 0, learned: false, added: todayStr(), _new: true },
    });
    setEditingId(id);
  }

  const renderWord = (w) => (editingId === w.id
    ? <WordForm key={w.id} w={w} onDone={() => setEditingId(null)} />
    : <WordCard key={w.id} w={w} onEdit={() => setEditingId(w.id)} onGoSettings={onGoSettings} />);

  let body;
  if (query || editingId) {
    // Đang tìm kiếm hoặc đang sửa: danh sách phẳng như cũ
    const list = state.myWords.filter((w) => editingId === w.id || !query || w.w.toLowerCase().includes(query) || (w.vi || "").toLowerCase().includes(query));
    body = !list.length
      ? <div className="card">Chưa có từ nào{q ? ` khớp "${q}"` : ""}. Quét ảnh 📷 hoặc bấm ➕ Thêm từ.</div>
      : list.map(renderWord);
  } else if (!state.myWords.length) {
    body = <div className="card">Chưa có từ nào. Quét ảnh 📷 hoặc bấm ➕ Thêm từ.</div>;
  } else {
    const groups = groupByUnit(state.myWords);
    body = groups.map((g, gi) => (
      <details className="lesson" key={g.name} open={gi === 0}>
        <summary>
          <span>{g.emoji} {g.name}</span>
          <span className="tag">{g.items.length} từ • {g.items.filter((w) => w.learned).length} thuộc</span>
          {onAskAI && (
            <button className="btn sec sm" title="Hỏi AI về bài này"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAskAI(g.name); }}>💬</button>
          )}
        </summary>
        <div className="lesson-body">{g.items.map(renderWord)}</div>
      </details>
    ));
  }

  return (
    <section>
      <h2>📒 Từ của tôi <span className="tag">{state.myWords.length} từ • {dueMine(state, false).length} tới hạn ôn</span></h2>
      <div className="sub">Từ chia theo bài — bấm tên bài để mở/đóng. Tìm kiếm để tra nhanh (kết quả hiện phẳng). Từ tới hạn tự vào tab 🔁 Ôn tập.</div>
      <div className="row" style={{ marginBottom: 12 }}>
        <input placeholder="🔍 Tìm từ / nghĩa..." style={{ flex: 1, minWidth: 180 }} value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn sec sm" onClick={addWord}>➕ Thêm từ</button>
        <button className="btn sm" onClick={onGoReview}>🎴 Ôn ngay</button>
      </div>
      {body}
    </section>
  );
}
