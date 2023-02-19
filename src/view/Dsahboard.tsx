import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  NativeModules,
  Platform,
} from 'react-native';

import AlertModule from '../nativeModules/Alert';
import CalendarModule from '../nativeModules/CalendarModule';
import ToastModules from '../nativeModules/ToastModules';

const Dashboard = () => {
  // useTimeout(() => call(), 10, 0);

  const call = async () => {
    // if (Platform.OS === 'android') {
    // console.log(DEFAULT_EVENT_NAME);
    try {
      const eventId: number = await CalendarModule.createCalendarEvent('siksik', 'my pppp');
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
    // }
    // else {
    //   await CalendarModule.createCalendarEvent('hyeonsik', 'my home');
    // }
  };

  const toast = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (Platform.OS === 'android') {
      const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();
      const { LONG, SHORT } = ToastModules.getConstants();
      console.log('toast ,, ', SHORT, LONG);
      ToastModules.show('hiiihii', SHORT);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      AlertModule.alert('hyeon ssisisik ');
      console.log({
        string: AlertModule.STRING_VALUE,
        number: AlertModule.NUMBER_VALUE,
      });
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => {}}>
        <Text>fwwf</Text>
      </TouchableOpacity>
      <Button title={'native module button'} color="#841584" onPress={call} />
      <Button title={'native toast '} color="red" onPress={toast} />
    </SafeAreaView>
  );
};
export default Dashboard;
