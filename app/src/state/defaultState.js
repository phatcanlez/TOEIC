export const LS_KEY = "toeic800_v2";
export const DAILY = 20;
export const REVIEW_TARGET = 40;
export const PLAN_DAYS = 60;
export const DEFAULT_EXAM = "2026-09-02";

export function todayStr(d) {
  d = d || new Date();
  return d.toISOString().slice(0, 10);
}

// Key mặc định lấy từ biến môi trường VITE_GROQ_API_KEY (file .env.local, không commit lên git)
// — để khỏi phải dán tay ở tab Cài đặt mỗi lần. Vẫn có thể đổi/xoá key trong Cài đặt như bình thường.
const ENV_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

export const defaultState = {
  examDate: DEFAULT_EXAM,
  apiKey: ENV_API_KEY,
  model: "openai/gpt-oss-120b",
  startDate: todayStr(),
  streak: 0,
  lastStudy: "",
  cards: {},
  todayIdx: 0,
  listenCount: 0,
  readingCorrect: 0,
  readingTotal: 0,
  grammarCount: 0,
  errors: [],
  plan: { date: "", done: {} },
  myWords: [],
  notes: [],
  seedVersion: 0,
};
