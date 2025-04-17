import { useContext } from 'react';
import { theme as defaultTheme } from '../theme/theme';
import { ThemeContext } from '../context/theme-context';

function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    return defaultTheme;
  }
  return theme;
}

export default useTheme;
