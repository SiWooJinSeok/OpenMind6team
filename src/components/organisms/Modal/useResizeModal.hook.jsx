import { useEffect, useState } from 'react';

/**
 * 모달창 모바일 사이즈 반응형 훅
 * @returns {string} inputTextArea에 전달될 height
 */
const useResizeModal = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState('180px');

  // debounce
  useEffect(() => {
    if (width < 768) {
      setHeight('358px');
    }
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
        if (window.innerWidth < 768) {
          setHeight('358px');
        } else {
          setHeight('180px');
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return height;
};

export default useResizeModal;
