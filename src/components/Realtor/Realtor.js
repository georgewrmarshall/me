import React from 'react';

// Components
import { Container, Hero, Main } from '../../components';

// Images
import realtorImg from '../../assets/images/realtor.png';
import placeholderImg from '../../assets/images/placholder.jpg';

// Styles
import { StyledRealtor } from './styles';

export const Realtor = () => {
  return (
    <StyledRealtor>
      <Container>
        <Hero header="Realtor" description="Building a reusable UI component library in React" />
      </Container>
        <Main>
          <section>
            <Container fluid>
              <img src={realtorImg} alt="Realtor.com" />
            </Container>
            <Container>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate est nihil iste esse exercitationem sit, aspernatur voluptatem dolore consequuntur inventore quos. Quod obcaecati, consequatur cumque expedita nesciunt assumenda non!
              </p>
            </Container>
            <Container fluid>
              <img src={placeholderImg} alt="Realtor.com" />
              <img src={placeholderImg} alt="Realtor.com" />
            </Container>
          </section>
        </Main>
    </StyledRealtor>
  );
};
