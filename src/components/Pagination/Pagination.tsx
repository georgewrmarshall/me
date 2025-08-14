import React from 'react';

import { Link } from '..';

import { StyledPagination } from './styles';

interface PaginationProps {
  linkPrev?: string;
  linkNext?: string;
  [key: string]: any;
}

export const Pagination = ({ linkPrev, linkNext, ...props }: PaginationProps) => {
  return (
    <StyledPagination {...props}>
      {linkPrev && (
        <Link to={linkPrev}>
          ← Prev Project
        </Link>
      )}
      {linkNext && (
        <Link to={linkNext} ml="auto">
          Next Project →
        </Link>
      )}
    </StyledPagination>
  );
};