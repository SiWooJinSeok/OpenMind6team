import axios from 'axios';

/**
 *
 * @param {string} host default: 'openmind-api.vercel.app'
 * @param {string} path 'subjects' or 'answers' or 'questions'
 * @param {string} method 'GET' or 'POST' or 'DELETE'
 * @param {object} postData POST 요청일때 body로 보낼거
 * @param {string} team default: '3-6'
 * @returns 응답받은 Promise 객체
 */
const getFetch = async (host, path, method, postData, team = '3-6') => {
  try {
    const config = {
      method,
      url: `https://${host}/${team}/${path}/`,
    };

    if (method === 'post') {
      config.headers = {
        'Content-Type': 'application/json',
      };
      config.data = postData;
    }

    const response = await axios(config);

    if (response.status === 200 || response.status === 201) {
      const result = await response.data;
      return result;
    }

    throw Error('불러오기 실패');
  } catch (err) {
    return console.error(err);
  }
};

export default getFetch;
