import React, { useRef, useState, useEffect, useCallback,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./style.css";
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
  const dispatch = useDispatch();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  const [img, setImg] = useState("");
  const [tfReturnedText, setTFReturnedText] = useState(false);

  const isFaceDetect = useMemo(() => {
    // setClearInterval(true)
    return tfReturnedText === "person";
  },[tfReturnedText]);

  const takeImg = React.useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImg(imgSrc);
    dispatch(addImage(imgSrc));
  }, [webcamRef, setImg]);

  const runCoco = useCallback(async () => {
    const net = await cocossd.load();

    intervalRef.current = setInterval(() => {
      detect(net);
    }, 1000);
  }, []);

  useEffect(() => {
    runCoco();
  }, [runCoco]);


  useEffect(() => {
    console.log(isFaceDetect,intervalRef.current)
    if(isFaceDetect){
      clearInterval(intervalRef.current)
      intervalRef.current = null;
    }
  },[isFaceDetect,intervalRef.current])


  const detect = async (net) => {
    if (
      webcamRef.current?.video?.readyState === 4
    
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);
      console.log(obj);

      const ctx = canvasRef.current.getContext("2d");

      drawRect(obj, ctx);
      setTFReturnedText(obj[0].class);
    }
  };

  useEffect(() => {
    runCoco();
  }, [runCoco]);

  return (
    <div>
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
          {img === "" ? (
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
            <img src={img} alt="image" />
          )}
        </div>
        <div>
          {img !== "" ? (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  takeImg();
                }}
              >
                Retake
              </button>
              <button onClick={() => navigate("/")}>Save Photo</button>
            </>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                takeImg();
              }}
            >
              Click image
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detection;
