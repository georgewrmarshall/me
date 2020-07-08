import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Display, Headline, Body } from '../Type';
import { Container } from '../Container';

// Images
import imgRealtor from '../../images/realtor.svg';
import imgVanbex from '../../images/vanbex.svg';

// Styles
import { StyledShit } from './styles';

export const Shit = ({ ...props }) => {
  return (
    <StyledShit id="shitIveDone" {...props}>
      <Container>
        <Display as="h2">Shit I’ve Done</Display>
        <Headline as="p">(a.k.a my penis)</Headline>
        <div className="shit-container">
          <div className="light">
            <img src={imgRealtor} alt="Realtor.com"/>
          </div>
          <div className="dark">
            <Body as="p">
              I coded some shit for a real estate company <a className="telephone" href="https://en.wikipedia.org/wiki/Timeline_of_the_News_Corporation_scandal" target="_blank" rel="noreferrer"><strike>of questionable ethics and</strike></a> owned by the Murdoch media empire.
            </Body>
          </div>
        </div>
        <div className="shit-container">
          <div className="dark">
            <Body as="p">
              I designed and coded some shit for a dodgey crypto-currency company <a className="moneybag" href="https://biv.com/article/2019/07/fraud-allegations-surround-cryptocurrency-offering" target="_blank" rel="noreferrer"><strike>that is currently being investigated by the Canadian police for fraud</strike></a>.
            </Body>
          </div>
          <div className="light">
            <img src={imgVanbex} alt="Realtor.com"/>
          </div>
        </div>
      </Container>
    </StyledShit>
  );
};

Shit.propTypes = {
  /**
   * The header of the page
   */
  header: PropTypes.string,
  /**
   * The description of the page
   */
  description: PropTypes.string,
};
