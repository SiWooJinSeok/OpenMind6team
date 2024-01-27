import { useEffect, useState } from 'react';
import requestApi from '../utils/requestApi';
import { SORT_TIME } from '../constants/question_list_page_sort';

/**
 *
 * @returns data, isLoading, error, totalPage, currentPage, handleLeftArrowClick, handleRightArrowClick, handleSortButtonClick, handlePageClick
 */

const useQuestionListPageData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;
  const offset = (currentPage - 1) * limit;
  const [sort, setSort] = useState(SORT_TIME);

  const [UserCardListData, setUserCardListData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);

  const handleSortButtonClick = (value) => {
    setSort(value);
    setCurrentPage(1);
  };

  const handleLeftArrowClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => {
      return prev - 1;
    });
  };

  const handlePageClick = (value) => {
    setCurrentPage(() => {
      return value;
    });
  };

  const handleRightArrowClick = () => {
    if (currentPage === totalPage) {
      return;
    }
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await requestApi(
          `subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
          'get',
        );
        setTotalPage(Math.ceil(result.count / limit));
        setUserCardListData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [offset, sort, limit]);

  return {
    currentPage,
    sort,
    UserCardListData,
    totalPage,
    isLoading,
    error,
    handleLeftArrowClick,
    handleRightArrowClick,
    handleSortButtonClick,
    handlePageClick,
  };
};

export default useQuestionListPageData;
