import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import TemplateOne from '../Template1';


const TemplateTwo=()=>{
  const ref = React.createRef();

  
    return (

      <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
       <TemplateOne/>
      </div>
    </div>
    );
  }
  export default TemplateTwo