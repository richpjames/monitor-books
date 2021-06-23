import { useLayoutEffect } from "react";

export const setBackground: (path: string) => void = (backgroundColour) => {
    if (typeof window !== "undefined") {
        document.documentElement.style.setProperty('--current-background-colour', backgroundColour);
    }
}

type BackgroundColour = 'basket-background-colour' | 'about-background-colour' | 'product-background-colour' | 'video-background-colour'

export const useSetBackground = (backgroundColour: BackgroundColour) => {
    useLayoutEffect(() => {
        setBackground(`var(--${backgroundColour})`)
    }, [])
}