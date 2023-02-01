import styled, { css } from "styled-components";
import { DarkMode } from "@styled-icons/material-sharp";
import { Layout } from "@styled-icons/feather";
import { Lock as LockIcon } from "@styled-icons/entypo";
import { Mobile } from "@styled-icons/boxicons-regular";
import { Pause, Play } from "@styled-icons/boxicons-regular";
import { Revision } from "@styled-icons/boxicons-regular";
import { useAtom } from "jotai";

import ProgressBar from "./ProgressBar";
import {
  currentTimeAtom,
  darkModeAtom,
  durationTimeAtom,
  lockAtom,
  mobileModeAtom,
  percentAtom,
  playingAtom,
  withFrameAtom,
  withVideoAtom,
} from "../atom";
import { useEffect } from "react";

function Controller({ reset, togglePlay, jump, disableControl }) {
  const [withFrame, setWithFrame] = useAtom(withFrameAtom);
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [mobileMode, setMobileMode] = useAtom(mobileModeAtom);
  const [currentTime] = useAtom(currentTimeAtom);
  const [durationTime] = useAtom(durationTimeAtom);

  const [lock, setLock] = useAtom(lockAtom);
  const [withVideo, setWithVideo] = useAtom(withVideoAtom);
  const [play, setPlay] = useAtom(playingAtom);
  useEffect(() => {
    if (disableControl) {
      setWithFrame(false);
      setWithVideo(false);
    }
  }, []);
  const toggleLock = () => {
    setLock(!lock);
  };
  const toggleFrame = () => {
    reset();
    setWithFrame(!withFrame);
  };

  const toggleDarkMode = () => {
    reset();
    setDarkMode(!darkMode);
  };

  const toggleMobileMode = () => {
    reset();
    setMobileMode(!mobileMode);
  };

  const toggleVideo = () => {
    reset();
    setWithVideo(!withVideo);
  };

  return (
    <Container>
      <ProgressBar jump={jump} />
      <Buttons>
        <div>
          <ButtonFull onClick={togglePlay}>
            {play ? <Pause /> : <Play />}
          </ButtonFull>
          <Time>
            <p>
              {currentTime}/{durationTime}
            </p>
          </Time>
        </div>
      </Buttons>
    </Container>
  );
}

const RightButtons = styled.div`
  ${(props) =>
    !props.deActivate &&
    css`
      display: none !important;
    `}
`;
const ToggleButton = styled.div`
  cursor: pointer;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  > p {
    font-size: 15px;
  }

  ${(props) =>
    props.isactive
      ? css`
          color: white;
          background-color: #5ca6d5;
          border-right: 8px solid gray;
        `
      : css`
          color: #7d7d7d;
          background-color: #e9eaeb;
          border-left: 8px solid gray;
        `};
`;

const Time = styled.div`
  display: flex;
  color: white;
  width: 100px;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 15px;
  }
  padding-top: 4px;
  margin-right: 10px;
`;
const Container = styled.div`
  * {
    font-size: 9px;
  }
  display: flex;
  flex-direction: column;
  height: 50px;
  padding-top: 5px;
  margin-bottom: 10px;
  padding-bottom: 15px;
`;
const Buttons = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  > div {
    display: flex;
  }
`;

const ButtonFull = styled.button`
  cursor: pointer;
  width: 35px;
  border: none;
  background-color: transparent;
  > svg {
    color: white;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 40px;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 5px;

  ${(props) =>
    props.isactive
      ? css`
          background-color: #5ca6d5;
          > svg {
            color: white;
          }
        `
      : css`
          background-color: #c1c1c1;
          > svg {
            color: #717171;
          }
        `};
`;

export default Controller;
