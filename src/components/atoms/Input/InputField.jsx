import React from 'react';
import styled from 'styled-components';
import imageData from '../../../assets/imageData';
import RowFlexCenter from './Share';
/**
 *
 * @param {placeholder : string, type : string, value : state, handler : setState } param0
 * @returns InputField item
 */

export default function InputField({ placeholder, type, value, handler }) {
  const handleOnChange = (event) => {
    handler(event.target.value);
  };
  return (
    <Box>
      <img src={imageData.PersonIcon} alt="사람모양 아이콘" />
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleOnChange}
      />
    </Box>
  );
}

InputField.defaultProps = {
  placeholder: '이름을 입력해주세요',
  type: 'text',
};

const Box = styled(RowFlexCenter)`
  max-width: 336px;
  width: 100%;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid #818181;
  background: #fff;
  padding: 12px 16px;
  &:focus-within {
    border: 1px solid #542f1a;
  }
  @media screen and (max-width: 756px) {
    max-width: 257px;
  }
`;
const Input = styled.input`
  width: 100%;
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  border: none;
  &:focus {
    color: #818181;
    outline: none;
  }
`;
