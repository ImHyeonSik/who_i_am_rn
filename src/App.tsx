import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import MainStack from './navigation/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
