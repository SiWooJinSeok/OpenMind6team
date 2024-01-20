import { useState } from 'react';
import styled from 'styled-components';

export default function CardSortDropdown({
  CardSort = '최신순',
  onSortSelect,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Wrapper>
      <DropdownHeader onClick={toggleDropdown} isOpen={isDropdownOpen}>
        {CardSort === 'time' ? '최신순' : '이름순'}
        <DropdownIcon isOpen={isDropdownOpen} />
      </DropdownHeader>
      {isDropdownOpen ? (
        <DropdownContent>
          <Button onClick={() => onSortSelect('time')}>최신순</Button>
          <Button onClick={() => onSortSelect('name')}>이름순</Button>
        </DropdownContent>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.9rem;
  height: 3.4rem;
  padding: 0.8rem 1.2rem;
  border: ${(props) =>
    props.isOpen ? '0.1rem solid black' : '0.1rem solid #818181'};
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: ${(props) => (props.isOpen ? 'black' : '#818181')};
`;

const DropdownIcon = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-left: 0.1rem solid black;
  border-bottom: 0.1rem solid black;
  transform: ${(props) => (props.isOpen ? 'rotate(135deg)' : 'rotate(-45deg)')};
  transition: transform 0.3s ease-in-out;
`;

const DropdownContent = styled.div`
  border: 1px solid var(--Grayscale-40);
  border-radius: 0.8rem;
  padding: 0.6rem 1.6rem;

  margin-top: 0.5rem;
`;

const Button = styled.button`
  display: flex;
  padding: 0.5rem 0;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;

  &:hover {
    color: #1877f2;
  }
`;
