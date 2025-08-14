import React from 'react';

import {
  Container,
  Hero,
  Main,
  Headline,
  Body,
  Box,
  Pagination,
  Callout,
} from '..';

import realtorImg from '../../assets/images/realtor.svg';
import realtorSlackImg from '../../assets/images/realtor-slack-comment.png';
import realtorSlackImg2 from '../../assets/images/realtor-slack-comment2.png';

import { StyledRealtor } from './styles';

export const Realtor = () => {
  return (
    <StyledRealtor>
      <Container>
        <Hero
          header="Realtor"
          description="Building a reusable UI component library in React"
        />
      </Container>
      <Main>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container fluid>
            <Box
              as="img"
              width={1}
              maxWidth="100%"
              mb={4}
              src={realtorImg}
              alt="Realtor.com"
            />
          </Container>
          <Container>
            <Body>
              <em>
                <a href="http://realtor.com" target="_blank" rel="noreferrer">
                  Realtor.com
                </a>{' '}
                is a leading home for sale website offering listings and real
                estate-related information to over 40 million consumers each
                month.
              </em>
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Overview</Headline>
            <Body mb={4}>
              The consumer-facing product was in the early-mid stages of moving
              from a Ruby application to a Next.js/React application. With over
              100 developers working in different teams and time zones on
              different features of the application, there were many
              inconsistencies and inefficiencies being created related to
              component development:
            </Body>
            <ul>
              <Body as="li" mb={3}>
                Duplication of components
              </Body>
              <Body as="li" mb={3}>
                Inconsistencies in the design of a component
              </Body>
              <Body as="li" mb={3}>
                Quality of components was compromised because of time
                constraints in a sprint
              </Body>
              <Body as="li" mb={3}>
                Accessibility and performance weren't being taken into account.
              </Body>
              <Body as="li" mb={3}>
                No accountability for components or developers didn't want to
                take responsibility for them.
              </Body>
            </ul>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>The Solution</Headline>
            <Body mb={4}>
              A design system and accompanying UI component library were
              proposed. <br /> This would:
            </Body>
            <ul>
              <Body as="li" mb={3}>
                Eliminate duplication of components.
              </Body>
              <Body as="li" mb={3}>
                Ensure consistency in design, look and feel.
              </Body>
              <Body as="li" mb={3}>
                Ensure the quality of the component.
              </Body>
              <Body as="li" mb={3}>
                Ensure all components are accessible and performant.
              </Body>
              <Body as="li" mb={3}>
                Allow a team to be responsible and held accountable for the
                quality, maintenance and additions of new components to the
                library.
              </Body>
            </ul>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Methodology and Process</Headline>
            <Body>
              We drew a lot of inspiration from Brad Frost's{' '}
              <a
                href="https://bradfrost.com/blog/post/atomic-web-design/"
                target="_blank"
                rel="noreferrer"
              >
                Atomic Design
              </a>{' '}
              methodologies. Starting with the smallest possible component(or
              atoms) and building more complex components(or organisms) from
              there. We had 3 Design System Meetings(DSM) a week to discuss
              component and system requirements. We would ask questions like:
            </Body>
            <ul>
              <Body as="li" mb={3}>
                Is this component necessary? Does one already exist in another
                form? If so can we push back and the designer can use the
                component that already exists to solve the problem. Less is
                more!
              </Body>
              <Body as="li" mb={3}>
                What are the requirements of this component and how could it be
                customized? Are we building something that is scalable or
                trapping ourselves with a component that is too specific?
              </Body>
              <Body as="li" mb={3}>
                Does this component fit into the system?
              </Body>
            </ul>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Body>
              Once the component was approved and added to the Design System we
              would:
            </Body>
            <ul>
              <Body as="li" mb={3}>
                Build it to spec with accessibility and performance in mind
                using{' '}
                <a href="https://reactjs.org/" target="blank" rel="noreferrer">
                  React
                </a>
              </Body>
              <Body as="li" mb={3}>
                Write unit tests using{' '}
                <a
                  href="https://testing-library.com/docs/react-testing-library/intro"
                  target="blank"
                  rel="noreferrer"
                >
                  React Testing Library
                </a>
              </Body>
              <Body as="li" mb={3}>
                Write component tests using{' '}
                <a
                  href="https://www.cypress.io/"
                  target="blank"
                  rel="noreferrer"
                >
                  Cypress
                </a>
              </Body>
              <Body as="li" mb={3}>
                Document its use and application using{' '}
                <a
                  href="https://storybook.js.org/"
                  target="blank"
                  rel="noreferrer"
                >
                  Storybook
                </a>
              </Body>
              <Body as="li" mb={3}>
                Used{' '}
                <a
                  href="https://jfrog.com/artifactory/"
                  target="blank"
                  rel="noreferrer"
                >
                  Artifactory
                </a>{' '}
                to release a test version of the component library package that
                could be used in the consumer environment for testing.
              </Body>
              <Body as="li" mb={3}>
                Released a new minor version(semantic versioning for the win) of
                the component library and had a dedicated Slack channel for the
                releases, bugs, support and questions.
              </Body>
            </ul>
            <Body>
              We also encouraged other developers outside of the Web Platform
              Team to contribute to the component library. This fostered
              ownership and enthusiasm for using the component library instead
              of referring to old ways and just building their own component.
            </Body>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>What I did</Headline>
            <Body>
              I was one of the lead developers working on developing and
              creating UI components in React.
            </Body>
            <ul>
              <Body as="li" mb={3}>
                Developed a reusable UI component library for teams of
                developers to use on the consumer facing product.
              </Body>
              <Body as="li" mb={3}>
                Collaborated with designers to build a design system used by all
                design teams at Realtor.com.
              </Body>
              <Body as="li" mb={3}>
                Worked with various dev teams to consult on wider component
                architecture and performance.
              </Body>
              <Body as="li" mb={3}>
                Wrote comprehensive documentation about the implementation of UI
                components.
              </Body>
              <Body as="li" mb={3}>
                Ongoing maintenance support; bugs, feature requests and system
                improvements.
              </Body>
              <Body as="li" mb={3}>
                Implemented release and communication strategy around system and
                library updates Supported Junior Developers with peer
                programming and advice on component development.
              </Body>
            </ul>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Tools used</Headline>
            <Body>
              There were a number of helpful tools that we used to achieve our
              Design System and UI Component Library.
            </Body>
            <Box>
              <Body>
                <strong>Design:</strong> Invision DSM, Sketch
              </Body>
              <Body>
                <strong>Development:</strong> React (Styled-Components for
                styling), Storybook, React Testing Library, Cypress, Jenkins
              </Body>
            </Box>
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Headline mb={3}>Conclusion</Headline>
            <Body mb={4}>
              After 12 months the RDC-UI component library was widely used and
              we received much positive feedback on the ease of use and time
              saving it had on developers tasks. It freed up developers to work
              on the features with comfort in knowing that the components that
              they were using were to spec and fully supported by a dedicated
              team of developers.
            </Body>
            <Box
              as="img"
              src={realtorSlackImg}
              alt="slack comment"
              mr="auto"
              mb={4}
              display="block"
            />
            <Box
              as="img"
              src={realtorSlackImg2}
              alt="slack comment"
              ml="auto"
              display="block"
            />
          </Container>
        </Box>
        <Box as="section" mb={{ _: 5, md: 6 }}>
          <Container>
            <Pagination linkNext="/work/rocket" />
          </Container>
        </Box>
        <Callout
          pt={{ _: 4 }}
          header="Want to get in touch?"
          btnText="Contact me"
          btnLink="/contact"
        />
      </Main>
    </StyledRealtor>
  );
};
