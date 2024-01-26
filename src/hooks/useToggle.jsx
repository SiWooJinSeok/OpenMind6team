import { useEffect } from 'react';

/**
 * 모달창이 띄워지면 스크롤 방지, 토글 함수 반환
 * @param {boolean} isModalClicked 모달창이 띄워져 있는지 여부
 * @param {function} setIsModalClicked isModalClicked 상태 변경 함수
 * @returns {function} toggleModal
 */
const useToggle = (isModalClicked, setIsModalClicked) => {
  const toggleModal = () => {
    setIsModalClicked((prev) => !prev);
  };
  // 스크롤바 영역 보존
  document.documentElement.style.scrollbarGutter = 'stable';

  // 모달창이 띄워지면 스크롤 방지
  useEffect(() => {
    if (isModalClicked) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalClicked]);

  return toggleModal;
};

export default useToggle;
