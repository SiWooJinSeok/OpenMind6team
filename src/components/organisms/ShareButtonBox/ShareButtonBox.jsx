import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  copyClipBoard,
  shareFacebook,
  shareKakao,
} from '../../../utils/shares';
import Toast from '../../atoms/Toast/Toast';
import ShareButton from '../../atoms/Button/ShareButton/ShareButton';

/**
 *
 * @returns copy, kakao, facebook Share Button을 묶은 Component
 */

export default function ShareButtonBox() {
  // TODO(이시열) : 공유 기능 handler 구현
  const [isToast, setIsToast] = useState(false);
  const subjectId = useParams();
  const url = `${window.location.origin}/post/${subjectId.id}`;
  const handleLinkCopy = () => {
    copyClipBoard(url);
    setIsToast(true);
    setTimeout(() => setIsToast(false), 5000);
  };
  const handleShareToKakao = () => {
    shareKakao(url);
  };
  const handleShareToFacebook = () => {
    shareFacebook(url);
  };
  return (
    <Wrapper>
      <ShareButton category="copy" onClick={handleLinkCopy} />
      <ShareButton category="kakao" onClick={handleShareToKakao} />
      <ShareButton category="facebook" onClick={handleShareToFacebook} />
      <ToastBox $isToast={isToast}>
        <Toast />
      </ToastBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
const ToastFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.1;
  }
`;
const ToastBox = styled.div`
  display: ${(props) => (props.$isToast ? 'block' : 'none')};
  position: absolute;
  top: 380px;
  animation: ${ToastFade} 5s 0.01s 1 linear;
  @media screen and (max-width: 768px) {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: auto;
    bottom: 10%;
  }
`;
