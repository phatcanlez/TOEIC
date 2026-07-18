import { MY_SEED } from "../data/myDataSeed.js";
import { todayStr } from "./defaultState.js";
import { uid } from "../lib/utils.js";

const key = (s) => (s || "").trim().toLowerCase();

function isDupWord(myWords, w) {
  return myWords.some((x) => key(x.w) === key(w));
}

// Nạp 1 lần toàn bộ từ/ghi chú trích từ 71 ảnh sách vào myWords/notes (khử trùng lặp,
// seedVersion guard). Từ v3: mỗi lần đổi version còn BACKFILL field `unit` (bài học) cho
// các entry đã tồn tại từ trước — chỉ gán khi entry chưa có unit, không ghi đè lựa chọn
// của user; entry không khớp seed thì để nguyên (render-time tự xếp vào "Tự thêm").
export function runSeedImportIfNeeded(state) {
  if (typeof MY_SEED === "undefined" || state.seedVersion === MY_SEED.version) return state;

  const unitByWord = new Map(MY_SEED.words.map((sw) => [key(sw.w), sw.unit]));
  const unitByTitle = new Map(MY_SEED.notes.map((sn) => [key(sn.title), sn.unit]));

  const myWords = state.myWords.map((w) =>
    !w.unit && unitByWord.has(key(w.w)) ? { ...w, unit: unitByWord.get(key(w.w)) } : w
  );
  const notes = state.notes.map((n) =>
    !n.unit && unitByTitle.has(key(n.title)) ? { ...n, unit: unitByTitle.get(key(n.title)) } : n
  );

  let nw = 0, nn = 0;
  MY_SEED.words.forEach((sw) => {
    if (isDupWord(myWords, sw.w)) return;
    myWords.push({
      id: uid() + "_" + nw++, w: sw.w, p: sw.p || "", ipa: sw.ipa || "", vi: sw.vi || "",
      ex: sw.ex || "", phr: sw.phr || "", img: sw.img || null, unit: sw.unit, enrich: "",
      ease: 2.3, due: todayStr(), reps: 0, learned: false, added: todayStr(),
    });
  });
  MY_SEED.notes.forEach((sn) => {
    if (notes.some((x) => key(x.title) === key(sn.title))) return;
    notes.push({
      id: uid() + "_n" + nn++, title: sn.title, pattern: sn.pattern || "", body: sn.body || "",
      img: sn.img || null, unit: sn.unit, ai: null, added: todayStr(),
    });
  });
  return { ...state, myWords, notes, seedVersion: MY_SEED.version };
}
