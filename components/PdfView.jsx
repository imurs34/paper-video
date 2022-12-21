import React, { useCallback, useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import pdfmap from "../pdfmap1.json";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

function highlightPattern(text, paragraph) {
  if (
    text.itemIndex >= paragraph.index[0] &&
    text.itemIndex <= paragraph.index[1]
  )
    return `<mark>${text.str}</mark>`;
}

function PdfView({ paragraphs }) {
  const [file, setFile] = useState("/pdfs/visifit.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [paragraph, setParagraph] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  useEffect(() => {
    if (paragraphs) {
      pdfmap.map((item) => {
        if (Number(item.id) == paragraphs.paragraphs[0]) {
          setPageNumber(Number(item.page));
          setParagraph(item);
        }
      });
    } else {
      setPageNumber(1);
    }
  }, [paragraphs]);

  const textRenderer = useCallback(
    (textItem) => {
      return highlightPattern(textItem, paragraph);
    },
    [paragraph]
  );
  const clicked = (index) => {
    pdfmap.map((item) => {
      if (Number(item.id) == paragraphs.paragraphs[index]) {
        setPageNumber(Number(item.page));
        setParagraph(item);
      }
    });
  };

  return (
    <div className="pdfview">
      <div className=" pdfview__container">
        <div className=" pdfview__container__document flex-col">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className=""
          >
            <Page
              className=""
              pageNumber={pageNumber}
              customTextRenderer={textRenderer}
              width={window.innerWidth * 0.29}
              scale={1}
            />
          </Document>
          <div className="flex flex-col text-white ml-12  mt-2 text-sm">
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
                      if (Number(item.id) == paragraphs.paragraphs[i]) {
                        para = item.paragraphs.split(" ").slice(0, 7).join(" ");
                      }
                    });

                    buttons.push(
                      <div className="flex items-center my-1">
                        <button
                          onClick={() => clicked(i)}
                          type="button"
                          className={`${
                            scores[i] < 0.7 ? "bg-yellow-500" : "bg-rose-800"
                          } text-white w-44 py-4 rounded-lg text-center font-bold mr-3`}
                        >
                          {sections[i]}
                        </button>
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
    </div>
  );
}

export default PdfView;
