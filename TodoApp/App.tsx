import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store.ts';
import { ThemeProvider } from './src/Context/ThemeContext';
import HomeScreen from './src/Screen/HomeScreen';

const App: React.FC = () => {

  console.log('Store:', store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <HomeScreen />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;