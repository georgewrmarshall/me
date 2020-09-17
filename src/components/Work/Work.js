import React from 'react';

// Components
import { Container } from '../Container';
import { Link } from '../Link';
import { Hero } from '../Hero';
import { Main } from '../Main';
import { Headline } from '../Type';
import { Body } from '../Type';
import { Box } from '../Box';

// Images
import rocketImg from '../../assets/images/rocket.jpg';
import realtorImg from '../../assets/images/realtor.svg';

// Styles
import { StyledWork } from './styles';

export const Work = () => {
  return (
    <StyledWork>
      <Container>
        <Hero header="Work" description="Selected projects from 2015 - 2020" />
        <Main>
          <Box as="section" mb={6}>
            <Box
              as="img"
              width={1}
              maxWidth="100%"
              mb={4}
              src={realtorImg}
              alt="Realtor.com"
            />
            <Headline>Realtor.com</Headline>
            <Body>Building a reusable UI component library in React.</Body>
            <Link to="/work/realtor">See Project</Link>
          </Box>
          <Box as="section" mb={4}>
            <Box
              as="img"
              width={1}
              maxWidth="100%"
              src={rocketImg}
              alt="Rocket"
            />
            <Headline>Rocket</Headline>
            <Body>
              Building the Front-end for a crowdfunding application using smart
              contracts on the Ethereum blockchain.
            </Body>
            <Link to="/work/rocket">See Project</Link>
          </Box>
        </Main>
      </Container>
    </StyledWork>
  );
};
