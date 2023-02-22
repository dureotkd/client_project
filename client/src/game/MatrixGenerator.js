import React, { useEffect, useState } from 'react'

const MatrixGenerator = () => {
    const [timer, setTimer] = useState(true);
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
        console.log(newMath);
        // setShowRandomNumbers(true);
    
        const timeId = setTimeout(() => {
          setTimer(false);
        }, 2000)
        console.log(timeId);
        return () => {
          clearImmediate(timeId);
        }
      }

  return (
    <>
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
    </>

  )
}

export default MatrixGenerator