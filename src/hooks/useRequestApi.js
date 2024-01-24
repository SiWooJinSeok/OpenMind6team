import { useEffect, useState } from 'react';
import requestApi from '../utils/requestApi';
/** path, method, data 를 받아서 응답 받은 data, isLoading, errorMessage state를 반환
 *
 * @param {string} path
 * @param {string} method
 * @param {object} postData
 * @returns data, isLoading, errorMessage
 */
const useRequestApi = (path, method, postData = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState(null);

  useEffect(async () => {
    setIsLoading(true);
    try {
      const result = await requestApi(path, method, postData);
      setData(result);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [path]);

  return { data, isLoading, errorMessage };
};

export default useRequestApi;
