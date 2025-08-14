import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../baseColors';

export const footer = {
  backgroundColor: lightenDarkenColor(colorsTheme.black, 16),
  color: colorsTheme.bodyFontColor,
  borderColor: colorsTheme.borderColor,
  logoColor: colorsTheme.headerFontColor,
}
