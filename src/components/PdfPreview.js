import React, { useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf';
//PDFjs worker from an external cdn
const url = "http://www.pdf995.com/samples/pdf.pdf"


function PdfPreview() {
  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
   const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
  function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
  setPageNumber(1);
  }
  return (
    <>
    <div className="main">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber} size="A9"/>
      </Document>
     </div>
    </>
  )
}

export default PdfPreview