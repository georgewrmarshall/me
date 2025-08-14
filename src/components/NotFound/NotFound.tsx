import React from 'react';

import { Container, Hero } from '..';

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