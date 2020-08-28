import React from "react"
import loadable from "@loadable/component"

import {
  Menu,
  DialogStyledDark,
  DialogStyledLight,
  MenuNavigation,
  MenuNavigationLight,
  MenuNavigationDark,
  FooterCopyrightAuthor,
  HeartIcon,
  closeIcon,
  Close,
} from "./styles"

import { Link } from "gatsby"
const Dialog = loadable(() => import("@material-ui/core/Dialog"))
const Slide = loadable(() => import("@material-ui/core/Slide"))
const Fab = loadable(() => import("@material-ui/core/Fab"))
const MenuRoundedIcon = loadable(() => import("@material-ui/icons/MenuRounded"))
const FavoriteRoundedIcon = loadable(() =>
  import("@material-ui/icons/FavoriteRounded")
)
const CloseRoundedIcon = loadable(() =>
  import("@material-ui/icons/CloseRounded")
)
const Typography = loadable(() => import("@material-ui/core/Typography"))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog({ theme }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
    if (typeof window !== `undefined`) {
      const main = document.querySelector("#main")
      const html = document.querySelector("html")
      html.style.overflowY = "hidden"
      main.classList.add("blur")
    }
  }

  const handleClose = () => {
    setOpen(false)
    if (typeof window !== `undefined`) {
      const main = document.querySelector("#main")
      const html = document.querySelector("html")
      main.classList.remove("blur")
      html.style.overflowY = "auto"
    }
  }

  return (
    <div>
      <Fab
        size="medium"
        color="secondary"
        aria-label="Menu"
        css={Menu}
        id="menu"
        onClick={handleClickOpen}
      >
        <MenuRoundedIcon />
      </Fab>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        css={theme === "light" ? DialogStyledLight : DialogStyledDark}
      >
        <MenuNavigation
          css={theme === "light" ? MenuNavigationLight : MenuNavigationDark}
        >
          <Fab
            size="small"
            aria-label="close"
            css={Close}
            onClick={handleClose}
          >
            <CloseRoundedIcon css={closeIcon} />
          </Fab>
          <ul>
            <li>
              <Link to="/" onClick={handleClose}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/categories" onClick={handleClose}>
                Danh mục
              </Link>
            </li>
            <li>
              <Link to="/archives" onClick={handleClose}>
                Lưu trữ
              </Link>
            </li>
            <li>
              <Link to="/tags" onClick={handleClose}>
                Thẻ
              </Link>
            </li>
            <li>
              <a
                href="https://duongnamtruong.com"
                target="_blank"
                rel="noreferrer"
              >
                Tác giả
              </a>
            </li>
          </ul>
        </MenuNavigation>
        <div className="menu-copyright">
          <Typography color="textPrimary">
            Bản quyền © {new Date().getFullYear()}. Được tạo nên từ{" "}
            <FavoriteRoundedIcon css={HeartIcon} fontSize="inherit" /> của
            <FooterCopyrightAuthor
              href="https://www.facebook.com/truongduongg99/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Dương Nam Trường
            </FooterCopyrightAuthor>
          </Typography>
        </div>
      </Dialog>
    </div>
  )
}
