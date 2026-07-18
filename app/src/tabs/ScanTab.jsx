import { useRef, useState } from "react";
import { useAppState } from "../state/AppStateContext.jsx";
import { callGroq, extractJson, OCR_PROMPT, VISION_MODEL } from "../lib/groq.js";
import { compressImage } from "../lib/image.js";
import { uploadPhoto } from "../lib/storage.js";
import { todayStr } from "../state/defaultState.js";
import { uid } from "../lib/utils.js";
import { UNITS, UNIT_SELF } from "../lib/units.js";

function isDupWord(myWords, w) {
  return myWords.some((x) => x.w.toLowerCase() === (w || "").trim().toLowerCase());
}

function Fld({ label, value, onChange, wide }) {
  return (
    <div className="fld" style={wide ? { flexBasis: "100%" } : undefined}>
      <label>{label}</label>
      <input value={value || ""} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// Port từ section #scan + runScan()/renderScanResults()/scan-save bản cũ.
// OCR_PROMPT (lib/groq.js) đã thêm hướng dẫn xử lý ảnh bài tập nối từ (matching exercise).
export default function ScanTab({ onGoSettings }) {
  const { state, dispatch } = useAppState();
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("");
  const [unit, setUnit] = useState(UNIT_SELF); // bài áp cho toàn bộ từ/ghi chú của lượt quét này
  const fileRef = useRef(null);
  const camRef = useRef(null);

  async function runScan(fileList) {
    const files = [...fileList].filter((f) => f.type.startsWith("image/"));
    if (!files.length) return;
    if (!state.apiKey) { alert("Cần Groq API key để đọc ảnh. Vào tab ⚙️ Cài đặt dán key trước nhé."); if (onGoSettings) onGoSettings(); return; }
    let acc = [];
    setItems([]);
    for (let i = 0; i < files.length; i++) {
      setStatus(`⏳ Đang đọc ảnh ${i + 1}/${files.length}... (mỗi ảnh mất vài giây)`);
      try {
        const big = await compressImage(files[i], 1280, 0.75); // gửi AI đọc chữ — giữ nguyên độ nét
        const thumb = await compressImage(files[i], 380, 0.5, true); // lưu Supabase Storage — tối ưu dung lượng (ưu tiên WebP)
        const txt = await callGroq(state.apiKey,
          [{ role: "user", content: [{ type: "text", text: OCR_PROMPT }, { type: "image_url", image_url: { url: big } }] }],
          "", 4000, VISION_MODEL);
        const j = extractJson(txt);
        let imgUrl = null;
        try {
          imgUrl = await uploadPhoto("p" + Date.now() + "_" + i, thumb);
        } catch (upErr) {
          acc = [...acc, { kind: "err", msg: "Ảnh " + (i + 1) + ": lưu ảnh lên Supabase thất bại (" + upErr.message + ") — từ/ngữ pháp vẫn giữ lại, chỉ thiếu ảnh gốc." }];
        }
        (j.words || []).forEach((w) => {
          if (!w || !w.w || !String(w.w).trim()) return;
          acc = [...acc, { kind: "w", checked: !isDupWord(state.myWords, w.w), img: imgUrl, w: String(w.w).trim(), p: w.p || "", ipa: w.ipa || "", vi: w.vi || "", ex: w.ex || "", phr: w.phr || "" }];
        });
        (j.grammar || []).forEach((g) => {
          if (!g || (!g.title && !g.pattern)) return;
          acc = [...acc, { kind: "g", checked: true, img: imgUrl, title: g.title || "Ngữ pháp", pattern: g.pattern || "", examples: (g.examples || []).join("\n") }];
        });
      } catch (err) {
        acc = [...acc, { kind: "err", msg: "Ảnh " + (i + 1) + ": " + err.message }];
      }
      setItems([...acc]);
    }
    const nw = acc.filter((x) => x.kind === "w").length, ng = acc.filter((x) => x.kind === "g").length;
    setStatus(nw || ng
      ? `✅ Đọc xong: ${nw} từ, ${ng} mục ngữ pháp. Kiểm tra/sửa rồi bấm 💾 LƯU bên dưới. (Từ đánh dấu "đã có" bị bỏ tick sẵn)`
      : "⚠️ Không trích được nội dung. Thử ảnh rõ hơn.");
  }

  function updateItem(i, patch) {
    setItems((arr) => arr.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }

  function saveItems() {
    const words = [], notes = [];
    items.forEach((it) => {
      if (!it.checked) return;
      if (it.kind === "w" && it.w.trim()) {
        words.push({ id: uid(), w: it.w.trim(), p: it.p, ipa: it.ipa, vi: it.vi, ex: it.ex, phr: it.phr, img: it.img, unit, enrich: "", ease: 2.3, due: todayStr(), reps: 0, learned: false, added: todayStr() });
      }
      if (it.kind === "g") {
        notes.push({ id: uid(), title: it.title, pattern: it.pattern, body: it.examples, img: it.img, unit, ai: null, added: todayStr() });
      }
    });
    dispatch({ type: "SCAN_SAVE", words, notes });
    setItems([]);
    setStatus(`🎉 Đã lưu ${words.length} từ vào 📒 Từ của tôi và ${notes.length} ghi chú vào 📓 Ghi chú NP. Từ mới sẽ xuất hiện trong 🔁 Ôn tập ngay hôm nay.`);
  }

  const words = items.filter((x) => x.kind === "w");
  const gram = items.filter((x) => x.kind === "g");
  const errs = items.filter((x) => x.kind === "err");

  return (
    <section>
      <h2>📷 Quét ảnh sách → lấy từ vựng & ngữ pháp</h2>
      <div className="sub">Chụp/chọn ảnh trang sách. AI (Groq Vision) đọc chữ trong ảnh, bóc thành danh sách từ vựng + ngữ pháp — bạn kiểm tra, sửa rồi lưu. Ảnh gốc được đính kèm theo từng từ để xem lại.</div>
      <div className="card">
        <div className="row">
          <div className="drop" onClick={() => fileRef.current.click()}>
            🖼️ <b>Chọn ảnh có sẵn</b><br /><span className="small">Chọn được nhiều ảnh cùng lúc (JPG/PNG)</span>
          </div>
          <div className="drop" onClick={() => camRef.current.click()}>
            📸 <b>Chụp ảnh mới</b><br /><span className="small">Trên điện thoại sẽ mở camera</span>
          </div>
        </div>
        <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: "none" }}
          onChange={(e) => { runScan(e.target.files); e.target.value = ""; }} />
        <input ref={camRef} type="file" accept="image/*" capture="environment" style={{ display: "none" }}
          onChange={(e) => { runScan(e.target.files); e.target.value = ""; }} />
        <div className="row" style={{ marginTop: 10 }}>
          <div className="fld" style={{ maxWidth: 340 }}>
            <label>📚 Lưu vào bài (áp dụng cho cả lượt quét này)</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)} style={{ width: "100%" }}>
              {UNITS.map((u) => <option key={u.name} value={u.name}>{u.emoji} {u.name}</option>)}
            </select>
          </div>
        </div>
        <div className="small" style={{ marginTop: 10 }}>{status}</div>
        <div style={{ marginTop: 6 }}>
          {errs.map((e, i) => <div className="small" key={i} style={{ color: "var(--bad)" }}>❌ {e.msg}</div>)}
          {words.length > 0 && (
            <>
              <h3>📖 Từ vựng tìm thấy ({words.length})</h3>
              {items.map((it, i) => it.kind === "w" && (
                <div className="scan-row" key={i}>
                  <input type="checkbox" checked={it.checked} onChange={(e) => updateItem(i, { checked: e.target.checked })} />
                  <Fld label={"Từ" + (isDupWord(state.myWords, it.w) ? " ⚠️đã có" : "")} value={it.w} onChange={(v) => updateItem(i, { w: v })} />
                  <Fld label="Loại" value={it.p} onChange={(v) => updateItem(i, { p: v })} />
                  <Fld label="IPA" value={it.ipa} onChange={(v) => updateItem(i, { ipa: v })} />
                  <Fld label="Nghĩa TV" value={it.vi} onChange={(v) => updateItem(i, { vi: v })} />
                  <Fld label="Cụm từ" value={it.phr} onChange={(v) => updateItem(i, { phr: v })} />
                  <Fld label="Ví dụ" value={it.ex} onChange={(v) => updateItem(i, { ex: v })} wide />
                </div>
              ))}
            </>
          )}
          {gram.length > 0 && (
            <>
              <h3>📐 Ngữ pháp tìm thấy ({gram.length})</h3>
              {items.map((it, i) => it.kind === "g" && (
                <div className="scan-row" key={i}>
                  <input type="checkbox" checked={it.checked} onChange={(e) => updateItem(i, { checked: e.target.checked })} />
                  <Fld label="Tiêu đề" value={it.title} onChange={(v) => updateItem(i, { title: v })} />
                  <Fld label="Pattern / Công thức" value={it.pattern} onChange={(v) => updateItem(i, { pattern: v })} wide />
                  <Fld label="Ví dụ" value={it.examples} onChange={(v) => updateItem(i, { examples: v })} wide />
                </div>
              ))}
            </>
          )}
        </div>
        {(words.length > 0 || gram.length > 0) && (
          <button className="btn" style={{ marginTop: 14 }} onClick={saveItems}>💾 Lưu các mục đã chọn</button>
        )}
      </div>
      <p className="small">💡 Chụp thẳng, đủ sáng, mỗi ảnh 1 trang. OCR luôn dùng model Vision (Llama 4 Scout) tự động, không phụ thuộc model chat ở Cài đặt.</p>
    </section>
  );
}
