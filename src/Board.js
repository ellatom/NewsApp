import React from 'react';
import Cell from './Cell';
import './css/board.css';
import PropTypes from 'prop-types';


const Board = ({ board, onClick }) => (
     
    <div className="board"> 
        {board.map((cell, index) => {
                               return <Cell 
                                        key={index} 
                                        value={cell} 
                                        onClick={() => onClick(index)} >
                                        </Cell>
                                    })}
    </div>
    
  );

export default Board;


Board.propTypes = {
    key: PropTypes.string,
    index:PropTypes.number,
    value:PropTypes.oneOf(["X","O",null]),
    cell: PropTypes.shape({
    }),
  
    onClick:PropTypes.func,
  };
  
  Board.defaultProps = {
    cell: null,
    index:0,
    value: null
  };
  
