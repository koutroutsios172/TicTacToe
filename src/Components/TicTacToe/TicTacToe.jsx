import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(""));

    const toggle = (num) => {
        if (lock || board[num] !== "") {
            return;
        }

        const newBoard = [...board];
        newBoard[num] = count % 2 === 0 ? "x" : "o";

        setBoard(newBoard);
        setCount(count + 1);
        checkWin(newBoard);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setCount(0);
        setLock(false);
    };

    const checkWin = (currentBoard) => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        // Check each winning combination
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
               
                alert(`Player ${currentBoard[a]} wins!`);

                return;
            }
        }

        // Check for a tie (all cells filled)
        if (currentBoard.every((cell) => cell !== "")) {
            alert("It's a tie!");
            // You can perform additional actions here for a tie
            // For example, you might show a tie modal or reset the game
            // resetGame();
        }
    };



    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    {board.slice(0, 3).map((value, index) => (
                        <div key={index} className="boxes" onClick={() => toggle(index)}>
                            {value === "x" && <img src={cross_icon} alt="cross" />}
                            {value === "o" && <img src={circle_icon} alt="circle" />}
                        </div>
                    ))}
                </div>
                <div className="row2">
                    {board.slice(3, 6).map((value, index) => (
                        <div key={index + 3} className="boxes" onClick={() => toggle(index + 3)}>
                            {value === "x" && <img src={cross_icon} alt="cross" />}
                            {value === "o" && <img src={circle_icon} alt="circle" />}
                        </div>
                    ))}
                </div>
                <div className="row3">
                    {board.slice(6, 9).map((value, index) => (
                        <div key={index + 6} className="boxes" onClick={() => toggle(index + 6)}>
                            {value === "x" && <img src={cross_icon} alt="cross" />}
                            {value === "o" && <img src={circle_icon} alt="circle" />}
                        </div>
                    ))}
                </div>
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
    );
};

export default TicTacToe;

