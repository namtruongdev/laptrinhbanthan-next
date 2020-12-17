import React, { ReactElement } from 'react';
import { SwitchModeIcon, Sunny, Moon } from './styles';
import { Theme } from '../../types';

type DarkModeProps = {
  theme: Theme;
  toggleTheme: () => Function;
};
const DarkMode = ({ theme, toggleTheme }: DarkModeProps): ReactElement => {
  console.log(theme);
  return (
    <SwitchModeIcon
      size="medium"
      color="secondary"
      aria-label="swicthMode"
      id="switch-mode"
      onClick={toggleTheme}
      theme={theme}
    >
      {theme === 'light' ? <Sunny /> : <Moon />}
    </SwitchModeIcon>
  );
};

export default DarkMode;
