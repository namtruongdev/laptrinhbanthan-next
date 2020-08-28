import React from "react"
import loadable from "@loadable/component"

import { SwitchModeSunnyIcon, SwitchModeMoonIcon, Sunny, Moon } from "./styles"

const Fab = loadable(() => import("@material-ui/core/Fab"))
const WbSunnyRoundedIcon = loadable(() =>
  import("@material-ui/icons/WbSunnyRounded")
)
const NightsStayRoundedIcon = loadable(() =>
  import("@material-ui/icons/NightsStayRounded")
)

const DarkMode = ({ theme, toggleTheme }) => {
  return (
    <Fab
      size="medium"
      color="secondary"
      aria-label="swicthMode"
      css={theme === "light" ? SwitchModeSunnyIcon : SwitchModeMoonIcon}
      id="switch-mode"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <WbSunnyRoundedIcon css={Sunny} />
      ) : (
        <NightsStayRoundedIcon css={Moon} />
      )}
    </Fab>
  )
}

export default DarkMode
