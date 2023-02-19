import { NativeModules } from 'react-native';
const { ToastModule } = NativeModules;
interface ToastInterface {
  show(message: string, duration: number): any;
  getConstants(): number;
}
export default ToastModule as ToastInterface;
