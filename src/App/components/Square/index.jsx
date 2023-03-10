import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Square() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue('X');
  };

  return (
    <button
      type="button"
      className="square"
      onClick={handleClick}
    >
      { value }
    </button>
  );
}
Square.propTypes = {};

export default Square;
