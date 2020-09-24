import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Headline, Body, Link, Box, Info } from '..';

// Styles
import { StyledCard } from './styles';

export const Card = ({
  children,
  header,
  info,
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
        mb={3}
        src={imgSrc}
        alt={header}
      />
      {info && <Info>{info}</Info>}
      <Headline>{header}</Headline>
      <Body>{description}</Body>
      <Link as="span">See Project →</Link>
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
