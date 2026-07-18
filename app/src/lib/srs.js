import { todayStr } from "../state/defaultState.js";
import { addDays } from "./utils.js";
import { VOCAB } from "../data/vocab.js";

// SM-2-style scheduling — port nguyên văn applySRS() bản cũ, chỉ đổi thành hàm thuần (trả về card mới).
export function applySRS(card, good) {
  const c = { ...card };
  c.reps = (c.reps || 0) + 1;
  if (good) {
    c.ease = Math.min(3.2, (c.ease || 2.3) + 0.12);
    const iv = c.reps <= 1 ? 1 : c.reps === 2 ? 3 : Math.round((c.reps - 1) * c.ease);
    c.due = addDays(iv);
  } else {
    c.ease = Math.max(1.6, (c.ease || 2.3) - 0.2);
    c.reps = 0;
    c.due = addDays(1);
  }
  return c;
}

export function ensureCard(cards, i) {
  return cards[i] || { ease: 2.3, due: todayStr(), reps: 0, learned: false };
}

// Thẻ từ builtin (VOCAB) tới hạn ôn — all=true để lấy toàn bộ thẻ đã học (không lọc theo due)
export function dueCards(state, all) {
  const t = todayStr(), o = [];
  Object.keys(state.cards).forEach((i) => {
    const c = state.cards[i];
    if (all || (c.learned && c.due <= t)) o.push(+i);
  });
  return o;
}

export function dueMine(state, all) {
  const t = todayStr();
  return state.myWords.filter((w) => w.w && (all || (w.due || t) <= t));
}

// unit (tùy chọn): chỉ lấy myWords thuộc bài đó — thẻ builtin VOCAB chỉ vào hàng đợi khi không lọc.
export function buildRevQueue(state, all, unit) {
  const mine = dueMine(state, all).filter((w) => !unit || (w.unit || "Tự thêm") === unit);
  return [
    ...(unit ? [] : dueCards(state, all).map((i) => ({ s: "b", i }))),
    ...mine.map((w) => ({ s: "m", id: w.id })),
  ];
}

// Lấy nội dung hiển thị (từ + srs) cho 1 mục trong hàng đợi ôn tập
export function revItem(state, queue, pos) {
  const it = queue[pos];
  if (!it) return null;
  if (it.s === "b") return { v: VOCAB[it.i], srs: ensureCard(state.cards, it.i), kind: "b" };
  const w = state.myWords.find((x) => x.id === it.id);
  return w ? { v: w, srs: w, kind: "m" } : null;
}

export function countLearned(state) {
  return Object.values(state.cards).filter((c) => c.learned).length;
}

export function daysLeft(state) {
  return Math.ceil((new Date(state.examDate) - new Date(todayStr())) / 86400000);
}

export function dayNumber(state) {
  return Math.max(0, Math.floor((new Date(todayStr()) - new Date(state.startDate)) / 86400000));
}
