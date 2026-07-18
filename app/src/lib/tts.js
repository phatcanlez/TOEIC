// Text-to-speech tối giản — chỉ giữ lại speak() dùng cho nút 🔊 ở Từ của tôi/Ôn tập
// (phần Nghe (Listen tab) với vòng lặp x5/chọn giọng đọc không port sang React lần này).
let voices = [];
function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith("en"));
}
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

export function speak(text, rate) {
  if (!("speechSynthesis" in window)) { alert("Dùng Chrome/Edge để nghe."); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (voices.length) u.voice = voices[0];
  u.lang = "en-US";
  u.rate = rate || 0.95;
  speechSynthesis.speak(u);
}
