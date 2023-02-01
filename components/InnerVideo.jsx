import styled from "styled-components";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";

import { activityAtom, playingAtom } from "../atom";
import { darkModeAtom, lockAtom } from "../atom";

function InnerVideo({ url, startTime, endTime, addFixedData, index }) {
  const [fixed, setFixed] = useState();
  const [onPlay, setOnPlay] = useState(false);
  const [action] = useAtom(activityAtom);
  const [playing] = useAtom(playingAtom);
  const [lock] = useAtom(lockAtom);
  const [dark] = useAtom(darkModeAtom);

  const ref = useRef(null);
  useEffect(() => {
    if (action.time > startTime && playing) {
      setOnPlay(true);
    }
  }, [action.time]);
  useEffect(() => {
    if (fixed) {
      return;
    }
    if (action.time < startTime) {
      setOnPlay(false);
      ref.current.currentTime = 0;
      return;
    }
    if (!index == action.slide) {
      setOnPlay(false);
      return;
    }
    if (!playing) {
      setOnPlay(false);
    }
    if (action.action === "jump") {
      ref.current.currentTime = action.time - startTime;
    }

    if (action.action === "flip") {
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
  const onClick = (e) => {
    if (lock) {
      return;
    }
  };
  return (
    <Container fixed={fixed} onClick={onClick} isDark={dark}>
      <Video
        src={url}
        draggable="false"
        ref={ref}
        playsInline
        muted={true}
        playsInline
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 0;
  overflow: hidden;
  visibility: ${(props) => (props.fixed ? "hidden" : "visible")};
  background-color: ${(props) => (props.isDark ? rgb(47, 48, 49) : "white")};
`;
const Video = styled.video`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
`;

export default React.memo(InnerVideo);
