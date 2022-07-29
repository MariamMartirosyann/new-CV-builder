import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactInfo from "./app/Pages/ContactInfo";
import Experience from "./app/Pages/Experience/Experience";
import Education from "./app/Pages/Education/Education";
import SkillsLanguages from "./app/Pages/SkillsLanguages/SkillsLanguages";
import Jobs from "./app/Pages/Jobs";
import JobsEdit from "./app/Pages/JobsEdit";
import LanguagesAdd from "./app/Pages/Languages/LanguagesAdd";
import LanguagesEdit from "./app/Pages/Languages/LanguagesEdit";
import Objective from "./app/Pages/Objective/Objective";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactInfo />} />
          <Route path="experience" element={<Experience />} />
          <Route path="experienceJobs/add" element={<Jobs />} />
          <Route path="experienceJobsEdit/:id" element={<JobsEdit />} />
          <Route path="education" element={<Education />} />
          <Route path="skills-languages" element={<SkillsLanguages />} />
          <Route path="languages/add" element={<LanguagesAdd />} />
          <Route path="languages/edit/:id" element={<LanguagesEdit />} />
          <Route path="objective" element={<Objective />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<ContactInfo/>
