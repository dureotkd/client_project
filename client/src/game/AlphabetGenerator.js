import React, { useState } from 'react';

const AlphabetGenerator = () => {
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
  )
}

export default AlphabetGenerator