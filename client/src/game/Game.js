import React, { useEffect, useState } from 'react'
const Game = () => {
  const [math, setMath] = useState
  (
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "+", "-", "*", "/"]
  );

  const newMat1 = math.sort(() => Math.random() - 0.5);
  function generateRandomMatrix() {
    const newMath = math.sort(() => Math.random() - 0.5);
    setMath(newMath);
    // setMath(i => math.map(item => Math.random() - 0.5));
    // setMath((i => math.map(item => Math.random(Math.random() - 0.5)))); 
    console.log(newMath);
    console.log(math);
  }
  // function shuffleArray(array) {
  //   return array.sort(() => Math.random() - 0.5);
  // }
  // useEffect(() => {
  //   console.log(math);
  // }, [math])

  // function generateRandomMatrix() {
  //   const newMath = math.sort(() => Math.random() - 0.5);
  //   setMath(math =>{
  //     return shuffleArray(newMath);
  //   })
  // }

  return (
    <div>
      <h1>Game</h1>
      <table>
        <tbody>
          <tr>
            {math.map((item, index) => {
              return <td key={index}>{item}</td>
            })}
          </tr>
        </tbody>
      </table>
      <button onClick={generateRandomMatrix}>generate game</button>
    </div>
  )
}

export default Game;