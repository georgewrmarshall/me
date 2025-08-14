import React, { useState } from 'react';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import { useLockBodyScroll, useMedia } from 'react-use';

import { NavLink, Container, ThemeToggle, NavbarToggle } from '..';
import { maxWidth } from '../themes/mediaQueries';

import { StyledNavbar } from './styles';

interface NavbarProps {
  [key: string]: any;
}

export const Navbar = ({ ...props }: NavbarProps) => {
  const [show, setShow] = useState(false);
  const darkMode = useDarkMode(false);
  const isMobile = useMedia(maxWidth.md);

  const handleClickToggle = () => {
    setShow(!show);
  };

  useLockBodyScroll(isMobile && show);

  return (
    <StyledNavbar show={show} {...props}>
      <Container fluid>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <ThemeToggle
                checked={darkMode.value}
                onChange={darkMode.toggle}
                id="navbar-theme-toggle"
              />
            </li>
          </ul>
        </div>
        <Link className="brand" to="/" aria-label="GM">
          <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="m171 0l-171 85 0 278 85 42 86-42 0 149 85-43 0-240 43-25 0 308 85-43 0-240 43-25 0 308 85-43 0-256-64-42-69 39-59-39-69 39-59-39-64 21 43 21 0 128-19 9-67-30 0-256 86-43 0 64 85 43 0-85z" />
          </svg>
        </Link>
        <NavbarToggle
          className="toggle"
          onClick={handleClickToggle}
          open={show}
        />
      </Container>
    </StyledNavbar>
  );
};
