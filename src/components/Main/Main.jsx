import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Styles
import { StyledMain } from "./styles";

export const Main = ({ children, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  return (
    <StyledMain loaded={loaded} {...props}>
      {children}
    </StyledMain>
  );
};

Main.propTypes = {
  /**
   * The content of main
   */
  children: PropTypes.node,
};
