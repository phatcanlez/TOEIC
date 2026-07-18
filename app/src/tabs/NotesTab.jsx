import { useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { todayStr } from "../state/defaultState.js";
import { uid } from "../lib/utils.js";
import { UNITS, UNIT_SELF, groupByUnit } from "../lib/units.js";
import NoteCard from "../components/NoteCard.jsx";

function NoteForm({ n, onDone }) {
  const { dispatch } = useAppState();
  const [tmp, setTmp] = useState({ ...n });
  function save() {
    if (!tmp.title.trim() && !tmp.pattern.trim()) { alert("Cần ít nhất tiêu đề hoặc pattern."); return; }
    dispatch({ type: "UPDATE_NOTE", id: n.id, patch: { ...tmp, _new: undefined } });
    onDone();
  }
  function cancel() {
    if (n._new) dispatch({ type: "DELETE_NOTE", id: n.id });
    onDone();
  }
  return (
    <div className="note-card">
      <div className="fld" style={{ flexBasis: "100%" }}>
        <label>Tiêu đề (vd: Mệnh đề quan hệ)</label>
        <input value={tmp.title || ""} onChange={(e) => setTmp({ ...tmp, title: e.target.value })} />
      </div>
      <div className="fld" style={{ flexBasis: "100%", marginTop: 8 }}>
        <label>Pattern / Công thức (vd: Neither A nor B + V theo B)</label>
        <input value={tmp.pattern || ""} onChange={(e) => setTmp({ ...tmp, pattern: e.target.value })} />
      </div>
      <div className="fld" style={{ marginTop: 8 }}>
        <label>📚 Bài</label>
        <select value={tmp.unit || UNIT_SELF} onChange={(e) => setTmp({ ...tmp, unit: e.target.value })}>
          {UNITS.map((u) => <option key={u.name} value={u.name}>{u.emoji} {u.name}</option>)}
        </select>
      </div>
      <label style={{ marginTop: 8 }}>Nội dung / ví dụ / điều cần nhớ</label>
      <textarea rows={4} style={{ width: "100%" }} value={tmp.body || ""} onChange={(e) => setTmp({ ...tmp, body: e.target.value })} />
      <div className="row" style={{ marginTop: 10 }}>
        <button className="btn sm" onClick={save}>💾 Lưu</button>
        <button className="btn sec sm" onClick={cancel}>Hủy</button>
      </div>
    </div>
  );
}

// 📓 Ghi chú ngữ pháp — nhóm theo bài (accordion) + tìm kiếm.
export default function NotesTab({ onGoSettings, onAskAI }) {
  const { state, dispatch } = useAppState();
  const [q, setQ] = useState("");
  const [editingId, setEditingId] = useState(null);

  const query = q.trim().toLowerCase();

  function addNote() {
    const id = uid();
    dispatch({ type: "ADD_NOTE", note: { id, title: "", pattern: "", body: "", img: null, unit: UNIT_SELF, ai: null, added: todayStr(), _new: true } });
    setEditingId(id);
  }

  const renderNote = (n) => (editingId === n.id
    ? <NoteForm key={n.id} n={n} onDone={() => setEditingId(null)} />
    : <NoteCard key={n.id} n={n} onEdit={() => setEditingId(n.id)} onGoSettings={onGoSettings} />);

  let body;
  if (query || editingId) {
    const list = state.notes.filter((n) => editingId === n.id || !query || (n.title || "").toLowerCase().includes(query) || (n.pattern || "").toLowerCase().includes(query));
    body = !list.length
      ? <div className="card">Không có ghi chú khớp "{q}".</div>
      : list.map(renderNote);
  } else if (!state.notes.length) {
    body = <div className="card">Chưa có ghi chú. Bấm ➕ tự viết, hoặc 📷 Quét ảnh trang ngữ pháp trong sách.</div>;
  } else {
    const groups = groupByUnit(state.notes);
    body = groups.map((g, gi) => (
      <details className="lesson" key={g.name} open={gi === 0}>
        <summary>
          <span>{g.emoji} {g.name}</span>
          <span className="tag">{g.items.length} ghi chú</span>
          {onAskAI && (
            <button className="btn sec sm" title="Hỏi AI về bài này"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAskAI(g.name); }}>💬</button>
          )}
        </summary>
        <div className="lesson-body">{g.items.map(renderNote)}</div>
      </details>
    ));
  }

  return (
    <section>
      <h2>📓 Ghi chú ngữ pháp <span className="tag">{state.notes.length} ghi chú</span></h2>
      <div className="sub">Ngữ pháp chia theo bài. Bấm ✨ để AI giải thích + tạo drill; 💬 để hỏi AI cả bài; làm sai tự ghi vào 📝 Sổ lỗi.</div>
      <div className="row" style={{ marginBottom: 12 }}>
        <input placeholder="🔍 Tìm tiêu đề / công thức..." style={{ flex: 1, minWidth: 180 }} value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn sec sm" onClick={addNote}>➕ Ghi chú mới</button>
      </div>
      {body}
    </section>
  );
}
