import React from "react";
import Typography from "@mui/material/Typography";
import "./style.css";
import { Link } from "react-router-dom";

const sections = [
  { id: 1, name: "Contact Information", to: "/" },
  { id: 2, name: "Experience", to: "/experience" },
  { id: 3, name: "Education", to: "/education" },
  { id: 4, name: "Skills", to: "/skills" },
  { id: 5, name: "Languages", to: "/languages" },
  { id: 6, name: "Objective", to: "/objective" },
];

const Sidebar = () => {
  return (
    <div className="sideBar">
      <Typography variant="h6" className="sideBarTitle">
        RESUME SECTIONS
      </Typography>
      {sections.map((i) => (
         <div key={i.id} id={i.id} className="sidebarBtn">
          <Link to={i.to} key={i.id} className="textDecorationNone">
            {i.name}
          </Link>
         </div>
      ))}
    </div>
  );
};

export default Sidebar;
