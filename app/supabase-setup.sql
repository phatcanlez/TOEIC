-- Chạy toàn bộ file này 1 lần trong Supabase Dashboard → SQL Editor → New query → Run.
-- (Bucket "book-photos" phải tạo tay trước ở Dashboard → Storage → New bucket → Public bật ON,
--  vì tạo bucket qua SQL cần quyền service_role — làm qua Dashboard cho chắc.)

-- 1) Bảng lưu toàn bộ state app (1 row duy nhất, khoá bởi app_id cố định)
create table if not exists app_state (
  app_id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table app_state enable row level security;

-- Không đăng nhập -> cho phép vai anon đọc/ghi tự do trên bảng này.
-- (Cảnh báo: ai có URL project + anon key cũng đọc/ghi được bảng này.)
-- (drop trước rồi create lại để chạy script này nhiều lần không bị lỗi "policy already exists")
drop policy if exists "anon full access app_state" on app_state;
create policy "anon full access app_state"
on app_state for all
to anon
using (true) with check (true);

-- 2) Policy cho phép upload ảnh vào bucket "book-photos" (bucket phải Public để đọc công khai;
--    Public chỉ tự cho phép ĐỌC, ghi vẫn cần policy insert riêng cho vai anon)
--
-- ⚠️ Nếu chạy khối dưới bị lỗi "must be owner of table objects" (một số project không cho
-- tạo policy storage qua SQL Editor), hãy tạo qua giao diện thay thế:
--   Dashboard → Storage → chọn bucket book-photos → tab "Policies" → "New policy"
--   → chọn "For full customization" → Policy name: anon can upload book photos
--   → Allowed operation: INSERT → Target roles: anon
--   → WITH CHECK expression:  bucket_id = 'book-photos'   → Save.
drop policy if exists "anon can upload book photos" on storage.objects;
create policy "anon can upload book photos"
on storage.objects for insert
to anon
with check (bucket_id = 'book-photos');
