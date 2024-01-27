import { useState } from 'react';
import updateReactionData from './updateReactionData';

const useReactionData = (like, dislike, id) => {
  const [countLike, setCountLike] = useState(like);
  const [countDisLike, setCountDisLike] = useState(dislike);
  const handleClickLike = async () => {
    const data = await updateReactionData(id, 'like');
    const newLike = data?.like;
    setCountLike(newLike);
  };

  const handleClickDisLike = async () => {
    const data = await updateReactionData(id, 'dislike');
    const newDisLike = data?.dislike;
    setCountDisLike(newDisLike);
  };

  return { countLike, countDisLike, handleClickLike, handleClickDisLike };
};

export default useReactionData;
