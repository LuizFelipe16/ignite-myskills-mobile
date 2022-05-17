import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

import { Text } from './Text';
import { Theme, theme } from '../_app';
import { Skill } from '../types';

interface SkillCardProps extends TouchableOpacityProps {
  skill: Skill;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={componentStyles.skillButton}
      {...rest}>
      <Text text={skill.name} style={componentStyles.skillText} />
    </TouchableOpacity>
  );
}

const componentStyles = StyleSheet.create({
  skillButton: {
    paddingHorizontal: theme.spacing.size(3),
    paddingVertical: theme.spacing.size(2.5),
    justifyContent: 'center',
    backgroundColor: theme.colors.input.background,
    borderRadius: theme.presets.border.large,
    ...theme.marginTop.sm,
  },
  skillText: {
    fontSize: theme.font.size(2),
    color: theme.colors.white,
    ...Theme.fontThin,
  },
});
