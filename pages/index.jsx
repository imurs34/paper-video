import React, { useState, useEffect } from "react";
import Base from "../components/base";
import input from "../input1.json";
import subtitles from "../transcription.json";
import PdfView2 from "../components/PdfView2";
import Split from "react-split";
const Index = () => {
  const [paragraphs, setParagraphs] = useState();
  const sizes = [60, 40];
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
        <Base transcription={subtitles} input={input} paragraphs={currentParagraphs} width={width[0]} />
      </div>
      <div className="overflow-auto">
        <PdfView2 paragraphs={paragraphs} width={width[1]} />
      </div>
    </Split>
  );
};

export default Index;
