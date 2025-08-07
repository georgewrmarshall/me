import React from 'react';
import PropTypes from 'prop-types';
import { Link as GLink } from 'gatsby';

// Components
import { Headline, Button, Container } from '..';

// Styles
import { StyledCallout } from './styles';

export const Callout = ({ header, btnText, btnLink, ...props }) => {
  return (
    <StyledCallout {...props}>
      <Container>
        <Headline mb={4} as="h2">{header}</Headline>
        <Button as={GLink} to={btnLink}>
          {btnText}
        </Button>
      </Container>
    </StyledCallout>
  );
};

Callout.propTypes = {
  /**
   * The header of the page
   */
  header: PropTypes.string,
  /**
   * The link of the button
   */
  btnLink: PropTypes.string,
  /**
   * The text of the button
   */
  btnText: PropTypes.string,
};
