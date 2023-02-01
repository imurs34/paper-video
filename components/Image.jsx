import _ from "lodash";
import styled from "styled-components";
import React, { useCallback, useRef, useState } from "react";
import { useAtom } from "jotai";
import { darkModeAtom, highlightAtom, paragraphAtom } from "../atom";
import pdfmap2 from "../pdfmap2.json";
import useOnClickOutside from "../hooks/onClickOutside";

function Image({ obj, url, width, widthRatio, heightRatio }) {
  const [fixed] = useState();
  const [dark] = useAtom(darkModeAtom);
  const [highlight, setHighlightAtom] = useAtom(highlightAtom);
  const [paragraph, setParagraphAtom] = useAtom(paragraphAtom);
  const imgRef = useRef(null);
  const onClick = (e) => {
    pdfmap2.map((item) => {
      if (Number(item.slide_id) == obj.slide_id) {
        setParagraphAtom(item);
      }
    });
    setHighlightAtom(e.target.id);
  };
  useOnClickOutside(imgRef, () => setHighlightAtom(null));

  return (
    <Img
      fixed={fixed}
      ref={imgRef}
      onClick={onClick}
      isDark={dark}
      src={url}
      id={url}
      highlight={highlight}
    />
  );
}

function FixedImage({ url }) {
  const [dark] = useAtom(darkModeAtom);
  return (
    <FixedContainer isDark={dark}>
      <Img src={url} />
    </FixedContainer>
  );
}
const FixedContainer = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 0;
  overflow: hidden;
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 0;
  overflow: hidden;
  visibility: ${(props) => (props.fixed ? "hidden" : "visible")};
  padding: 5px 0px;
  margin: 0 auto;
  width: 0;
  
};
`;
const Img = styled.img`
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  filter: ${(props) =>
    props.src === props.highlight
      ? `grayscale(10%) invert(30%) saturate(200%)`
      : "none"};
`;

export default React.memo(Image);
export { FixedImage };
