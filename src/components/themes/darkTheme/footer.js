import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../colors';

export const footer = {
  backgroundColor: lightenDarkenColor(colorsTheme.black, 20),
  color: colorsTheme.bodyFontColor,
  borderColor: colorsTheme.borderColor,
  logoColor: colorsTheme.headerFontColor,
}
