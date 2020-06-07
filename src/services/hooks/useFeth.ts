import { useState, useEffect } from 'react';
import apiAxios from '../http/apiAxios';

function useFeth<TBody = any>(endpont: string) {
  const [isLoadding, setIsLoadding] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<TBody | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoadding(true);
        const request = await apiAxios.get(endpont);
        setData(request.data as TBody);
      } catch (err) {
        console.log('error', err, err.request);
        setError(err);
      } finally {
        setIsLoadding(false);
      }
    })();
  }, [endpont]);

  return { data, isLoadding, error };
}

export default useFeth;
