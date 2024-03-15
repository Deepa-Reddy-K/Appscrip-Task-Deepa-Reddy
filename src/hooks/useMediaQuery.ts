import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/utils/responsive";

type Breakpoint = keyof typeof BREAKPOINTS;
type Direction = "up" | "down";

const useMediaQuery = (breakpoint: Breakpoint, direction: Direction) => {
  const query: string = BREAKPOINTS[breakpoint][direction];
  const [matches, setMatches] = useState<boolean>(() => {
    // Checking for server-side rendering for Next.js
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);

    // Ensuring compatibility of newer browsers vs. matchMedia
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", handleChange);
    } else {
      mediaQueryList.addListener(handleChange);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
