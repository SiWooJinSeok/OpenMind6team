import ShareButton from './ShareButton';

export default {
  title: 'Button/Share',
  component: ShareButton,
};

export const Kakao = () => {
  return <ShareButton category="kakao" />;
};
export const Facebook = () => {
  return <ShareButton category="facebook" />;
};
export const CopyLink = () => {
  return <ShareButton category="copy" />;
};
