import { useParams } from 'react-router-dom';
import useRequestApi from './useRequestApi';

/**
 * 질문 대상의 이미지, 이름, id를 반환하는 훅
 * @returns imageSource, name, id
 */
const useQuestionOwnerData = () => {
  const { id } = useParams();

  const { data: ownerData } = useRequestApi(`subjects/${id}/`, 'get');
  const imageSource = ownerData?.imageSource;
  const name = ownerData?.name;

  return { imageSource, name, id };
};

export default useQuestionOwnerData;
