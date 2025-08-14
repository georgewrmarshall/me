import React from 'react';

import { Headline, Body, Link, Box, Info } from '..';
import { StyledCard } from './styles';

interface CardProps {
  children?: React.ReactNode;
  header: string;
  info?: string;
  description: string;
  imgSrc: string;
  link: string;
  [key: string]: any;
}

export const Card = ({
  children,
  header,
  info,
  description,
  imgSrc,
  link,
  ...props
}: CardProps) => {
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
      {info && <Info className="info">{info}</Info>}
      <Headline>{header}</Headline>
      <Body>{description}</Body>
      <Link as="span">See Project →</Link>
    </StyledCard>
  );
};

