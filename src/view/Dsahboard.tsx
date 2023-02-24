import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  NativeModules,
  Platform,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';

import AlertModule from '../nativeModules/Alert';
import CalendarModule from '../nativeModules/CalendarModule';
import ToastModules from '../nativeModules/ToastModules';

const Dashboard = () => {
  // useTimeout(() => call(), 10, 0);
  const [dimension, setDimension] = useState(Dimensions.get('window'));

  useEffect(() => {
    console.log('dashboard window size ', dimension.width);
  }, []);

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
      <View style={css.buttonContainer}>
        <Pressable
          style={{
            backgroundColor: 'green',
            width: dimension.width * 0.4,
            alignItems: 'center',
          }}
          onPress={call}
        >
          <Text style={{ color: 'white' }}>only android Toast</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: 'red',
            width: dimension.width * 0.4,
            alignItems: 'center',
          }}
          onPress={toast}
        >
          <Text style={{ color: 'white' }}>only iOS Alert</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const css = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Dashboard;
