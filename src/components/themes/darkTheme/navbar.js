import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../colors';
import { type } from '../type';

export const navbar = {
  brandColor: colorsTheme.headerFontColor,
  brandColorHover: colorsTheme.primary,
  borderColor: colorsTheme.borderColor,
  backgroundColor: colorsTheme.black,
  menuIconColor: colorsTheme.white,
  menuBackgroundColor: lightenDarkenColor(colorsTheme.black, 20),
  fontFamily: type.fontFamilyNav,
}
