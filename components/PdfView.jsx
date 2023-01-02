import React, { useCallback, useState, useEffect, useRef } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import pdfmap from "../pdfmap1.json";
import { useAtom } from "jotai";
import { paragraphAtom } from "../atom";

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

function PdfView({ width }) {
  const [paragraphs] = useAtom(paragraphAtom);
  const [file, setFile] = useState("/pdfs/visifit.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [value, setValue] = useState(1);
  const [paragraph, setParagraph] = useState(null);
  const [scale, setScale] = useState(paragraph ? 0.5 : 0.8);
  const pageRefs = useRef({});
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= numPages) setValue(e.target.value);
  };

  useEffect(() => {
    setValue(pageNumber);
  }, [pageNumber]);
  useEffect(() => {
    if (paragraphs) {
      // console.log({ paragraphs });
      pdfmap.map((item) => {
        if (Number(item.id) == paragraphs.paragraph[0]) {
          // console.log(item);s
          setPageNumber(Number(item.page));
          setParagraph(item);
        }
      });
    } else {
      setPageNumber(1);
    }
  }, [paragraphs]);
  // console.log(pageNumber);
  const textRenderer = useCallback(
    (textItem) => {
      // console.log(textItem);
      // console.log(paragraph.page, pageNumber);
      // console.log(paragraph.page === pageNumber);
      // pageRefs.current[pageNumber];
      // console.log({ pageNumber });
      // console.log(pageRefs.current[pageNumber].attributes[1].value);
      // console.log(
      //   Number(pageRefs.current[pageNumber].attributes[1].value) == pageNumber
      // );
      // if (pageRefs.current[pageNumber].attributes[1].value == pageNumber) {
      return highlightPattern(textItem, paragraph);
      // }
    },
    [paragraph, pageNumber]
  );
  const clicked = (index) => {
    pdfmap.map((item) => {
      if (Number(item.id) == paragraphs.paragraph[index]) {
        setPageNumber(Number(item.page));
        setParagraph(item);
      }
    });
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      const Value = Number(value);
      if (Value > 0 && Value <= numPages) {
        setParagraph(null);
        setPageNumber(Value);
        pageRefs.current[value - 1].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handlezoom = (type) => {
    if (type == "+") {
      setScale(scale + 0.1);
    } else {
      if (scale > 0.2) setScale(scale - 0.1);
    }
  };
  const handlePage = (type) => {
    if (type == "next") {
      pageRefs.current[pageNumber + 1].scrollIntoView({ behavior: "smooth" });
      setPageNumber(pageNumber + 1);
    } else {
      pageRefs.current[pageNumber - 1].scrollIntoView({ behavior: "smooth" });

      setPageNumber(pageNumber - 1);
    }
  };
  useEffect(() => {
    const el = document.getElementById("test");
    console.log(el);
  }, [paragraph]);
  return (
    <div
      className={`pdfview m-auto w-[${
        width - 20
      }rem] overflow-auto h-full  items-center flex justify-center relative`}
    >
      <div className="pdfview__container ">
        <div
          className={`pdfview__container__document  h-[90vh]  overflow-auto  flex-col `}
        >
          <div className="h-12 text-[#f1f1f1] py-5  justify-center z-50  select-none items-center flex gap-2 absolute top-0 bg-[#323639] w-full">
            <button
              disabled={pageNumber <= 1}
              className="text-sm"
              onClick={() => handlePage("prev")}
            >
              Prev
            </button>
            <span className="relative  bg-[#191b1c] text-sm p-1 justify-center items-center rounded flex">
              <input
                className="relative w-4 border-0 outline-none bg-[#191b1c] text-sm rounded"
                value={value}
                onChange={handleChange}
                onKeyDown={handlePress}
              />
              {"  "} / {numPages}
            </span>
            <button
              disabled={pageNumber >= numPages}
              className="text-sm"
              onClick={() => handlePage("next")}
            >
              Next
            </button>
            |
            <button className="text-3xl" onClick={() => handlezoom("-")}>
              &ndash;
            </button>
            <span className="relative bg-[#191b1c] text-sm p-1 rounded">
              {parseInt(scale * 100)}%
            </span>
            <button className="text-3xl" onClick={() => handlezoom("+")}>
              +
            </button>
          </div>
          <div className="min-h-screen overflow-auto">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (page, index) => (
                <Page
                  key={index}
                  inputRef={(ref) => (pageRefs.current[index] = ref)}
                  pageNumber={index + 1}
                  customTextRenderer={textRenderer}
                  pageIndex={index}
                  id={"test"}
                  width={
                    width > 60
                      ? (width * window.innerWidth) / 150
                      : (width * window.innerWidth) / 100
                  }
                  scale={scale}
                />
              ))}
            </Document>
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
                      <div className="flex items-center my-1">
                        <div
                          onClick={() => clicked(i)}
                          type="button"
                          className={`${
                            scores[i] < 0.7 ? "bg-yellow-500" : "bg-rose-800"
                          } text-white w-44  py-3  rounded-lg text-center font-extrabold font-sans mr-3`}
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
    </div>
  );
}

export default PdfView;
