import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
import { useTheme } from '../Context/ThemeContext';

const TodoInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const {editButtonBackgroundColor, editButtonColor, inputColor } = useTheme();
  const handleAddTodo = () => {
    if (title.trim() && description.trim()) {
      dispatch(addTodo({ title: title.trim(), description: description.trim() }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input,{color:inputColor}]}
        placeholder="Task Title"
        value={title}

        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.description,{color:inputColor}]}
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
       <TouchableOpacity style={[styles.editButton,{ backgroundColor: editButtonBackgroundColor}]} onPress={handleAddTodo}>
            <Text style={[styles.editButtonText,{color:editButtonColor}]}>Add Task</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  description: {
    height: 80,
    textAlignVertical: 'top',
  },
  editButton:{
    padding:5,
    borderWidth:1,
    width:'95%',
    alignSelf:'center',
    height:40,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default TodoInput;
