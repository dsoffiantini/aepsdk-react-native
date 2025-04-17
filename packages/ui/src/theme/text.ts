import { colors } from './colors';

export const text = {
  body: {
    color: colors.secondary,
    fontSize: 13,
    fontWeight: 'regular',
  },
  button: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'regular',
  },
  title: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: 700,
  },
};

export type TextVariant = keyof typeof text;
