import React from 'react';

// Components
import { Display, Headline } from '../Type';
import { Container } from '../Container';

// Styles
import { StyledContact } from './styles';

export const Contact = ({ ...props }) => {
  return (
    <StyledContact id="dontContactMe" {...props}>
      <Container>
        <Display as="h2">Don't Contact Me</Display>
        <Headline as="p">Please. Don’t.</Headline>
      </Container>
    </StyledContact>
  );
};
