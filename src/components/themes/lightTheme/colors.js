import { colors, lightenDarkenColor, hexToRgb } from '../colors';

export const colorsTheme = {
  primary: colors.purple,
  primaryDark: lightenDarkenColor(colors.purple, -20),
  borderColor: lightenDarkenColor(colors.black, 200),
  headerFontColor: colors.blueDark,
  bodyFontColor: lightenDarkenColor(colors.blueDark, -20),
  white: colors.white,
  black: colors.black,
  blueDark: colors.blueDark,
  bodyBackgroundColor: colors.white,
  // disabled function takes the primary color and makes it 50% opaque
  disabledFn: function(color) { return `rgba(${hexToRgb(color)}, 0.5)` },
}
