import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/ThemeSlice';
import { useTheme } from '../Context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { editButtonBackgroundColor, editButtonColor } = useTheme();

  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.editButton,{ backgroundColor: editButtonBackgroundColor}]} onPress={()=>{
            dispatch(toggleTheme())
        }}>
            <Text style={[styles.editButtonText,{color:editButtonColor}]}>Toggle Theme</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
  editButton :{
    padding:5,
    borderWidth:1,
    width:120,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  editButtonText :{
 }  
});

export default ThemeToggle;
