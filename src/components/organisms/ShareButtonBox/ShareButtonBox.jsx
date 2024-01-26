import styled from 'styled-components';
import ShareButton from '../../atoms/Button/ShareButton/ShareButton';

/**
 *
 * @returns copy, kakao, facebook Share Button을 묶은 Component
 */

export default function ShareButtonBox() {
  // TODO(이시열) : 공유 기능 handler 구현
  return (
    <Wrapper>
      <ShareButton category="copy" />
      <ShareButton category="kakao" />
      <ShareButton category="facebook" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
