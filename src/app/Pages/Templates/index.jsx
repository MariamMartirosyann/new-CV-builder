import React from "react";
import { Typography} from "@mui/material";
import "./style.css";
import SimpleSlider from "./Slider/slider";

const Templates = () => {
  return (
    <>
      <div className="mainTemplates">
      
          <div>
            {" "}
            <Typography
              variant="h5"
              style={{
                marginBottom: "10px",
              }}
            >
              Choose a template to create your new resume
            </Typography>
          </div>
          <div>
            {" "}
            <Typography
              variant="p"
              style={{
              color:"grey",
                marginBottom: "30px",
              }}
            >
              Pick your favorite! You'll be able to change it later
            </Typography>
          </div>
        
      </div>
      <SimpleSlider/>
    </>
  );
};

export default Templates;
