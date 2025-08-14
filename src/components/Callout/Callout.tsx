import React from 'react';
import { Link as GLink } from 'gatsby';

import { Headline, Button, Container } from '..';
import { StyledCallout } from './styles';

interface CalloutProps {
  header?: string;
  btnText?: string;
  btnLink?: string;
  [key: string]: any;
}

export const Callout = ({
  header,
  btnText,
  btnLink,
  ...props
}: CalloutProps) => {
  return (
    <StyledCallout {...props}>
      <Container>
        <Headline mb={4} as="h2">
          {header}
        </Headline>
        <Button as={GLink} to={btnLink}>
          {btnText}
        </Button>
      </Container>
    </StyledCallout>
  );
};
