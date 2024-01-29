import { useState } from 'react';

export default function useShowRandomCard() {
  const [showRandomCard, setShowRandomCard] = useState(false);

  const handleShowRandomCardButtonClick = () => {
    setShowRandomCard(!showRandomCard);
  };

  const handleRandomCardCloseClick = () => {
    setShowRandomCard(false);
  };

  return {
    showRandomCard,
    handleShowRandomCardButtonClick,
    handleRandomCardCloseClick,
  };
}
