import React from "react"

import Hero from "./hero"
import HeroScroll from "./hero-scroll"
import Nav from "./nav"

const Header = ({ strings }) => {
  return (
    <header>
      <Nav />
      <Hero strings={strings} />
      <HeroScroll />
    </header>
  )
}

export default Header
