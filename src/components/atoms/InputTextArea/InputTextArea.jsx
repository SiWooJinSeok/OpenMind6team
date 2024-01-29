import styled from 'styled-components';

export default function InputTextArea({
  width,
  height,
  placeholder,
  handler,
  value,
}) {
  const handleTextChange = (e) => {
    handler(e.target.value);
  };

  return (
    <Textarea
      width={width}
      height={height}
      value={value}
      onChange={handleTextChange}
      placeholder={placeholder}
    />
  );
}

const Textarea = styled.textarea`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 1.6rem;
  border: none;
  border-radius: 0.8rem;
  background-color: var(--Grayscale-20);
  resize: none;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
  font-size: 1.6rem;

  &:focus {
    outline: 1px solid #542f1a;
  }
`;
