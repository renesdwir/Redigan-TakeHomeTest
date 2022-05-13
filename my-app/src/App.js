import Navbar from "./components/Navbar";
import OfferingPage from "./pages/OfferingPage";
import SuggestionPage from "./pages/SuggestionPage";
import HomePage from "./pages/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
        <Route path="/offering" element={<OfferingPage />} />
      </Routes>
    </div>
  );
}

export default App;
