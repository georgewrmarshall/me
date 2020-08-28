import styled, { css } from 'styled-components';
import { lightTheme } from '../../components/themes';

export const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  h1 {
    ${(props) => css`
      text-align: center;
      margin-bottom: 1rem;

      @media ${props.theme.minWidth.md} {
        margin-bottom: 2rem;
      }

      div {
        overflow: hidden;

        &:last-child {
          span {
            transition-delay: ${props.collapse ? '1.1s' : 0};
          }
        }
      }

      span {
        display: block;
        transform: ${props.collapse ? 'translateY(0)' : 'translateY(100%)'};
        transition: transform 0.5s;
        transition-delay: ${props.collapse ? '1s' : 0};
      }

    `};
  }

  h2 {
    ${(props) => css`
      margin-bottom: 2rem;
      color: ${props.theme.colorsTheme.bodyFontColor};
      font-family: ${props.theme.type.fontFamilyBody};
      font-weight: normal;
      font-size: 1.5rem;
      letter-spacing: .05rem;
      overflow: hidden;
      text-align: center;
    `}
    div {
      ${(props) => css`
        transform: ${props.collapse ? 'translateY(0)' : 'translateY(100%)'};
        transition: transform 0.5s;
        transition-delay: ${props.collapse ? '1.5s' : 0};
      `}
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;

    ${(props) => css`
      opacity: ${props.collapse ? 1 : 0};
      transition: opacity 0.5s;
      transition-delay: ${props.collapse ? '1.85s' : 0};
    `}
  }
`;

StyledHome.defaultProps = {
  theme: lightTheme
}

export const StyledGraphic = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  z-index: -1;
  width: 200px;
  max-width: calc(100% - 2rem);

  ${(props) => css`
    transition: opacity 0.75s;
    opacity: ${props.collapse ? 0.1 : 1};
    transition-delay: ${props.collapse ? '0.75s' : 0};

    @media ${props.theme.minWidth.md} {
      transform: translate(-50%, -70%);
      width: 240px;
    }

    path {
      transition: 0.5s;
      opacity: ${props.collapse ? 1 : 0};
    }
    .graphic-bg {
      opacity: ${props.collapse ? 1 : 0};
      transition: ${!props.collapse ? '0s' : '0.1s'};
      transition-delay: ${!props.collapse ? '0s' : '0.3s'};;
      fill: ${props.theme.logo.backgroundColor};
    }
    .graphic-1 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 40%) scale(0)'};
      transform-origin: ${props.collapse ? '100% 100%' : '140% 140%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-2 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(20%, 40%) scale(0)'};
      transform-origin: ${props.collapse ? '100% 20%' : '160% 20%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-3 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 40%) scale(0)'};
      transform-origin: ${props.collapse ? '90% 20%' : '70% 160%'};
      fill: ${props.theme.logo.colorDarker};
    }
    .graphic-4 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(40%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '90% 0%' : '110% 0%'};
      fill: ${props.theme.logo.colorLight};
    }
    .graphic-5 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, -40%) scale(0)'};
      transform-origin: ${props.collapse ? '80% 20%' : '90% 0%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-6 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 40%) scale(0)'};
      transform-origin: ${props.collapse ? '80% 50%' : '80% 140%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-7 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '60% 20%' : '80% 0%'};
      fill: ${props.theme.logo.colorLight};
    }
    .graphic-8 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 40%) scale(0)'};
      transform-origin: ${props.collapse ? '70% 100%' : '80% 160%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-9 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 20%) scale(0)'};
      transform-origin: ${props.collapse ? '60% 100%' : '70% 160%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-10 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-10%, 20%) scale(0)'};
      transform-origin: ${props.collapse ? '50% 80%' : '50% 160%'};
      fill: ${props.theme.logo.colorDarker};
    }
    .graphic-11 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '50% 20%' : '50% 0%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-12 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 40%) scale(0)'};
      transform-origin: ${props.collapse ? '50% 40%' : '40% 130%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-13 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 40%) scale(0)'};
      transform-origin: ${props.collapse ? '50% 70%' : '20% 130%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-14 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(20%, 20%) scale(0)'};
      transform-origin: ${props.collapse ? '30% 40%' : '40% 140%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-15 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(20%, -10%) scale(0)'};
      transform-origin: ${props.collapse ? '30% 40%' : '40% -20%'};
      fill: ${props.theme.logo.colorLight};
    }
    .graphic-16 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-20%, 0%) scale(0)'};
      transform-origin: ${props.collapse ? '30% 30%' : '-40% 0%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-17 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-20%, -10%) scale(0)'};
      transform-origin: ${props.collapse ? '40% 30%' : '-40% 30%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-18 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-20%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '40% 80%' : '0% 180%'};
      fill: ${props.theme.logo.colorDarker};
    }
    .graphic-19 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-20%, 20%) scale(0)'};
      transform-origin: ${props.collapse ? '30% 80%' : '30% 100%'};
      fill: ${props.theme.logo.colorDarker};
    }
    .graphic-21 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, 20%) scale(0)'};
      transform-origin: ${props.collapse ? '30% 80%' : '30% 100%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-22 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(10%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '40% 50%' : '40% 70%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-23 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-10%, 20%) scale(0)'};
      transform-origin: ${props.collapse ? '0% 100%' : '-20% 100%'};
      fill: ${props.theme.logo.colorDarker};
    }
    .graphic-24 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-40%, 0%) scale(0)'};
      transform-origin: ${props.collapse ? '0% 50%' : '-20% 50%'};
      fill: ${props.theme.logo.colorDarker};
    }
    .graphic-25 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(20%, -10%) scale(0)'};
      transform-origin: ${props.collapse ? '20% 80%' : '20% 30%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-26 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(-20%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '0% 20%' : '-20% -20%'};
      fill: ${props.theme.logo.colorLight};
    }
    .graphic-27 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(10%, 10%) scale(0)'};
      transform-origin: ${props.collapse ? '30% 40%' : '30% 80%'};
      fill: ${props.theme.logo.colorDarkest};
    }
    .graphic-28 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '50% 0%' : '80% -20%'};
      fill: ${props.theme.logo.colorLight};
    }
    .graphic-29 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(0%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '50% 0%' : '80% -20%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-30 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(10%, -20%) scale(0)'};
      transform-origin: ${props.collapse ? '40% 0%' : '100% 0%'};
      fill: ${props.theme.logo.colorDark};
    }
    .graphic-31 {
      transform: ${props.collapse ? 'translate(0%, 0%) scale(1)' : 'translate(10%, 20%) scale(0)'};
    transform-origin: ${props.collapse ? '40% 0%' : '40% 50%'};
    fill: ${props.theme.logo.colorDarker};
    }
  `}
`;

StyledGraphic.defaultProps = {
  theme: lightTheme
}

