import { colors, lightenDarkenColor } from '../colors';

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
}
