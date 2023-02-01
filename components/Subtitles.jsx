import { useAtom } from "jotai";
import React, { useEffect, useState, useRef } from "react";
import {
    currentTimeAtom,
    darkModeAtom,
    mobileModeAtom,
    withFrameAtom,
} from "../atom";

function Subtitles({ subtitles }) {
    const [currentTime] = useAtom(currentTimeAtom);
    const [focusedId, setFocusedId] = useState(null);
    const refs = useRef({});
    const findSub = (time) => {
        let found = subtitles.find(element => element.start == time)
        if (found)
            return found
        return null
    }

    useEffect(() => {
        const sub = findSub(currentTime);
        if (sub)
            setFocusedId(sub.index)

    }, [currentTime])

    useEffect(() => {
        if (focusedId)
            refs.current[focusedId].focus();
    }, [focusedId])


    return (
        <div className="flex flex-col w-full h-full z-40 overflow-y-auto">
            {
                subtitles?.map((sub, index) => {
                    return (
                        <div className={`flex flex-row my-3 p-2 ${sub.index === focusedId ? 'bg-indigo-600' : ''}`} key={sub.index}
                            ref={ref => {
                                refs.current[sub.index] = ref;
                            }}
                            tabIndex={focusedId === sub.index ? 0 : -1}>
                            <div className="w-[10%]">
                                <button className="p-1 text-white text-sm bg-gray-500 rounded-full">{sub.start}</button>
                            </div>
                            <h1 className="w-[90%] text-white text-xl">{sub.text}</h1>
                        </div>
                    )
                })
            }
        </div >
    );
}



export default Subtitles;
