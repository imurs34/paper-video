import _ from "lodash";
import Head from "next/head";
import React from "react";
import shortid from "shortid";
import styled, { css } from "styled-components";
import { createBreakpoint } from "react-use";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import Content from "./Content";
import Controller from "./Controller";
import Video from "./Video";
import {
  darkModeAtom,
  durationAtom,
  frameHeightAtom,
  mobileModeAtom,
  withVideoAtom,
} from "../atom";
import useWindowOrientation from "use-window-orientation";
import Subtitles from "./Subtitles";

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 350 });

const ControllerLine = ({ content }) => {
  const [duration] = useAtom(durationAtom);

  const startTimes = _.map(content, "end_time");
  if (!duration) {
    return (
      <Loading key={shortid.generate()}>
        <p>loading...</p>
      </Loading>
    );
  }

  return (
    <Line>
      {startTimes.map((time, index) => {
        return (
          <div key={index}>
            <LinePoint key={shortid.generate()} value={(time / duration) * 100}>
              <Circle />
            </LinePoint>
          </div>
        );
      })}
    </Line>
  );
};
const Loading = styled.div`
  > p {
    color: white;
  }

  z-index: 200;
  background-color: black;
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  display: ${(props) => (props.isLoading ? "flex" : "none")};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 2px;
  height: 10px;
  position: absolute;
  left: 100%;
  z-index: 999;
  /* border-radius: 45%; */
  background-color: #25252599;
`;
const LinePoint = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 5px;
  width: ${(props) => props.value}%;
  height: 10px;
`;
const Line = styled.div`
  margin-top: 5px;
  pointer-events: none;
  display: flex;
  width: 100%;
  height: 20px;
  position: absolute;
  z-index: 200;
  overflow: hidden;
  top: 0;
  > div:last-child {
    visibility: hidden;
  }
`;

const modeSelector = ({ mobile, dark }) => {
  if (mobile === false && dark === false) {
    return "original";
  }

  if (mobile === false && dark === true) {
    return "original_dark";
  }

  if (mobile === true && dark === false) {
    return "restructure";
  }

  if (mobile === true && dark === true) {
    return "restructure_dark";
  }
};
const imageSelector = ({ location, dark }) => {
  if ((location === "top") & (dark === false)) {
    return "top_img";
  }
  if ((location === "top") & (dark === true)) {
    return "top_img_dark";
  }

  if ((location === "bottom") & (dark === false)) {
    return "bottom_img";
  }
  if ((location === "bottom") & (dark === true)) {
    return "bottom_img_dark";
  }
};

const Base = ({ input, paragraphs, width, transcription }) => {
  useEffect(() => {
    let videoContainer = document.getElementById("videoContainer");
    if (videoContainer != null) {
      let videoContainer = document.getElementById("videoContainer");
      videoContainer.style.height = `${(videoContainer.clientWidth / input.template.width) *
        input.template.height +
        60
        }px`;
    }
  }, [width]);
  const [dark] = useAtom(darkModeAtom);
  const [mobile] = useAtom(mobileModeAtom);
  const [height, setHeight] = useAtom(frameHeightAtom);
  const [content, setContent] = useState(input.content.original);
  useEffect(() => {
    reset();
    setContent(input.content[modeSelector({ mobile, dark })]);
  }, [dark, mobile]);
  useEffect(() => {
    setHeight(input.template.height);
  }, []);
  const [duration] = useAtom(durationAtom);

  const [key, setKey] = useState(shortid.generate());
  const reset = () => {
    setKey(() => shortid.generate());
    videoComponentRef.current.initial();
  };

  const [withVideo] = useAtom(withVideoAtom);
  const videoComponentRef = useRef();
  const togglePlay = () => {
    videoComponentRef.current.toggle();
  };

  const jump = (percentPoint) => {
    videoComponentRef.current.jump(percentPoint);
  };
  const videoSource = input.sourcePath + input.video.source;

  const frameInfo = {
    sourcePath: input.sourcePath,
    topBg: input.template[imageSelector({ location: "top", dark })],
    bottomBg: input.template[imageSelector({ location: "bottom", dark })],
    topHeight: (input.template.top_padding / input.template.height) * 100,
    bottomHeight: (input.template.bottom_padding / input.template.height) * 100,
  };

  const { portrait } = useWindowOrientation();
  const breakpoint = useBreakpoint();
  useEffect(() => {
    reset();
  }, [portrait]);

  const currentParagraphs = (val) => {
    paragraphs(val);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {input.template.fontUrl.map((url, index) => {
          return <link href={url} key={index} rel="stylesheet" />;
        })}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div className={`flex flex-col justify-center items-center h-screen mx-8`}>
        <Container
          className={`node w-full h-[50%] items-center`}
          id="videoContainer"
          isDark={dark}
        >
          <Loading isLoading={!duration}>
            <p>loading..</p>
          </Loading>
          <InnerContainer
            isFull={!withVideo}
            disableControl={_.get(input, "template.disableControl")}
          >
            <InnerContent key={key}>
              {content.map((data, index) => {
                return (
                  <Content
                    key={index}
                    data={data}
                    index={index}
                    width={width}
                    sourcePath={input.sourcePath}
                    frameInfo={frameInfo}
                    isFull={!withVideo}
                    template={input.template}
                    disableControl={_.get(input, "template.disableControl")}
                    currentParagraphs={currentParagraphs}
                  />
                );
              })}
            </InnerContent>
            <Video
              className="ml-0"
              src={videoSource}
              content={content}
              ref={videoComponentRef}
              videoLocation={input.video.control}
            />
          </InnerContainer>
          <ControllerContainer>
            <Controller
              reset={reset}
              togglePlay={togglePlay}
              jump={jump}
              disableControl={_.get(input, "template.disableControl")}
            />
            <ControllerLine content={content} />
          </ControllerContainer>
        </Container>
        <div className="h-[20%] w-full" >
          <Subtitles subtitles={transcription} ></Subtitles>
        </div>
      </div>
    </>
  );
};

const Block = styled.div`
  color: white;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ControllerContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: black;
`;
const InnerContainer = styled.div.attrs({ className: "frame" })`
  flex: 1;
  display: flex;
  align-items: stretch;
  position: relative;
  background-color: transparent;
  ${(props) =>
    props.isFull &&
    css`
      padding-right: 0;
    `};
  ${(props) =>
    props.disableControl &&
    css`
      padding-left: 100px;
      padding-right: 100px;
    `};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh;
  // max-height: 100vh;
  // width: 100vw;
  // max-width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
  align-items: stretch;
  position: relative;
  background-color: ${(props) => (props.isDark ? `rgb(47, 48, 48)` : "white")};
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

const InnerContent = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  position: relative;
`;
export default Base;
