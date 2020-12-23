import React, { ReactElement } from 'react';

import Hero from './Hero';
import HeroScroll from './hero-scroll';
import Nav from './nav';

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
