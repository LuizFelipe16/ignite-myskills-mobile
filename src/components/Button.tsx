import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

import { Text } from './Text';
import { Theme, theme } from '../_app';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button({ text, style, onPress, ...rest }: ButtonProps) {
  const styles = StyleSheet.flatten([componentStyles.button, style]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles}
      {...rest}>
      <Text text={text} />
    </TouchableOpacity>
  );
}

const componentStyles = StyleSheet.create({
  button: {
    width: theme.width.full,
    backgroundColor: theme.app.colors.primary,
    borderRadius: theme.presets.border.small,
    ...theme.paddingFull.sm,
    ...theme.marginTop.sm,
    ...Theme.centerRow,
  },
  buttonText: {
    color: theme.colors.white,
  },
});
