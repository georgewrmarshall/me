import { colors, lightenDarkenColor } from '../colors';

export const colorsTheme = {
  primary: colors.pink,
  primaryDark: lightenDarkenColor(colors.pink, -20),
  borderColor: lightenDarkenColor(colors.greenDark, 160),
  headerFontColor: colors.greenDark,
  bodyFontColor: colors.greenDark,
  white: colors.white,
  black: colors.black,
  blueDark: colors.blueDark,
  bodyBackgroundColor: colors.white,
  greenDark: colors.greenDark,
  offWhite: colors.offWhite,
}
