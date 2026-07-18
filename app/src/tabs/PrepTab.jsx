import { useMemo } from "react";
import { PREP } from "../data/prep.js";

// 📚 Kiến thức — lý thuyết + kỹ năng từng Part theo khung sách TOEIC Preparation LC+RC,
// UI accordion <details> giống FormulasTab.
function PrepItem({ item }) {
  return (
    <details className="formula">
      <summary>
        <div className="f-title">{item.title}</div>
        <div className="pattern-mini">{item.summary.slice(0, 90)}...</div>
      </summary>
      <div className="formula-body">
        <p style={{ marginTop: 0 }}>{item.summary}</p>

        <b>🔑 Điểm chính</b>
        <ul style={{ marginTop: 4, paddingLeft: 20, lineHeight: 1.6 }}>
          {item.keyPoints.map((k, i) => <li key={i}>{k}</li>)}
        </ul>

        {item.examples?.length > 0 && (
          <>
            <b>✏️ Ví dụ</b>
            <ul style={{ marginTop: 4, paddingLeft: 20, lineHeight: 1.6 }}>
              {item.examples.map((ex, i) => (
                <li key={i}><i>{ex.en}</i><div className="small">→ {ex.vi}</div></li>
              ))}
            </ul>
          </>
        )}

        {item.tips?.length > 0 && (
          <>
            <b>💡 Mẹo</b>
            <ul style={{ marginTop: 4, paddingLeft: 20, lineHeight: 1.6 }}>
              {item.tips.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </>
        )}
      </div>
    </details>
  );
}

export default function PrepTab() {
  const sections = useMemo(() => {
    const map = new Map();
    for (const item of PREP) {
      if (!map.has(item.section)) map.set(item.section, []);
      map.get(item.section).push(item);
    }
    return [...map.entries()];
  }, []);

  return (
    <section>
      <h2>📚 Kiến thức TOEIC</h2>
      <div className="sub">
        Lý thuyết + kỹ năng từng Part theo khung sách <b>TOEIC Preparation LC+RC</b> (Vol 1+2).
        Mở từng bài để xem điểm chính, ví dụ và mẹo làm bài.
      </div>
      {sections.map(([name, items]) => (
        <div key={name} style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 8 }}>{name}</h3>
          {items.map((item) => <PrepItem key={item.id} item={item} />)}
        </div>
      ))}
    </section>
  );
}
