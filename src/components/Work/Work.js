import React from 'react';

// Components
import { Container, Hero, Main, Card } from '..';

// Images
import rocketImg from '../../assets/images/rocket.png';
import realtorImg from '../../assets/images/realtor.svg';

// Styles
import { StyledWork } from './styles';

export const Work = () => {
  return (
    <StyledWork>
      <Hero header="Work" description="Selected projects from 2015 - 2020" />
      <Main>
        <Container>
          <Card
            mb={6}
            imgSrc={realtorImg}
            header="Realtor.com"
            description="Building a reusable UI component library in React."
            link="/work/realtor"
          />
          <Card
            mb={6}
            imgSrc={rocketImg}
            header="Rocket"
            description="Building the Front-end for a crowdfunding application using smart
            contracts on the Ethereum blockchain."
            link="/work/rocket"
          />
        </Container>
      </Main>
    </StyledWork>
  );
};
