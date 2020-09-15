import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../baseColors';
import { type } from '../type';

export const navbar = {
  brandColor: colorsTheme.headerFontColor,
  brandColorHover: colorsTheme.primary,
  borderColor: colorsTheme.borderColor,
  backgroundColor: colorsTheme.black,
  menuBackgroundColor: lightenDarkenColor(colorsTheme.black, 16),
  fontFamily: type.fontFamilyNav,
}
