import { colors, lightenDarkenColor, hexToRgb } from '../colors';

export const colorsTheme = {
  black: colors.black,
  white: colors.white,
  blueDark: colors.blueDark,
  primary: colors.purple,
  primaryDark: lightenDarkenColor(colors.purple, -16),
  borderColor: lightenDarkenColor(colors.black, 40),
  headerFontColor: colors.white,
  bodyFontColor: colors.white,
  bodyBackgroundColor: colors.black,
  // disabled function takes the primary color and makes it 50% opaque
  disabledFn: function(color) { return `rgba(${hexToRgb(color)}, 0.5)` },
}
