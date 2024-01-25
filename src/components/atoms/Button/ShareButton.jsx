import styled from 'styled-components';
import kakaoLogo from '../../../assets/img/kakaoLogo.svg';
import facebookLogo from '../../../assets/img/facebookLogo.svg';
import copyLinkLogo from '../../../assets/img/copyLinkLogo.svg';

/** SNS 공유 버튼
 * @param { string } category 'copy' or 'kakao' or 'facebook'
 * @returns SNS Share Button
 */
export default function ShareButton({ category, onClick }) {
  const BUTTON_COLOR = {
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
    <Button onClick={onClick} color={BUTTON_COLOR[category]}>
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
