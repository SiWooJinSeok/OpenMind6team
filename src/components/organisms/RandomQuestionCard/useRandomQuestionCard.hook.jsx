import useRequestApi from '../../../hooks/useRequestApi';

/**
 *
 * @returns randomCard : object
 */

export default function useRandomQuestionCard() {
  const { data } = useRequestApi('subjects/?limit=100&offset=0', 'get');

  let randomCard;
  if (data?.results?.length) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    randomCard = data.results[randomIndex];
  }

  return { randomCard };
}
