import axios from 'axios';
import { useState } from 'react';

/** API 호출 로직
 *
 * @param {string} host default: 'openmind-api.vercel.app'
 * @param {string} path 'subjects' or 'answers' or 'questions'
 * @param {string} method 'GET' or 'POST' or 'DELETE'
 * @param {object} postData POST 요청일때 body로 보낼 객체
 * @param {string} team default: '3-6'
 * @returns 응답받은 Promise 객체
 */
const getFetch = async (host, path, method, postData = {}, team = '3-6') => {
  const [error, setError] = useState(null);
  // TODO[이시열]: DELETE 로직
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

    throw new Error('불러오기 실패');
  } catch (err) {
    setError(err);
    return error;
  }
};

export default getFetch;
