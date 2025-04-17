import type { ButtonProps } from '../components/button/button';
import { colors, type ThemeColors } from './colors';
import { space, type ThemeSpace } from './space';
import { text } from './text';

export interface Theme {
  colors: ThemeColors;
  space: ThemeSpace;
  text: any;
  components?: {
    button: ButtonProps;
  };
}

export const theme: Theme = {
  colors,
  space,
  text,
};
