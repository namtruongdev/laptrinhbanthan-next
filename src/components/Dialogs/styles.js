import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const Menu = css`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  transition: transform 0.3s ease-in-out;
  z-index: 99;
`

export const DialogStyledLight = css`
  .MuiBackdrop-root {
    background: transparent;
  }
  .MuiDialog-paper {
    background: rgba(255, 255, 255, 0.7);
    justify-content: center;
    align-items: center;

    .menu-copyright {
      text-align: center;
      position: absolute;
      bottom: 15px;
      padding: 0 15px;
    }
  }
`
export const DialogStyledDark = css`
  .MuiBackdrop-root {
    background: transparent;
  }
  .MuiDialog-paper {
    background: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;

    .menu-copyright {
      text-align: center;
      position: absolute;
      bottom: 15px;
      padding: 0 15px;
    }
  }
`

export const MenuNavigation = styled.nav`
  ul {
    padding: 0;
    li {
      list-style: none;
      display: inline-block;

      @media (max-width: 700px) {
        & {
          display: block;
          text-align: center;
          margin: 15px 0;
        }
      }
      a {
        text-decoration: none;
        font-size: 1.5rem;
        letter-spacing: 0px;
        padding: 1rem 1.5rem;
        &:hover {
          color: #eb6383;
          transition: 0.3s all ease-in-out;
        }
      }
    }
  }
`
export const MenuNavigationLight = css`
  ul li a {
    color: rgba(0, 0, 0, 0.87);
  }
`
export const MenuNavigationDark = css`
  ul li a {
    color: rgba(255, 255, 255, 0.87);
  }
`

export const FooterCopyrightAuthor = styled.a`
  text-decoration: none;
  color: #eb6383;
  &:hover {
    color: #fa9191;
    transition: ease-in all 0.3s;
  }
`

export const HeartIcon = css`
  fill: red;
  vertical-align: middle;
`

export const closeIcon = css`
  fill: #eb6383;
`
export const Close = css`
  position: absolute;
  right: 30px;
  top: 30px;
  background: #fff;
  &:hover {
    background: #f2f2f2;
  }
`
