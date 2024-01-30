import { useState } from 'react';
import EditableDropdown from './EditableDropdown';
import imageData from '../../../assets/imageData';

export default {
  title: 'Atoms/Dropdown/EditableDropdown',
  component: EditableDropdown,
};

export function Default(args) {
  // state와 해당 handler 함수는 직접 선언해줘야한다.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return <EditableDropdown {...args} onClick={handleDropdownToggle} />;
}

// mock데이터 느낌으로 만들어서 넣어준다
Default.args = {
  firstChildren: {
    onClick: () => {},
    imageSource: imageData.editIcon,
    text: '수정하기',
  },
  secondChildren: {
    onClick: () => {},
    imageSource: imageData.closeIcon,
    text: '삭제하기',
  },
};
