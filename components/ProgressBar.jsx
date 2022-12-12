import styled from "styled-components";
import { useAtom } from "jotai";
import { useRef } from "react";

import { jumpAtom, percentAtom } from "../atom";

function Control({ jump }) {
    const [percent] = useAtom(percentAtom);
    const ref = useRef();
    const jumpToPlay = (e) => {
        const percentPoint = e.nativeEvent.offsetX / ref.current.offsetWidth;
        jump(percentPoint);
    };
    return (
        <ProgressBarLine onClick={jumpToPlay} ref={ref}>
            <ProgressBarFilled percent={percent}>{/* <Circle /> */}</ProgressBarFilled>
        </ProgressBarLine>
    );
}

const ProgressBarLine = styled.div`
    display: flex;
    width: 100%;
    height: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    background-color: #adadad;
    cursor: pointer;
`;
const ProgressBarFilled = styled.div`
    color: white;
    flex-basis: ${(props) => props.percent}%;
    background-color: red;
    z-index: 150;
    position: relative;
`;
const Circle = styled.div`
    width: 15px;
    height: 15px;
    position: absolute;
    left: calc(100% - 5px);
    top: -2px;
    background-color: red;
    border-radius: 45%;
`;

export default Control;
