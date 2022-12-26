import styled from "styled-components";
import _, { set } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";

import { activityAtom, playingAtom } from "../atom";

function RndVideo({ url, startTime, endTime, index }) {
  console.log({ url });
  const [onPlay, setOnPlay] = useState(false);
  const [action] = useAtom(activityAtom);
  const [playing] = useAtom(playingAtom);
  const ref = useRef(null);

  useEffect(() => {
    if (action.time > startTime && playing) {
      setOnPlay(true);
    }
  }, [action.time]);
  useEffect(() => {
    if (!index == action.slide) {
      setOnPlay(false);
      return;
    }
    if (action.time < startTime) {
      setOnPlay(false);
      ref.current.currentTime = 0;
      return;
    }
    if (!playing) {
      setOnPlay(false);
    }
    if (action.action === "jump") {
      ref.current.currentTime = action.time - startTime;
    }
    if (playing) {
      setOnPlay(true);
      return;
    }
  }, [action.action, playing, index]);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (onPlay) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [onPlay]);
  return (
    <Video src={url} draggable="false" ref={ref} playsInline muted={true} />
  );
}

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: fill;
  display: block;
`;

export default React.memo(RndVideo);
