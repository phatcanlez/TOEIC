// Gọi Groq chat-completions — chữ ký giữ nguyên như callGroq() bản cũ, chỉ nhận apiKey qua tham số
// (thay vì đọc trực tiếp biến toàn cục S) để lib này không phụ thuộc state layer.
export async function callGroq(apiKey, messages, system, maxTokens, model) {
  if (!apiKey) throw new Error("Chưa có API key");
  const fullMessages = [];
  if (system) fullMessages.push({ role: "system", content: system });
  fullMessages.push(...messages);
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json", Authorization: "Bearer " + apiKey },
    body: JSON.stringify({ model: model || "llama-3.3-70b-versatile", max_tokens: maxTokens || 1024, messages: fullMessages }),
  });
  if (!res.ok) throw new Error("API " + res.status + ": " + (await res.text()).slice(0, 200));
  const data = await res.json();
  if (!data.choices || !data.choices.length) throw new Error("Không có câu trả lời từ API");
  return data.choices[0].message.content;
}

// AI đôi khi trả JSON có dấu \ đứng trước ký tự không hợp lệ (vd IPA "/\ə'tɪvmənt/" —
// \ə không phải escape hợp lệ trong JSON) khiến JSON.parse crash dù phần còn lại đúng.
// Tìm khối {...} đầu tiên, "chữa" các \ sai kiểu này (biến thành \\ để giữ nguyên ký tự sau nó), rồi mới parse.
export function extractJson(text) {
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error("AI không trả về JSON (thử lại hoặc chụp rõ hơn)");
  const sanitized = m[0].replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
  return JSON.parse(sanitized);
}

export const VISION_MODEL = "meta-llama/llama-4-scout-17b-16e-instruct";

// OCR_PROMPT: giữ nguyên 2 mục "words"/"grammar" như bản cũ, THÊM mục 3 để xử lý đúng
// ảnh dạng bài tập nối từ (matching exercise) — lỗ hổng phát hiện khi test với ảnh có
// cột chữ cái (a,b,c...) ghép nghĩa với cột số (1,2,3...) không có đáp án in sẵn.
export const OCR_PROMPT = `Bạn nhận được ảnh chụp một trang sách học TOEIC (tiếng Anh + tiếng Việt). Hãy trích xuất:
1) "words": TẤT CẢ từ vựng / cụm từ tiếng Anh được dạy trong trang (thường trong bảng English/Level/Phonetics/Vietnamese hoặc danh sách từ). Mỗi từ: w=từ tiếng Anh, p=loại từ (n/v/adj/adv/phr) nếu có, ipa=phiên âm nếu có, vi=nghĩa tiếng Việt nếu có, ex=câu ví dụ tiếng Anh trong trang nếu có, phr=cụm từ đi kèm nếu có. KHÔNG bịa thông tin không có trong ảnh; ô thiếu để "".
2) "grammar": các chủ điểm ngữ pháp / công thức trong trang: title=tên ngắn, pattern=công thức/cấu trúc, examples=mảng câu ví dụ.
3) Nếu ảnh là BÀI TẬP NỐI TỪ (matching exercise) — một danh sách cụm tiếng Anh đánh dấu bằng CHỮ CÁI (a, b, c...) và một danh sách nghĩa tiếng Việt đánh dấu bằng SỐ (1, 2, 3...), KHÔNG có đáp án in sẵn: bỏ ký tự thứ tự (chữ/số) đi, rồi tự ghép mỗi cụm tiếng Anh với đúng nghĩa tiếng Việt phù hợp nhất trong danh sách còn lại DỰA THEO NGHĨA (không dựa vào vị trí xuất hiện a↔1, b↔2...), trừ khi ảnh có đáp án viết tay/in sẵn thì ưu tiên dùng đáp án đó. Mỗi cặp ghép được cho vào "words" như bình thường (w=cụm tiếng Anh, vi=nghĩa đã ghép đúng, các trường khác để trống nếu ảnh không có).
Chỉ trả về DUY NHẤT một JSON hợp lệ, không markdown, không giải thích:
{"words":[{"w":"","p":"","ipa":"","vi":"","ex":"","phr":""}],"grammar":[{"title":"","pattern":"","examples":[""]}]}`;
