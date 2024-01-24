import { useEffect, useState } from 'react';
import requestApi from '../utils/requestApi';

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
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    try {
      setIsLoading(true);
      requestApi(
        'openmind-api.vercel.app',
        `subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
      ).then((result) => {
        setTotalPage(Math.ceil(result.count / limit));
        return setUserCardListData(result);
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [offset, sort, limit]);

  return { UserCardListData, totalPage, isLoading, error };
};

export default useGetCardList;
