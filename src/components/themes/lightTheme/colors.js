import { colors, lightenDarkenColor } from '../colors';

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
}
