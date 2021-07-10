
import { mobileBreakpoint } from "../constants";
import { useMediaQuery } from "./useMediaQuery";

export const useIsMobile = () => useMediaQuery(`(max-width:${mobileBreakpoint})`)


