// https://openmind-api.vercel.app/3-6/subjects/?limit=8&offset=0&sort=name

import axios from 'axios';

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
