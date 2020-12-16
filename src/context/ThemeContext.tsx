import React, { createContext } from 'react';

import { useDarkMode } from '../hooks';
import { Theme } from '../types';
import { AppProps } from '../interface';

const ThemeContextProvider = ({ children }: AppProps) => {
  const [theme] = useDarkMode();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<Theme>('light');

export default ThemeContextProvider;
