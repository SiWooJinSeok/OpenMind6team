import styled from 'styled-components';
import ShareButton from '../atoms/Button/ShareButton';

export default function ShareButtonBox() {
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
