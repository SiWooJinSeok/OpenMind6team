import { useState } from 'react';
import EditableDropdown from './EditableDropdown';
import imageData from '../../../assets/imageData';

export default {
  title: 'Atoms/Dropdown/EditableDropdown',
  component: EditableDropdown,
};

export function Default() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const firstChildren = {
    onClick: () => {},
    imageSource: imageData.editIcon,
    text: '수정하기',
  };

  const secondChildren = {
    onClick: () => {},
    imageSource: imageData.closeIcon,
    text: '삭제하기',
  };

  return (
    <EditableDropdown
      onClick={handleDropdownToggle}
      isOpen={isDropdownOpen}
      firstChildren={firstChildren}
      secondChildren={secondChildren}
    />
  );
}
