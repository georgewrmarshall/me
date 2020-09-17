import React, { useState, useEffect } from 'react';
import { Link as GLink } from 'gatsby';

// Components
import {
  Button,
  Display,
  Title,
  Main,
  Box,
  Headline,
  Body,
  Container,
  Footer,
  Link
} from '../../components';

// Images
import realtorImg from '../../assets/images/realtor.svg';

// Styles
import { StyledHome, StyledHomeHero, StyledGraphic } from './styles';

export const Home = () => {
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    setCollapse(true);
  }, [collapse]);
  return (
    <StyledHome>
      <StyledHomeHero collapse={collapse}>
        <Container>
          <StyledGraphic collapse={collapse} viewBox="0 0 314 314" overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="graphic-bg" d="M0.000976562 222.416L52.3327 248.584L104.667 222.416V314L157 287.834V140.179L183.167 125.227V314L235.499 287.834V140.179L261.666 125.227V314L313.999 287.834V130.834L274.75 104.667L232.479 128.821L196.25 104.667L153.982 128.821L117.75 104.667L78.501 117.75L104.667 130.834V209.335L93.4522 214.941L52.3327 196.25V39.2498L104.667 13.0827V52.3339L157 78.501V26.1669L104.667 0.000999451L0.000976562 52.3339V222.416Z" />
            <path className="graphic-1" d="M261.666 313.998L287.833 271.358L314 287.832L261.666 313.998Z" />
            <path className="graphic-2" d="M287.833 144.886L313.999 130.833V287.832L287.833 271.358V144.886Z" />
            <path className="graphic-3" d="M261.666 125.227V313.998L287.833 271.358V144.887L274.75 115.042L261.666 125.227Z" />
            <path className="graphic-4" d="M313.999 130.833L287.833 144.886L274.75 115.042V104.667L313.999 130.833Z" />
            <path className="graphic-5" d="M274.75 104.667V115.042L231.779 134.285L232.479 128.821L274.75 104.667Z" />
            <path className="graphic-6" d="M261.666 125.227L235.5 140.179L231.779 134.285L274.75 115.042L261.666 125.227Z" />
            <path className="graphic-7" d="M196.25 104.667V116.744L209.333 144.886L231.779 134.285L232.48 128.821L196.25 104.667Z" />
            <path className="graphic-8" d="M235.5 287.832L209.333 271.358V144.886L231.779 134.285L235.5 140.178V287.832Z" />
            <path className="graphic-9" d="M183.167 313.998L209.333 271.358L235.5 287.832L183.167 313.998Z" />
            <path className="graphic-10" d="M183.167 125.227L196.25 116.744L209.333 144.886V271.358L183.167 313.998V125.227Z" />
            <path className="graphic-11" d="M153.981 128.821L196.25 104.667V116.744L149.488 135.921L153.981 128.821Z" />
            <path className="graphic-12" d="M157 140.178L183.167 125.226L196.25 116.744L149.488 135.921L157 140.178Z" />
            <path className="graphic-13" d="M104.667 313.998L130.833 271.358L157 287.832L104.667 313.998Z" />
            <path className="graphic-14" d="M157 287.832L130.833 271.358V144.886L149.488 135.921L157 140.178V287.832Z" />
            <path className="graphic-15" d="M117.75 104.667L153.98 128.821L149.489 135.921L130.833 144.886L117.75 121.142V104.667Z" />
            <path className="graphic-16" d="M78.5 117.75L117.75 121.142V104.667L78.5 117.75Z" />
            <path className="graphic-17" d="M104.667 130.833L78.5 117.75L117.75 121.142L123.09 130.833H104.667Z" />
            <path className="graphic-18" d="M104.667 130.833H123.09L130.833 144.886V271.358L104.667 314V130.833Z" />
            <path className="graphic-19" d="M93.4524 214.941L104.667 209.333V222.416H93.4524V214.941Z" />
            <path className="graphic-21" d="M52.3329 248.582V222.416H93.4524H104.667L52.3329 248.582Z" />
            <path className="graphic-22" d="M52.3329 196.25L93.4524 214.941V222.416H52.3329L25.7552 206.91L52.3329 196.25Z" />
            <path className="graphic-23" d="M52.3329 248.582L0 222.416L25.7552 206.91L52.3329 222.416V248.582Z" />
            <path className="graphic-24" d="M0 52.3329V222.416L25.7552 206.91V68.7467L0 52.3329Z" />
            <path className="graphic-25" d="M52.3329 39.25V196.25L25.7552 206.908V68.7467L44.3126 39.25H52.3329Z" />
            <path className="graphic-26" d="M0 52.3329L25.7552 68.7467L44.3126 39.25L104.586 7.08674V0L0 52.3329Z" />
            <path className="graphic-27" d="M44.3138 39.25H52.3329L104.586 13.0841V7.08795L44.3138 39.25Z" />
            <path className="graphic-28" d="M157 26.1671L134.225 40.9468L104.586 7.08674V0L157 26.1671Z" />
            <path className="graphic-29" d="M104.586 52.3329L134.225 40.9468L104.586 7.08673V52.3329Z" />
            <path className="graphic-30" d="M157 78.5L134.225 40.9468L157 26.1671V78.5Z" />
            <path className="graphic-31" d="M104.586 52.3329L134.225 40.9468L157 78.5L104.586 52.3329Z" />
          </StyledGraphic>
          <Display as="h1">
            <div>
              <span>George</span>
            </div>
            <div>
              <span>Marshall</span>
            </div>
          </Display>
          <Title as="h2">
            <div>Front-end Developer / Designer</div>
          </Title>
          <div className="btn-container"><Button as={GLink} to="/work" data-link-name="work">See Work</Button></div>
        </Container>
      </StyledHomeHero>
      <Main className="main">
        <Box as="section" mb={{ _: 3, md: 6 }}>
          <Container fluid>
            <Headline mb={4}>Featured Work</Headline>
            <Box as="img" width={1} mb={4} src={realtorImg} alt="Realtor.com" />
            <Headline>Realtor.com</Headline>
            <Body>Building a reusable UI component library in React.</Body>
            <Link to="/work/realtor">See Project</Link>
          </Container>
        </Box>
      </Main>
      <Footer />
    </StyledHome>
  );
};
