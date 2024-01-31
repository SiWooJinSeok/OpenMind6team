export const copyClipBoard = async (url, callback) => {
  try {
    await navigator.clipboard.writeText(url);
    callback();
  } catch (error) {
    return null;
  }
  return null;
};

export const shareFacebook = (url) => {
  const sharedLink = encodeURIComponent(url);
  window.open(
    `http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`,
    '_blank',
    'popup,noopener,noreferrer',
  );
};

export const shareKakao = (url) => {
  if (!window.Kakao.isInitialized()) {
    const key = process.env.REACT_APP_API_KEY;
    window.Kakao.init(key);
  }
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'OpenMind',
      description: '익명 질문 페이지',
      imageUrl:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcggoVV%2FbtsEdJMHK8G%2FijEfXEeXhpXsyFyjpkSSL0%2Fimg.png',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: url,
        webUrl: url,
      },
    },
  });
};
