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
  Link,
} from '..';

// Images
import ActionMarketResearchImg from '../../assets/images/action-market-research.svg';
import ActionMarketResearchImg2 from '../../assets/images/action-market-research2.png';

// Styles
import { StyledActionMarketResearch } from './styles';

export const ActionMarketResearch = () => {
  return (
    <StyledActionMarketResearch>
      <Container>
        <Hero
          header="Action Market Research"
          description="A website for a market research company."
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
              src={ActionMarketResearchImg}
              alt="ActionMarketResearch.com"
            />
          </Container>
          <Container>
            <Body>
              <em>
                Action Market Research specialises in providing high quality and
                reliable market research services.
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
              href="http://www.actionresearch.com.au/"
              target="_blank"
              target="_blank"
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
              src={ActionMarketResearchImg2}
              alt="ActionMarketResearch.com"
            />
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Pagination linkPrev="/work/vanbex" linkNext="/work/rundle-place" />
          </Container>
        </Box>
        <Callout
          pt={{ _: 4 }}
          header="Want to get in touch?"
          btnText="Contact me"
          btnLink="/contact"
        />
      </Main>
    </StyledActionMarketResearch>
  );
};
