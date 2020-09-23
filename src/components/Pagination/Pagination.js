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
          <span>← Prev</span>
          <span>← See Previous Project</span>
        </Link>
      )}
      {linkNext && (
        <Link to={linkNext} ml="auto">
          <span>Next →</span>
          <span>See Next Project →</span>
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
