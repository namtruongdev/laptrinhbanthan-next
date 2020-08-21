import React from "react"
import loadable from "@loadable/component"
import {
  FooterWrap,
  FooterLine,
  FooterSocial,
  FooterFb,
  FooterTele,
  FooterGithub,
  FooterGithubDark,
  FooterYandex,
  FooterCopyright,
  FooterCopyrightAuthor,
  HeartIcon,
} from "./styles"

import { Container, Divider, IconButton } from "@material-ui/core"
const FavoriteRoundedIcon = loadable(() =>
  import("@material-ui/icons/FavoriteRounded")
)
const FacebookIcon = loadable(() => import("@material-ui/icons/Facebook"))
const TelegramIcon = loadable(() => import("@material-ui/icons/Telegram"))
const GitHubIcon = loadable(() => import("@material-ui/icons/GitHub"))
const MailOutlineRoundedIcon = loadable(() =>
  import("@material-ui/icons/MailOutlineRounded")
)

const Footer = ({ theme }) => (
  <FooterWrap>
    <Container maxWidth="sm" css={FooterLine}>
      <Divider variant="middle" />
    </Container>
    <Container maxWidth="lg" css={FooterSocial}>
      <a
        href="https://www.facebook.com/truongduongg99/"
        target="_blank"
        rel="noreferrer"
        title="Facebook"
      >
        <IconButton aria-label="facebook" css={FooterFb}>
          <FacebookIcon />
        </IconButton>
      </a>
      <a
        href="https://t.me/truongduong99"
        target="_blank"
        rel="noreferrer"
        title="Telegram"
      >
        <IconButton aria-label="telegram" css={FooterTele}>
          <TelegramIcon />
        </IconButton>
      </a>
      <a
        href="https://github.com/namtruongdev"
        target="_blank"
        rel="noreferrer"
        title="Github"
      >
        <IconButton
          aria-label="github"
          css={theme === "light" ? FooterGithub : FooterGithubDark}
        >
          <GitHubIcon />
        </IconButton>
      </a>
      <a
        href="mailto:hi@duongnamtruong.com"
        target="_blank"
        rel="noreferrer"
        title="Email"
      >
        <IconButton aria-label="email" css={FooterYandex}>
          <MailOutlineRoundedIcon />
        </IconButton>
      </a>
    </Container>
    <Container maxWidth="lg" css={FooterCopyright}>
      <p>
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
      </p>
    </Container>
  </FooterWrap>
)

export default Footer
