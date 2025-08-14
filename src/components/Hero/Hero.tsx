import React, { useEffect, useState } from 'react';

import { Display, Title, Container } from '..';
import { StyledHero } from './styles';

interface HeroProps {
  header?: string;
  description?: string;
  [key: string]: any;
}

export const Hero = ({ header, description, ...props }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  return (
    <StyledHero loaded={loaded} {...props}>
      <Container>
        <Display as="h1">
          <span>{header}</span>
        </Display>
        <Title as="p">
          <span>{description}</span>
        </Title>
      </Container>
    </StyledHero>
  );
};
