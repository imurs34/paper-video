import _ from "lodash";
import styled from "styled-components";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { darkModeAtom, highlightAtom, paragraphAtom } from "../atom";
import pdfmap2 from "../pdfmap2.json";

function Image({ obj, url, width, widthRatio, heightRatio }) {
  const [fixed] = useState();
  const [dark] = useAtom(darkModeAtom);
  const [highlight, setHighlightAtom] = useAtom(highlightAtom);
  const [paragraph, setParagraphAtom] = useAtom(paragraphAtom);

  const onClick = (e) => {
    pdfmap2.map((item) => {
      if (Number(item.slide_id) == obj.slide_id) {
        setParagraphAtom(item);
      }
    });
    setHighlightAtom(e.target.id);
  };

  return (
    <Container fixed={fixed} onClick={onClick} isDark={dark}>
      {highlight == url ? (
        <ImgOverlayer
          src={url}
          id={url}
          width={width}
          widthRatio={widthRatio}
          heightRatio={heightRatio}
        />
      ) : (
        <Img src={url} id={url} />
      )}
    </Container>
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
  border:10px solid red
  width: 100rem;
  
};
`;
const Img = styled.img`
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
`;
const ImgOverlayer = styled.div`
  background: ${(
    props
  ) => `linear-gradient(rgb(72, 0, 72, 0.5), rgb(72, 0, 72, 0.5)),
  url(${props.src})
    no-repeat;`}
  width:${(props) =>
    `${props.widthRatio < 50 ? props.widthRatio + 5 : props.widthRatio}%`};
  height: ${(props) =>
    `${
      props.heightRatio < 50 ? props.heightRatio + 5 : props.heightRatio + 50
    }rem`};

//  height:10rem;  
  margin: 0 auto;
  background-size:contain;
`;
export default React.memo(Image);
export { FixedImage };
