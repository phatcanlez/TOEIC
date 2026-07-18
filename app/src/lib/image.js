// Nén ảnh bằng canvas trước khi gửi API / lưu. `preferWebp`: thử xuất WebP trước (nhẹ hơn JPEG
// ~30% cùng chất lượng nhìn) — dùng cho ảnh lưu lâu dài lên Supabase Storage (dung lượng có hạn).
// Nếu trình duyệt không hỗ trợ WebP, canvas.toDataURL âm thầm trả về PNG (rất nặng) thay vì báo lỗi,
// nên phải tự kiểm tra mime trả về và fallback sang JPEG khi cần.
export function compressImage(file, maxSide, quality, preferWebp) {
  return new Promise((res, rej) => {
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => {
      const sc = Math.min(1, maxSide / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * sc);
      c.height = Math.round(img.height * sc);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      if (preferWebp) {
        const webp = c.toDataURL("image/webp", quality);
        if (webp.startsWith("data:image/webp")) { res(webp); return; }
      }
      res(c.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => { URL.revokeObjectURL(url); rej(new Error("Không đọc được file ảnh")); };
    img.src = url;
  });
}
