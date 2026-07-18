import { useAppState } from "../state/AppStateContext.jsx";
import { countLearned, daysLeft, dueCards, dueMine } from "../lib/srs.js";
import { VOCAB } from "../data/vocab.js";
import { todayStr } from "../state/defaultState.js";

// Port từ section #stats + renderStats() bản cũ.
export default function StatsTab() {
  const { state } = useAppState();
  const learned = countLearned(state);
  const due = dueCards(state, false).length + dueMine(state, false).length;
  const pct = Math.round((learned / VOCAB.length) * 100);
  const total = Math.max(1, Math.ceil((new Date(state.examDate) - new Date(state.startDate)) / 86400000));
  const passed = Math.ceil((new Date(todayStr()) - new Date(state.startDate)) / 86400000);
  const gp = Math.min(100, Math.max(0, Math.round((passed / total) * 100)));
  const dl = daysLeft(state);

  const tiles = [
    [learned, "Từ đã thuộc"], [VOCAB.length, "Tổng từ"], [state.streak, "Ngày liên tiếp 🔥"],
    [Math.max(0, dl), "Còn (ngày)"], [due, "Cần ôn"], [state.grammarCount, "Drill ngữ pháp"],
    [state.listenCount, "Lần nghe"], [state.readingCorrect, "Đọc đúng"], [state.errors.length, "Lỗi cần ôn"],
    [state.myWords.length, "Từ của tôi"], [state.notes.length, "Ghi chú NP"], [pct + "%", "Xong bộ từ"],
  ];

  return (
    <section>
      <h2>Tiến độ</h2>
      <div className="grid">
        {tiles.map(([n, l], i) => (
          <div className="stat" key={i}><div className="n">{n}</div><div className="l">{l}</div></div>
        ))}
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>🎯 Mục tiêu 800+ • Listening & Reading</h3>
        <p className="small">Thi ngày <b>{new Date(state.examDate).toLocaleDateString("vi-VN")}</b></p>
        <div className="progress"><div style={{ width: gp + "%" }} /></div>
        <p className="small">
          {dl > 0
            ? `Đã đi ${gp}% chặng đường, còn ${dl} ngày. Mỗi ngày: 20 từ + 1 pattern + nghe ×5 + chữa lỗi = 800+ trong tầm tay! 💪`
            : "Chúc thi tốt! 🍀"}
        </p>
      </div>
    </section>
  );
}
