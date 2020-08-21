import React, { useContext } from "react"
import { ThemeContext } from "../layout"
import {
  HeroContainer,
  IconMouse,
  ButtonScroll,
  HeroContainerDark,
  HeroContainerLight,
  IconMouseLight,
  IconMouseDark,
} from "./styles"

const handleClick = () => {
  const anchor = document.querySelector("#main")

  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const HeroScroll = () => {
  const theme = useContext(ThemeContext)

  return (
    <HeroContainer
      css={theme === "light" ? HeroContainerLight : HeroContainerDark}
    >
      <ButtonScroll onClick={handleClick}>
        <IconMouse css={theme === "light" ? IconMouseLight : IconMouseDark} />
      </ButtonScroll>
    </HeroContainer>
  )
}

export default HeroScroll
