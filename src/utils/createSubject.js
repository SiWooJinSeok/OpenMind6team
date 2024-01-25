import requestApi from './requestApi';
// TODO: api 따로 분리
/** 입력한 이름을 API POST 요청으로 id를 가져온 후 로컬 스토리지에 저장, 생성된 응답 객체 반환
 *
 * @param {state} inputName 메인 페이지에서 입력한 이름
 * @return response object
 */
const createSubject = async (inputName) => {
  const subjectName = { name: inputName };
  const data = await requestApi('subjects/', 'post', subjectName);

  localStorage.setItem('subjectId', data.id);

  return data;
};

export default createSubject;
