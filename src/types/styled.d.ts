import 'styled-components';

interface ColorsTheme {
  black: string;
  white: string;
  blueDark: string;
  primary: string;
  primaryDark: string;
  borderColor: string;
  headerFontColor: string;
  bodyFontColor: string;
  bodyBackgroundColor: string;
  muted: string;
  disabledFn: (color: string) => string;
}

interface TypeTheme {
  fontFamilyNav: string;
  fontFamilyBody: string;
  fontFamilyHeader: string;
  displaySizeMobile: string;
  displaySizeDesktop: string;
  headlineSizeDesktop: string;
  headlineSizeMobile: string;
  titleSize: string;
  bodySize: string;
  infoSize: string;
}

interface ScreenSize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface MediaQueries {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface ThemeButton {
  fontFamily?: string;
  fontSize?: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  backgroundColorHover?: string;
  colorDisabled?: string;
  backgroundColorDisabled?: () => string;
}

interface ThemeCard {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

interface ThemeFooter {
  backgroundColor: string;
  color: string;
  borderColor?: string;
  logoColor?: string;
}

interface ThemeLogo {
  backgroundColor: string;
  colorDarkest: string;
  colorDarker: string;
  colorDark: string;
  colorLight: string;
}

interface ThemeNavbar {
  backgroundColor: string;
  borderColor: string;
  brandColor?: string;
  brandColorHover?: string;
  menuBackgroundColor?: string;
}

interface ThemeNavbarToggle {
  color: string;
}

interface ThemeNavLink {
  color: string;
  colorHover: string;
  borderColor: string;
}

interface ThemeToggle {
  color: string;
  railOffBackgroundColor: string;
  railOnBackgroundColor: string;
  knobOffBackgroundColor: string;
  knobOnBackgroundColor: string;
  knobDropshadowColor: string;
}

interface ThemeLink {
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  colorHover?: string;
  borderColor?: string;
  borderColorHover?: string;
  colorVisited?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    buttonBase: ThemeButton;
    buttonPrimary: ThemeButton;
    linkBase: ThemeLink;
    linkPrimary: ThemeLink;
    card: ThemeCard;
    colorsTheme: ColorsTheme;
    footer: ThemeFooter;
    logo: ThemeLogo;
    navbar: ThemeNavbar;
    navbarToggle: ThemeNavbarToggle;
    navLink: ThemeNavLink;
    type: TypeTheme;
    themeToggle: ThemeToggle;
    space: number[];
    screenSize: ScreenSize;
    minWidth: MediaQueries;
    maxWidth: MediaQueries;
    breakpoints: string[];
  }
}
