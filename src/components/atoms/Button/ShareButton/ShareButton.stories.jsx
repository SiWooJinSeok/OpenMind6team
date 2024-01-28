import ShareButton from './ShareButton';

export default {
  title: 'Atoms/Button/Share',
  component: ShareButton,
};

export function Kakao() {
  return <ShareButton category="kakao" />;
}
export function Facebook() {
  return <ShareButton category="facebook" />;
}
export function CopyLink() {
  return <ShareButton category="copy" />;
}
