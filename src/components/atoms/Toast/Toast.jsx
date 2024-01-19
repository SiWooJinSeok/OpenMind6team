import styled from 'styled-components';
/**
 *
 * @returns URL 복사 버튼을 클릭하면 나오는 Toast
 */
export default function Toast() {
  return (
    <Wrapper>
      <Text>URL이 복사되었습니다</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--Grayscale-60, #000);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Text = styled.span`
  color: var(--Grayscale-10, #fff);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
`;
