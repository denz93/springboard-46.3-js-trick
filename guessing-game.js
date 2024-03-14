function guessingGame() {
  const random = Math.floor((Math.random() * 100) % 100);
  let guessCount = 0;
  let isDone = false;
  return function game(guess) {
    if (isDone) {
      return 'The game is over, you already won!';
    }
    guessCount++;
    if (guess === random) {
      isDone = true;
      return `You win! You found ${random} in ${guessCount} guesses.`;
    }

    if (guess > random) {
      return `${guess} is too high!`;
    } else {
      return `${guess} is too low!`;
    }
  }
}

module.exports = { guessingGame };
