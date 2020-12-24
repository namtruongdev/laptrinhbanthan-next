import React, { ReactElement } from 'react';

import Hero from './Hero';
import HeroScroll from './Hero-scroll';
import Nav from './Nav';

const Header = ({ strings }): ReactElement => {
  return (
    <header>
      <Nav />
      <Hero strings={strings} />
      <HeroScroll />
    </header>
  );
};

export default Header;
