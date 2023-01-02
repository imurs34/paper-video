import * as React from "react";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { highlightPlugin } from "@react-pdf-viewer/highlight";
import "@react-pdf-viewer/highlight/lib/styles/index.css";
const HomePage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  //   console.log(jumpToPage);
  const handleClick = () => {
    console.log("dfdf");
    jumpToPage(12);
  };
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
      <Viewer
        fileUrl="/pdfs/visifit.pdf"
        plugins={[defaultLayoutPluginInstance]}
      />
    </Worker>
  );
};

export default HomePage;
