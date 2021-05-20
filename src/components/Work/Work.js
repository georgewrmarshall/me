import React from 'react';

// Components
import { Container, Hero, Main, Card, Callout } from '..';

// Images
import vanbexImg from '../../assets/images/vanbex.png';
import rocketImg from '../../assets/images/rocket.png';
import realtorImg from '../../assets/images/realtor.svg';
import actionImg from '../../assets/images/action-market-research.svg';
import rundleImg from '../../assets/images/rundle.png';

// Styles
import { StyledWork } from './styles';

export const Work = () => {
  return (
    <StyledWork>
      <Hero header="Work" description="Selected projects from 2017 - 2021" />
      <Main>
        <Container>
          <Card
            mb={6}
            imgSrc={realtorImg}
            header="Realtor.com"
            info="2019 - 2021"
            description="Building a reusable UI component library in React."
            link="/work/realtor"
          />
          <Card
            mb={6}
            imgSrc={rocketImg}
            header="Rocket"
            info="2018 - 2019"
            description="A crowdfunding application on the Ethereum blockchain."
            link="/work/rocket"
          />
          <Card
            mb={6}
            imgSrc={vanbexImg}
            header="Vanbex"
            info="2018 - 2019"
            description="A marketing website for a blockchain and cryptocurrency services company."
            link="/work/vanbex"
          />
          <Card
            mb={6}
            imgSrc={actionImg}
            header="Action Market Research"
            info="2017"
            description="A website for a market research company."
            link="/work/action-market-research"
          />
          <Card
            mb={6}
            imgSrc={rundleImg}
            header="Rundle Place"
            info="2017"
            description="A website for a high-end shopping destination."
            link="/work/rundle-place"
          />
        </Container>
        <Callout
          pt={{ _: 4 }}
          header="Want to know what makes me tick?"
          btnText="See about me"
          btnLink="/about"
        />
      </Main>
    </StyledWork>
  );
};
