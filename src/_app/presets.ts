import { DEFAULT_SIZE } from './core';

const size = (multiplier: number) => multiplier * DEFAULT_SIZE;

export const presets = {
  myDebugger: {
    borderWidth: 1,
    borderColor: '#f00',
  },

  elevated: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 20,
    shadowOpacity: 0.3,
    elevation: 8,
  },

  border: {
    size: (multiplier: number) => multiplier * DEFAULT_SIZE,
    small: size(1),
    medium: size(2),
    large: size(3),
  },

  hide: {
    display: 'none',
  },
};
