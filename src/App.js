import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactInfo from "./app/Pages/ContactInfo";
import Experience from "./app/Pages/Experience/Experience";
import Education from "./app/Pages/Education/Education";
import Skills from "./app/Pages/Skills/Skills";
import Languages from "./app/Pages/Languages/Languages";
import Jobs from "./app/Pages/Jobs";
import JobsEdit from "./app/Pages/JobsEdit";
import PreWritten from "./app/Pages/PreWritten";


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
            <Route path="skills" element={<Skills />} />
            <Route path="preWritten" element={<PreWritten />} />
            <Route path="languages" element={<Languages />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
//<ContactInfo/>
