import styled from 'styled-components';

const InputTextArea = ({ width, height, placeholder, handler, value }) => {
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
};

const Textarea = styled.textarea`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: #f9f9f9;
  resize: none;

  &:focus {
    outline: 1px solid #542f1a;
  }
`;
export default InputTextArea;
