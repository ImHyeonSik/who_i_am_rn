import React, { useCallback, useState } from 'react';

const useToggle = (initialValue: boolean, deps: any[] = []) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => setValue(!value), deps);
  return [value, toggleValue];
};
export default useToggle;
