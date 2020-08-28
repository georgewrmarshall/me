import React from 'react';

// Components
import { Container, Hero, Main } from '..';

// Images
import RocketImg from '../../assets/images/rocket.jpg';
import placeholderImg from '../../assets/images/placholder.jpg';

// Styles
import { StyledRocket } from './styles';

export const Rocket = () => {
  return (
    <StyledRocket>
      <Container>
        <Hero header="Rocket" description="A crowdfunding application on the Ethereum blockchain." />
      </Container>
        <Main>
          <section>
            <Container fluid>
              <img src={RocketImg} alt="Rocket.com" />
            </Container>
            <Container>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate est nihil iste esse exercitationem sit, aspernatur voluptatem dolore consequuntur inventore quos. Quod obcaecati, consequatur cumque expedita nesciunt assumenda non!
              </p>
            </Container>
            <Container fluid>
              <img src={placeholderImg} alt="Rocket.com" />
              <img src={placeholderImg} alt="Rocket.com" />
            </Container>
          </section>
        </Main>
    </StyledRocket>
  );
};
