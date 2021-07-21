import { useState, useEffect } from "react";
import { introTimerMilliseconds } from "../constants";

export const useShowSlideshow: () => [boolean, React.Dispatch<React.SetStateAction<boolean>>] = () => {
    const [showSlideshow, setShowSlideshow] = useState(true)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!window.localStorage.getItem('isFirstVisit')) {
                window.localStorage.setItem('isFirstVisit', 'true')
            } else {
                setShowSlideshow(false)
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
