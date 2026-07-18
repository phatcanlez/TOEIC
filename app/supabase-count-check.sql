-- Đếm số từ / ghi chú thực tế đang lưu trên Supabase
select
  jsonb_array_length(data->'myWords') as so_tu,
  jsonb_array_length(data->'notes')   as so_ghi_chu
from app_state;

-- Tìm từ bị trùng lặp (không phân biệt hoa/thường) — hữu ích để dọn các từ trùng
-- kiểu "Stationary items" / "Stationery items" đã nhắc ở lần trước
select lower(w->>'w') as tu, count(*) as so_lan
from app_state, jsonb_array_elements(data->'myWords') as w
group by lower(w->>'w')
having count(*) > 1;
