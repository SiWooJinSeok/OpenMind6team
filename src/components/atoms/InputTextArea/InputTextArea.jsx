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

  &:focus {
    outline: none;
    border: 1px solid #542f1a;
  }
`;
