import dynamic from 'next/dynamic';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import smoothscroll from 'smoothscroll-polyfill';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
const FullScreenDialog = dynamic(() => import('./Dialogs/Dialogs'));
const DarkMode = dynamic(() => import('./DarkMode'));
import { AppProps } from '../interface';

if (typeof window !== `undefined`) {
  smoothscroll.polyfill();
}

const Options = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 100;
`;
const ToTop = styled(Fab)`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  z-index: 99;
  transition: transform 0.45s ease-in-out;
`;

const ScrollTop = ({ children }: AppProps): ReactElement => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleScroll = () => {
    if (typeof window !== `undefined`) {
      if (!trigger) {
        const iconX = document.querySelector<HTMLElement>('.menu button');
        const iconMenu = document.querySelector<HTMLElement>('#menu');
        const iconToTop = document.querySelector<HTMLElement>('#to-top');
        const iconSwitchMode = document.querySelector<HTMLElement>(
          '#switch-mode'
        );

        if (iconX) {
          iconX.classList.add('reseted');
          iconX.style.transform = 'rotate(0deg)';
          iconMenu.style.transform = 'translateY(0px)';
          iconMenu.style.transform = 'scale(0.1)';
          iconToTop.style.transform = 'translateY(0px)';
          iconToTop.style.transform = 'scale(0.1)';
          iconSwitchMode.style.transform = 'translateY(0px)';
          iconSwitchMode.style.transform = 'scale(0.1)';
          setTimeout(() => {
            iconMenu.style.visibility = 'hidden';
            iconToTop.style.visibility = 'hidden';
            iconSwitchMode.style.visibility = 'hidden';
          }, 200);
        }
      }
    }
  };

  return (
    <Zoom in={trigger}>
      <Options role="presentation" className="menu" onScroll={handleScroll}>
        {children}
      </Options>
    </Zoom>
  );
};

const BackTop = (props): ReactElement => {
  const { theme, toggleTheme } = props;
  const [isClicked, setStatus] = useState<boolean>(false);

  const handleOptionsClick = (): void => {
    if (typeof window !== `undefined`) {
      const iconX = document.querySelector<HTMLElement>('.menu button');
      const iconMenu = document.querySelector<HTMLElement>('#menu');
      const iconToTop = document.querySelector<HTMLElement>('#to-top');
      const iconSwitchMode = document.querySelector<HTMLElement>(
        '#switch-mode'
      );
      if (!isClicked) {
        iconX.style.transition = 'transform 0.3s ease-in-out';
        iconX.style.transform = 'rotate(45deg)';
        iconMenu.style.visibility = 'visible';
        iconMenu.style.transform = 'translateY(-60px)';
        iconToTop.style.visibility = 'visible';
        iconToTop.style.transform = 'translateY(-120px)';
        iconSwitchMode.style.visibility = 'visible';
        iconSwitchMode.style.transform = 'translateY(-180px)';
        setStatus(true);
      } else if (isClicked && iconX.classList.contains('reseted')) {
        iconX.style.transition = 'transform 0.3s ease-in-out';
        iconX.style.transform = 'rotate(45deg)';
        iconMenu.style.visibility = 'visible';
        iconMenu.style.transform = 'translateY(-60px)';
        iconToTop.style.visibility = 'visible';
        iconToTop.style.transform = 'translateY(-120px)';
        iconSwitchMode.style.visibility = 'visible';
        iconSwitchMode.style.transform = 'translateY(-180px)';
        iconX.classList.remove('reseted');
      } else {
        iconX.style.transform = 'rotate(0deg)';
        iconMenu.style.transform = 'translateY(0px)';
        iconMenu.style.transform = 'scale(0.1)';
        iconToTop.style.transform = 'translateY(0px)';
        iconToTop.style.transform = 'scale(0.1)';
        iconSwitchMode.style.transform = 'translateY(0px)';
        iconSwitchMode.style.transform = 'scale(0.1)';
        setTimeout(() => {
          iconMenu.style.visibility = 'hidden';
          iconToTop.style.visibility = 'hidden';
          iconSwitchMode.style.visibility = 'hidden';
        }, 200);
        setStatus(false);
      }
    }
  };

  const handleToTopClick = () => {
    const anchor = document.querySelector<HTMLElement>('#main');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      <ToTop
        size="medium"
        color="secondary"
        aria-label="To top"
        onClick={handleToTopClick}
        id="to-top"
      >
        <ExpandLessRoundedIcon />
      </ToTop>
      <DarkMode theme={theme} toggleTheme={toggleTheme} />
    </>
  );
};

export default BackTop;
