import styled from "styled-components";
import _, { set } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
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
        setFixed(true);
        const { top, right, bottom, left, height, x, y } = e.currentTarget.firstChild.getBoundingClientRect();
        const width = window.getComputedStyle(e.currentTarget.firstChild)["width"];
        addFixedData({
            label: "VIDEO",
            src: url,
            startTime: startTime,
            style: _.pick(window.getComputedStyle(e.currentTarget.firstChild), ["font-size", "padding", "color", "background-color"]),
            top,
            right,
            bottom,
            left,
            width,
            height,
            x,
            y,
        });
    };
    return (
        <Container fixed={fixed} onClick={onClick} isDark={dark}>
            <Video src={url} draggable="false" ref={ref} playsInline muted={true} playsInline />
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
