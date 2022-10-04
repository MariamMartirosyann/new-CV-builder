import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addImage } from "../../../../Redux/ImageSlice";
import ImageUploading from "react-images-uploading";
import * as cocossd from "@tensorflow-models/coco-ssd";
import "./style.css";
import { drawRect } from "./utilities";

function DetectionImage() {
  const imgRef = useRef(null);
  const [tfReturnedText, setTFReturnedText] = useState(false);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const runCoco = useCallback(async () => {
    const net = await cocossd.load();
    detect(net);
  }, []);

  const detect = async (net) => {
    if (typeof imgRef.current !== "undefined" && imgRef.current !== null) {
      const photo = imgRef.current;
      const photoWidth = imgRef.current.width;
      const photoHeight = imgRef.current.height;

      canvasRef.current.width = photoWidth;
      canvasRef.current.height = photoHeight;

      const obj = await net.detect(photo);

      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
      setTFReturnedText(obj[0].class);
    }
  };

  console.log(tfReturnedText);

  const onChange = (imageList, addUpdateIndex) => {
    debugger;
    setImages(imageList);
    dispatch(addImage(imageList));
  };

  const savePhoto = () => {
    navigate("/");
  };

  useEffect(() => {
    runCoco();
  }, [runCoco, images]);

  const isFaceDetect = useMemo(() => {
    return tfReturnedText === "person";
  }, [tfReturnedText]);

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
