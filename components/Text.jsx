import _ from "lodash";
import toStyle from "css-to-style";
import useFitText from "use-fit-text";
import styled, { css } from "styled-components";
import { Rnd } from "react-rnd";
import { createBreakpoint } from "react-use";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import useWindowHeight from "../hooks/windowHeight";
import { INSTRUCTURE_VALUE, MOBILE_VALUE, TEMPLATE_VALUE } from "../store";
import { LINE_HEIGHT } from "../store";
import { darkModeAtom, frameHeightAtom, lockAtom, withFrameAtom } from "../atom";

import pdfmap2 from '../pdfmap2.json';

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 350 });

function Text({ obj, addFixedData, isFull, currentParagraphs }) {
    const [lock] = useAtom(lockAtom);
    const [withFrame] = useAtom(withFrameAtom);
    const [fixed, setFixed] = useState();
    const breakpoint = useBreakpoint();
    const height = useWindowHeight();
    const ref = useRef();

    const onClick = (e) => {
        if (lock) {
            return;
        }
        setFixed(true);
        const { top, right, bottom, left, width, height, x, y } = e.currentTarget.getBoundingClientRect();
        
        if(obj.text_content.length > 0) {
            pdfmap2.map((item)=>{
                if(Number(item.slide_id) == obj.slide_id){
                    currentParagraphs({sections: item.sections, paragraphs: item.paragraphs, scores: item.scores});
                }
            })
        }

        addFixedData({
            label: "P",
            text: obj.text_content,
            src: e.target.src,
            style: {
                ..._.pick(window.getComputedStyle(e.currentTarget), ["font-size", "padding", "color", "background-color", "letter-spacing", "font-weight", "font-family"]),
                lineHeight: goal.lineHeight,
            },
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
    // const { fontSize, ref } = useFitText({ maxFontSize: parseInt(goal), resolution: 5 });
    const [dark] = useAtom(darkModeAtom);
    const [frameHeight] = useAtom(frameHeightAtom);

    const [goal, setGoal] = useState({ fontSize: 15, lineHeight: 150, fontWeight: 400 });
    useEffect(() => {
        let size = obj.avail_font_size * (isFull ? INSTRUCTURE_VALUE : 1) * (withFrame ? TEMPLATE_VALUE : 1) * 16;
        let fontWeight = obj.font_weight || 400;
        if (frameHeight && height && ["S", "L"].includes(breakpoint)) {
            size *= ((height - 80) / frameHeight) * MOBILE_VALUE;
            setGoal({ fontSize: size, lineHeight: LINE_HEIGHT, fontWeight });
        } else {
            setGoal({ fontSize: size, lineHeight: LINE_HEIGHT, fontWeight });
        }
    }, [frameHeight, height, isFull, withFrame]);


    return (
        <Container fixed={fixed} isDark={dark}>
            {/* <Font ref={ref} style={{ fontSize }} color={obj.color_font} bg={obj.color_bg} onClick={onClick}>
                {obj.text_content}
            </Font> */}
            <P goal={goal} onClick={onClick} bg={obj.color_bg} color={obj.color_font} typeFace={obj.typeface} ref={ref}>
                {obj.text_content}
            </P>
        </Container>
    );
}

const P = styled.p`
    font-size: ${(props) => props.goal.fontSize}px;
    font-weight: ${(props) => props.goal.fontWeight};
    width: 100%;
    line-height: ${(props) => props.goal.lineHeight}%;
    letter-spacing: 0;
    color: ${(props) => (props.color ? `rgb${props.color}` : "black")};
    background-color: ${(props) => (props.bg ? `rgb${props.bg}` : "black")};
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
// background-color: ${(props) => (props.isDark ? "rgb(47, 48, 49)" : "white")};

export default Text;
