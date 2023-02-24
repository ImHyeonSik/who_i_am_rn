import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import MainTab from './MainTab';
import Dashboard from '../view/Dsahboard';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen component={Dashboard} name={'Dashboard'} />*/}
      <Stack.Screen component={MainTab} name={'MainTab'} />
    </Stack.Navigator>
  );
};
export default MainStack;
