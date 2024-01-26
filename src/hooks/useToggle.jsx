import { useEffect, useState } from 'react';

const useToggle = () => {
  const [isModalClicked, setIsModalClicked] = useState(false);
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

  return [isModalClicked, toggleModal];
};

export default useToggle;
