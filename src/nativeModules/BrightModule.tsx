import { NativeModules } from 'react-native';

const { BrightModule } = NativeModules;

export const getBright = () => BrightModule.getBright();
export const setBright = (brightness: number) => {
  BrightModule.setBright(brightness);
};
