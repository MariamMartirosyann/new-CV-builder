import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useLocation } from "react-router-dom";
import { showDownloadDiv } from "../../Redux/PreWrittenSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import "./style.css";
import { Link } from "react-router-dom";
import IosShareIcon from "@mui/icons-material/IosShare";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import { useMemo } from "react";

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
  const pathName = useLocation().pathname;
  const showDownloadDivState = useMemo(
    () => pathName === "/templateOne" || pathName === "/templateTwo",
    [pathName]
  );

  return (
    <div className="sideBar">
      {showDownloadDivState ? (
        <>
          <Typography variant="h6" className="rezume">
            Here is your resume!
          </Typography>
          <Link to="/shareRezume">
            <p className="share">
              <IosShareIcon className="shareIcon" />
              Share it online
            </p>
          </Link>
          <hr className="hr" />
        </>
      ) : null}

      <Typography variant="p" className="sideBarTitle">
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
