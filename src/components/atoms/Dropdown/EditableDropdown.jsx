import { useState } from 'react';
import styled from 'styled-components';
import MoreImg from '../../../assets/img/More.svg';
import EditImg from '../../../assets/img/Edit.svg';
import EditBlack from '../../../assets/img/EditBlack.svg';
import EditBlue from '../../../assets/img/EditBlue.svg';

export default function EditableDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={handleDropdownToggle}
        style={{ backgroundImage: `url(${MoreImg})` }}
      />
      {isDropdownOpen ? (
        <DropdownMenu>
          <MenuItemButton type="button">
            <Image src={EditImg} alt="수정하기" />
            수정하기
          </MenuItemButton>
          <MenuItemButton type="button">
            <Image src={EditImg} alt="삭제하기" />
            삭제하기
          </MenuItemButton>
        </DropdownMenu>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Button = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-size: cover;
`;

const DropdownMenu = styled.div`
  background-color: var(--Grayscale-10);
  position: absolute;
  top: 20px;
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

const Image = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;
const MenuItemButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--Grayscale-50);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;
  gap: 0.8rem;
  margin: 0.6rem 0.5rem;

  &:hover {
    color: black;

    ${Image} {
      content: url(${EditBlack});
    }
  }

  &:active {
    color: #1877f2;

    ${Image} {
      content: url(${EditBlue});
    }
  }
`;
