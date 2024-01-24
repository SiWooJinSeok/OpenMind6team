import axios from 'axios';

/**
 *
 * @param {* string, 'https://openmind-api.vercel.app/''} host
 * @param {* string} path
 * @param {* string, '/3-6'} team
 * @returns
 */
const getFetch = async (host, path, team = '/3-6') => {
  try {
    const res = await axios({
      method: 'get',
      url: `${host}${team}${path}`,
    });
    if (res.status === 200) {
      const result = await res.data;
      return result;
    }
    throw Error('불러오기 실패');
  } catch (err) {
    return console.error(err);
  }
};

export default getFetch;
