import { useState } from 'react';
import requestApi from '../utils/requestApi';
import useEffectOnce from './useEffectOnce';

const useSubjectData = (path) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await requestApi(path, 'get');
      if (!result) {
        return;
      }
      setData(result);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffectOnce(getData);

  return { data, isLoading, errorMessage };
};

export default useSubjectData;
