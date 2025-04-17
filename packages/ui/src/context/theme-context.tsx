import merge from 'deepmerge';
import { createContext } from 'react';
import { theme as defaultTheme, type Theme } from '../theme/theme';

export const ThemeContext = createContext(defaultTheme);

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Partial<Theme>;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const mergedTheme: Theme = merge(defaultTheme, theme || {});
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
