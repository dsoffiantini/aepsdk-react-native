import type { ColorValue } from 'react-native';

export interface ThemeColors {
  [key: string]: ColorValue | undefined;
  primary?: ColorValue;
  secondary?: ColorValue;
  button?: ColorValue;
}

export const colors = {
  primary: 'black',
  secondary: 'black',
  button: '#1473E6',
};
