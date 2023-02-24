import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Dashboard from '../view/Dsahboard';
import SecondView from '../view/SecondView';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName={'Dashboard'}>
      <Tab.Screen component={Dashboard} name={'Dashboard'} />
      <Tab.Screen component={SecondView} name={'SecondView'} />
    </Tab.Navigator>
  );
};
export default MainTab;
