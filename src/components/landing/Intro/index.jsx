import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
// import Logo from "assets/thumbnail/logoAndName"
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Yohh!</h1>
          <h4>I’m Noubissie Landry and I’m a FullStack developer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail> 
          <img src={dev} alt="I’m Noubissie Landry am a Full Stack Developer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper> 
  );
};
