import styled from 'styled-components';
import imageData from '../../../assets/imageData';

export default function EmptyBox() {
  return (
    <Box>
      <img src={imageData.box} alt="질문이 없습니다" />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 65px;
`;
