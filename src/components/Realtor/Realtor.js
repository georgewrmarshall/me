import React from 'react';

// Components
import { Container, Hero, Main } from '../../components';

// Images
import realtorImg from '../../assets/images/realtor.png';
import placeholderImg from '../../assets/images/placholder.jpg';

// Styles
import { StyledRealtor } from './styles';

export const Realtor = () => {
  return (
    <StyledRealtor>
      <Container>
        <Hero header="Realtor" description="Building a reusable UI component library in React" />
      </Container>
        <Main>
          <section>
            <Container fluid>
              <img src={realtorImg} alt="Realtor.com" />
            </Container>
            <Container>
              <h2>Description</h2>
              <small>
              Realtor.com is a leading home for sale website offering listings and real estate-related information to over 40 million consumers each month.
              </small>
            </Container>
            <Container fluid>
              <img src={placeholderImg} alt="Realtor.com" />
              <img src={placeholderImg} alt="Realtor.com" />
            </Container>
          </section>
        </Main>
    </StyledRealtor>
  );
};
