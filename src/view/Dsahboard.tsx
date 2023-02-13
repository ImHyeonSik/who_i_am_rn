import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text, TouchableOpacity, NativeModules } from 'react-native';

import CalendarModule from '../nativeModules/CalendarModule';

const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();

const Dashboard = () => {
  // useTimeout(() => call(), 10, 0);

  const call = async () => {
    console.log(DEFAULT_EVENT_NAME);
    try {
      const eventId: any = await CalendarModule.createCalendarEvent('hyeonsik', 'my home');
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => {}}>
        <Text>fwwf</Text>
      </TouchableOpacity>
      <Button title={'native module button'} color="#841584" onPress={call} />
    </SafeAreaView>
  );
};
export default Dashboard;
