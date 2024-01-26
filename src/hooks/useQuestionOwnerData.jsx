import { useParams } from 'react-router-dom';
import useRequestApi from './useRequestApi';

const useQuestionOwnerData = () => {
  const { id } = useParams();

  const { data: ownerData } = useRequestApi(`subjects/${id}/`, 'get');
  const imageSource = ownerData?.imageSource;
  const name = ownerData?.name;

  return { imageSource, name, id };
};

export default useQuestionOwnerData;
