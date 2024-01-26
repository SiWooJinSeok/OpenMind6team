import thumbsDownSelectedIcon from '../../../assets/img/thumbs-down-selected.svg';
import thumbsDownIcon from '../../../assets/img/thumbs-down.svg';
import { ThumbsButton, ThumbsIcon, ThumbsText } from './Shared';

/**
 *
 * @param {isDisliked : boolean || count = Number} param0
 * @returns ThumbsDown Component
 */

export default function ThumbsDown({ isDisliked = true, count = 0 }) {
  const thumbImg = isDisliked ? thumbsDownSelectedIcon : thumbsDownIcon;
  const textColor = isDisliked ? 'var(--Grayscale-60)' : 'var(--Grayscale-40)';

  return (
    <ThumbsButton>
      <ThumbsIcon
        src={thumbImg}
        $isDisliked={isDisliked}
        alt="싫어요 버튼 이미지"
      />
      <ThumbsText $textColor={textColor}>
        싫어요 {count !== 0 ? count : null}
      </ThumbsText>
    </ThumbsButton>
  );
}
