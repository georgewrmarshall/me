import React from 'react';

// Components
import { Container, Hero, Main, Headline, Body, Box, Callout } from '..';

// Images
import profileImg from '../../assets/images/profile.png';

// Styles
import { StyledAbout } from './styles';

export const About = () => {
  return (
    <StyledAbout>
      <Hero header="About" description="A designer who likes to code" />
      <Main>
        <Container>
          <Box as="section" mb={{ _: 5, md: 6 }}>
            <Headline mb={4}>Front-end Developer / Designer</Headline>
            <Body mb={4}>
              I am a Front-end developer with a background in design. I create
              pixel perfect web apps with intuitive, simple user experiences. I
              have a strong taste for good design and constantly challenge
              myself to learn new skills and technologies.
            </Body>
            <Box
              borderRadius="100%;"
              width="200px"
              ml="auto"
              mr="auto"
              mb={4}
              display="block"
              as="img"
              src={profileImg}
              alt="George Marshall"
            />
            <Body mb={4}>
              I started my career in New Zealand as a graphic designer in 2010.
              It was here I discovered my passion for simple, intuitive design
              and front-end development. Throughout my career I have
              continuously sought new challenges both in life and in work.
            </Body>
          </Box>
          <Box as="section" mb={{ _: 5, md: 6 }}>
            <Headline mb={4}>Professional mantra</Headline>
            <ul>
              <Body as="li" mb={3}>
                Pragmatic Programmers Approach: Easy to change, Don’t repeat
                yourself, Orthogonal
              </Body>
              <Body as="li" mb={3}>
                User centred design rules everything around me.
              </Body>
              <Body as="li" mb={3}>
                Nail it before you scale it.
              </Body>
              <Body as="li" mb={3}>
                Business goals are expressed in numbers or they mean 0.
              </Body>
              <Body as="li" mb={3}>
                Equality, Diversity and Inclusion <a href="https://en.wikipedia.org/wiki/Equality,_Diversity_and_Inclusion" target="_blank" rel="noreferrer">ED&I</a>
              </Body>
              <Body as="li" mb={3}>
                Environmentalist. David Suzuki is my spirit animal.
              </Body>
            </ul>
          </Box>
          <Box as="section" mb={{ _: 5, md: 6 }}>
            <Headline mb={4}>Tools I use</Headline>
            <Body>
              <strong>Development:</strong> React/Redux/Javascript, HTML5,
              CSS3/styled-components, Node, Git, React Testing Library/Jest.
            </Body>
            <Body>
              <strong>UX:</strong> Design Systems, User Centered Design, Persona
              Lifecycles, Google X Prototype Thinking
            </Body>
            <Body>
              <strong>Design:</strong> Figma, Sketch, Invision DSM, Abstract,
              Storybook
            </Body>
            <Body>
              <strong>Project Management:</strong> Agile, Jira, Asana, Scrum
            </Body>
          </Box>
        </Container>
        <Callout pt={{_: 4}} header="Want to get in touch?" btnText="Contact me" btnLink="/contact" />
      </Main>
    </StyledAbout>
  );
};
