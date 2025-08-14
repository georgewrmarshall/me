import React, { useEffect, useState } from "react";

import { StyledMain } from "./styles";

interface MainProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Main = ({ children, ...props }: MainProps) => {
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

