import { colorsTheme } from './colors';
import { type } from '../type';

export const buttonBase = {
  fontFamily: type.fontFamilyNav,
  fontSize: type.infoSize,
}

export const buttonPrimary = {
  backgroundColor: colorsTheme.primary,
  backgroundColorHover: colorsTheme.primaryDark,
  color: colorsTheme.white,
}
