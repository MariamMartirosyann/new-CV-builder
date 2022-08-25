import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


const TemplateTwo=()=>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1)
    }
  
    return (
      <div>
        <Document file="sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        
      </div>
    );
  }
  export default TemplateTwo