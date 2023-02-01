import { useEffect } from "react";

const { useState } = require("react");

function useWindowHeight() {
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return height/8;
}

export default useWindowHeight;
