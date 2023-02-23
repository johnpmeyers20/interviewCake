/////// Solution ///////

//in the greedy approach, it's important that all variables (excluding curr)
//need to be set outside the for loop.
//You'll notice that in the for loop, we reset the variables in the following order:
//curr, HighestProductOf3, HighestProductOf2, LowestProductOf2, highest, lowest
//for the variables of like level (based on the number of arguments passed into the Math.max 
//or .min functions) the order doesn't matter. The levels' order, however, is very important.
//This is because level3 references the previous level2 variables, before they are reset
//and level2 references the previous level1 variables, before they're reset.

//At first I didn't understand why we need to keep track of the lowest product of 2
//or the lowest for that matter. After testing by commenting the lowest values out
//it was brought to my attention that the lowest product of 2 my become the highest
//product of 3 if any 2 of the 3 numbers set are negative!

function highestProductOf3(arrayOfInts) {
  
  if (arrayOfInts.length < 3) {
    throw new Error('less than 3 inputs');
  }
  
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highestProductOf2 = highest * lowest;
  let lowestProductOf2 = highest * lowest;
  
  for (let i = 2; i < arrayOfInts.length; i++) {
    let curr = arrayOfInts[i];
    
    highestProductOf3 = Math.max(
      highestProductOf3, 
      curr * highestProductOf2, 
      curr * lowestProductOf2
    );
    
    highestProductOf2 = Math.max(
      highestProductOf2,
      curr * highest,
      curr * lowest
    );
    
    lowestProductOf2 = Math.min(
      lowestProductOf2, 
      curr * highest, 
      curr * lowest
    )
    
    highest = Math.max(curr, highest);
    lowest = Math.min(curr, lowest);
  }
  
  return highestProductOf3;
}

///// END Solution //////

/////// First Attempt ///////

// function highestProductOf3(arrayOfInts) {

//   // Calculate the highest product of three numbers
//   // is the array sorted?
//   // are all of the array's values integers?
//   // what's the maximum length of the array?
//   // can integers repeat in the array?
  
//   //Pseudocode:
//     //Find the highest three integers in an array
//       //sort the array => O logn
//     //Add the three integers together
//       //look up last three and reduce value
      
//   arrayOfInts.sort((a,b) => a - b);
//   if (arrayOfInts.length < 3) throw new Error('nope');
//   console.log('arrayOfInts', arrayOfInts);
//   const biggestThreeIntegers = [getIntAtIdx(arrayOfInts, 1), getIntAtIdx(arrayOfInts, 2), getIntAtIdx(arrayOfInts, 3)];
//   // console.log('biggestThreeIntegers', biggestThreeIntegers);
//   const biggestProduct = biggestThreeIntegers.reduce((a,b) => a * b);

//   return biggestProduct;
// }

// function getIntAtIdx(arr, idx) {
//   const arrLength = arr.length;
//   // console.log('arrLength', arrLength);
//   const valAtIdx = arr[arrLength - idx];
//   // console.log('valAtIdx', valAtIdx);
//   return valAtIdx;
// }

////// END First Attempt //////













// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}