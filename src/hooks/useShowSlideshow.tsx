import { useState, useLayoutEffect } from "react";
import { introTimerMilliseconds } from "../constants";

export const useShowSlideshow: () => [boolean, React.Dispatch<React.SetStateAction<boolean>>] = () => {
    const [showSlideshow, setShowSlideshow] = useState(true)

    useLayoutEffect(() => {
        setTimeout(() => {
            setShowSlideshow(() => false);
        }, introTimerMilliseconds);
    }, [])

    return [showSlideshow, setShowSlideshow]
}
