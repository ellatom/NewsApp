import React, { useState } from 'react';
import Board from './Board';
import './css/gametictactoe.css';
import whoIsTheWinner from './whoIsTheWinner';
import PropTypes from 'prop-types';

function GameTicTacToe() {
debugger;
    const numberOfCells = 9;
    const initArr=Array(numberOfCells).fill(null);//init array with null
    const [boardHistory, setBoardHistory] = useState([initArr]);//array with move history
    const[currentMoveNumber,setCurrentMoveNumber]=useState(0);//current step number
    const [xNextPlayer, setXNextPlayer] = useState(true);//is x or o current player
    const winner = whoIsTheWinner(boardHistory[currentMoveNumber]);//who is the winner x or o on current step

    const handleClick = (indexCell) => {

        const currentHistoryArr =boardHistory[currentMoveNumber];
        const copyCurrentHistoryArr = [...currentHistoryArr];

        if (winner || copyCurrentHistoryArr[indexCell]) //newBoard already checked
            return;

        copyCurrentHistoryArr[indexCell] = xNextPlayer ? "X" : "O";

        setBoardHistory([...boardHistory,copyCurrentHistoryArr]);
        setCurrentMoveNumber(boardHistory.length)
        setXNextPlayer(!xNextPlayer);//opossite from previous
    }

    const nextPlayerOrWinner=()=>
    {
        debugger;
        if(winner)
            return "Winner: " + winner;
        else {
             return  "Next Player: " + (xNextPlayer ? "X" : "O");
        }
    }
    const moveTo=(index)=>
    {
        setCurrentMoveNumber(index);
        setXNextPlayer(index%2===0);//true=x,false=o first x second  o third x..
        setBoardHistory(boardHistory.slice(0,index+1));
    }

    const showHistoryMoves = () => (
        boardHistory.map((board,index)=>{
            const goToBtnText = index? `Go to move#${index}`:"Go to start";
            return (
                <div key={index}>
                    <button className="btnMove" onClick={()=>moveTo(index)}>
                        {goToBtnText} <i className="fas fa-angle-right"></i>
                    </button>
                </div>
            )
        })
    )
    return (
        
        <>
        <div className="main">
            <h1>Tic Tac Toe</h1>
            <div className="playerOrWinner">
                <p>{nextPlayerOrWinner()}</p>
            </div>
            <Board 
                board={boardHistory[currentMoveNumber]} 
                onClick={handleClick}>
            </Board>
            <div className="container">
              <div className="btnMoveTo">{showHistoryMoves()}</div>
            </div>  
        </div> 
        </>
    );
}


export default GameTicTacToe;

GameTicTacToe.propTypes = {
    handleClick:PropTypes.func,
  };
  
  GameTicTacToe.defaultProps = {
    board: [],
  };
  
