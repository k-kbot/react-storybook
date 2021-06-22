import React from 'react';
import '../../index.css';

const Square = ({ onClick, value, id }) => {
  return (
    <button
      className="square"
      onClick={onClick}
      data-e2e={`button-${id}`}
    >
      {value}
    </button>
  );
}

export default Square;
