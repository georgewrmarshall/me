import React from 'react';

// Components
import { Container, Hero, Main } from '../../components';

// Styles
import { StyledContact } from './styles';

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <Hero header="Contact" description="Drop me a line" />
        <Main>
          <section>
            <p css={`margin-bottom: 3rem;`}>
              I'm currently living in the small surf town of <a href="https://www.google.com/maps/place/Ucluelet,+BC/@48.9410902, -125.5991609,13z/data=!3m1!4b1!4m5!3m4!1s0x548973b97150e2bb:0xdb5f97b887c7db84!8m2!3d48.9415997!4d-125.5463446" target="_blank" rel="noopener noreferrer">Ucluelet, BC</a>. I always enjoy hearing about new projects so send me an email or connect with me on <a href="https://www.linkedin.com/in/georgewrmarshall/">Linkedin</a>.
            </p>
            <h2>You can contact me via</h2>
            <p css={`margin-bottom: 3rem;`}>
              <strong>m.</strong> +1 236 886 7214 <br />
              <strong>e.</strong> georgewrmarshall@gmail.com <br />
            </p>
            <p>
              Thanks for visiting! <span role="img" aria-label="sheep">✌️</span>
            </p>
          </section>
        </Main>
      </Container>
    </StyledContact>
  );
};
