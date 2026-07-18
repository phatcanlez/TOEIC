import { useMemo, useState } from "react";
import { shuffle } from "../lib/utils.js";

// Câu hỏi trắc nghiệm dùng chung cho tab Ngữ pháp và drill AI-sinh trong Ghi chú NP
// (port từ .qbox/.opt + chooseGrammar()/drillBlock() bản cũ).
export default function QuestionBox({ q, options, answer, why, onAnswer }) {
  const [choice, setChoice] = useState(null);
  const shuffled = useMemo(() => shuffle((options || []).slice()), [q]);

  function pick(o) {
    if (choice != null) return;
    setChoice(o);
    onAnswer && onAnswer(o, o === answer);
  }

  return (
    <div className="qbox">
      <div style={{ fontSize: 16, marginBottom: 6 }}>{q}</div>
      <div>
        {shuffled.map((o) => {
          let cls = "opt";
          if (choice != null) {
            cls += " disabled";
            if (o === answer) cls += " correct";
            else if (o === choice) cls += " wrong";
          }
          return (
            <button key={o} className={cls} onClick={() => pick(o)}>
              {o}
            </button>
          );
        })}
      </div>
      {choice != null && (
        <div className="small" style={{ marginTop: 8, color: choice === answer ? "var(--ok)" : undefined }}>
          {choice === answer ? "✅ Chuẩn!" : <>❌ Đúng là <b>{answer}</b>.</>} {why ? "Cue: " + why : ""}
        </div>
      )}
    </div>
  );
}
