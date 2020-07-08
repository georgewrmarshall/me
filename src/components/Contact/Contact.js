import React from 'react';
import PropTypes from 'prop-types';

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

Contact.propTypes = {
  /**
   * The header of the page
   */
  header: PropTypes.string,
  /**
   * The description of the page
   */
  description: PropTypes.string,
};
