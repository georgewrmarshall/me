import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../colors';
import { type } from '../type';

export const navbar = {
  brandColor: colorsTheme.greenDark,
  brandColorHover: colorsTheme.primary,
  borderColor: colorsTheme.borderColor,
  backgroundColor: colorsTheme.offWhite,
  menuIconColor: colorsTheme.greenDark,
  menuBackgroundColor: lightenDarkenColor(colorsTheme.primary, 40),
  fontFamily: type.fontFamilyNav,
}
