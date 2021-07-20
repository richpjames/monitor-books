import { useState, useLayoutEffect } from "react";
import { introTimerMilliseconds } from "../constants";

export const useShowSlideshow: () => [boolean, React.Dispatch<React.SetStateAction<boolean>>] = () => {
    const [showSlideshow, setShowSlideshow] = useState(false)

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            if (!window.localStorage.getItem('isFirstVisit')) {
                console.log('no localstorage')
                setShowSlideshow(true)
                window.localStorage.setItem('isFirstVisit', 'true')
            }
            const slideshowTimer = setTimeout(() => {
                console.log('timer has been set')
                setShowSlideshow(() => false);
            }, introTimerMilliseconds)
            return () => clearTimeout(slideshowTimer)
        }
    }, [])

    return [showSlideshow, setShowSlideshow]
}
