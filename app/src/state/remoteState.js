import { supabase, supabaseConfigured } from "../lib/supabase.js";

const APP_ID = "toeic800";

// Thay cho persist.js (localStorage) — Supabase là nguồn dữ liệu chính duy nhất.
export async function fetchRemoteState() {
  if (!supabaseConfigured) throw new Error("Chưa cấu hình VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY trong .env.local");
  const { data, error } = await supabase.from("app_state").select("data").eq("app_id", APP_ID).maybeSingle();
  if (error) throw error;
  return data ? data.data : null;
}

export async function saveRemoteState(state) {
  if (!supabaseConfigured) throw new Error("Chưa cấu hình VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY trong .env.local");
  const { error } = await supabase.from("app_state").upsert({ app_id: APP_ID, data: state, updated_at: new Date().toISOString() });
  if (error) throw error;
}
