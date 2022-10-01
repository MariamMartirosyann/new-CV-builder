// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import One from "../../../../../images/1.png"
import * as tf from "@tensorflow/tfjs";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from "@tensorflow-models/coco-ssd";
//import Webcam from "react-webcam";
import "./style.css";
// 2. TODO - Import drawing utility here
 import { drawRect } from "./utilities";

function DetectionImage() {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    const net= await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof imgRef.current !== "undefined" &&
      imgRef.current !== null 
     // imgRef.current.photo.readyState === 4
    ) {
      // Get Video Properties
      const photo = imgRef.current;
      const photoWidth = imgRef.current.width;
      const photoHeight = imgRef.current.height;

      // Set video width
      /*photo.current.photo.width = photoWidth;
      photo.current.photo.height = photoHeight;*/

      // Set canvas height and width
      canvasRef.current.width = photoWidth;
      canvasRef.current.height =  photoHeight;

      // 4. TODO - Make Detections
       const obj = await net.detect(photo);
       console.log(obj)

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      drawRect(obj, ctx)

     
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div >
      <header>
        <img
         src={One}
          ref={imgRef}
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
      </header>
    </div>
  );
}

export default DetectionImage;