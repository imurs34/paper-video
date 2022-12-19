import React, { useState, useEffect } from "react";
import Base from "../components/base";
import input from "../input1.json";
import PdfView from "../components/PdfView";

const Index = () => {
  const [paragraphs, setParagraphs] = useState();
  const currentParagraphs = (val) => {
    setParagraphs(val);
  };

  return (
    <>
      <div className="video-container flex w-screen bg-black overflow-hidden">
        <div className="w-full border border-white">
          <Base input={input} paragraphs={currentParagraphs} />
        </div>
      </div>
      <div className="pdf-wrapper">
        <a href="javascript:void(0)" className="resize-btn">
          <span>&lt;</span>
          <span>&gt;</span>
        </a>
        <PdfView paragraphs={paragraphs} />
      </div>
    </>
  );
};

export default Index;
