import { useState } from 'react';

const useCardSortDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return { isDropdownOpen, setIsDropdownOpen, toggleDropdown };
};

export default useCardSortDropdown;
