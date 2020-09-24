import React from 'react';

// Components
import { Container, Hero, Main, Box, Body, Headline, Pagination, Callout } from '..';

// Images
import rocketImg from '../../assets/images/rocket.png';
import rocketImg2 from '../../assets/images/rocket2.png';

// Styles
import { StyledRocket } from './styles';

export const Rocket = () => {
  return (
    <StyledRocket>
      <Container>
        <Hero
          header="Rocket"
          description="A crowdfunding application on the Ethereum blockchain."
        />
      </Container>
      <Main>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Box
              as="img"
              width={1}
              mb={4}
              maxWidth="100%"
              src={rocketImg}
              alt="Rocket.com"
            />
          </Container>
          <Container>
            <Body>
              <em>
                Rocket is a blockchain crowdfunding platform that allows
                companies to issue cryptocurrencies to get funded.
              </em>
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Overview</Headline>
            <Body mb={4}>
              I worked on the design of the application using sketch and then
              the Front-end application that was built in React.
            </Body>
            <Box
              as="img"
              width={1}
              mb={4}
              maxWidth="100%"
              src={rocketImg2}
              alt="Rocket.com"
            />
            <Body mb={6}>
              <em>This company is no longer active.</em>
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Pagination linkPrev="/work/realtor" linkNext="/work/vanbex" />
          </Container>
        </Box>
        <Callout
          pt={{ _: 4 }}
          header="Want to get in touch?"
          btnText="Contact me"
          btnLink="/contact"
        />
      </Main>
    </StyledRocket>
  );
};
