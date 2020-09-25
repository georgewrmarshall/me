import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Link } from '..';

// Styles
import { StyledPagination } from './styles';

export const Pagination = ({ linkPrev, linkNext, ...props }) => {
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

Pagination.propTypes = {
  /**
   * The url for the previous link
   */
  linkPrev: PropTypes.string,
  /**
   * The url for the next link
   */
  linkNext: PropTypes.string,
};
