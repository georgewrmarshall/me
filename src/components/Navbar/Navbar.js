import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Components
import { NavLink } from '../NavLink';
import { Container } from '../Container';

// Styles
import { StyledNavbar } from './styles';

export const Navbar = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState('homeless');
  const handleClickToggle = () => {
    setShow(!show);
  };
  const handleSetSection = (section) => {
    setShow(prevState => prevState ? setShow(false) : null);
    return setSection(section);
  }
  return (
    <StyledNavbar show={show} section={section} {...props}>
      <Container fluid>
        <div className="menu">
          <ul>
            <li>
              <NavLink
                activeClass="active"
                to="homeless"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-2}
                duration={500}
                onSetActive={() => handleSetSection('homeless')}
              >
                Homeless
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="shitIveDone"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-2}
                duration={500}
                onSetActive={() => handleSetSection('shitIveDone')}
              >
                Shit I’ve Done
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="inflatedBullshit"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-2}
                duration={500}
                onSetActive={() => handleSetSection('inflatedBullshit')}
              >
                Inflated Bullshit
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="dontContactMe"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-2}
                duration={500}
                onSetActive={() => handleSetSection('dontContactMe')}
              >
                Don’t contact me
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="brand" to="/">
          <svg
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="m171 0l-171 85 0 278 85 42 86-42 0 149 85-43 0-240 43-25 0 308 85-43 0-240 43-25 0 308 85-43 0-256-64-42-69 39-59-39-69 39-59-39-64 21 43 21 0 128-19 9-67-30 0-256 86-43 0 64 85 43 0-85z" />
          </svg>
          <svg
            width="38"
            height="37"
            viewBox="0 0 38 37"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.997 17.5046L32.6989 2.42378L29.4368 0.108887L18.7349 15.1897L3.09035 4.08776L0.775452 7.34985L16.42 18.4518L5.14986 34.3334L8.41195 36.6483L19.6821 20.7667L35 31.6368L37.3149 28.3747L21.997 17.5046Z" />
          </svg>
        </Link>
        <button
          className="btn-menu-toggle"
          type="button"
          aria-label="Toggle Menu"
          onClick={handleClickToggle}
        >
          <div className="icon">
            <div className="icon__bar" />
          </div>
        </button>
      </Container>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  /**
   * The content of the Navbar
   */
  children: PropTypes.node,
};
