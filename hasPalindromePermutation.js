/////// First Attempt ///////

function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  let letterFrequency = {};
  for (let i = 0; i < theString.length; i++) {
    if (!letterFrequency[theString[i]]) {
      letterFrequency[theString[i]] = 1;
    } else {
      letterFrequency[theString[i]]++;
    }
  }
  console.log('letterFrequency', letterFrequency);
  let letterFrequencyValues = Object.values(letterFrequency);
  let singles = 0;
  
  for (let i = 0; i < letterFrequencyValues.length; i++) {
    if (letterFrequencyValues[i] === 1) singles++;
  }
    
  console.log('singles', singles);
  return singles > 1 ? false : true;
}

///// END First Attempt /////

/////// Second Attempt ///////
function hasPalindromePermutation(theString) {
  let unpairedChars = new Set();
  for (let letter of theString) {
    unpairedChars.has(letter) ? unpairedChars.delete(letter) : unpairedChars.add(letter);
  }  
  return unpairedChars.size <= 1;
}

///// END Second Attempt /////