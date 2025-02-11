import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { Tabs } from "./components/Tabs";
import { AllPage } from "./pages/AllPage";
import { AboutPage } from "./pages/AboutPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { EducationPage } from "./pages/EducationPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactPage } from "./pages/ContactPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { IPLogger } from "./socket/IPAddress";

export const App = () => {
  return (
    <Router>
      <SearchBar />
      <Tabs />
      <ScrollToTop />
      <Toaster position="bottom-left" reverseOrder={false} />
      <IPLogger />
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<AllPage />} />
      </Routes>
    </Router>
  );
};
