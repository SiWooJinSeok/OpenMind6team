import { useState } from 'react';
import styled from 'styled-components';

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
    outline: none;
    border: 1px solid #542f1a;
  }
`;

const InputTextArea = ({ width, height, placeholder }) => {
  const [value, setValue] = useState('');

  const handleTextChange = (e) => {
    setValue(e.target.value);
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

export default InputTextArea;
