import React, { useState } from "react"
import loadable from "@loadable/component"

import { css } from "@emotion/core"
import smoothscroll from "smoothscroll-polyfill"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

const Fab = loadable(() => import("@material-ui/core/Fab"))
const AddIcon = loadable(() => import("@material-ui/icons/Add"))
const Zoom = loadable(() => import("@material-ui/core/Zoom"))
const ExpandLessRoundedIcon = loadable(() =>
  import("@material-ui/icons/ExpandLessRounded")
)
const FullScreenDialog = loadable(() => import("./Dialogs/Dialogs"))
const DarkMode = loadable(() => import("./DarkMode"))

if (typeof window !== `undefined`) {
  smoothscroll.polyfill()
}

const Options = css`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 100;
`
const ToTop = css`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  z-index: 99;
  transition: transform 0.45s ease-in-out;
`

function ScrollTop(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  function handleScroll() {
    if (typeof window !== `undefined`) {
      if (!trigger) {
        const iconX = document.querySelector(".menu button")
        const iconMenu = document.querySelector("#menu")
        const iconToTop = document.querySelector("#to-top")
        const iconSwitchMode = document.querySelector("#switch-mode")

        if (iconX) {
          iconX.classList.add("reseted")
          iconX.style.transform = "rotate(0deg)"
          iconMenu.style.transform = "translateY(0px)"
          iconMenu.style.transform = "scale(0.1)"
          iconToTop.style.transform = "translateY(0px)"
          iconToTop.style.transform = "scale(0.1)"
          iconSwitchMode.style.transform = "translateY(0px)"
          iconSwitchMode.style.transform = "scale(0.1)"
          setTimeout(() => {
            iconMenu.style.visibility = "hidden"
            iconToTop.style.visibility = "hidden"
            iconSwitchMode.style.visibility = "hidden"
          }, 200)
        }
      }
    }
  }

  return (
    <Zoom in={trigger}>
      <div
        role="presentation"
        css={Options}
        className="menu"
        onScroll={handleScroll()}
      >
        {children}
      </div>
    </Zoom>
  )
}

const BackTop = props => {
  const [isClicked, setStatus] = useState(false)
  const { theme, toggleTheme } = props

  const handleOptionsClick = () => {
    if (typeof window !== `undefined`) {
      const iconX = document.querySelector(".menu button")
      const iconMenu = document.querySelector("#menu")
      const iconToTop = document.querySelector("#to-top")
      const iconSwitchMode = document.querySelector("#switch-mode")
      if (!isClicked) {
        iconX.style.transition = "transform 0.3s ease-in-out"
        iconX.style.transform = "rotate(45deg)"
        iconMenu.style.visibility = "visible"
        iconMenu.style.transform = "translateY(-60px)"
        iconToTop.style.visibility = "visible"
        iconToTop.style.transform = "translateY(-120px)"
        iconSwitchMode.style.visibility = "visible"
        iconSwitchMode.style.transform = "translateY(-180px)"
        setStatus(true)
      } else if (isClicked && iconX.classList.contains("reseted")) {
        iconX.style.transition = "transform 0.3s ease-in-out"
        iconX.style.transform = "rotate(45deg)"
        iconMenu.style.visibility = "visible"
        iconMenu.style.transform = "translateY(-60px)"
        iconToTop.style.visibility = "visible"
        iconToTop.style.transform = "translateY(-120px)"
        iconSwitchMode.style.visibility = "visible"
        iconSwitchMode.style.transform = "translateY(-180px)"
        iconX.classList.remove("reseted")
      } else {
        iconX.style.transform = "rotate(0deg)"
        iconMenu.style.transform = "translateY(0px)"
        iconMenu.style.transform = "scale(0.1)"
        iconToTop.style.transform = "translateY(0px)"
        iconToTop.style.transform = "scale(0.1)"
        iconSwitchMode.style.transform = "translateY(0px)"
        iconSwitchMode.style.transform = "scale(0.1)"
        setTimeout(() => {
          iconMenu.style.visibility = "hidden"
          iconToTop.style.visibility = "hidden"
          iconSwitchMode.style.visibility = "hidden"
        }, 200)
        setStatus(false)
      }
    }
  }

  const handleToTopClick = () => {
    const anchor = document.querySelector("#main")

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <ScrollTop {...props}>
        <Fab
          size="medium"
          color="secondary"
          aria-label="Options"
          onClick={handleOptionsClick}
        >
          <AddIcon />
        </Fab>
      </ScrollTop>
      <FullScreenDialog theme={theme} />
      <Fab
        size="medium"
        color="secondary"
        aria-label="To top"
        onClick={handleToTopClick}
        css={ToTop}
        id="to-top"
      >
        <ExpandLessRoundedIcon />
      </Fab>
      <DarkMode theme={theme} toggleTheme={toggleTheme} />
    </>
  )
}

export default BackTop
