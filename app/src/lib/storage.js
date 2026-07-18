import { supabase, supabaseConfigured } from "./supabase.js";

const BUCKET = "book-photos";

function dataUrlToBlob(dataURL) {
  const [meta, b64] = dataURL.split(",");
  const mime = meta.match(/data:(.*?);base64/)[1];
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

// Upload ảnh trang sách đã quét lên Supabase Storage, trả về URL công khai để lưu vào trường `img`
// của từ/ghi chú — thay cho idbPut() (IndexedDB) trước đây.
export async function uploadPhoto(photoId, dataURL) {
  if (!supabaseConfigured) throw new Error("Chưa cấu hình Supabase");
  const blob = dataUrlToBlob(dataURL);
  const ext = blob.type === "image/webp" ? "webp" : "jpg";
  const path = `scan/${photoId}.${ext}`;
  // upsert:false — path luôn mới (photoId theo timestamp) nên chỉ cần quyền INSERT,
  // không đòi thêm policy UPDATE trên storage.objects.
  const { error } = await supabase.storage.from(BUCKET).upload(path, blob, { contentType: blob.type, upsert: false });
  if (error) throw error;
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}
