import React from 'react';

// Components
import { Container, Hero } from '..';

// Styles
import { StyledNotFound } from './styles';

export const NotFound = () => {
  return (
    <StyledNotFound>
      <Container>
        <Hero header="404 Not Found" description="You just hit a route that doesn&#39;t exist... the sadness." />
      </Container>
    </StyledNotFound>
  );
};
