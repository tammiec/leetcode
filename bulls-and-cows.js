/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;

  let guessArray = guess.split('');
  let secretArray = secret.split('');

  for (let i = 0; i < guessArray.length; i++) {
    console.log(`index is ${i}, secretArray is ${secretArray}`)
    if (guessArray[i] === secretArray[i]) {
      bulls++;
      secretArray.splice(i, 1);
      // length--;
      // i--;
    } else if (secretArray.includes(guessArray[i])) {
      cows++;
      secretArray.splice(secretArray.indexOf(guessArray[i]), 1);
      // length--;
      i--;
    }
    console.log(`secret array after ${secretArray}`)
  }

  return `${bulls}A${cows}B`;
};  