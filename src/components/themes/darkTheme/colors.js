import { baseColors, lightenDarkenColor, hexToRgb } from '../baseColors';

export const colorsTheme = {
  black: baseColors.black,
  white: baseColors.white,
  blueDark: baseColors.blueDark,
  primary: baseColors.purple,
  primaryDark: lightenDarkenColor(baseColors.purple, -16),
  borderColor: lightenDarkenColor(baseColors.black, 40),
  headerFontColor: baseColors.white,
  bodyFontColor: `rgba(${hexToRgb(baseColors.white)}, 0.85)`,
  bodyBackgroundColor: baseColors.black,
  // The disabled function takes an argument of color and makes it 50% opaque
  disabledFn: function (color) {
    return `rgba(${hexToRgb(color)}, 0.5)`;
  },
};
