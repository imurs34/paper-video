import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { highlightPlugin, Trigger } from "@react-pdf-viewer/highlight";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/highlight/lib/styles/index.css";

const RenderHighlightAreasExample = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [areas, setAreas] = React.useState([]);
  const handleClick = () => {
    setAreas([
      {
        pageIndex: 0,
        height: 20,
        width: 41,
        left: 8,
        top: 56,
      },
    ]);
  };

  const renderHighlights = (props) => (
    <div>
      {areas
        .filter((area) => area.pageIndex === props.pageIndex)
        .map((area, idx) => (
          <div
            key={idx}
            className="highlight-area"
            style={Object.assign(
              {},
              {
                background: "yellow",
                opacity: 0.2,
              },
              props.getCssProperties(area, props.rotation)
            )}
          />
        ))}
    </div>
  );

  const highlightPluginInstance = highlightPlugin({
    renderHighlights,
    trigger: Trigger.None,
  });

  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "750px",
      }}
    >
      <button onClick={handleClick}>click</button>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
        <Viewer
          fileUrl="/pdfs/visifit.pdf"
          plugins={[defaultLayoutPluginInstance, highlightPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default RenderHighlightAreasExample;
