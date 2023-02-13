import { useEffect } from 'react';

const useTimeout = (callback: () => void, duration: number, deps: any[] = []) => {
  useEffect(() => {
    const id = setTimeout(callback, duration * 1000);

    return () => clearTimeout(id);
  }, [duration, ...deps]);
};
export default useTimeout;
