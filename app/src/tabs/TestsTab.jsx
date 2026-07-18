import { useMemo, useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { TESTS } from "../data/tests.js";

const LETTERS = ["A", "B", "C", "D"];
const PART_META = {
  part5: { label: "Part 5 — Incomplete Sentences", short: "Part 5" },
  part6: { label: "Part 6 — Text Completion", short: "Part 6" },
  part7: { label: "Part 7 — Reading Comprehension", short: "Part 7" },
};

// Câu hỏi thi: GIỮ NGUYÊN thứ tự đáp án (A)-(D) như đề thật (không shuffle như QuestionBox),
// review = xem giải: mở sẵn đáp án + giải chi tiết.
function ExamQuestion({ item, review, onAnswer }) {
  const [choice, setChoice] = useState(null);
  const answered = review || choice != null;

  function pick(o) {
    if (answered) return;
    setChoice(o);
    onAnswer && onAnswer(o, o === item.a);
  }

  return (
    <div className="qbox" style={{ marginTop: 10 }}>
      <div style={{ fontSize: 15, marginBottom: 6 }}>
        <b>{item.n}.</b> {item.q || "Chọn đáp án đúng."}
      </div>
      <div>
        {item.options.map((o, i) => {
          let cls = "opt";
          if (answered) {
            cls += " disabled";
            if (o === item.a) cls += " correct";
            else if (o === choice) cls += " wrong";
          }
          return (
            <button key={i} className={cls} onClick={() => pick(o)}>
              ({LETTERS[i]}) {o}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="small" style={{ marginTop: 8 }}>
          {!review && (choice === item.a
            ? <span style={{ color: "var(--ok)" }}>✅ Chính xác!</span>
            : <span>❌ Đáp án đúng: <b>({LETTERS[item.options.indexOf(item.a)]}) {item.a}</b></span>)}
          {review && <span>✅ Đáp án: <b>({LETTERS[item.options.indexOf(item.a)]}) {item.a}</b></span>}
          <div style={{ marginTop: 6, whiteSpace: "pre-wrap" }}>💡 {item.why}</div>
        </div>
      )}
    </div>
  );
}

function PassageBlock({ group, review, onAnswer }) {
  return (
    <div className="card" style={{ marginTop: 14 }}>
      <div className="tag" style={{ marginBottom: 8 }}>{group.title}</div>
      <div className="small" style={{ whiteSpace: "pre-wrap", lineHeight: 1.65, background: "var(--bg2, rgba(255,255,255,0.04))", padding: 12, borderRadius: 8 }}>
        {group.passage}
      </div>
      {group.questions.map((it) => (
        <ExamQuestion key={it.n} item={it} review={review} onAnswer={(c, ok) => onAnswer(it, c, ok)} />
      ))}
    </div>
  );
}

export default function TestsTab() {
  const { dispatch } = useAppState();
  const [testIdx, setTestIdx] = useState(null);
  const [part, setPart] = useState(null);       // "part5" | "part6" | "part7"
  const [review, setReview] = useState(false);  // false = làm bài, true = xem giải
  const [done, setDone] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [seq, setSeq] = useState(0);            // đổi key để làm lại từ đầu

  const test = testIdx != null ? TESTS[testIdx] : null;

  const totalQuestions = useMemo(() => {
    if (!test || !part) return 0;
    if (part === "part5") return test.part5.length;
    return test[part].reduce((s, g) => s + g.questions.length, 0);
  }, [test, part]);

  function openPart(p, rv) {
    setPart(p); setReview(rv); setDone(0); setCorrect(0); setSeq((s) => s + 1);
    window.scrollTo(0, 0);
  }

  function onAnswer(item, choice, ok) {
    setDone((d) => d + 1);
    if (ok) setCorrect((c) => c + 1);
    else dispatch({
      type: "LOG_ERROR",
      item: { type: `Giải đề: ${test.name} · ${PART_META[part].short}`, q: item.q || `Câu ${item.n}`, your: choice, correct: item.a, why: item.why },
    });
  }

  // ---------- Màn 1: danh sách test ----------
  if (!test) {
    return (
      <section>
        <h2>📄 Giải đề — đề thật ETS</h2>
        <div className="sub">Làm đề thật + xem giải chi tiết tiếng Việt từng câu. Câu sai tự động vào 📝 Sổ lỗi.</div>
        <div className="grid">
          {TESTS.map((t, i) => (
            <button key={t.id} className="topic-btn" onClick={() => { setTestIdx(i); setPart(null); }}>
              {t.name}
              <div className="p">{t.part5.length + t.part6.reduce((s, g) => s + g.questions.length, 0) + t.part7.reduce((s, g) => s + g.questions.length, 0)} câu · {t.time} phút</div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  // ---------- Màn 2: chọn part ----------
  if (!part) {
    return (
      <section>
        <h2>📄 {test.name}</h2>
        <button className="btn sec sm" onClick={() => setTestIdx(null)}>⬅️ Danh sách đề</button>
        {["part5", "part6", "part7"].map((p) => {
          const n = p === "part5" ? test.part5.length : test[p].reduce((s, g) => s + g.questions.length, 0);
          return (
            <div className="card" key={p} style={{ marginTop: 12 }}>
              <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <b>{PART_META[p].label}</b>
                  <div className="small">{n} câu</div>
                </div>
                <div className="row">
                  <button className="btn sm" onClick={() => openPart(p, false)}>✍️ Làm bài</button>
                  <button className="btn sec sm" onClick={() => openPart(p, true)}>📖 Xem giải</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }

  // ---------- Màn 3: làm bài / xem giải ----------
  const pct = totalQuestions ? Math.round((done / totalQuestions) * 100) : 0;
  return (
    <section>
      <h2>📄 {test.name}</h2>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <span className="tag">{PART_META[part].label} · {review ? "Xem giải" : "Làm bài"}</span>
        <div className="row">
          {!review && <button className="btn sec sm" onClick={() => openPart(part, false)}>🔁 Làm lại</button>}
          <button className="btn sec sm" onClick={() => { setPart(null); window.scrollTo(0, 0); }}>⬅️ Chọn Part</button>
        </div>
      </div>

      {!review && (
        <div className="card" style={{ marginTop: 10 }}>
          <div className="progress"><div style={{ width: pct + "%" }} /></div>
          <div className="small" style={{ marginTop: 6 }}>
            Đã làm <b>{done}</b>/{totalQuestions} câu · Đúng <b style={{ color: "var(--ok)" }}>{correct}</b>
            {done === totalQuestions && totalQuestions > 0 && (
              <span> — 🎉 Hoàn thành! Điểm: <b>{correct}/{totalQuestions}</b> ({Math.round((correct / totalQuestions) * 100)}%)</span>
            )}
          </div>
        </div>
      )}

      <div key={seq}>
        {part === "part5"
          ? test.part5.map((it) => (
              <ExamQuestion key={it.n} item={it} review={review} onAnswer={(c, ok) => onAnswer(it, c, ok)} />
            ))
          : test[part].map((g) => (
              <PassageBlock key={g.title} group={g} review={review} onAnswer={onAnswer} />
            ))}
      </div>
    </section>
  );
}
