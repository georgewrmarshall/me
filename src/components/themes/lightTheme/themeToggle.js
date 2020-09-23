import { colorsTheme } from './colors';
import { lightenDarkenColor, hexToRgb } from '../baseColors';

export const themeToggle = {
  railOffBackgroundColor: lightenDarkenColor(colorsTheme.blueDark, 144),
  knobOffBackgroundColor: lightenDarkenColor(colorsTheme.blueDark, 160),
  railOnBackgroundColor: lightenDarkenColor(colorsTheme.blueDark, -16),
  knobOnBackgroundColor: colorsTheme.blueDark,
  knobDropshadowColor: `rgba(${hexToRgb(colorsTheme.blueDark)}, 0.5)`,
  color: colorsTheme.headerFontColor,
};
