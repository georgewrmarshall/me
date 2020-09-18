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
      <Hero header="About" description="A designer who likes to code" />
      <Main>
        <Container>
          <Box as="section" mb={{ _: 4, md: 6 }}>
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
              margin="0 auto 2rem"
              display="block"
              as="img"
              src={profileImg}
              alt="George Marshall"
              mb={4}
            />
            <Body mb={4}>
              I started my career in New Zealand as a graphic designer in 2010.
              It was here I discovered my passion for simple, intuitive design
              and front-end development. Throughout my career I have
              continuously sought new challenges both in life and in work.
            </Body>
          </Box>
          <Box as="section" mb={{ _: 4, md: 6 }}>
            <Headline mb={4}>Professional Mantra</Headline>
            <ul>
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
                If you're not learning you're not living.
              </Body>
              <Body as="li" mb={3}>
                Pragmatic Programmers Approach: Easy to change, Don’t repeat
                yourself, Orthogonal
              </Body>
              <Body as="li" mb={3}>
                Environmentalist. David Suzuki is my spirit animal.
              </Body>
            </ul>
          </Box>
          <Box as="section" mb={{ _: 4, md: 6 }}>
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
      </Main>
    </StyledAbout>
  );
};
