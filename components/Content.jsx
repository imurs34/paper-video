import shortid from "shortid";
import toStyle from "css-to-style";
import useFitText from "use-fit-text";
import React, { useCallback, useEffect, useReducer, useRef } from "react";
import styled, { css } from "styled-components";
import { Rnd } from "react-rnd";
import { useAtom } from "jotai";
import { useState } from "react";

import InnerVideo from "./InnerVideo";
import RndVideo from "./RndVideo";
import Text from "./Text";
import Image, { FixedImage } from "./Image";
import { activityAtom, lockAtom, withFrameAtom } from "../atom";
import useOnClickOutside from "../hooks/onClickOutside";

import pdfmap2 from '../pdfmap2.json';

const ChunkedData = React.memo(({ data, addFixedData, index, sourcePath, isFull }) => {
    const sortedData = _.orderBy(data, "order");
    return (
        <InnerColumn>
            {sortedData.map((obj) => {
                if (obj.label === "text_box") {
                    return <Text obj={obj} addFixedData={addFixedData} key={shortid.generate()} isFull={isFull} />;
                } else if (obj.label === "video") {
                    return (
                        <InnerVideo
                            url={`${sourcePath}${obj.path}`}
                            addFixedData={addFixedData}
                            startTime={obj.start_time}
                            endTime={obj.end_time}
                            index={index}
                            key={shortid.generate()}
                            
                        />
                    );
                } else {
                    return <Image url={`${sourcePath}${obj.path}`} addFixedData={addFixedData} key={shortid.generate()} />;
                }
            })}
        </InnerColumn>
    );
});
const PositionedData = React.memo(({ data, addFixedData, index, sourcePath, isFull, template, paragraphs }) => {
    const [x, y, width, height] = data.box_info_original;
    const startXRatio = (x / template.width) * 100;
    const startYRatio = (y / template.height) * 100;
    const widthRatio = (width / template.width) * 100;
    const heightRatio = (height / template.height) * 100;

    const currentParagraphs = val => {
        paragraphs(val);
    };

    if (data.label === "text_box") {
        return (
            <PositionedDataContainer x={startXRatio} y={startYRatio} width={widthRatio} height={heightRatio}>
                <Text obj={data} addFixedData={addFixedData} key={shortid.generate()} isFull={isFull} currentParagraphs={currentParagraphs} />
            </PositionedDataContainer>
        );
    }
    if (data.label === "video") {
        return (
            <PositionedDataContainer x={startXRatio} y={startYRatio} width={widthRatio} height={heightRatio}>
                <InnerVideo url={`${sourcePath}${obj.path}`} addFixedData={addFixedData} startTime={obj.start_time} endTime={obj.end_time} index={index} key={shortid.generate()} index={index} />
            </PositionedDataContainer>
        );
    }
    if (data.label === "title") {
        return (
            <PositionedDataContainer x={startXRatio} y={startYRatio} width={widthRatio} height={heightRatio}>
                <FixedImage url={`${sourcePath}${data.path}`} key={shortid.generate()} />
            </PositionedDataContainer>
        );
    }

    return (
        <PositionedDataContainer x={startXRatio} y={startYRatio} width={widthRatio} height={heightRatio}>
            <Image url={`${sourcePath}${data.path}`} addFixedData={addFixedData} key={shortid.generate()} />
        </PositionedDataContainer>
    );
});
const PositionedDataContainer = styled.div`
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
    top: ${(props) => props.y}%;
    left: ${(props) => props.x}%;
    position: absolute;
    display: flex;
`;

const checkOnlyData = (prev, next) => {
    return prev.data === next.data && prev.isFull === next.isFull;
};

const MemoedChunkedData = React.memo(ChunkedData, checkOnlyData);
const MemoedPositionedData = React.memo(PositionedData, checkOnlyData);

const FixedElement = ({ data, clicked, keyValue, isactive }) => {
    const [state, setState] = useState({ x: data.x, y: data.y, width: data.width, height: data.height });
    const [visiable, setVisiable] = useState(false);
    const { fontSize, ref, onStart, onFinish } = useFitText({
        maxFontSize: 1000,
        resolution: 1,
        minFontSize: 1,
        onStart: () => {
            setVisiable(false);
        },
        onFinish: () => {
            setVisiable(true);
        },
    });
    const [lock] = useAtom(lockAtom);
    const run = () => {
        clicked(keyValue);
    };
    const clear = () => {
        clicked("");
    };
    const nodeRef = useRef(null)
    const [onActive, setOnActive] = useState(true)



    if (data.label === "IMG") {
        useOnClickOutside(nodeRef, () => setOnActive(false));
        return (
            <CustomRnd
                colored={onActive}
                enableResizing={!lock}
                disableDragging={lock}
                onDragStart={run}
                onResizeStart={run}
                bounds={".frame"}
                isactive={isactive}
                size={{ width: state.width, height: state.height, background: "red" }}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
                    setOnActive(true)
                    setState({ ...state, x: d.x, y: d.y });
                }}
                style={data.style}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setOnActive(true)
                    setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
            >
                <RndImg src={data.src} draggable="false" ref={nodeRef}/>
                {isactive && <Clear onClick={clear}>confirm</Clear>}
            </CustomRnd>
        );
    }
    if (data.label === "VIDEO") {
        useOnClickOutside(nodeRef, () => setOnActive(false));
        return (
            <CustomRnd
                enableResizing={!lock}
                disableDragging={lock}
                onDragStart={run}
                onResizeStart={run}
                bounds={".frame"}
                isactive={isactive}
                size={{ width: state.width, height: state.height, background: "red" }}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
                    setOnActive(true)
                    setState({ ...state, x: d.x, y: d.y });
                }}
                style={data.style}
                onResizeStop={(e, direction, ref, delta, position) => {

                    setOnActive(true)
                    setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
            >
                <RndVideo url={data.src} startTime={data.startTime} ref={nodeRef}/>
                {isactive && <Clear onClick={clear}>confirm</Clear>}
            </CustomRnd>
        );
    }
    if (data.label === "P") {
        useOnClickOutside(ref, () => setOnActive(false));
        return (
            <CustomRnd
                colored={onActive}
                enableResizing={!lock}
                disableDragging={lock}
                onDragStart={run}
                onResizeStart={run}
                bounds={".frame"}
                isactive={isactive}
                size={{ width: state.width, height: state.height, background: "red" }}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
                    setOnActive(true)
                    setState({ ...state, x: d.x, y: d.y });
                }}
                style={data.style}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setOnActive(true)
                    setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
            >
                <PCon ref={ref} style={{ fontSize }} lineHeight={data.style.lineHeight} font={data.style["font-family"]} weight={data.style["font-weight"]} visiable={visiable} >
                    {data.text}
                </PCon>
                {isactive && <Clear onClick={clear}>confirm</Clear>}
            </CustomRnd>
        );
    }
};
const Clear = styled.button`
    position: absolute;
    right: 0;
    top: -20px;
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

function Content({ data, index, sourcePath, frameInfo, isFull, template, disableControl, currentParagraphs }) {
    const chunkedData = _.groupBy(data.learning_material, "in_column");
    const [activity] = useAtom(activityAtom);
    const [withFrame] = useAtom(withFrameAtom);
    const [isactive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(activity.slide === index);
    }, [activity.slide]);
    const [state] = useState({ chunkedData, column: data.column });
    const [fixedData, setFixedData] = useState({});
    const addFixedData = useCallback((data) => {
        const newKey = shortid.generate();
        setFixedData((prevState) => {
            setNodeEl(newKey);
            return { ...prevState, [newKey]: { ...data } };
        });
    });

    const titleObj = _.find(data.learning_material, (o) => o.label === "title");
    const [nodeEl, setNodeEl] = useState();
    const clicked = (key) => {
        setNodeEl(key);
        pdfmap2.map((item)=>{
            if(Number(item.slide_id) == data.slide_id){
                currentParagraphs({sections: item.sections, paragraphs: item.paragraphs, scores: item.scores});
            }
        })
    };
    const paragraphs = val => {
        pdfmap2.map((item)=>{
            if(Number(item.slide_id) == data.slide_id){
                currentParagraphs({sections: item.sections, paragraphs: item.paragraphs, scores: item.scores});
            }
        })
    };

    const frameRatio = template.width / template.height;
    if (data.column === 0) {
        return (
            <Container isactive={isactive} bg={`${sourcePath}${data.bg_image}`} disableControl={disableControl}>
                <Inner>
                    {frameInfo.topBg && <Frame src={frameInfo.sourcePath + frameInfo.topBg} height={frameInfo.topHeight} isactive={withFrame} />}
                    {/* {titleObj && (
                        <TitleContainer>
                            <TitleImg src={`${sourcePath}${titleObj.path}`} />
                        </TitleContainer>
                    )} */}
                    <PositionedContainer>
                        <PositionedCanvas ratio={frameRatio}>
                            {_.chain(state.chunkedData)
                                .values()
                                .flatten()
                                .value()
                                .map((obj, index) => {
                                    return <MemoedPositionedData data={obj} key={index} paragraphs={paragraphs} template={template} addFixedData={addFixedData} index={index} sourcePath={sourcePath} isFull={isFull} />;
                                })}
                        </PositionedCanvas>
                    </PositionedContainer>
                    {/*<Frame src={frameInfo.sourcePath + frameInfo.bottomBg} height={frameInfo.bottomHeight} isactive={withFrame} />*/}
                </Inner>
                {Object.entries(fixedData).map((value) => (
                    <FixedElement data={value[1]} key={value[0]} clicked={clicked} isactive={nodeEl === value[0]} keyValue={value[0]} />
                ))}
            </Container>
        );
    }
    return (
        <Container isactive={isactive} bg={`${sourcePath}${data.bg_image}`}>
            <Inner>
                {frameInfo.topBG && <Frame src={frameInfo.sourcePath + frameInfo.topBg} height={frameInfo.topHeight} isactive={withFrame} />}
                {titleObj && (
                    <TitleContainer>
                        <TitleImg src={`${sourcePath}${titleObj.path}`} />
                    </TitleContainer>
                )}
                <ColumnContainer>
                    {_.times(state.column, (i) => {
                        return <MemoedChunkedData data={state.chunkedData[i + 1]} key={i} addFixedData={addFixedData} index={index} sourcePath={sourcePath} isFull={isFull} />;
                    })}
                </ColumnContainer>
                {frameInfo.bottomBg && <Frame src={frameInfo.sourcePath + frameInfo.bottomBg} height={frameInfo.bottomHeight} isactive={withFrame} />}
            </Inner>
            {Object.entries(fixedData).map((value) => (
                <FixedElement data={value[1]} key={value[0]} clicked={clicked} isactive={nodeEl === value[0]} keyValue={value[0]} />
            ))}
        </Container>
    );
}
const Frame = styled.img`
    flex-basis: ${(props) => props.height}%;
    object-fit: fill;
    display: ${(props) => (props.isactive ? "block" : "none")};
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    max-height: 85vh;
`;

const PositionedCanvas = styled.div`
    --current-height: calc(100vh - 50px);
    width: calc(var(--current-height) * ${(props) => props.ratio});
    height: 100%;
    margin: 0 auto;
    position: relative;
`;

const PositionedContainer = styled.div`
    display: flex;
    flex: 1;
`;
const ColumnContainer = styled.div`
    flex: 1;
    display: flex;
`;
const TitleImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left top;
`;
const TitleContainer = styled.div`
    height: 10%;
    width: 100%;
    padding: 0 20px 0 !important;
    @media only screen and (max-width: 900px) {
        height: 20px;
    }
`;
const PCon = styled.div`
    width: 100%;
    height: 100%;
    line-height: ${(props) => `${props.lineHeight}%`};
    font-weight: ${(props) => props.weight};
    letter-spacing: 0;
    white-space: pre-wrap;
    font-family: ${(props) => props.font};
    visibility: ${(props) => (props.visiable ? "visible" : "hidden")};
    box-sizing: border-box;
    padding: 0.5px;
`;
const CustomRnd = styled(Rnd)`
    box-sizing: border-box;
    ${(props) =>
        props.colored &&
        css`
            z-index: 10;
            outline: 1px solid #a9ceeb;
            box-shadow: 0px 1px 2px 2px #a9ceeb;
        `};
`;
const RndImg = styled.img`
    width: inherit;
    height: inherit;
`;
const InnerColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Container = styled.div`
    padding-top: 16px;
    display: ${(props) => (props.isactive ? "flex" : "none")};
    background-image: ${(props) => (props.bg ? (props.bg.includes('rgb') ? "none" : `url(${props.bg})`) : "none")};
    background-color: ${(props) => (props.bg.includes('rgb') ? `r${props.bg.split('r')[1]}` : "transparent")};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex: 1;
    align-items: stretch;
    ${(props) =>
        props.disableControl &&
        css`
            outline: 1px solid gray;
        `};

`;

export default React.memo(Content);
