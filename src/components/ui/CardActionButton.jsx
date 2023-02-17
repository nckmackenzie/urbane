import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function CardActionButton() {
  return (
    <button className="px-2 py-1 transition-all hover:text-primary hover:scale-110">
      <BsArrowRight size={24} />
    </button>
  );
}

export default CardActionButton;
