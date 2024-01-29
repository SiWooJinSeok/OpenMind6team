import axios from 'axios';

const API_BASE_HOST = 'openmind-api.vercel.app/3-6';
/** API 호출 로직
 *
 * @param {string} path 'subjects' or 'answers' or 'questions'
 * @param {string} method 'get' or 'post' or 'delete'
 * @param {object} postData POST 요청일때 body로 보낼 객체
 * @returns 응답받은 Promise 객체
 */
const requestApi = async (path, method, postData = {}) => {
  const config = {
    method,
    url: `https://${API_BASE_HOST}/${path}`,
  };

  if (method !== 'get') {
    config.headers = {
      'Content-Type': 'application/json',
    };
    config.data = postData;
  }
  try {
    const response = await axios(config);
    const result = await response.data;
    return result;
  } catch (error) {
    throw new Error('데이터를 가져오는데 실패했습니다.');
  }
};

export default requestApi;
