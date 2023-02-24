import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

import { getBright, setBright } from '../nativeModules/BrightModule';

const SecondView = () => {
  const [value, setValue] = useState(-1);

  const updateValue = async () => {
    const bright: number = await getBright();
    setValue(bright);
  };

  const valueUp = () => {
    setBright(1);
  };

  const valueDown = () => {
    setBright(0.25);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title={'update'} onPress={updateValue} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 50 }}>{value}</Text>
      </View>
      <Button title={'UP'} onPress={valueUp} />
      <Button title={'DOWN'} onPress={valueDown} />
    </SafeAreaView>
  );
};

export default SecondView;
