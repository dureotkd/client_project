import React, { useEffect, useRef, useState } from 'react'
import AlphabetGenerator from './AlphabetGenerator';
import MatrixGenerator from './MatrixGenerator';
import generateRandomMatrix from './MatrixGenerator';
const Game = () => {
  const [timer, setTimer] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [showRandomNumbers, setShowRandomNumbers] = useState(false);

  let count = 0;
  const timeoutId = null;
  
  const [alphabetList, setAlphabetList] = useState
  (
    [
      [],
      [],
      [],
      [],
      []
    ]
  );
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
  function shuffleMatrix(matrix) { 
    matrix.sort(() => Math.random() - 0.5);
    return matrix;
  }

  const generateRandomMatrix = () => {
    const matrix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+", "*", "/", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+", "*", "/"];
    shuffleMatrix(matrix);
    const a = matrix.splice(0, 5);
    const b = matrix.splice(0, 5);
    const c = matrix.splice(0, 5);
    const d = matrix.splice(0, 5);
    const e = matrix.splice(0, 5);

    const newMath = [[...a], [...b], [...c], [...d], [...e]];
    setMath(newMath);
    setShowRandomNumbers(true);
    generateRandomAlphabet();
    setShowButton(false);
    const intervalId = setInterval(() => {
      count++;
      if (count === 10) {
        clearInterval(intervalId);
        setTimer(false);
      } 
      console.log(count);
    }, 1000)
  }

  function generateRandomAlphabet() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    shuffleMatrix(alphabet);
    const f = alphabet.splice(0, 5);
    const g = alphabet.splice(0, 5);
    const h = alphabet.splice(0, 5);
    const i = alphabet.splice(0, 5);
    const j = alphabet.splice(0, 5);

    const newAlphabet = [[...f], [...g], [...h], [...i], [...j]];
    setAlphabetList(newAlphabet);
  }

  function shuffleMatrix(matrix) { 
    matrix.sort(() => Math.random() - 0.5);
    return matrix;
  }
  return (
    <>
    <div>
      <h1>Game</h1>
      <h2>Game Rule</h2>
      <div>
        <ol>
          {/* DONE */}
          <li>When you are ready, click generate game button</li>
          {/* DONE */}
          <li>If you click generate game button then random numbers and math operators on 5 x 5 grid table will appear</li>
          <li>You need to remember the numbers and operators in 10 seconds</li>
          <li>After 10 seconds, random number will disappear and alphabet grid will appear</li>
          <li><strong>!REMEMBER THE RANDOM NUMBER!</strong></li>
          <li>type your name in the chat to guess your matching alphabet</li>
          <li>chat will be paused while the player is guessing and will show the random number or math operators based on your chosen alphabet</li>
          <li>Type the alphabet that can make a random number using numbers and math operators</li>
          <li>if you find a matching number and math operators then you won!</li>
        </ol>
      </div>
      {showRandomNumbers && timer? (
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
      ) : (
        <table>
        <tbody>
            {alphabetList.map((item, index) => (
              <tr key={index}>
                {item.map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      )}
      {showButton && (
        <button onClick={generateRandomMatrix}>generate game</button>
      )}
        </div>
    </>
  )
}

export default Game;