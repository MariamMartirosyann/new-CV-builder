import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Box } from "@mui/material";
import Sidebar from "../../../../../Shared/Sidebar/Sidebar";
import "./style.css";

const TemplateOne = () => {
  const img = useSelector((state) => state.image.list);
  const contactInfo = useSelector((state) => state.contactInfo.list);
  const skills = useSelector((state) => state.skillsInfo.list);
  const languages = useSelector((state) => state.languagesInfo.list);
  const objective = useSelector(
    (state) => state.submitObjectiveInfo.submitList
  );
  const obj = objective?.objective;
  console.log(" obj", obj);
  console.log("img", img);
  const image = img?.[0]?.data_url;
  console.log("image", image);

  return (
    <div className="main1">
      <Sidebar />
      <Grid container spacing={2} className="main1">
        <Grid item lg={3} className="leftSide">
          <Typography
            variant="h6"
            style={{
              marginLeft: "0",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            Contact Information
          </Typography>
          <hr />
          <Typography
            variant="h6"
            style={{
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            Email
          </Typography>
          <Typography
            variant="p"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {contactInfo?.mail}
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            Address
          </Typography>{" "}
          <Typography
            variant="p"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {contactInfo?.address}
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            Phone
          </Typography>{" "}
          <Typography
            variant="p"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {contactInfo?.phone}
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            Date Of Birth
          </Typography>{" "}
          <Typography
            variant="p"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {contactInfo?.dateOfBirth}
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            Nationality
          </Typography>{" "}
          <Typography
            variant="p"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {contactInfo?.nationality}
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            Link
          </Typography>{" "}
          <Typography
            variant="p"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {contactInfo?.link}
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            Skills
          </Typography>
          <hr />
          {skills?.map((i) => (
            <div key={i.id}>
              <Typography
                variant="p"
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                {i.skills}
              </Typography>
            </div>
          ))}
          <Typography
            variant="h6"
            style={{
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            Languages
          </Typography>
          <hr />
          {languages?.map((i) => (
            <div key={i.id}>
              <Typography
                variant="h6"
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                {i.language}
              </Typography>
              <Typography
                variant="p"
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                {i.languageLevel} {i.courseOrCertification}
              </Typography>
            </div>
          ))}
        </Grid>

        <Grid item lg={6} className="rightSide">
          <div>
            <div style={{ height: "30%" }}>
              {" "}
              <Typography
                variant="h5"
                style={{
                  marginLeft: "0",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                {contactInfo?.name} {contactInfo?.surname}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  marginLeft: "0",
                  marginTop: "15px",
                  marginBottom: "0px",
                }}
              >
                {contactInfo?.occupation}
              </Typography>
              <Typography
                variant="p"
                style={{
                  marginLeft: "0",
                  marginTop: "0px",
                  marginBottom: "15px",
                }}
                dangerouslySetInnerHTML={{ __html: obj }}
              ></Typography>
            </div>
            <div style={{ height: "30%" }}>
              {image ? (
                <img
                  src={image}
                  style={{
                    width: "100x",
                    height: "130px",
                    margin: " 50px 10px",
                  }}
                  alt="img"
                />
              ) : null}
            </div>
          </div>

          <Grid item lg={6}>
            <Typography
              variant="h6"
              style={{
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Experience
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateOne;
