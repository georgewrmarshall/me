import styled, { css } from 'styled-components';
import { space } from '@styled-system/space';
import { lightTheme } from '../themes';

export const StyledDisplay = styled.h1`
  ${space};
  ${props => css`
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
  ${space};
  ${props => css`
    font-family: ${props.theme.type.fontFamilyHeader};
    font-size: ${props.theme.type.headlineSizeMobile};
    @media ${props.theme.minWidth.md} {
      font-size: ${props.theme.type.headlineSizeDesktop};
    }
  `}
`;

StyledHeadline.defaultProps = {
  theme: lightTheme,
};

export const StyledTitle = styled.h2`
  ${space};
  ${props => css`
    font-family: ${props.theme.type.fontFamilyBody};
    font-size: ${props.theme.type.titleSizeMobile};
    font-weight: normal;
    letter-spacing: 0.05rem;
    @media ${props.theme.minWidth.md} {
      font-size: ${props.theme.type.titleSizeDesktop};
    }
  `}
`;

StyledTitle.defaultProps = {
  theme: lightTheme,
};

export const StyledBody = styled.p`
  ${space};
  ${props => css`
    line-height: 1.7;
    font-size: ${props.theme.type.bodySize};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledBody.defaultProps = {
  theme: lightTheme,
};

export const StyledInfo = styled.p`
  ${space};
  ${props => console.log(props)}
  ${props => css`
    line-height: 1.7;
    font-size: ${props.theme.type.infoSize};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledInfo.defaultProps = {
  theme: lightTheme,
};
