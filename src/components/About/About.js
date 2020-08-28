import React from 'react';

// Components
import { Container, Hero, Main } from '../../components';

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
          <section>
            <img
              src={profileImg}
              alt="George Marshall"
              className="img-profile"
            />
            <h2>Front-end Developer / Designer</h2>
            <p>
              I am a Front-end developer with a background in design. I create
              pixel perfect web apps with intuitive, simple user experiences. I
              have a strong taste for good design and constantly challenge
              myself to learn new skills and technologies.
            </p>
            <p>
              I started my career in New Zealand as a graphic designer in 2010.
              It was here I discovered my passion for simple, intuitive design
              and front-end development. Throughout my career I have
              continuously sought new challenges both in life and in work.
            </p>
          </section>
        </Main>
      </Container>
    </StyledAbout>
  );
};
