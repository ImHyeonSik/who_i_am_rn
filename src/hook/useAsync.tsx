import React, { useCallback, useEffect, useState } from 'react';

const useAsync = <T,>(
  asyncCallback: () => Promise<T>,
  deps: any[] = [],
): [Error | null, () => void] => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    asyncCallback().catch(setError);
  }, deps);

  const resetError = useCallback(() => setError(null), []);

  return [error, resetError];
};
export default useAsync;
