import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Square({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="square"
      onClick={onSquareClick}
    >
      { value }
    </button>
  );
}
Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func
};

export default Square;
