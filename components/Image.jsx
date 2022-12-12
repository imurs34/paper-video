import _ from "lodash";
import styled from "styled-components";
import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { useAtom } from "jotai";

import { darkModeAtom, lockAtom } from "../atom";

function Image({ url, addFixedData }) {
    const [fixed, setFixed] = useState();
    const [lock] = useAtom(lockAtom);
    const [dark] = useAtom(darkModeAtom);
    const onClick = (e) => {
        if (lock) {
            return;
        }
        setFixed(true);
        const { top, right, bottom, left, width, height, x, y } = e.currentTarget.firstChild.getBoundingClientRect();
        addFixedData({
            label: e.target.tagName,
            text: e.target.InnerHTML,
            src: e.target.src,
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
            <Img src={url} draggable="false" />
        </Container>
    );
}

function FixedImage({ url }) {
    const [dark] = useAtom(darkModeAtom);
    return (
        <FixedContainer isDark={dark}>
            <Img src={url} draggable="false" />
        </FixedContainer>
    );
}
const FixedContainer = styled.div`
    display: flex;
    flex: 1;
    flex-basis: 0;
    overflow: hidden;
`;
// background-color: ${(props) => (props.isDark ? "rgb(47, 48, 49)" : "white")};
const Container = styled.div`
    display: flex;
    flex: 1;
    flex-basis: 0;
    overflow: hidden;
    visibility: ${(props) => (props.fixed ? "hidden" : "visible")};
`;
// background-color: ${(props) => (props.isDark ? "rgb(47, 48, 49)" : "white")};
const Img = styled.img`
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
`;

export default React.memo(Image);

export { FixedImage };
