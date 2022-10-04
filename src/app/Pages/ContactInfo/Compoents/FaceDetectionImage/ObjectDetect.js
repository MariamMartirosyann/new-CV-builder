// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addImage } from "../../../../Redux/ImageSlice";
import { useMediaQuery } from "react-responsive";
import ImageUploading from "react-images-uploading";
import * as tf from "@tensorflow/tfjs";
// 1. TODO - Import required model here
import * as cocossd from "@tensorflow-models/coco-ssd";
import "./style.css";
// 2. TODO - Import drawing utility here
import { drawRect } from "./utilities";


const maxNumber = 1;

function DetectionImage() {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isFaceDetect, setIsFaceDetect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    const net = await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };
 
  const detect = async (net) => {
    // Check data is available
    if (typeof imgRef.current !== "undefined" && imgRef.current !== null) {
      // Get Photo Properties
      const photo = imgRef.current;
      const photoWidth = imgRef.current.width;
      const photoHeight = imgRef.current.height;

      // // Set photo width
      // photo.current.width = photoWidth;
      // photo.current.height = photoHeight;

      // Set canvas height and width
      canvasRef.current.width = photoWidth;
      canvasRef.current.height = photoHeight;

      // 4. TODO - Make Detections
      const obj = await net.detect(photo);
      console.log(obj);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      // 5. TODO - Update drawing utility
      drawRect(obj, ctx);
      //  text=obj[0].class
      // console.log("text",text)
    }
  
  };


  

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    dispatch(addImage(imageList));
  };

  const savePhoto = () => {
    navigate("/");
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={1}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image">
              <button
                className={"imageBtn"}
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Add Profile Photo
              </button>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index}>
                  <img
                    src={image["data_url"]}
                    alt=""
                    ref={imgRef}
                    style={{
                      position: "absolute",
                      marginLeft: "auto",
                      marginRight: "auto",
                      top: 100,
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
                      top: 100,
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      zindex: 8,
                      width: 640,
                      height: 480,
                    }}
                  />

                  <div className={"imageBtns"}>
                    <button
                      className="uploadBtn"
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </button>
                    <br />
                    <button
                      className="deleteBtn"
                      onClick={() => onImageRemove(index)}
                    >
                      Delete
                    </button>
                  </div>
                  {isFaceDetect ? (
                    <div className="saveImage">
                      <h6 className="saveImageBtn">
                        Face is not deteced.Upload another photo.
                      </h6>
                    </div>
                  ) : (
                    <div className="saveImage">
                      <button className="saveImageBtn" onClick={savePhoto}>
                        Face is detected.Save photo
                      </button>

                     
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
}

export default DetectionImage;
