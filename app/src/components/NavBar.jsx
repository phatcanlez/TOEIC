import { useAppState } from "../state/AppStateContext.jsx";
import { countLearned, daysLeft } from "../lib/srs.js";
import { VOCAB } from "../data/vocab.js";

const TABS = [
  { v: "scan", label: "📷 Quét ảnh" },
  { v: "mywords", label: "📒 Từ của tôi" },
  { v: "notes", label: "📓 Ghi chú NP" },
  { v: "formulas", label: "📌 Công thức" },
  { v: "grammar", label: "📐 Ngữ pháp" },
  { v: "tests", label: "📄 Giải đề" },
  { v: "prep", label: "📚 Kiến thức" },
  { v: "review", label: "🔁 Ôn tập" },
  { v: "errors", label: "📝 Sổ lỗi" },
  { v: "ai", label: "🤖 AI" },
  { v: "plan", label: "🗓️ Kế hoạch" },
  { v: "stats", label: "📊 Tiến độ" },
  { v: "settings", label: "⚙️" },
];

const SYNC_LABEL = { idle: "", saving: "☁️ Đang lưu...", saved: "✅ Đã lưu", error: "⚠️ Lỗi lưu" };

export default function NavBar({ activeTab, onChangeTab }) {
  const { state, saveStatus } = useAppState();
  return (
    <>
      <header>
        <div className="logo">TOEIC <span>800+ Pattern</span></div>
        <div className="count">
          <div className="pill">🔥 <b>{state.streak}</b></div>
          <div className="pill">📅 <b>{Math.max(0, daysLeft(state))}</b> ngày</div>
          <div className="pill">📖 <b>{countLearned(state)}</b>/<b>{VOCAB.length}</b></div>
          <div className="pill">📝 lỗi <b>{state.errors.length}</b></div>
          <div className="pill">📒 <b>{state.myWords.length}</b> từ của tôi</div>
          {SYNC_LABEL[saveStatus] && <div className="pill">{SYNC_LABEL[saveStatus]}</div>}
        </div>
      </header>
      <nav>
        {TABS.map((t) => (
          <button key={t.v} className={activeTab === t.v ? "active" : ""} onClick={() => onChangeTab(t.v)}>
            {t.label}
          </button>
        ))}
      </nav>
    </>
  );
}
