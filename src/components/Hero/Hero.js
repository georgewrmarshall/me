import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import { Display, Headline } from '../Type';

// Styles
import { StyledHero } from "./styles";

export const Hero = ({ header, description, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  return (
    <StyledHero loaded={loaded} {...props}>
      <Display as="h1"><span>{header}</span></Display>
      <Headline as="p"><span>{description}</span></Headline>
    </StyledHero>
  );
};

Hero.propTypes = {
  /**
   * The header of the page
   */
  header: PropTypes.string,
  /**
   * The description of the page
   */
  description: PropTypes.string,
};
