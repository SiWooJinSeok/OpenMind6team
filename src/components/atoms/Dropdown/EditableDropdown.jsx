import React, { useState } from 'react';
import styled from 'styled-components';
import MoreImg from '../../../assets/img/More.svg';
import EditImg from '../../../assets/img/Edit.svg';

export default function EditableDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <DropdownWrapper>
      <DropdownButton
        onClick={handleDropdownToggle}
        style={{ backgroundImage: `url(${MoreImg})` }}
      />
      {isDropdownOpen && (
        <DropdownMenu>
          <MenuItem>
            <Image src={EditImg} alt="수정하기" /> 수정하기
          </MenuItem>
          <MenuItem>
            <Image src={EditImg} alt="수정하기" /> 수정하기
          </MenuItem>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  display: flex;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-size: cover;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10.3rem;
  height: 6.8rem;
  padding: 0.4rem;
  border: 0.1rem solid var(--Grayscale-30);
  border-radius: 0.8rem;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--Grayscale-50);
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.8rem;
  gap: 0.8rem;
  margin: 0.6rem 1rem;

  &:hover {
    color: #1877f2;
  }
`;

const Image = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;
