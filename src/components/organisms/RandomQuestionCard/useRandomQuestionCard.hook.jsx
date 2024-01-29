import useRequestApi from '../../../hooks/useRequestApi';

/**
 *
 * @returns randomCardData : object
 */

export default function useRandomQuestionCard() {
  const { data } = useRequestApi('subjects/?limit=100&offset=0', 'get');

  let randomCardData;
  if (data?.results?.length) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    randomCardData = data.results[randomIndex];
  }

  return { randomCardData };
}
