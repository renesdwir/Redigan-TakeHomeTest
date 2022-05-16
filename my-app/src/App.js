import Navbar from "./components/Navbar";
import ResultPage from "./pages/ResultPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import CoverPage from "./pages/CoverPage";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
        <Route path="/result/:helmet" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
