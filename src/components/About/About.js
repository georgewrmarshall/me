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
              I am a Front-end developer with a background in design. I am a
              firm believer in{' '}
              <a
                href="https://books.google.ca/books?id=nklr2hZ_wsYC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false"
                target="blank"
                rel="noreferrer"
              >
                user centered design
              </a>{' '}
              and the{' '}
              <a
                href="https://books.google.ca/books?id=fvmN0Fr5c_MC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false"
                target="blank"
                rel="noreferrer"
              >
                persona lifecycle
              </a>
              . I like to approach development with a{' '}
              <a
                href="https://www.componentdriven.org/"
                target="blank"
                rel="noreferrer"
              >
                component driven
              </a>{' '}
              methodology.
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
              I write clean code that is functional, scalable and orthogonal. I
              like to build products with a focus on business goals and create
              pixel perfect web apps with intuitive, simple user experiences.
            </Body>
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
          <Box as="section" mb={{ _: 5, md: 6 }}>
            <Headline mb={4}>Design and Development Methodologies</Headline>
            <ul>
              <Body as="li" mb={3}>
                User Centred Design rules everything around me
              </Body>
              <Body as="li" mb={3}>
                Atomic Design + Component Driven Development for the win
              </Body>
              <Body>
                Pragmatic Programmers Approach: Easy to change, Don’t repeat
                yourself, Orthogonal
              </Body>
              <Body as="li" mb={3}>
                Nail it before you scale it
              </Body>
              <Body as="li" mb={3}>
                Business goals are expressed in numbers or they mean 0
              </Body>
            </ul>
          </Box>
          <Box as="section" mb={{ _: 5, md: 6 }}>
            <Headline mb={4}>Professional mantra</Headline>
            <ul>
              <Body as="li" mb={3}>
                Enjoy what you do, work hard and do it well
              </Body>
              <Body as="li" mb={3}>
                Honesty, transparency and open mindedness
              </Body>
              <Body as="li" mb={3}>
                If you’re not learning you’re not living. Stay on top of the
                curve
              </Body>
              <Body as="li" mb={3}>
                Teamwork and collaboration
              </Body>
              <Body as="li" mb={3}>
                <a
                  href="https://en.wikipedia.org/wiki/Equality,_Diversity_and_Inclusion"
                  target="_blank"
                  rel="noreferrer"
                >
                  ED&I
                </a>
                : Equality, Diversity and Inclusion
              </Body>
              <Body as="li" mb={3}>
                Environmentalist. David Suzuki is my spirit animal
              </Body>
            </ul>
          </Box>
        </Container>
        <Callout
          pt={{ _: 4 }}
          header="Want to get in touch?"
          btnText="Contact me"
          btnLink="/contact"
        />
      </Main>
    </StyledAbout>
  );
};
