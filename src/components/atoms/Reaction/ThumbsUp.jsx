import thumbsUpIcon from '../../../assets/img/thumbs-up.svg';
import thumbsUpSelectedIcon from '../../../assets/img/thumbs-up-selected.svg';
import { ThumbsButton, ThumbsIcon, ThumbsText } from './Shared';

/**
 *
 * @param {isLiked : boolean || count: Number} param0
 * @returns ThumbsUp Component
 */

export default function ThumbsUp({
  handleClickLike,
  isLiked = true,
  count = 0,
}) {
  const thumbImg = isLiked ? thumbsUpSelectedIcon : thumbsUpIcon;
  const textColor = isLiked ? 'var(--Blue-50)}' : 'var(--Grayscale-40)';

  return (
    <ThumbsButton onClick={handleClickLike}>
      <ThumbsIcon src={thumbImg} $isLiked={isLiked} alt="좋아요 버튼 이미지" />
      <ThumbsText $textColor={textColor}>
        좋아요 {count !== 0 ? count : null}
      </ThumbsText>
    </ThumbsButton>
  );
}
