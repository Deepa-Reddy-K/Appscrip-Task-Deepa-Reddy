import { CSSProperties } from "react";

export const vh = (value = 100): CSSProperties["height"] =>
  `calc(var(--vh, 1vh) * ${value})`;

export const vw = (value = 100): CSSProperties["width"] =>
  `calc(var(--vw, 1vw) * ${value})`;

export const initViewportSize = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
  document.documentElement.style.setProperty(
    "--vw",
    `${window.innerWidth * 0.01}px`
  );
};

export const BREAKPOINTS = {
  xs: {
    up: "(min-width: 0px)",
    down: "(max-width: 599px)",
  },
  sm: {
    up: "(min-width: 600px)",
    down: "(max-width: 899px)",
  },
  md: {
    up: "(min-width: 900px)",
    down: "(max-width: 1199px)",
  },
  lg: {
    up: "(min-width: 1200px)",
    down: "(max-width: 1599px)",
  },
  xl: {
    up: "(min-width: 1600px)",
    down: "(max-width: 1919px)",
  },
};
