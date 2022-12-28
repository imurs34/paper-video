import React, { useCallback, useState, useEffect, useRef } from "react";
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

function PdfView({ paragraphs, width }) {
  const [file, setFile] = useState("/pdfs/visifit.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [paragraph, setParagraph] = useState(null);
  const [scale, setScale] = useState(paragraph ? 0.5 : 0.8);
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
  const handlezoom = (type) => {
    if (type == "+") {
      setScale(scale + 0.1);
    } else {
      setScale(scale - 0.1);
    }
  };
  return (
    <div className="pdfview m-auto w-full h-screen items-center flex justify-center relative">
      <div className="pdfview__container ">
        <div
          className={`pdfview__container__document flex-${
            paragraph && width > 70 ? "row" : "col"
          } ${width < 20 && "hidden"}`}
        >
          <div className="h-12 text-[#f1f1f1] py-5 text-2xl justify-center z-50  select-none items-center flex gap-2 absolute top-0 bg-[#323639] w-full">
            <button className="text-3xl" onClick={() => handlezoom("+")}>
              +
            </button>
            <span className="relative bg-[#191b1c] text-sm p-1 rounded">
              {parseInt(scale * 100)}%
            </span>
            <button className="text-3xl" onClick={() => handlezoom("-")}>
              &ndash;
            </button>
          </div>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page
              className={`${width < 20 && "hidden"}`}
              pageNumber={pageNumber}
              customTextRenderer={textRenderer}
              width={
                width > 60
                  ? (width * window.innerWidth) / 150
                  : (width * window.innerWidth) / 100
              }
              scale={scale}
            />
          </Document>
          <div
            className={`flex flex-col text-white ml-12  mt-2 text-sm ${
              width < 20 && "hidden"
            }`}
          >
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
