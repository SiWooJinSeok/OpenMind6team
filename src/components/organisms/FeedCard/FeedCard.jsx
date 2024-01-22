import FeedCardItem from './FeedCardItem';

export default function FeedCard({ questions }) {
  return (
    <p>
      {questions.map((question) => {
        return (
          <li>
            <FeedCardItem question={question} />
          </li>
        );
      })}
    </p>
  );
}
