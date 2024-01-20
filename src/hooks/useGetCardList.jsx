import { useEffect, useState } from 'react';
import getFetch from '../utils/getFetch';

const useGetCardList = () => {
  const [UserCardListData, setUserCardListData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      getFetch(
        'https://openmind-api.vercel.app',
        '/subjects/?limit=8&offset=0&sort=name',
      ).then((result) => {
        console.log(result);
        return setUserCardListData(result);
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { UserCardListData, isLoading, error };
};

export default useGetCardList;
