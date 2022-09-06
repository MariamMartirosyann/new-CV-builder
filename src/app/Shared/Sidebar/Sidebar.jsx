import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Typography from "@mui/material/Typography";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./style.css";


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
    icon: <FormatListBulletedRoundedIcon />,
  },
  {
    id: 5,
    name: "Languages",
    to: "/skills-languages",
    icon: <LanguageRoundedIcon />,
  },
  {
    id: 6,
    name: "Objective",
    to: "/objective",
    icon: <RadarRoundedIcon />,
  },
];

const Sidebar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  const { pathName } = useLocation();

  const showDownloadDivState = useMemo(
    () => pathName === "/templateOne" || pathName === "/templateTwo",
    [pathName]
  );

  return (
    <>
      {!isMediumScreen ? (
        <div className="sideBar">
          {showDownloadDivState ? (
            <>
              <Typography variant="h6" className="resume">
                Here is your resume!
              </Typography>
              <Link to="/shareResume">
                <p className="share">
                  <IosShareIcon className="shareIcon" />
                  Share it online
                </p>
              </Link>
              <hr className="hr" />
              <p className="sideBarTitle">RESUME SECTIONS</p>
            </>
          ) : (
            <h3 className="sideBarTitleBig">RESUME SECTIONS</h3>
          )}

          {sections.map((i) => (
            <Link to={i.to} key={i.id} className="textDecorationNone">
              <div className="sidebarBtn">
                <div className="iconDiv"> {i.icon}</div>
                <div className="nameDiv"> {i.name}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="sideBarSmall">
          {showDownloadDivState ? (
            <>
              <Typography variant="h6" className="resume">
                Here is your resume!
              </Typography>
              <Link to="/shareResume">
                <p className="share">
                  <IosShareIcon className="shareIcon" />
                  Share it online
                </p>
              </Link>
              <hr className="hr" />
              <p className="sideBarTitle">RESUME SECTIONS</p>
            </>
          ) : null}

          {sections.map((i) => (
            <Link to={i.to} key={i.id} className="textDecorationNone">
              <div key={i.id} id={i.id} className="sidebarBtnSmall">
                <div className="iconDivSmall"> {i.icon}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
