import { useEffect, useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { buildRevQueue, revItem } from "../lib/srs.js";
import { UNITS, UNIT_SELF, unitOf } from "../lib/units.js";
import HighlightedText from "../components/HighlightedText.jsx";
import FlashCard from "../components/FlashCard.jsx";

// Ôn tập SRS — gộp thẻ builtin (VOCAB) và myWords; có chip lọc theo bài (chỉ áp cho myWords).
export default function ReviewTab() {
  const { state, dispatch } = useAppState();
  const [unit, setUnit] = useState(null); // null = Tất cả
  const [queue, setQueue] = useState(() => buildRevQueue(state, false));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function start(all, u = unit) {
    setQueue(buildRevQueue(state, all, u));
    setPos(0);
    setFlipped(false);
  }

  function pickUnit(u) {
    setUnit(u);
    setQueue(buildRevQueue(state, false, u));
    setPos(0);
    setFlipped(false);
  }

  // Chỉ hiện chip cho bài có ít nhất 1 từ
  const availableUnits = UNITS.filter((u) =>
    state.myWords.some((w) => unitOf(w) === u.name || (u.name === UNIT_SELF && unitOf(w) === UNIT_SELF))
  );

  const chips = (
    <div className="chip-row">
      <button className={"unit-chip" + (unit === null ? " on" : "")} onClick={() => pickUnit(null)}>Tất cả</button>
      {availableUnits.map((u) => (
        <button key={u.name} className={"unit-chip" + (unit === u.name ? " on" : "")} onClick={() => pickUnit(u.name)}>
          {u.emoji} {u.name}
        </button>
      ))}
    </div>
  );

  const it = revItem(state, queue, pos);

  function grade(good) {
    if (it) {
      if (it.kind === "b") dispatch({ type: "GRADE_CARD", idx: queue[pos].i, good });
      else dispatch({ type: "GRADE_MYWORD", id: queue[pos].id, good });
    }
    setPos((p) => p + 1);
    setFlipped(false);
  }

  // mục bị xóa giữa chừng (vd xoá từ ở tab Từ của tôi) → tự bỏ qua
  useEffect(() => {
    if (pos < queue.length && !it) setPos((p) => p + 1);
  }, [pos, queue, it]);

  if (!queue.length || pos >= queue.length) {
    return (
      <section>
        <h2>Ôn tập lặp lại (mục tiêu ~40 từ/ngày)</h2>
        <div className="sub">Ôn đúng lúc sắp quên = nhớ lâu nhất. Chọn bài để ôn tập trung.</div>
        {chips}
        <div className="card">
          <p>✅ {unit ? `Bài "${unit}" chưa có từ tới hạn ôn.` : "Chưa có từ tới hạn ôn."} Học thêm/quét từ mới ở tab <b>📷 Quét ảnh</b> hoặc <b>📒 Từ của tôi</b>!</p>
          <button className="btn sec" onClick={() => start(true)}>Ôn lại tất cả từ {unit ? "trong bài này" : "đã học"}</button>
        </div>
      </section>
    );
  }

  if (!it) return null;
  const v = it.v;

  return (
    <section>
      <h2>Ôn tập lặp lại (mục tiêu ~40 từ/ngày)</h2>
      <div className="sub">Ôn đúng lúc sắp quên = nhớ lâu nhất. Chọn bài để ôn tập trung.</div>
      {chips}
      <div className="card">
        <span className="tag">Ôn {pos + 1}/{queue.length}{unit ? ` • ${unit}` : ""}</span>
        <FlashCard
          flipped={flipped}
          onToggle={() => setFlipped((f) => !f)}
          front={<>
            <div className="word">{v.w}</div>
            <div className="ipa">{v.ipa || ""}</div>
            <div className="hint">👆 Bấm để xem nghĩa</div>
          </>}
          back={<>
            <div className="vi">{v.vi || ""}</div>
            <div className="ex">{v.ex ? <HighlightedText text={v.ex} word={v.w} /> : (v.phr || "")}</div>
          </>}
        />
        <div className="grade">
          <button className="btn bad-b" onClick={() => grade(false)}>😵 Quên rồi</button>
          <button className="btn ok-b" onClick={() => grade(true)}>😎 Vẫn nhớ</button>
        </div>
      </div>
    </section>
  );
}
