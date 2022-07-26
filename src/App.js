import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
import WebCam from "./app/Pages/ContactInfo/Compoents/FaceDetectionWebCam/WebCam";
import DetectionImage from "./app/Pages/ContactInfo/Compoents/FaceDetectionImage/ObjectDetect";


function App() {
  return (
    <div>
     <LocalizationProvider dateAdapter={ AdapterDayjs}>
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
          <Route path="shareResume" element={<ShareRezume />} />
          <Route path="face-detection" element={<WebCam />} />
          <Route path="face-detection-photo" element={<DetectionImage/>} />
        </Routes>
      </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
}

export default App;
//<ContactInfo/>
