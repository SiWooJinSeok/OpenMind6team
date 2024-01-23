import styled, { css } from 'styled-components';
import imageData from '../../../assets/imageData';

/**
 *
 * @param {string} imageSource : 이미지 src에 들어갈 이미지
 * @param {string} type : 'userCard' or 'feedCard' or 'profile'
 * @returns type => imgSize
 */
export default function UserProfileImage({ type, imageSource }) {
  return <Img src={imageSource} type={type} />;
}
UserProfileImage.defaultProps = {
  type: 'userCard',
  imageSource: imageData.defaultProfile,
};
const TYPE = {
  userCard: css`
    width: 60px;
    height: 60px;
    @media screen and (max-width: 768px) {
      width: 48px;
      height: 48px;
    }
  `,
  feedCard: css`
    width: 48px;
    height: 48px;
    @media screen and (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  `,
  profile: css`
    width: 136px;
    height: 136px;
    @media screen and (max-width: 768px) {
      width: 104px;
      height: 104px;
    }
  `,
  questionModal: css`
    width: 28px;
    height: 28px;
  `,
};

const Img = styled.img`
  border-radius: 104px;

  ${(props) => TYPE[props.type]}
`;
