import React from 'react';
import { Text as RNText } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

interface TextProps {
  text: string | number;
  style?: StyleProp<TextStyle>;
}

export function Text({ text, style }: TextProps) {
  return <RNText style={style}>{`${text}`}</RNText>;
}
