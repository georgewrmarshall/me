import React from 'react';

// Components
import { Container, Hero, Main, Card, Callout } from '..';

// Images
import vanbexImg from '../../assets/images/vanbex.png';
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
            info="2019 - Current"
            description="Building a reusable UI component library in React."
            link="/work/realtor"
          />
          <Card
            mb={6}
            imgSrc={rocketImg}
            header="Rocket"
            info="2018 - 2019"
            description="Building the Front-end for a crowdfunding application using smart
            contracts on the Ethereum blockchain."
            link="/work/rocket"
          />
          <Card
            mb={6}
            imgSrc={vanbexImg}
            header="Vanbex"
            info="2018 - 2019"
            description="A marketing website for the blockchain and cryptocurrency services company."
            link="/work/vanbex"
          />
        </Container>
        <Callout pt={{_: 4}} header="Want to know what makes me tick?" btnText="See about me" btnLink="/about" />
      </Main>
    </StyledWork>
  );
};
