import React, { useState } from 'react'

const Game = () => {

  const [math, setMath] = useState
  (
    [
      [],
      [],
      [],
      [],
      []
    ]
  );

  function generateRandomMatrix() {
    const matrix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+", "*", "/", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+", "*", "/"];
    shuffleMatrix(matrix);
    const a = matrix.splice(0, 5);
    const b = matrix.splice(0, 5);
    const c = matrix.splice(0, 5);
    const d = matrix.splice(0, 5);
    const e = matrix.splice(0, 5);
    const newMath = [[...a], [...b], [...c], [...d], [...e]];
    setMath(newMath);
    console.log(newMath);
  }

  function shuffleMatrix(matrix) { 
    matrix.sort(() => Math.random() - 0.5);
    return matrix;
  }

  return (
    <div>
      <h1>Game</h1>
      <table>
        <tbody>
            {math.map((item, index) => (
              <tr key={index}>
                {item.map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={generateRandomMatrix}>generate game</button>
    </div>
  )
}

export default Game;