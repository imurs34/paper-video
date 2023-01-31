import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import {
    currentTimeAtom,
    darkModeAtom,
    mobileModeAtom,
    withFrameAtom,
} from "../atom";

function Subtitles({ subtitles }) {
    const [subtitle, setSubtitle] = useState("");
    const [currentTime] = useAtom(currentTimeAtom);

    const findSub = (time) => {
        let found = subtitles.find(element => element.start == time)
        if (found)
            return found.text
        return null
    }

    useEffect(() => {
        const sub = findSub(currentTime);
        if (sub)
            setSubtitle(sub)
    }, [currentTime])


    return (
        <div className="w-[90%] h-16 z-40 ">
            <h1 className="text-white text-4xl text-center z-50">{subtitle}  </h1>
        </div>
    );
}



export default Subtitles;
