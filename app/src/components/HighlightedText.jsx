import { splitHighlight } from "../lib/utils.js";

// Thay cho highlight() dùng innerHTML ở bản cũ — render <b> quanh từ khoá bằng JSX, không cần dangerouslySetInnerHTML.
export default function HighlightedText({ text, word }) {
  const parts = splitHighlight(text, word);
  return (
    <>
      {parts.map((p, i) => (p.hl ? <b key={i} style={{ color: "var(--brand)" }}>{p.text}</b> : <span key={i}>{p.text}</span>))}
    </>
  );
}
