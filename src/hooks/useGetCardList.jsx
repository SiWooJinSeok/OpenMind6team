import { useEffect, useState } from 'react';
import getFetch from '../utils/getFetch';

/**
 *
 * @param {*integer} offset
 * @param {*integer} sort
 * @param {*string (”time” | “name”)*} limit
 * @returns
 */

const useGetCardList = (limit = 8, offset = 0, sort = 'name') => {
  const [UserCardListData, setUserCardListData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      getFetch(
        'https://openmind-api.vercel.app',
        `/subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
      ).then((result) => {
        console.log(result);
        return setUserCardListData(result);
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [offset, sort, limit]);

  return { UserCardListData, isLoading, error };
};

export default useGetCardList;
