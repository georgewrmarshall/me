import React from 'react';

// Components
import { Container, Hero, Main, Headline, Body, Box, Callout } from '..';

// Styles
import { StyledContact } from './styles';

export const Contact = () => {
  return (
    <StyledContact>
      <Hero header="Contact" description="Drop me a line" />
      <Main>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Based in Canada</Headline>
            <Body mb={4}>
              I'm currently living in the small surf town of{' '}
              <a
                href="https://www.google.com/maps/place/Ucluelet,+BC/@48.9410902, -125.5991609,13z/data=!3m1!4b1!4m5!3m4!1s0x548973b97150e2bb:0xdb5f97b887c7db84!8m2!3d48.9415997!4d-125.5463446"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ucluelet, BC
              </a>
              . I always enjoy hearing about new projects so send me an email or
              connect with me on{' '}
              <a href="https://www.linkedin.com/in/georgewrmarshall/">
                Linkedin
              </a>
              .
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Contact Details</Headline>
            <Body mb={4}>
              <strong>m.</strong> +1 236 886 7214 <br />
              <strong>e.</strong> georgewrmarshall@gmail.com <br />
            </Body>
            <Body>
              Thanks for visiting!{' '}
              <span role="img" aria-label="sheep">
                ✌️
              </span>
            </Body>
          </Container>
        </Box>
        <Callout pt={{_: 4}} header="Want to checkout my projects?" btnText="View work" btnLink="/work" />
      </Main>
    </StyledContact>
  );
};
