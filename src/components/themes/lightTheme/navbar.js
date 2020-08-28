import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../colors';
import { type } from '../type';

export const navbar = {
  brandColor: colorsTheme.headerFontColor,
  brandColorHover: colorsTheme.primary,
  borderColor: colorsTheme.borderColor,
  backgroundColor: colorsTheme.white,
  menuIconColor: lightenDarkenColor(colorsTheme.blueDark, -20),
  menuBackgroundColor: lightenDarkenColor(colorsTheme.black, 220),
  fontFamily: type.fontFamilyNav,
}
