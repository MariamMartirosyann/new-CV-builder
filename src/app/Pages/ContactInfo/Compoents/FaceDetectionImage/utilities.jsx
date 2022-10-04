export const drawRect = (detections, ctx) => {
    
  detections.forEach(prediction=>{
      const [x,y, width,height]=prediction["bbox"];
      const text=prediction['class']


      const color= "#" + Math.floor(Math.random()*1766699999).toString(16);
      ctx.strokeStyle=color;
      ctx.font=" 18px Arial";
      ctx.fillstyle=color


      ctx.beginPath();
      ctx.fillText(text, x,y);
      ctx.rect(x,y, width, height);
      ctx.stroke()


      if(text==="person"){
          console.log("Your face is awesome!!!")}
  })




}
