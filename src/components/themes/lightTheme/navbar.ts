import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../baseColors';
import { type } from '../type';

export const navbar = {
  brandColor: colorsTheme.headerFontColor,
  brandColorHover: colorsTheme.primary,
  borderColor: colorsTheme.borderColor,
  backgroundColor: colorsTheme.white,
  menuBackgroundColor: lightenDarkenColor(colorsTheme.black, 224),
  fontFamily: type.fontFamilyNav,
}
