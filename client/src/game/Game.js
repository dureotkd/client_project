import React, { useState } from 'react'

const Game = () => {
  const [math, setMath] = useState
  (
    [
      [0, "-", 2, "+", 4, 5],
      [6, 7, 8, "*", 10, "+"],
      ["+", 1, 9, "/", 11]
    ]
  );

  function generateRandomMatrix() {
    const newMath = [...math];
    const newMAth1 = [...newMath[0].sort(() => Math.random() - 0.5)];
    const newMAth2 = [...newMath[1].sort(() => Math.random() - 0.5)];
    const newMAth3 = [...newMath[2].sort(() => Math.random() - 0.5)];

    shuffleMatrix(newMath);
    setMath(newMath);
  }

  function shuffleMatrix(matrix) { 
    for (let i = matrix.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
    }
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