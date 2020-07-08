import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../colors';

export const logo = {
  backgroundColor: colorsTheme.primary,
  colorDarkest: lightenDarkenColor(colorsTheme.blueDark, -32), //'#20212D'
  colorDarker: lightenDarkenColor(colorsTheme.blueDark, -24), //'#303140',
  colorDark: lightenDarkenColor(colorsTheme.blueDark, -16), //'#3A3B4A',
  colorLight: lightenDarkenColor(colorsTheme.blueDark, 0), //'#454653'
}

