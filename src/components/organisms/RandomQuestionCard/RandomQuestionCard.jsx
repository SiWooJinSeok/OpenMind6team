import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imageData from '../../../assets/imageData';
import useRandomQuestionCard from './useRandomQuestionCard.hook';

/**
 * 실험적인 기능입니다!!
 * @param {onRandomCardCloseClick : event handler, 클릭하면 랜덤 카드가 닫힙니다.} param0
 * @param {showRandomCard : boolean, 랜덤 카드가 보이는지 안보이는지 여부를 결정합니다.} param1
 * @returns RandomQuestionCard Component
 */

export default function RandomQuestionCard({
  onRandomCardCloseClick,
  showRandomCard,
}) {
  const { randomCardData } = useRandomQuestionCard();

  if (!showRandomCard) {
    return null;
  }
  return (
    <Wrapper onClick={onRandomCardCloseClick}>
      <CardFlip to={`/post/${randomCardData?.id}`}>
        <Card>
          <CardFront>마우스를 올려보세요</CardFront>
          <CardBack>
            <ImgBox>
              <img src={randomCardData?.imageSource} alt="랜덤카드 이미지" />
            </ImgBox>
            <ContentBox>
              <UserName>{randomCardData?.name}</UserName>
              <UserQuestionCount>
                <img src={imageData.messageIcon} alt="메시지 아이콘" />
                <div>{randomCardData?.questionCount}</div>
              </UserQuestionCount>
            </ContentBox>
          </CardBack>
        </Card>
      </CardFlip>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
`;

const CardFlip = styled(Link)`
  font-family: Pretendard;
  padding: 0;
  width: 210px;
  height: 270px;
  perspective: 1100px;
`;

const CardFront = styled.div`
  border: 1px solid var(--Grayscale-30);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background-color: var(--Grayscale-60);
  color: var(--Grayscale-10);
  border-radius: 22px;
  position: absolute;
  backface-visibility: hidden;
`;

const ContentBox = styled.div`
  padding: 24px;
  width: 100%;
  height: 50%;
  position: absolute;
  transform: translateY(200%);
  transition: all 0.3s ease-in-out;
  background-color: var(--Grayscale-30);
  border-radius: 22px;
`;

const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--Grayscale-60);
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }

  &:hover ${ImgBox} {
    transform: translateY(-50%);
  }

  &:hover ${ContentBox} {
    transform: translateY(66%);
  }
`;

const CardBack = styled.div`
  border: 2px solid var(--Grayscale-60);
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: white;
  border-radius: 22px;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const UserName = styled.p`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const UserQuestionCount = styled.p`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
