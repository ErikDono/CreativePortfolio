import React, { Component } from "react";
import PDFViewer from "../components/PDFViewer/PDFViewer";
import PDFJSBackend from "../backends/pdfjs"
import resDoc from "../assets/resumeDoc.pdf"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PDFViewer backend={PDFJSBackend} src={resDoc}/>
      </div>
    );
  }
}

export default App;
