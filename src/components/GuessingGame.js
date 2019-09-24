/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const GuessingGame = () => {
  const DisplayStatus = props => {
    return <div style={props.isWinner ? { color: 'lightgreen' } : { color: 'red' }}>{props.displayText}</div>;
  };

  const NumberInput = props => {
    const [guess, setGuess] = useState(-1);
    const checkNumber = () => {
      console.log(`the secret number is ${props.randomNumber}; the guessed number is ${guess}`);
      if (props.randomNumber === guess) {
        props.setIsWinner(true);
        props.setDisplayText('You guessed right!');
      } else if (props.randomNumber > guess) {
        props.setDisplayText('The number you guessed is less than the secret number. (Hint: guess higher)');
      } else {
        props.setDisplayText('The number you guessed is greater than the secret number. (Hint: guess lower)');
      }
    };

    return (
      <>
        <input type='text' onBlur={e => setGuess(parseInt(e.target.value))}></input>
        <button style={{ marginLeft: '10px' }} onClick={checkNumber}>
          Guess
        </button>
      </>
    );
  };

  const [randomNumber] = useState(Math.round(Math.random() * 100));
  const [isWinner, setIsWinner] = useState(false);
  const [displayText, setDisplayText] = useState('');

  return (
    <>
      <div>Welcome to the guessing game! Please select a number between 1 and 100:</div>
      <NumberInput randomNumber={randomNumber} setIsWinner={setIsWinner} setDisplayText={setDisplayText} />
      <DisplayStatus isWinner={isWinner} displayText={displayText} />
    </>
  );
};

export default GuessingGame;
