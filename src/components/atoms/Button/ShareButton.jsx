import styled from 'styled-components';
import kakaoLogo from '../../../assets/img/kakaoLogo.svg';
import facebookLogo from '../../../assets/img/facebookLogo.svg';
import copyLinkLogo from '../../../assets/img/copyLinkLogo.svg';

export default function ShareButton({ category }) {
  const color = {
    copy: '#542F1A',
    kakao: '#FEE500',
    facebook: '#1877F2',
  };
  const img = {
    copy: copyLinkLogo,
    kakao: kakaoLogo,
    facebook: facebookLogo,
  };

  return (
    <Button color={color[category]}>
      <Logo src={img[category]} />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const Logo = styled.img``;
