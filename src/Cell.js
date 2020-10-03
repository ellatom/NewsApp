import React from 'react';
import './css/cell.css';
import PropTypes from 'prop-types';

const Cell = ({ value, onClick }) => (
    <button className ="cell" onClick={onClick}> {value} </button>
);

export default Cell;

Cell.propTypes = {
    value:PropTypes.oneOf(["X","O",null]),
    onClick:PropTypes.func,
  };
  
Cell.defaultProps = {
    value: null
  };
  