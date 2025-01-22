import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../Context/ThemeContext';
import TodoInput from '../Components/TodoInput';
import TodoList from '../Components/TodoList';
import ThemeToggle from '../Components/ThemeToggle';

const HomeScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <ThemeToggle />
      <TodoInput />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
