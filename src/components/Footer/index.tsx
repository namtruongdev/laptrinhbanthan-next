import dynamic from 'next/dynamic';

import React from 'react';
import {
  FooterWrap,
  FooterLine,
  FooterSocial,
  FooterFb,
  FooterTele,
  FooterGithub,
  FooterYandex,
  FooterCopyright,
  FooterCopyrightAuthor,
  HeartIcon,
} from './styles';

import { Divider, IconButton } from '@material-ui/core';

const FacebookIcon = dynamic(() => import('@material-ui/icons/Facebook'));
const TelegramIcon = dynamic(() => import('@material-ui/icons/Telegram'));
const GitHubIcon = dynamic(() => import('@material-ui/icons/GitHub'));
const MailOutlineRoundedIcon = dynamic(
  () => import('@material-ui/icons/MailOutlineRounded')
);

const Footer = ({ theme }) => (
  <FooterWrap>
    <FooterLine maxWidth="sm">
      <Divider variant="middle" />
    </FooterLine>
    <FooterSocial maxWidth="lg">
      <a
        href="https://www.facebook.com/truongduongg99/"
        target="_blank"
        rel="noreferrer"
        title="Facebook"
      >
        <FooterFb aria-label="facebook">
          <FacebookIcon />
        </FooterFb>
      </a>
      <a
        href="https://t.me/truongduong99"
        target="_blank"
        rel="noreferrer"
        title="Telegram"
      >
        <FooterTele aria-label="telegram">
          <TelegramIcon />
        </FooterTele>
      </a>
      <a
        href="https://github.com/namtruongdev"
        target="_blank"
        rel="noreferrer"
        title="Github"
      >
        <FooterGithub theme={theme}>
          <GitHubIcon />
        </FooterGithub>
      </a>
      <a
        href="mailto:hi@duongnamtruong.com"
        target="_blank"
        rel="noreferrer"
        title="Email"
      >
        <FooterYandex aria-label="email">
          <MailOutlineRoundedIcon />
        </FooterYandex>
      </a>
    </FooterSocial>
    <FooterCopyright maxWidth="lg">
      <p>
        Bản quyền © {new Date().getFullYear()}. Được tạo nên từ{' '}
        <HeartIcon fontSize="inherit" /> của
        <FooterCopyrightAuthor
          href="https://www.facebook.com/truongduongg99/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Dương Nam Trường
        </FooterCopyrightAuthor>
      </p>
    </FooterCopyright>
  </FooterWrap>
);

export default Footer;
