export const screenSize = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 996,
  xl: 1280,
};

export const minWidth = {
  xs: `(min-width: ${screenSize.xs}px)`,
  sm: `(min-width: ${screenSize.sm}px)`,
  md: `(min-width: ${screenSize.md}px)`,
  lg: `(min-width: ${screenSize.lg}px)`,
};

export const maxWidth = {
  xs: `(max-width: ${screenSize.xs - 1}px)`,
  sm: `(max-width: ${screenSize.sm - 1}px)`,
  md: `(max-width: ${screenSize.md - 1}px)`,
  lg: `(max-width: ${screenSize.lg - 1}px)`,
};

// styled-system breakpoint mapping
// theme.js
export const breakpoints = [
  `${screenSize.xs}px`,
  `${screenSize.sm}px`,
  `${screenSize.md}px`,
  `${screenSize.lg}px`,
  `${screenSize.xl}px`,
];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
