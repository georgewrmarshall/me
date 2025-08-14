import { colorsTheme } from './colors';
import { type } from '../type';

export const buttonBase = {
  fontFamily: type.fontFamilyNav,
  fontSize: type.infoSize,
  color: colorsTheme.bodyFontColor,
  backgroundColor: 'transparent',
  borderColor: colorsTheme.borderColor,
};

export const buttonPrimary = {
  backgroundColor: colorsTheme.primary,
  backgroundColorHover: colorsTheme.primaryDark,
  color: colorsTheme.white,
  colorDisabled: colorsTheme.white,
  borderColor: colorsTheme.primary,
  backgroundColorDisabled: (): string =>
    colorsTheme.disabledFn(colorsTheme.primary),
};
