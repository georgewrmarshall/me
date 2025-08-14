import { colorsTheme } from './colors';
import { type } from '../type';

export const linkBase = {
  fontSize: type.infoSize,
  color: colorsTheme.bodyFontColor,
  hoverColor: colorsTheme.primary,
};

export const linkPrimary = {
  borderColor: colorsTheme.primary,
  borderColorHover: colorsTheme.primaryDark,
  color: colorsTheme.bodyFontColor,
  colorHover: colorsTheme.primary,
  colorVisited: colorsTheme.bodyFontColor,
};
