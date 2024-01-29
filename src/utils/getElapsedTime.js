import TIME_IN_MILLISECONDS from '../constants/timeInMilliseconds';

const getElapsedTime = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;

  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)}년 전`;
  }
  if (year <= elapsedTime) {
    return `1년 전`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)}달 전`;
  }
  if (month <= elapsedTime) {
    return `1달 전`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)}일 전`;
  }
  if (day <= elapsedTime) {
    return `1일 전`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)}시간 전`;
  }
  if (hour <= elapsedTime) {
    return `1시간 전`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)}분 전`;
  }
  return `1분 전`;
};

export default getElapsedTime;
