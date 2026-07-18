import { defaultState, todayStr } from "./defaultState.js";
import { applySRS, ensureCard } from "../lib/srs.js";
import { addDays } from "../lib/utils.js";

function markStudied(state) {
  const t = todayStr();
  if (state.lastStudy === t) return {};
  return { streak: state.lastStudy === addDays(-1) ? state.streak + 1 : 1, lastStudy: t };
}

export function appReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.state;

    case "SET_EXAM_DATE":
      return { ...state, examDate: action.value };
    case "SET_API_KEY":
      return { ...state, apiKey: action.value };
    case "SET_MODEL":
      return { ...state, model: action.value };

    case "GRADE_CARD": {
      const cards = { ...state.cards };
      const c = applySRS(ensureCard(cards, action.idx), action.good);
      if (action.good) c.learned = true;
      cards[action.idx] = c;
      return { ...state, cards, ...(action.good ? markStudied(state) : {}) };
    }

    case "GRADE_MYWORD": {
      const myWords = state.myWords.map((w) => {
        if (w.id !== action.id) return w;
        const c = applySRS(w, action.good);
        return { ...w, ...c, learned: action.good ? true : w.learned };
      });
      return { ...state, myWords, ...(action.good ? markStudied(state) : {}) };
    }

    case "ADD_MYWORD":
      return { ...state, myWords: [action.word, ...state.myWords] };
    case "UPDATE_MYWORD":
      return { ...state, myWords: state.myWords.map((w) => (w.id === action.id ? { ...w, ...action.patch } : w)) };
    case "DELETE_MYWORD":
      return { ...state, myWords: state.myWords.filter((w) => w.id !== action.id) };

    case "ADD_NOTE":
      return { ...state, notes: [action.note, ...state.notes] };
    case "UPDATE_NOTE":
      return { ...state, notes: state.notes.map((n) => (n.id === action.id ? { ...n, ...action.patch } : n)) };
    case "DELETE_NOTE":
      return { ...state, notes: state.notes.filter((n) => n.id !== action.id) };

    case "SCAN_SAVE":
      return {
        ...state,
        myWords: [...action.words, ...state.myWords],
        notes: [...action.notes, ...state.notes],
      };

    case "LOG_ERROR": {
      const errors = [{ date: todayStr(), ...action.item }, ...state.errors];
      if (errors.length > 200) errors.pop();
      return { ...state, errors };
    }
    case "REMOVE_ERROR": {
      const errors = state.errors.slice();
      errors.splice(action.index, 1);
      return { ...state, errors };
    }
    case "CLEAR_ERRORS":
      return { ...state, errors: [] };

    case "INC_GRAMMAR_COUNT":
      return { ...state, grammarCount: state.grammarCount + 1 };

    case "ENSURE_PLAN_DAY": {
      const t = todayStr();
      if (state.plan.date === t) return state;
      return { ...state, plan: { date: t, done: {} } };
    }
    case "TOGGLE_PLAN_TASK":
      return { ...state, plan: { ...state.plan, done: { ...state.plan.done, [action.taskId]: action.checked } } };

    case "IMPORT_STATE":
      return Object.assign({}, defaultState, action.json);
    case "RESET_STATE":
      return { ...defaultState };

    default:
      return state;
  }
}
