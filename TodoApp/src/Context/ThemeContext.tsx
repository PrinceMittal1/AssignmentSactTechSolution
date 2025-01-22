import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Theme {
  backgroundColor: string;
  color: string;
  buttonColor: string;
  editButtonBackgroundColor: String,
  editButtonColor:String,
  inputColor : String
}

const ThemeContext = createContext<Theme>({
  backgroundColor: '#ffffff',
  color: '#000000',
  buttonColor: '#6200ee',
  editButtonBackgroundColor: 'black',
  editButtonColor:'white',
  inputColor : 'black',
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

  const theme: Theme = {
    backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
    color: isDarkTheme ? '#ffffff' : '#000000',
    buttonColor: isDarkTheme ? '#bb86fc' : '#6200ee',
    editButtonBackgroundColor : isDarkTheme ? 'white' : 'black',
    editButtonColor : isDarkTheme ? 'black' : 'white',
    inputColor : isDarkTheme ?  'white' : 'black',
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
