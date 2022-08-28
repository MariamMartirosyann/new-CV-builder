import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { PDFViewer } from '@react-pdf/renderer';
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
import Templates from "./app/Pages/Templates";
import EducationItem from "./app/Pages/EducationItem";
import EducationItemEdit from "./app/Pages/EducationItemEdit";
import TemplateOne from "./app/Pages/Templates/Template1";
import TemplateTwo from "./app/Pages/Templates/TemplateTwo/TemplateTwo";
import ShareRezume from "./app/Pages/ShareRezume";


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
          <Route path="educationItem/add" element={<EducationItem />} />
          <Route path="educationItemEdit/:id" element={<EducationItemEdit />} />
          <Route path="skills-languages" element={<SkillsLanguages />} />
          <Route path="languages/add" element={<LanguagesAdd />} />
          <Route path="languages/edit/:id" element={<LanguagesEdit />} />
          <Route path="objective" element={<Objective />} />
          <Route path="templates" element={<Templates />} />
          <Route path="templateOne" element={<TemplateOne />} />
          <Route path="templateTwo" element={<TemplateTwo />} />
          <Route path="shareRezume" element={<ShareRezume />} />
        </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
//<ContactInfo/>
