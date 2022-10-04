export const isFaceDetected = (detections) => {
detections.forEach((prediction) => {
  //const [x, y, width, height] = prediction["bbox"];
  const text = prediction["class"];

  if (text==="person"){
    return true
  }
  return false
})

}
