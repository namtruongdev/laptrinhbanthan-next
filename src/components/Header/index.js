import React from "react"
import loadable from "@loadable/component"

const Hero = loadable(() => import("./hero"))
const HeroScroll = loadable(() => import("./hero-scroll"))
const Nav = loadable(() => import("./nav"))

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
