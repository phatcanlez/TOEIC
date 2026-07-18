// Thẻ lật 3D dùng cho tab Ôn tập (port từ .flash/.flash-inner/.face/.back bản cũ).
export default function FlashCard({ flipped, onToggle, front, back }) {
  return (
    <div className={"flash" + (flipped ? " flip" : "")} onClick={onToggle}>
      <div className="flash-inner">
        <div className="face front">{front}</div>
        <div className="face back">{back}</div>
      </div>
    </div>
  );
}
