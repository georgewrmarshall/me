import { colorsTheme } from './colors';
import { lightenDarkenColor, hexToRgb } from '../colors';

export const themeToggle = {
  railOffBackgroundColor: lightenDarkenColor(colorsTheme.blueDark, 150),
  knobOffBackgroundColor: lightenDarkenColor(colorsTheme.blueDark, 170),
  railOnBackgroundColor: lightenDarkenColor(colorsTheme.blueDark, -10),
  knobOnBackgroundColor: lightenDarkenColor(colorsTheme.blueDark, 20),
  knobDropshadowColor: `rgba(${hexToRgb(colorsTheme.blueDark)}, 0.5)`,
};
