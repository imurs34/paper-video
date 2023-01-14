import React, { useState, useEffect } from "react";
import Base from "../components/base";
import input from "../input1.json";
import PdfView from "../components/PdfView";
import Split from "react-split";
const Index = () => {
  const [paragraphs, setParagraphs] = useState();
  const sizes = [50, 50];
  const [width, setWidth] = useState([sizes[0], sizes[1]]);
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
      className="flex w-screen h-screen relative "
      sizes={[sizes[0], sizes[1]]}
    >
      <div>
        {/* <h1 className="mt-10 text-2xl text-white">{width[0]}</h1> */}
        <Base input={input} paragraphs={currentParagraphs} width={width[0]} />
      </div>
      <div className="overflow-auto">
        <PdfView paragraphs={paragraphs} width={width[1]} />
      </div>
    </Split>
  );
};

export default Index;
