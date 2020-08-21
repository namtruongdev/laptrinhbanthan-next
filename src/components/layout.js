import React, { createContext } from "react"
import loadable from "@loadable/component"
import PropTypes from "prop-types"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { useDarkMode } from "../hooks"

const Footer = loadable(() => import("./Footer"))
const BackTop = loadable(() => import("./BackTop"))

export const ThemeContext = createContext(null)

const Layout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === "light" ? "light" : "dark"
  const textColor =
    theme === "light" ? "rgba(0,0,0,0.87)" : `rgba(255, 255, 255, 0.87)`
  if (!componentMounted) {
    return <div />
  }

  const themeUI = createMuiTheme({
    palette: {
      type: themeMode,
      text: {
        primary: textColor,
      },
    },
  })

  return (
    <ThemeProvider theme={themeUI}>
      <CssBaseline />

      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>

      <Footer theme={theme}></Footer>
      <BackTop theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
