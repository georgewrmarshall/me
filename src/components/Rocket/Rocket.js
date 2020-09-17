import React from 'react';

// Components
import { Container, Hero, Main, Box } from '..';

// Images
import RocketImg from '../../assets/images/rocket.jpg';
import placeholderImg from '../../assets/images/placholder.jpg';

// Styles
import { StyledRocket } from './styles';

export const Rocket = () => {
  return (
    <StyledRocket>
      <Container>
        <Hero
          header="Rocket"
          description="A crowdfunding application on the Ethereum blockchain."
        />
      </Container>
      <Main>
        <section>
          <Container fluid>
            <Box
              as="img"
              width={1}
              maxWidth="100%"
              src={RocketImg}
              alt="Rocket.com"
            />
          </Container>
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptate est nihil iste esse exercitationem sit, aspernatur
              voluptatem dolore consequuntur inventore quos. Quod obcaecati,
              consequatur cumque expedita nesciunt assumenda non!
            </p>
          </Container>
          <Container fluid>
            <Box
              as="img"
              width={1}
              maxWidth="100%"
              src={placeholderImg}
              alt="Rocket.com"
            />
            <Box
              as="img"
              width={1}
              maxWidth="100%"
              src={placeholderImg}
              alt="Rocket.com"
            />
          </Container>
        </section>
      </Main>
    </StyledRocket>
  );
};
