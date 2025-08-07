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
              I'm currently living in the small ski town of{' '}
              <a
                href="https://www.google.com/maps/place/Rossland,+BC/@49.0770864,-117.8371178,13z/data=!3m1!4b1!4m5!3m4!1s0x5362da91a3fef0d3:0xa1299371f32020f9!8m2!3d49.0781415!4d-117.8000037"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rossland, BC
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
              <strong>g.</strong>{' '}
              <a href="https://github.com/georgewrmarshall" target="_blank">
                github.com/georgewrmarshall
              </a>{' '}
              <br />
            </Body>
            <Body>
              Thanks for visiting!{' '}
              <span role="img" aria-label="sheep">
                ✌️
              </span>
            </Body>
          </Container>
        </Box>
        <Callout
          pt={{ _: 4 }}
          header="Want to checkout my projects?"
          btnText="View work"
          btnLink="/work"
        />
      </Main>
    </StyledContact>
  );
};
