export const setBackground: (path: string) => void = (backgroundColour) => {
    if (typeof window !== "undefined") {
        document.documentElement.style.setProperty('--current-background-colour', backgroundColour);
    }
}