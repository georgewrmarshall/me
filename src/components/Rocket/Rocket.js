import React from 'react';

// Components
import { Container, Hero, Main, Box, Body } from '..';

// Images
import rocketImg from '../../assets/images/rocket.png';
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
        <Box as="section">
          <Container fluid>
            <Box
              as="img"
              width={1}
              mb={6}
              maxWidth="100%"
              src={rocketImg}
              alt="Rocket.com"
            />
          </Container>
          <Container>
            <Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              voluptate est nihil iste esse exercitationem sit, aspernatur
              voluptatem dolore consequuntur inventore quos. Quod obcaecati,
              consequatur cumque expedita nesciunt assumenda non!
            </Body>
          </Container>
        </Box>
      </Main>
    </StyledRocket>
  );
};
