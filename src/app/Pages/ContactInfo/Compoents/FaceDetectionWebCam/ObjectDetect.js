// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./style.css";
// 2. TODO - Import drawing utility here
import { drawRect } from "./utilities";
import { addImage } from "../../../../Redux/ImageSlice";
import { useDispatch } from "react-redux";


const option = {
  width: 400,
  height: 400,
  facingMode: "user",
};

function Detection() {

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [img, setImg] = useState("");

  const takeImg = React.useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImg(imgSrc);
    dispatch(addImage(imgSrc));
  }, [webcamRef, setImg]);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    const net = await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const obj = await net.detect(video);
      console.log(obj)

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      drawRect(obj, ctx)
    }
  };

  useEffect(() => { runCoco() }, []);


  return (
    <div >
      {/* <header>
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header> */}

      <div>
        <div>
        <>
              <Webcam
                audio={false}
                ref={webcamRef}
                muted={true}
                screenshotFormat="image/jpeg"
                videoConstraints={option}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 400,
                  height: 400,
                }}
              />

              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 8,
                  width: 400,
                  height: 400,
                }}
              />
            </>
          {img == "" ? (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                muted={true}
                screenshotFormat="image/jpeg"
                videoConstraints={option}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 400,
                  height: 400,
                }}
              />

              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 8,
                  width: 400,
                  height: 400,
                }}
              />
            </>
          ) : (
            <img src={img} />
          )}
        </div>
        {/* <button
              onClick={(e) => {
                e.preventDefault();
                takeImg();
              }}
              className="btn btn-dark"
            >
              Retake
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                takeImg();
              }}
              className="btn btn-primary"
            >
              Click image
              </button> */}
        <div>
         {img != "" ? (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                takeImg();
              }}
              className="btn btn-dark"
            >
              Retake
            </button>
              <button
              onClick={()=>navigate("/")}
              className="btn btn-primary"
            >
              Save Photo
            </button>
            </>
           
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                takeImg();
              }}
              className="btn btn-primary"
            >
              Click image
            </button>
          )} 
        
        </div>
      </div>4

    </div>
  );
}

export default Detection;