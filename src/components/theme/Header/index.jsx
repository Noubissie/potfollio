import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';
import { OutboundLink } from 'gatsby-plugin-gtag'
export const Header = () => {
  const [sidebar, toggle] = useState(false);

  return (
    <Wrapper>
      {/* <OutboundLink href='https://potfollio.vercel.app/'>Check out this site!</OutboundLink> */}
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
