import React, { useState, useEffect } from "react";
import pdfmap from "../pdfmap1.json";
import { useAtom } from "jotai";
import { paragraphAtom } from "../atom";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { highlightPlugin, Trigger } from "@react-pdf-viewer/highlight";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/highlight/lib/styles/index.css";

function PdfView({ width }) {
  const [paragraphs] = useAtom(paragraphAtom);
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage, CurrentPageInput, GoToNextPageButton, GoToPreviousPage } =
    pageNavigationPluginInstance;
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const [areas, setAreas] = React.useState(null);

  useEffect(() => {
    if (paragraphs) {
      pdfmap.map((item) => {
        if (Number(item.id) == paragraphs.paragraph[0]) {
          jumpToPage(item.pageIndex - 1);
          setAreas({ ...item, pageIndex: item.pageIndex - 1 });
        }
      });
    }
  }, [paragraphs]);

  const clicked = (index) => {
    pdfmap.map((item) => {
      if (Number(item.id) == paragraphs.paragraph[index]) {
        jumpToPage(item.pageIndex - 1);
        setAreas({ ...item, pageIndex: item.pageIndex - 1 });
      }
    });
  };

  const renderHighlights = (props) => (
    <div>
      {areas?.highlights
        ?.filter(() => areas.pageIndex === props.pageIndex)
        ?.map((area, idx) => {
          return (
            <div
              key={idx}
              className="highlight-area"
              style={Object.assign(
                {},
                {
                  background: "yellow",
                  opacity: 0.18,
                },
                props.getCssProperties(area, props.rotation)
              )}
            />
          );
        })}
    </div>
  );

  const highlightPluginInstance = highlightPlugin({
    renderHighlights,
    trigger: Trigger.None,
  });

  return (
    <div
      className={`pdfview m-auto w-[${
        width - 20
      }rem] overflow-auto h-full items-center flex justify-center relative`}
    >
      <div className={` w-full h-[100vh]  overflow-auto  flex-col `}>
        <div className={` w-[90%] m-auto  h-[90vh]  overflow-auto  flex-col `}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#eeeeee",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              <div>
                <GoToPreviousPage />
              </div>
              <div className="w-11">
                <CurrentPageInput />
              </div>
              <div>
                <GoToNextPageButton />
              </div>
              <div className="flex border-l border-solid border-white ml-2">
                <ZoomOutButton />
                <ZoomPopover />
                <ZoomInButton />
              </div>
            </div>
            <Viewer
              fileUrl="/pdfs/visifit.pdf"
              defaultScale={SpecialZoomLevel.PageFit}
              plugins={[
                zoomPluginInstance,
                highlightPluginInstance,
                pageNavigationPluginInstance,
              ]}
            />
          </Worker>
        </div>
        <div className={`flex flex-col text-white ml-12  mt-2 text-sm `}>
          {(() => {
            if (paragraphs) {
              if (paragraphs.sections) {
                let sections = paragraphs.sections.replace(/'/g, '"'); //replacing all ' with "
                let scores = paragraphs.scores;
                sections = JSON.parse(sections);

                let buttons = [];
                for (let i = 0; i < sections.length; i++) {
                  let para = "";
                  pdfmap.map((item) => {
                    if (Number(item.id) == paragraphs.paragraph[i]) {
                      para = item.paragraphs.split(" ").slice(0, 7).join(" ");
                    }
                  });

                  buttons.push(
                    <div className="flex items-center my-1" key={i}>
                      <div
                        onClick={() => clicked(i)}
                        type="button"
                        className={`${
                          scores[i] < 0.7 ? "bg-yellow-500" : "bg-rose-800"
                        } text-white w-44  py-3  cursor-pointer rounded-lg text-center font-extrabold font-sans mr-3`}
                      >
                        {sections[i]}
                      </div>
                      <span>{para}...</span>
                    </div>
                  );
                }

                return buttons;
              }
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default PdfView;
