import { createContext, useContext, useEffect, useRef, useState, useReducer } from "react";
import { defaultState } from "./defaultState.js";
import { fetchRemoteState, saveRemoteState } from "./remoteState.js";
import { runSeedImportIfNeeded } from "./seed.js";
import { appReducer } from "./reducer.js";

const AppStateContext = createContext(null);
const SAVE_DEBOUNCE_MS = 400;

export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [errorMsg, setErrorMsg] = useState("");
  const [saveStatus, setSaveStatus] = useState("idle"); // idle | saving | saved | error
  const hydrated = useRef(false);

  async function boot() {
    setStatus("loading"); setErrorMsg("");
    try {
      const remote = await fetchRemoteState();
      let initial;
      if (remote) {
        initial = Object.assign({}, defaultState, remote);
      } else {
        initial = runSeedImportIfNeeded(defaultState);
        await saveRemoteState(initial); // tạo row đầu tiên trên Supabase
      }
      dispatch({ type: "HYDRATE", state: initial });
      hydrated.current = true;
      setStatus("ready");
    } catch (e) {
      setErrorMsg(e.message || String(e));
      setStatus("error");
    }
  }

  useEffect(() => { boot(); }, []);

  // Debounce lưu lên Supabase mỗi khi state đổi — chỉ sau khi đã tải xong lần đầu,
  // tránh ghi đè dữ liệu thật bằng defaultState tạm lúc còn đang loading.
  useEffect(() => {
    if (!hydrated.current) return;
    setSaveStatus("saving");
    const t = setTimeout(() => {
      saveRemoteState(state).then(() => setSaveStatus("saved")).catch(() => setSaveStatus("error"));
    }, SAVE_DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [state]);

  if (status === "loading") {
    return <div className="card" style={{ margin: 20 }}><span className="spin" /> Đang tải dữ liệu từ Supabase...</div>;
  }
  if (status === "error") {
    return (
      <div className="card" style={{ margin: 20 }}>
        ⚠️ Không kết nối được Supabase: {errorMsg}
        <div style={{ marginTop: 10 }}><button className="btn" onClick={boot}>🔁 Thử lại</button></div>
      </div>
    );
  }

  return <AppStateContext.Provider value={{ state, dispatch, saveStatus }}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState phải dùng trong AppStateProvider");
  return ctx;
}
