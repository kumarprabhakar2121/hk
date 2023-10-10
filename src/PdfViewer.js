import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css"; // Import the CSS file for the PdfViewer component

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdfUrl }) => {
    return (
        <div className="pdf-viewer">
            <Document file={process.env.PUBLIC_URL + pdfUrl}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PdfViewer;

