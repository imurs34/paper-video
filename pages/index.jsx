import React, { useState, useEffect } from "react";
import Base from "../components/base";
import input from "../input1.json";
import PdfView from "../components/PdfView";
import Split from "react-split";
const Index = () => {
  const [paragraphs, setParagraphs] = useState();
  const [width, setWidth] = useState([50, 50]);
  const currentParagraphs = (val) => {
    setParagraphs(val);
  };

  const handleDrag = (sizes) => {
    setWidth(sizes);
  };
  return (
    <Split
      gutterSize={20}
      onDragEnd={handleDrag}
      className="flex w-screen h-screen z-[1000]"
    >
      <div className="mx-8">
        <Base input={input} paragraphs={currentParagraphs} width={width[0]} />
      </div>
      <div>
        <PdfView paragraphs={paragraphs} width={width[1]} />
      </div>
    </Split>
  );
};

export default Index;
