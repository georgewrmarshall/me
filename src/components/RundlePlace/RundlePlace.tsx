import React from 'react';

import {
  Container,
  Hero,
  Main,
  Box,
  Body,
  Headline,
  Pagination,
  Callout,
  Link,
} from '..';

import RundlePlaceImg from '../../assets/images/rundle.png';
import RundlePlaceImg2 from '../../assets/images/rundle2.png';

import { StyledRundlePlace } from './styles';

export const RundlePlace = () => {
  return (
    <StyledRundlePlace>
      <Container>
        <Hero
          header="Rundle Place"
          description="A website for a high-end shopping destination."
        />
      </Container>
      <Main>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container fluid>
            <Box
              as="img"
              width={1}
              mb={4}
              maxWidth="100%"
              src={RundlePlaceImg}
              alt="RundlePlace.com"
            />
          </Container>
          <Container>
            <Body>
              <em>
                Located in the heart of the CBD, Rundle Place is Adelaide's
                premier destination for high-end shopping.
              </em>
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Overview</Headline>
            <Body mb={4}>
              I worked on the marketing websites Front-end application that was
              build in Express, HTML5 and CSS3. Designed by{' '}
              <a
                href="https://www.sveltestudios.com/"
                target="blank"
                rel="noreferrer"
              >
                Svelte
              </a>
            </Body>
            <Link
              href="https://www.rundleplace.com.au/"
              target="_blank"
              as="a"
              rel="noreferrer"
            >
              Visit the website
            </Link>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container fluid>
            <Box
              as="img"
              width={1}
              mb={4}
              maxWidth="100%"
              src={RundlePlaceImg2}
              alt="RundlePlace.com"
            />
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Pagination linkPrev="/work/action-market-research" />
          </Container>
        </Box>
        <Callout
          pt={{ _: 4 }}
          header="Want to get in touch?"
          btnText="Contact me"
          btnLink="/contact"
        />
      </Main>
    </StyledRundlePlace>
  );
};