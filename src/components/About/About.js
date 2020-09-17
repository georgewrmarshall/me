import React from 'react';

// Components
import { Container, Hero, Main, Headline, Body, Box } from '..';

// Images
import profileImg from '../../assets/images/profile.png';

// Styles
import { StyledAbout } from './styles';

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Hero header="About" description="A designer who likes to code" />
        <Main>
          <Box as="section">
            <Headline mb={4}>Front-end Developer / Designer</Headline>
            <Body mb={5}>
              I am a Front-end developer with a background in design. I create
              pixel perfect web apps with intuitive, simple user experiences. I
              have a strong taste for good design and constantly challenge
              myself to learn new skills and technologies.
            </Body>
            <Box
              borderRadius="100%;"
              width="200px"
              margin="0 auto 2rem"
              display="block"
              as="img"
              src={profileImg}
              alt="George Marshall"
              mb={5}
            />
            <Body mb={5}>
              I started my career in New Zealand as a graphic designer in 2010.
              It was here I discovered my passion for simple, intuitive design
              and front-end development. Throughout my career I have
              continuously sought new challenges both in life and in work.
            </Body>
          </Box>
        </Main>
      </Container>
    </StyledAbout>
  );
};
