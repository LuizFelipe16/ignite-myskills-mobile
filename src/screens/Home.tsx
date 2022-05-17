import React, { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, StatusBar } from 'react-native';
import generateId from 'react-native-uuid';

import { Button, Text, SkillCard } from '../components';
import { Skill } from '../types';
import { onMount, theme, Theme } from '../_app';

// NOTE FlatList para lidar com lista, pois scroll view carrega tudo, 10 elementos, até o que não visualizamos
// enquanto o flat só aquilo que visualizamos e o resto carrega aos poucos, ganho performance

// NOTE useState traz impacto de re-render para a aplicação, além de armazenar um estado

// NOTE handle -> convenção, função dsparada por uma ação do usuário

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<Skill[]>([]);

  const [greeting, setGreeting] = useState('');

  onMount(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good night!');
    }
  });

  const handleAddNewSkill = (): Skill => {
    const data: Skill = {
      id: generateId.v4(),
      name: newSkill,
      created_at: new Date(),
    };

    setMySkills(oldSkills => [...oldSkills, data]);
    setNewSkill('');

    return data;
  };

  const handleDeleteSkill = (id: string): void => {
    setMySkills(oldSkills => oldSkills.filter(skill => skill.id !== id));
    return;
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <View style={componentStyles.wrapper}>
        <Text
          text="Welcome, Creator"
          style={[componentStyles.title, Theme.mtLg]}
        />
        <Text text={greeting} style={[Theme.mtXm]} />
        <TextInput
          style={componentStyles.input}
          placeholder="New skill"
          placeholderTextColor={theme.colors.input.placeholder}
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} text="add" />

        <View style={[componentStyles.headerSkills, Theme.mtLg]}>
          <Text text="My Skills" style={componentStyles.title} />
          <Text
            text={mySkills.length <= 0 ? 'No skills found' : mySkills.length}
            style={componentStyles.headerSkillsText}
          />
        </View>

        <FlatList
          data={mySkills} // NOTE a coleção de dados pro map automático
          keyExtractor={item => `${item.name}:${item.id}`} // NOTE para colocar em cada item a key determinada
          renderItem={({ item }) => (
            <SkillCard
              onPress={() => handleDeleteSkill(item.id)}
              skill={item}
            />
          )}
          style={componentStyles.skillsList}
        />
      </View>
    </>
  );
}

const componentStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: theme.spacing.size(3),
    paddingVertical: theme.spacing.size(1),
    paddingBottom: theme.spacing.size(4),
    backgroundColor: theme.colors.black,
    ...Theme.column,
  },
  title: {
    fontSize: theme.font.size(3),
    ...theme.font.colorPrimary,
    ...Theme.fontBolder,
  },
  headerSkills: {
    width: theme.width.full,
    ...Theme.row,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.size(2),
  },
  headerSkillsText: {
    color: theme.colors.input.placeholder,
  },
  input: {
    width: theme.width.full,
    backgroundColor: theme.colors.input.background,
    color: theme.colors.white,
    fontSize: theme.font.size(2),
    borderRadius: theme.presets.border.small,
    ...theme.paddingFull.sm,
    ...theme.marginTop.md,
  },
  skillsList: {
    width: theme.width.full,
    height: theme.height.full,
  },
});
