import { useState } from "react";

// Xem ảnh gốc trang sách — 1 URL duy nhất (ảnh seed tĩnh /img/... hoặc URL Supabase Storage cho ảnh tự quét).
export default function ImageModal({ src, onClose }) {
  const [error, setError] = useState("");
  return (
    <div className="modal" onClick={onClose}>
      {error ? <div className="card">{error}</div> : <img src={src} alt="" onError={() => setError("Không mở được ảnh " + src)} />}
    </div>
  );
}
