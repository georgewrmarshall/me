import styled, { css } from "styled-components";
import { lightTheme } from "../themes";

export const StyledDisplay = styled.h1`
  ${(props) => css`
    text-transform: uppercase;
    line-height: 1;
    font-family: ${props.theme.type.fontFamilyHeader};
    font-size: ${props.theme.type.displaySizeMobile};
    @media ${props.theme.minWidth.md} {
      font-size: ${props.theme.type.displaySizeDesktop};
    }
  `}
`;

StyledDisplay.defaultProps = {
  theme: lightTheme,
};

export const StyledHeadline = styled.h2`
  ${(props) => css`
    font-family: ${props.theme.type.fontFamilyBody};
    font-size: ${props.theme.type.headlineSizeMobile};
    @media ${props.theme.minWidth.md} {
      font-size: ${props.theme.type.headlineSizeDesktop};
    }
  `}
`;

StyledHeadline.defaultProps = {
  theme: lightTheme,
};

export const StyledBody = styled.p`
  ${(props) => css`
    font-size: ${props.theme.type.bodySize};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledBody.defaultProps = {
  theme: lightTheme,
};

export const StyledInfo = styled.p`
  ${(props) => css`
    font-size: ${props.theme.type.infoSize};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledInfo.defaultProps = {
  theme: lightTheme,
};
