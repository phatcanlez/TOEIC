import { useState } from "react";
import { AppStateProvider } from "./state/AppStateContext.jsx";
import NavBar from "./components/NavBar.jsx";
import ScanTab from "./tabs/ScanTab.jsx";
import MyWordsTab from "./tabs/MyWordsTab.jsx";
import NotesTab from "./tabs/NotesTab.jsx";
import FormulasTab from "./tabs/FormulasTab.jsx";
import GrammarTab from "./tabs/GrammarTab.jsx";
import TestsTab from "./tabs/TestsTab.jsx";
import PrepTab from "./tabs/PrepTab.jsx";
import ReviewTab from "./tabs/ReviewTab.jsx";
import ErrorsTab from "./tabs/ErrorsTab.jsx";
import AiTab from "./tabs/AiTab.jsx";
import PlanTab from "./tabs/PlanTab.jsx";
import StatsTab from "./tabs/StatsTab.jsx";
import SettingsTab from "./tabs/SettingsTab.jsx";

function Shell() {
  // Không lưu tab đang mở vào localStorage — mỗi lần mở app quay về 📒 Từ của tôi (tab chính, vì Today đã bỏ).
  const [tab, setTab] = useState("mywords");
  const [aiContext, setAiContext] = useState(null); // tên bài đang "hỏi bài AI", null = chat thường
  const goSettings = () => setTab("settings");
  const goReview = () => setTab("review");
  // Nút 💬 trên header bài ở 📒/📓/📌: nhảy sang tab AI kèm ngữ cảnh bài
  const askAI = (unitName) => { setAiContext(unitName); setTab("ai"); window.scrollTo(0, 0); };

  let Body;
  switch (tab) {
    case "scan": Body = <ScanTab onGoSettings={goSettings} />; break;
    case "mywords": Body = <MyWordsTab onGoReview={goReview} onGoSettings={goSettings} onAskAI={askAI} />; break;
    case "notes": Body = <NotesTab onGoSettings={goSettings} onAskAI={askAI} />; break;
    case "formulas": Body = <FormulasTab onAskAI={askAI} />; break;
    case "grammar": Body = <GrammarTab />; break;
    case "tests": Body = <TestsTab />; break;
    case "prep": Body = <PrepTab />; break;
    case "review": Body = <ReviewTab />; break;
    case "errors": Body = <ErrorsTab onGoSettings={goSettings} />; break;
    case "ai": Body = <AiTab onGoSettings={goSettings} context={aiContext} onClearContext={() => setAiContext(null)} />; break;
    case "plan": Body = <PlanTab />; break;
    case "stats": Body = <StatsTab />; break;
    case "settings": Body = <SettingsTab />; break;
    default: Body = null;
  }

  return (
    <>
      <NavBar activeTab={tab} onChangeTab={(v) => { setTab(v); window.scrollTo(0, 0); }} />
      <main>{Body}</main>
    </>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <Shell />
    </AppStateProvider>
  );
}
