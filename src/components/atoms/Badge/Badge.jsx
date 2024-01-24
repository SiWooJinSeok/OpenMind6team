import styled from 'styled-components';
/**
 *
 * @param {boolean} isAnswered 답변완료 or 미답변
 * @returns 답변완료 or 미답변 Badge
 */
export default function Badge({ isAnswered }) {
  const badgeText = isAnswered ? '답변완료' : '미답변';
  const color = isAnswered
    ? 'var(--Brown-40, #542F1A)'
    : 'var(--Grayscale-40, #818181)';
  return (
    <Wrapper color={color}>
      <Text color={color}>{badgeText}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.color};
  background: var(--Grayscale-10, #fff);

  width: 76px;
  height: 26px;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;
