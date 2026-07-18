// Danh sách "bài" (lesson) — thứ tự hiển thị cố định trong toàn app.
// unit được lưu trong từng entry myWords/notes; entry không có unit → xếp vào "Tự thêm" lúc render.
export const UNIT_SELF = "Tự thêm";

export const UNITS = [
  { name: "NP: Chủ ngữ, Danh từ & Đại từ", emoji: "🧱" },
  { name: "NP: Thì", emoji: "⏰" },
  { name: "NP: Bị động", emoji: "🔄" },
  { name: "NP: To-V, V-ing & Phân từ", emoji: "🌱" },
  { name: "NP: Tính từ, Trạng từ & So sánh", emoji: "🎨" },
  { name: "NP: Liên từ & Giới từ", emoji: "🔗" },
  { name: "NP: Mệnh đề quan hệ & Điều kiện", emoji: "🪞" },
  { name: "Đọc Part 6–7", emoji: "📄" },
  { name: "Nghe Part 1: Mô tả ảnh", emoji: "🖼️" },
  { name: "Nghe Part 2: Hỏi–đáp", emoji: "❓" },
  { name: "Nghe Part 3: Hội thoại", emoji: "💬" },
  { name: "Nghe Part 4: Bài nói", emoji: "📢" },
  { name: UNIT_SELF, emoji: "✍️" },
];

export function unitEmoji(name) {
  const u = UNITS.find((x) => x.name === name);
  return u ? u.emoji : "✍️";
}

export function unitOf(entry) {
  return entry.unit || UNIT_SELF;
}

// Nhóm 1 danh sách entry theo bài, giữ đúng thứ tự UNITS; bài rỗng bị loại.
// Trả về [{name, emoji, items}].
export function groupByUnit(list) {
  const known = new Set(UNITS.map((u) => u.name));
  return UNITS.map((u) => ({
    name: u.name,
    emoji: u.emoji,
    items: list.filter((e) =>
      u.name === UNIT_SELF ? !known.has(unitOf(e)) || unitOf(e) === UNIT_SELF : unitOf(e) === u.name
    ),
  })).filter((g) => g.items.length > 0);
}
