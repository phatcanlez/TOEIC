import { useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { GRAMMAR } from "../data/grammar.js";
import { shuffle } from "../lib/utils.js";
import QuestionBox from "../components/QuestionBox.jsx";

// Port từ section #grammar + showGrammarList()/openTopic()/showDrill()/chooseGrammar() bản cũ.
export default function GrammarTab() {
  const { dispatch } = useAppState();
  const [topicIdx, setTopicIdx] = useState(null);
  const [drills, setDrills] = useState([]);
  const [pos, setPos] = useState(0);
  const [answered, setAnswered] = useState(false);

  function openTopic(i) {
    setTopicIdx(i);
    setDrills(GRAMMAR[i].drills);
    setPos(0);
    setAnswered(false);
  }
  function restart() {
    setDrills(shuffle(GRAMMAR[topicIdx].drills.slice()));
    setPos(0);
    setAnswered(false);
  }
  function next() {
    setPos((p) => p + 1);
    setAnswered(false);
  }
  function onAnswer(d, choice, correct) {
    setAnswered(true);
    dispatch({ type: "INC_GRAMMAR_COUNT" });
    if (!correct) {
      dispatch({ type: "LOG_ERROR", item: { type: "Ngữ pháp: " + GRAMMAR[topicIdx].name, q: d.q, your: choice, correct: d.a, why: d.why } });
    }
  }

  if (topicIdx === null) {
    return (
      <section>
        <h2>Ngữ pháp = Pattern drill</h2>
        <div className="sub">Input → Pattern → Output. Nhìn dấu hiệu là chọn, không cần lý do. Bắn liên tục đến khi thành phản xạ.</div>
        <div className="grid">
          {GRAMMAR.map((t, i) => (
            <button className="topic-btn" key={t.id} onClick={() => openTopic(i)}>
              {t.name}<div className="p">{t.pattern.slice(0, 60)}...</div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  const topic = GRAMMAR[topicIdx];
  const done = pos >= drills.length;

  return (
    <section>
      <h2>Ngữ pháp = Pattern drill</h2>
      <div className="card">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <span className="tag">{topic.name}</span>
          <button className="btn sec sm" onClick={() => setTopicIdx(null)}>⬅️ Danh sách</button>
        </div>
        <div className="pattern-box">🔑 <b>Pattern:</b> {topic.pattern}</div>
        <div className="small" style={{ marginBottom: 12 }}>💡 {topic.tip}</div>
        <div className="progress"><div style={{ width: (pos / drills.length) * 100 + "%" }} /></div>
        {done ? (
          <div className="qbox">🎉 Xong bộ drill "<b>{topic.name}</b>"! Lặp lại đến khi nhìn là chọn được ngay.</div>
        ) : (
          <QuestionBox key={pos} q={drills[pos].q} options={drills[pos].options} answer={drills[pos].a} why={drills[pos].why}
            onAnswer={(choice, correct) => onAnswer(drills[pos], choice, correct)} />
        )}
        {(done || answered) && (
          <button className="btn" style={{ marginTop: 12 }} onClick={done ? restart : next}>
            {done ? "🔁 Làm lại từ đầu" : "➡️ Câu tiếp"}
          </button>
        )}
      </div>
    </section>
  );
}
