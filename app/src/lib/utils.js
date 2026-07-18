export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

// PRNG có seed (giống bản gốc) để shuffle ổn định trong 1 phiên
let seed = Date.now();
export function rnd() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}
export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Tách câu ví dụ thành các đoạn {text, hl} để component render <b> quanh từ khoá
// mà không cần dangerouslySetInnerHTML (thay cho highlight() dùng innerHTML ở bản cũ).
export function splitHighlight(sentence, word) {
  if (!sentence || !word) return [{ text: sentence || "", hl: false }];
  const re = new RegExp("(" + word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\w*)", "ig");
  const parts = sentence.split(re);
  return parts.map((text, i) => ({ text, hl: i % 2 === 1 }));
}
