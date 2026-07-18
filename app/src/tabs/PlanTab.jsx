import { useEffect } from "react";
import { useAppState } from "../state/AppStateContext.jsx";

const PLAN_TASKS = [
  { id: "rev", t: "Ôn 40 từ cũ", d: "20 phút — tab Ôn tập" },
  { id: "new", t: "Học 20 từ mới", d: "20 phút — tab Từ vựng (học bằng câu)" },
  { id: "gram", t: "1 chủ điểm ngữ pháp (pattern drill)", d: "30 phút — tab Ngữ pháp" },
  { id: "listen", t: "Nghe Part 1–4 + xem transcript", d: "40 phút — tab Nghe, vòng lặp ×5" },
  { id: "read", t: "Reading Part 5–7", d: "40 phút — tab Đọc" },
  { id: "err", t: "Chữa lỗi & ghi sổ lỗi sai", d: "30 phút — tab Sổ lỗi, mỗi câu 5 phút" },
];

// Port từ section #plan + ensurePlanDay()/renderPlan() bản cũ.
export default function PlanTab() {
  const { state, dispatch } = useAppState();

  useEffect(() => { dispatch({ type: "ENSURE_PLAN_DAY" }); }, []);

  const n = Object.values(state.plan.done).filter(Boolean).length;
  const pct = (n / PLAN_TASKS.length) * 100;

  return (
    <section>
      <h2>🗓️ Kế hoạch một ngày (2–3 tiếng)</h2>
      <div className="sub">Tick khi làm xong. Tự reset mỗi ngày. Kỷ luật &gt; cảm hứng.</div>
      <div className="card">
        <div>
          {PLAN_TASKS.map((task) => {
            const done = !!state.plan.done[task.id];
            return (
              <div className={"plan-item" + (done ? " done" : "")} key={task.id}>
                <input type="checkbox" checked={done}
                  onChange={(e) => dispatch({ type: "TOGGLE_PLAN_TASK", taskId: task.id, checked: e.target.checked })} />
                <div className="t"><div className="tt">{task.t}</div><div className="td">{task.d}</div></div>
              </div>
            );
          })}
        </div>
        <div className="progress"><div style={{ width: pct + "%" }} /></div>
        <p className="small">
          {n === PLAN_TASKS.length ? "🎉 Hoàn thành 100% hôm nay! Giữ streak nhé." : `Đã xong ${n}/${PLAN_TASKS.length} việc hôm nay.`}
        </p>
      </div>
      <div className="card">
        <h3>Lộ trình mục tiêu 800–900+</h3>
        <p className="small" style={{ lineHeight: 1.7 }}>
          <b>GĐ1 (0→500) ~2 tháng:</b> 1000 từ • 15 pattern ngữ pháp • Nghe Part 1–2 • Đọc Part 5<br />
          <b>GĐ2 (500→700) ~2 tháng:</b> Part 3,4,6 • email/notice/ad • làm đề mỗi ngày<br />
          <b>GĐ3 (700→900) ~2–3 tháng:</b> không học kiến thức mới — chỉ chữa đề, tăng tốc, từ đồng nghĩa, bẫy đề
        </p>
      </div>
    </section>
  );
}
