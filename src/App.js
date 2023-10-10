import React from 'react';
import PdfViewer from './PdfViewer';

function App() {
  const pdfUrl = './HarshitaResume.pdf';

  return (
    <div className="App">
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default App;
