import _ from "lodash";
import styled, { css } from "styled-components";
import { createBreakpoint } from "react-use";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import useWindowHeight from "../hooks/windowHeight";
import { MOBILE_VALUE } from "../store";
import { LINE_HEIGHT } from "../store";
import {
  darkModeAtom,
  frameHeightAtom,
  withFrameAtom,
  highlightAtom,
  paragraphAtom,
} from "../atom";

import pdfmap2 from "../pdfmap2.json";

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 350 });

function Text({ obj, isFull, currentParagraphs, width }) {
  const [withFrame] = useAtom(withFrameAtom);
  const [fixed] = useState();
  const breakpoint = useBreakpoint();
  const height = useWindowHeight();
  const ref = useRef();
  const [highlight, setHighlightAtom] = useAtom(highlightAtom);
  const [paragraph, setParagraphAtom] = useAtom(paragraphAtom);
  const onClick = (e) => {
    setHighlightAtom(e.target.id);
    pdfmap2.map((item) => {
      if (Number(item.slide_id) == obj.slide_id) {
        setParagraphAtom(item);
      }
    });
  };
  const [dark] = useAtom(darkModeAtom);
  const [frameHeight] = useAtom(frameHeightAtom);

  const [goal, setGoal] = useState({
    fontSize: 1,
    lineHeight: 150,
    fontWeight: 400,
  });
  useEffect(() => {
    let size = obj.avail_font_size * (width > 30 ? width / 4 : width / 4.5);
    let fontWeight = obj.font_weight || 400;
    if (frameHeight && height && ["S", "L"].includes(breakpoint)) {
      size *= ((height - 80) / frameHeight) * MOBILE_VALUE;
      setGoal({ fontSize: size, lineHeight: LINE_HEIGHT, fontWeight });
    } else {
      setGoal({ fontSize: size, lineHeight: LINE_HEIGHT, fontWeight });
    }
  }, [frameHeight, height, isFull, withFrame]);
  // console.log(obj.text_content);

  return (
    <Container fixed={fixed} isDark={dark}>
      <P
        goal={goal}
        onClick={onClick}
        bg={obj.color_bg}
        color={obj.color_font}
        typeFace={obj.typeface}
        ref={ref}
        highlight={highlight}
        id={obj.id}
        width={width}
      >
        {obj.text_content}
      </P>
    </Container>
  );
}

const P = styled.p`
  font-size: ${(props) => props.goal.fontSize}px;
  font-weight: ${(props) => props.goal.fontWeight};
  width: fit-content;
  line-height: ${(props) => props.goal.lineHeight}%;
  letter-spacing: 0;
  overflow-wrap: wrap;
  color: ${(props) => (props.color ? `rgb${props.color}` : "black")};
  background-color: ${(props) =>
    props.highlight === props.id ? `rgb(72, 0, 72, 0.5)` : `rgb${props.bg}`};
  font-family: ${(props) => props.typeFace};
`;

const Container = styled.div`
  flex: 1;
  flex-basis: 0;
  cursor: pointer;
  min-height: 20px;
  box-sizing: border-box;
  visibility: ${(props) => (props.fixed ? "hidden" : "visible")};
`;

export default Text;
