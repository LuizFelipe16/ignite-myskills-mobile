import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { Text } from '../components';
import { theme, Theme } from '../_app';

export function Login() {
  return (
    <View style={componentStyles.wrapper}>
      <ImageBackground
        source={require('../images/mobile_background_image.png')}
        resizeMode="cover"
        style={componentStyles.image}>
        <Text text="MySkills" style={componentStyles.title} />
        <Text
          text="my soft and hard skills in one place"
          style={componentStyles.subtitle}
        />

        <TouchableOpacity activeOpacity={0.7} style={componentStyles.button}>
          <Text text="ACCESS" style={componentStyles.buttonText} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const componentStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.app.colors.primary,
    ...Theme.centerColumn,
  },
  image: {
    flex: 1,
    width: theme.width.full,
    height: theme.height.full,
    ...Theme.centerColumn,
  },
  title: {
    fontSize: theme.font.size(5),
    ...Theme.fontBolder,
  },
  subtitle: {
    fontSize: theme.font.size(2),
    ...theme.marginTop.sm,
    ...Theme.fontThin,
  },
  button: {
    width: '85%',
    backgroundColor: theme.app.colors.primary,
    borderRadius: theme.presets.border.large,
    ...theme.paddingFull.sm,
    ...theme.marginTop.lg,
    ...theme.presets.elevated,
    ...Theme.centerRow,
  },
  buttonText: {
    ...Theme.fontBolder,
  },
});
