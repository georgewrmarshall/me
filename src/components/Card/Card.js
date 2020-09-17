import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Headline, Body, Link, Box } from '..';

// Styles
import { StyledCard } from './styles';

export const Card = ({
  children,
  header,
  description,
  imgSrc,
  link,
  ...props
}) => {
  return (
    <StyledCard to={link} {...props}>
      <Box
        as="img"
        width={1}
        maxWidth="100%"
        mb={4}
        src={imgSrc}
        alt={header} 
      />
      <Headline>{header}</Headline>
      <Body>{description}</Body>
      <Link as="div">See Project</Link>
    </StyledCard>
  );
};

Card.propTypes = {
  /**
   * The header of the Card
   */
  header: PropTypes.string,
  /**
   * The description of the Card
   */
  description: PropTypes.string,
  /**
   * The src of the image
   */
  imgSrc: PropTypes.string,
  /**
   * The link of the card
   */
  link: PropTypes.string,
};
