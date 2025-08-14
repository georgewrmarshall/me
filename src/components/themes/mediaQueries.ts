interface ScreenSizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const screenSize: ScreenSizes = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 996,
  xl: 1280,
};

interface MediaQueries {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export const minWidth: MediaQueries = {
  xs: `(min-width: ${screenSize.xs}px)`,
  sm: `(min-width: ${screenSize.sm}px)`,
  md: `(min-width: ${screenSize.md}px)`,
  lg: `(min-width: ${screenSize.lg}px)`,
};

export const maxWidth: MediaQueries = {
  xs: `(max-width: ${screenSize.xs - 1}px)`,
  sm: `(max-width: ${screenSize.sm - 1}px)`,
  md: `(max-width: ${screenSize.md - 1}px)`,
  lg: `(max-width: ${screenSize.lg - 1}px)`,
};

// styled-system breakpoint mapping
// theme.js
interface BreakpointsArray extends Array<string> {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export const breakpoints = [
  `${screenSize.xs}px`,
  `${screenSize.sm}px`,
  `${screenSize.md}px`,
  `${screenSize.lg}px`,
  `${screenSize.xl}px`,
] as BreakpointsArray;

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
