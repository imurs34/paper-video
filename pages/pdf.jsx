import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const renderToolbar = (Toolbar) => (
  <Toolbar>
    {(slots) => {
      const {
        CurrentPageInput,
        CurrentScale,
        GoToNextPage,
        GoToPreviousPage,
        ZoomIn,
        ZoomOut,
      } = slots;
      return (
        <div className="flex justify-center w-full">
          <div>
            <GoToPreviousPage />
          </div>
          <div className="w-11">
            <CurrentPageInput />
          </div>
          <div>
            <GoToNextPage />
          </div>
          <div className="flex items-center border-l border-solid border-white ml-2">
            <ZoomOut />
            <CurrentScale />
            <ZoomIn />
          </div>
        </div>
      );
    }}
  </Toolbar>
);
const JumpToFirstMatchExample = ({ fileUrl, keyword }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: (defaultTabs) => [],
  });

  const { toolbarPluginInstance } = defaultLayoutPluginInstance;
  const { searchPluginInstance } = toolbarPluginInstance;
  const { highlight } = searchPluginInstance;

  const handle = () => {
    highlight(" computational tools");
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
      <button className="text-white" onClick={handle}>
        click
      </button>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          display: "flex",
          width: "50rem",
          height: "10rem",
          justifyContent: "center",
          padding: "4px",
        }}
      >
        <Viewer
          fileUrl="/pdfs/visifit.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default JumpToFirstMatchExample;
