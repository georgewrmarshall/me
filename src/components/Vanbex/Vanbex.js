import React from 'react';

// Components
import {
  Container,
  Hero,
  Main,
  Box,
  Body,
  Headline,
  Pagination,
  Callout,
} from '..';

// Images
import VanbexImg from '../../assets/images/vanbex.png';

// Styles
import { StyledVanbex } from './styles';

export const Vanbex = () => {
  return (
    <StyledVanbex>
      <Container>
        <Hero
          header="Vanbex"
          description="A marketing website for a blockchain and cryptocurrency services company."
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
              src={VanbexImg}
              alt="Vanbex.com"
            />
          </Container>
          <Container>
            <Body>
              <em>
                Vanbex is a leading blockchain consulting firm. Since 2013 they
                have been helping cutting edge companies bring their projects to
                life.
              </em>
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Overview</Headline>
            <Body mb={4}>
              I worked on the marketing websites Front-end application that was
              build in express, HTML5 and CSS3.
            </Body>
            <Body mb={6}>
              <em>This company is no longer active.</em>
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Pagination linkPrev="/work/rocket" />
          </Container>
        </Box>
        <Callout
          pt={{ _: 4 }}
          header="Want to get in touch?"
          btnText="Contact me"
          btnLink="/contact"
        />
      </Main>
    </StyledVanbex>
  );
};
