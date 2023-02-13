import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Dashboard from '../view/Dsahboard';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Dashboard} name={'Dashboard'} />
    </Stack.Navigator>
  );
};
export default MainStack;
