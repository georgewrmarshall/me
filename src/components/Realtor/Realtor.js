import React from 'react';

// Components
import {
  Container,
  Hero,
  Main,
  Headline,
  Title,
  Body,
  Info,
} from '../../components';

// Images
import realtorImg from '../../assets/images/realtor.png';
import placeholderImg from '../../assets/images/placholder.jpg';

// Styles
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
        <section>
          <Container fluid>
            <img src={realtorImg} alt="Realtor.com" />
          </Container>
          <Container>
            <Body mb={6}>
              <em>
                Realtor.com is a leading home for sale website offering listings
                and real estate-related information to over 40 million consumers
                each month.
              </em>
            </Body>
          </Container>
        </section>
        <section>
          <Container>
            <Headline mb={3}>The Problem</Headline>
            <Body mb={6}>
              The current consumer-facing product was in the early-mid stages of
              moving from a Ruby application to a Next.js/React application.
              With over 100 developers working in different teams and time zones
              on different features of the application, there were many
              inconsistencies and inefficiencies being created:
              <ul>
                <li>Duplication of components.</li>
                <li>Inconsistencies in the design of the component.</li>
                <li>
                  Quality of components was compromised because of time
                  constraints in a sprint.
                </li>
                <li>
                  Accessibility and performance weren’t being taken into
                  account.
                </li>
                <li>
                  No accountability for components or developers didn’t want to
                  take responsibility for them.
                </li>
              </ul>
            </Body>
          </Container>
        </section>
        <section>
          <Container>
            <Headline mb={3}>The Solution</Headline>
            <Body mb={6}>
              A design system and accompanying UI component library were
              proposed. <br /> This would:
              <ul>
                <li>Eliminate duplication of components.</li>
                <li>Ensure consistency in design, look and feel.</li>
                <li>Ensure the quality of the component.</li>
                <li>Ensure all components are accessible and performant.</li>
                <li>
                  Allow a team to be responsible and held accountable for the
                  quality, maintenance and additions of new components to the
                  library.
                </li>
              </ul>
            </Body>
          </Container>
        </section>
        <section>
          <Container>
            <Headline mb={3}>Methodology and Process</Headline>
            <Body>
              We drew a lot of inspiration from Brad Frost’s{' '}
              <a
                href="https://bradfrost.com/blog/post/atomic-web-design/"
                target="_blank"
              >
                Atomic Design
              </a>{' '}
              methodologies. Starting with the smallest possible component(or
              atoms) and building more complex components(or organisms) from
              there. We had 3 Design System Meetings(DSM) a week to discuss
              component and system requirements. We would ask questions like:
              <ul>
                <li>
                  Is this component necessary? Does one already exist in another
                  form? If so can we push back and the designer can use the
                  component that already exists to solve the problem. Sometimes
                  less is more!
                </li>
                <li>
                  What are the requirements of this component and how could it
                  be customized? Are we building something that is scalable or
                  trapping ourselves with a component that is too specific?
                </li>
                <li>Does this component fit into the system?</li>
              </ul>
            </Body>
            <Body mb={6}>
              Once the component was approved and added to the Design System we
              would build it using React, document it’s used and application
              using storybook and had a dedicated Slack channel for the
              releases, bugs, support and questions. We also encouraged other
              developers outside of the Web Platform Team to contribute to the
              component library. This fostered ownership and enthusiasm for
              using the component library instead of referring to old ways and
              just building their own component.
            </Body>
          </Container>
        </section>
        <section>
          <Container>
            <Headline mb={3}>Tools used</Headline>
            <Body>
              There were a number of helpful tools that we used to achieve our
              Design System and UI Component Library.
            </Body>
            <Title>Design:</Title>
            <Body>
              <ul>
                <li>Invision DSM</li>
                <li>Sketch</li>
              </ul>
            </Body>
            <Title>Development:</Title>
            <Body mb={6}>
              <ul>
                <li>React</li>
                <li>Storybook</li>
                <li>React Testing Library</li>
                <li>Travis CI</li>
              </ul>
            </Body>
          </Container>
        </section>
        <section>
          <Container>
            <Headline mb={3}>Conclusion</Headline>
            <Body>
              After 12 months the RDC-UI component library was widely used and
              we received much positive feedback on the ease of use and time
              saving it had on developers tasks. It freed up developers to work
              on the features with comfort in knowing that the components that
              they were using were to spec and fully supported by a dedicated
              team of developers.
            </Body>
          </Container>
        </section>
      </Main>
    </StyledRealtor>
  );
};
