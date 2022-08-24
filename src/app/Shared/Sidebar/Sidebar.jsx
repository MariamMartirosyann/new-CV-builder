import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import RadarRoundedIcon from '@mui/icons-material/RadarRounded';
import "./style.css";
import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    name: "Contact Information",
    to: "/",
    icon: <AccountCircleSharpIcon />,
  },
  {
    id: 2,
    name: "Experience",
    to: "/experience",
    icon: <BusinessCenterSharpIcon />,
  },
  {
    id: 3,
    name: "Education",
    to: "/education",
    icon: <MenuBookRoundedIcon />,
  },
  {
    id: 4,
    name: "Skills",
    to: "/skills-languages",
    icon:  <FormatListBulletedRoundedIcon/>,
  },
  {
    id: 5,
    name: "Languages",
    to: "/skills-languages",
    icon: <LanguageRoundedIcon/> ,
  },
  {
    id: 6,
    name: "Objective",
    to: "/objective",
    icon: <RadarRoundedIcon />,
  },
];

const Sidebar = () => {
  return (
    <div className="sideBar">
      <button className="downLoadBtn"> DownLoad</button>
      <Typography variant="h6" className="sideBarTitle">
        RESUME SECTIONS
      </Typography>
      {sections.map((i) => (
        <Link to={i.to} key={i.id} className="textDecorationNone">
          <div key={i.id} id={i.id} className="sidebarBtn">
            <div className="iconDiv"> {i.icon}</div>
            <div className="nameDiv"> {i.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
