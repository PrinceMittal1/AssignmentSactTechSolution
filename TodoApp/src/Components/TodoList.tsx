import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/slices/todoSlice';
import { RootState } from '../redux/store';
import { useTheme } from '../Context/ThemeContext';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const { editButtonBackgroundColor, editButtonColor, inputColor } = useTheme();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleEdit = (id: string, title: string, description: string) => {
    setEditingId(id);
    setNewTitle(title);
    setNewDescription(description);
  };

  const handleSaveEdit = (id: string) => {
    dispatch(editTodo({ id, title: newTitle, description: newDescription }));
    setEditingId(null);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <View>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoContainer}>
          {editingId === todo.id ? (
            <>
              <TextInput
                style={[styles.input,{color:inputColor}]}
                value={newTitle}
                onChangeText={setNewTitle}
                placeholder="Edit Title"
              />
              <TextInput
                style={[styles.input, styles.description,{color:inputColor}]}
                value={newDescription}
                onChangeText={setNewDescription}
                placeholder="Edit Description"
                multiline
              />
              <Button title="Save" onPress={() => handleSaveEdit(todo.id)} />
            </>
          ) : (
            <>
              <TouchableOpacity onPress={() => dispatch(toggleTodo(todo.id))}>
                <Text style={[styles.title, todo.completed && styles.completed,{color:inputColor}]}>
                  {todo.title}
                </Text>
                <Text style={[styles.description,{color:inputColor}]}>{todo.description}</Text>
              </TouchableOpacity>
              <View style={styles.actions}>
                <TouchableOpacity style={[styles.editButton,{ backgroundColor: editButtonBackgroundColor}]} onPress={()=>{
                    handleEdit(todo.id, todo.title, todo.description)
                }}>
                    <Text style={[styles.editButtonText,{color:editButtonColor}]}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.editButton,{ backgroundColor: editButtonBackgroundColor}]} onPress={()=>{
                    dispatch(deleteTodo(todo.id))
                }}>
                    <Text style={[styles.editButtonText,{color:editButtonColor}]}>Delete</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton :{
    padding:5,
    borderWidth:1,
    width:80,
    height:40,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  editButtonText :{
 }  
});

export default TodoList;
