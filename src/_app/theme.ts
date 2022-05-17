import { colors } from './colors';
import { presets } from './presets';
import { DEFAULT_SIZE, app } from './core';

export const size = (multiplier: number) => multiplier * DEFAULT_SIZE;

export const theme = {
  app,
  presets,
  colors,

  width: {
    full: '100%',
  },
  height: {
    full: '100%',
  },

  size: (multiplier: number) => multiplier * DEFAULT_SIZE,

  font: {
    colorPrimary: { color: app.colors.primary },
    size: (multiplier: number) => multiplier * DEFAULT_SIZE,
  },

  spacing: {
    size: (multiplier: number) => multiplier * DEFAULT_SIZE,
  },

  paddingFull: {
    sm: { padding: size(2) },
    md: { padding: size(4) },
    lg: { padding: size(6) },
    xl: { padding: size(10) },
  },

  marginTop: {
    xm: { marginTop: size(1) },
    sm: { marginTop: size(2) },
    md: { marginTop: size(4) },
    lg: { marginTop: size(6) },
    xl: { marginTop: size(10) },
  },
};
