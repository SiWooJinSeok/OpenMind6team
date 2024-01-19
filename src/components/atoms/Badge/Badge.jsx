import { useEffect, useState } from 'react';
import styled from 'styled-components';
/**
 *
 * @param {boolean} isAnswered 답변완료 or 미답변
 * @returns 답변완료 or 미답변 Badge
 */
export default function Badge({ isAnswered }) {
  const [badgeText, setBadgeText] = useState('미답변');

  useEffect(() => {
    if (isAnswered) {
      setBadgeText('답변완료');
    }
  }, [isAnswered]);
  return (
    <Wrapper $isAnswered={isAnswered}>
      <Text $isAnswered={isAnswered}>{badgeText}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: ${(props) =>
    props.$isAnswered
      ? '1px solid var(--Brown-40, #542F1A)'
      : '1px solid var(--Grayscale-40, #818181)'};
  background: var(--Grayscale-10, #fff);
`;

const Text = styled.span`
  color: ${(props) =>
    props.$isAnswered
      ? 'var(--Brown-40, #542F1A)'
      : 'var(--Grayscale-40, #818181)'};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;
