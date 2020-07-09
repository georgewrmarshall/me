import React from 'react';

// Components
import { Display, Headline, Body } from '../Type';
import { Container } from '../Container';

// Images
import imgMe from '../../images/me-fish.png';


// Styles
import { StyledBullshit } from './styles';

export const Bullshit = ({ ...props }) => {
  return (
    <StyledBullshit id="inflatedBullshit" {...props}>
      <Container>
        <Display as="h2">Inflated Bullshit</Display>
        <Headline as="p">Most of it made up</Headline>
        <div className="bullshit-container">
          <div className="bullshit-image">
            <img src={imgMe} alt="me"/>
          </div>
          <div className="bullshit-text">
            <div>
              <Body as="p">
                After cheating on a maths test to get the credits I needed for my
                Bachelor’s of Graphic Design Degree from the University of Waka
                Chang Chang. I worked at a car shop selling tyres, mags, stereos
                and the darkest legal tints until 2012.
              </Body>
              <Body as="p">
                I moved to London and snorted a bunch of coke for 2 years. Then
                moved to Berlin in 2014 to do a bunch of speed for 1.5 years.
              </Body>
              <Body as="p">
                I spent another 1.5 years in Adelaide trying to regrow my deviated
                septum.
              </Body>
              <Body as="p">
                Finally moving to Vancouver in 2017. I now live in a small surf
                community on Vancouver Island and give zero fucks.
              </Body>
            </div>
          </div>
        </div>
      </Container>
    </StyledBullshit>
  );
};
