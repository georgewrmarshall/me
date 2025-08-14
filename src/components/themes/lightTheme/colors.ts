import { baseColors, lightenDarkenColor, hexToRgb } from '../baseColors';

export const colorsTheme = {
  black: baseColors.black,
  white: baseColors.white,
  blueDark: baseColors.blueDark,
  primary: baseColors.purple,
  primaryDark: lightenDarkenColor(baseColors.purple, -16),
  borderColor: lightenDarkenColor(baseColors.black, 200),
  headerFontColor: baseColors.blueDark,
  bodyFontColor: lightenDarkenColor(baseColors.blueDark, -16),
  bodyBackgroundColor: baseColors.white,
  muted: `rgba(${hexToRgb(baseColors.blueDark)}, 0.5)`,
  // disabled function takes the primary color and makes it 50% opaque
  disabledFn: function (color: string): string {
    return `rgba(${hexToRgb(color)}, 0.5)`;
  },
};
