// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addImage } from "../../../../Redux/ImageSlice";
import { useMediaQuery } from "react-responsive";
import ImageUploading from "react-images-uploading"
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from "@tensorflow-models/coco-ssd";
//import Webcam from "react-webcam";
import "./style.css";
// 2. TODO - Import drawing utility here
import { drawRect } from "./utilities";
import { Save } from "@mui/icons-material";
const maxNumber = 1;

function DetectionImage() {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
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
      canvasRef.current.height = photoHeight;

      // 4. TODO - Make Detections
      const obj = await net.detect(photo);
      console.log(obj)

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  llllll
      drawRect(obj, ctx)


    }
  };
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    dispatch(addImage(imageList));
  };

  const savePhoto = () => {
    navigate("/")
  }

  const handleImageUpdate =(index)=>{

  }
  useEffect(() => { runCoco() }, []);

  return (
    <div >


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
                className={isMediumScreen ? "imageBtnSmall" : "imageBtn"}
                style={
                  isDragging ? { color: "red" } : undefined
                }
                onClick={onImageUpload}
                {...dragProps}
              >
                Add Profile Photo
              </button>

              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} >


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



                </div>

              ))}
            </div>
          )}
        </ImageUploading>

      </div>
      <div className="saveImage">
        <button
          className="saveImageBtn"
          onClick={savePhoto}
        >
          Face is deteced.Save photo
        </button>
        
          {/* <h6
            className="saveImageBtn"
          >
            Face is not deteced.Upload another photo.
          </h6>
         */}
        </div>
      </div>
      );
}


      export default DetectionImage;