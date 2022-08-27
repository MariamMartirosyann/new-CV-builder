import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Box } from "@mui/material";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import "./style.css";
import DownloadBtn from "../../../Shared/Sidebar/DownloadBtn";

const TemplateOne = () => {
  const img = useSelector((state) => state.image.list);
  const contactInfo = useSelector((state) => state.contactInfo.list);
  const skills = useSelector((state) => state.skillsInfo.list);
  const languages = useSelector((state) => state.languagesInfo.list);
  const objective = useSelector(
    (state) => state.submitObjectiveInfo.submitList
  );
  const experience = useSelector((state) => state.jobsInfo.list);
  const education = useSelector((state) => state.educationInfo.list);
  const description = experience?.description;
  console.log("experience", experience);
  const obj = objective?.objective;

  const image = img?.[0]?.data_url;
  const ref = React.createRef();

  return (
    <div className="main1">
      <div className="downLoad">  
      
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="downLoadBtn" onClick={toPdf}> DownLoad</button>}
      </Pdf></div>

      <Sidebar />
      <div ref={ref}>
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
            <div className="top">
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
            <hr />
            <div className="experience">
              <div className="experienceLeftSide">
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "30px",
                    marginBottom: "15px",
                  }}
                >
                  Experience
                </Typography>
                {experience?.map((i) => (
                  <div key={i.id}>
                    <p className="experienceText">{i.location}</p>
                    <p className="experienceText">
                      {i.startDate}-{i.endDate}
                    </p>
                  </div>
                ))}
              </div>
              <div className="experienceRightSide">

                {experience?.map((i) => (

                  <div key={i.id}>
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "60px",
                        marginBottom: "0",
                        color: "rgb(38, 160, 244)"
                      }}
                      className="experienceRightSideText"
                    >
                      {i.position}
                    </Typography>
                    <b> <Typography
                      variant="h6"
                      style={{
                        marginTop: "0",
                        marginBottom: "15px",
                      }}
                      className="experienceRightSideText"
                    >
                      {i.company}
                    </Typography></b>
                    <div style={{ width: "100%" }}>
                      <p className="experienceText">{i.description}</p>
                    </div>
                  </div>
                ))}

              </div>

            </div>
            <hr />
            <div className="experience">
              <div className="experienceLeftSide">
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "30px",
                    marginBottom: "15px",
                  }}
                >
                  Education
                </Typography>
                {education?.map((i) => (
                  <div key={i.id}>
                    <p className="experienceText">{i.location}  {i.degree}</p>
                    <p className="experienceText">
                      {i.startDate}-{i.endDate}
                    </p>
                  </div>
                ))}
              </div>

              <div className="experienceRightSide">
                {education?.map((i) => (
                  <div key={i.id}>
                    <Typography
                      variant="h6"
                      style={{
                        marginTop: "60px",
                        marginBottom: "0",
                        color: "rgb(38, 160, 244)"
                      }}
                      className="experienceRightSideText"
                    >

                      {i.degree}
                    </Typography>
                    <b> <Typography
                      variant="h6"
                      style={{
                        marginTop: "0",
                        marginBottom: "15px",
                      }}
                      className="experienceRightSideText"
                    >
                      {i.institutionName}
                    </Typography></b>

                  </div>
                ))}

              </div>

            </div>
            <hr />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TemplateOne;
