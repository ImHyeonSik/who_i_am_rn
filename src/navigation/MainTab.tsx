import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Dashboard from '../view/Dsahboard';
import SecondView from '../view/SecondView';
import ThirdView from '../view/ThirdView';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName={'Dashboard'}>
      <Tab.Screen component={Dashboard} name={'Dashboard'} />
      <Tab.Screen component={SecondView} name={'SecondView'} />
      <Tab.Screen component={ThirdView} name={'ThirdView'} />
    </Tab.Navigator>
  );
};
export default MainTab;
