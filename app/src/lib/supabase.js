import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
// Tên mới của Supabase cho key dùng ở client là "Publishable key" (thay cho "anon key" cũ) — chức năng như nhau.
const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabaseConfigured = !!(url && anonKey);

// Nếu thiếu .env.local, không throw ngay ở đây — để AppStateContext hiện màn hình lỗi rõ ràng
// thay vì crash trắng trang lúc import module.
export const supabase = supabaseConfigured ? createClient(url, anonKey) : null;
