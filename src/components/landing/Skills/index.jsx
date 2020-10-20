import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Noubissie Landry a Fullstack Developerr!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
              <a href="https://github.com/onimur/handle-path-oz">
                <img width="85%" align="right" alt="Onimur's github stats" src="https://github-readme-stats.vercel.app/api?username=Noubissie&show_icons=true&hide_border=true&theme=radical" />
              </a>
              
            
              <img width="30%" src="https://www.vectorlogo.zone/logos/python/python-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"/>
              <br />
              <img width="30%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/json/json-ar21.svg"/>
              <br />
              <img width="30%" src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"/>
              <br />
              <img width="30%" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/yaml/yaml-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/docker/docker-official.svg"/>
            </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
