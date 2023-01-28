/////////////// First Attempt ///////////////////
function mergeArrays(myArray, alicesArray) {
console.log('myArray', myArray);
console.log('alicesArray', alicesArray);
  // Combine the sorted arrays into one large sorted array
  if (myArray.length === 0 && alicesArray.length === 0) return [];
  if (myArray.length === 0 && alicesArray.length > 0) return alicesArray;
  if (myArray.length > 0 && alicesArray.length === 0) return myArray;
  
  const totalNumberOfOrders = myArray.length + alicesArray.length;
  let i = 1;
  let mergedArrays = [];
  let myPointer = 0;
  let alicesPointer = 0;
  
  while (i <= totalNumberOfOrders) {
    // console.log('i', i);
    // console.log('top mergedArrays', mergedArrays);

    const myCurrVal = myArray[myPointer];
    // console.log('myPointer', myPointer, 'myCurrVal', myCurrVal);
    const alicesCurrVal = alicesArray[alicesPointer];
    // console.log('alicesPointer', alicesPointer, 'alicesCurrVal', alicesCurrVal)
    
    if (!Boolean(myCurrVal)) {
      const restOfAlice = alicesArray.splice(alicesPointer);
      // console.log('restOfAlice', restOfAlice);
      mergedArrays.push(...restOfAlice)
      break;
    }
    if (!Boolean(alicesCurrVal)) {
      const restOfMine = myArray.splice(myPointer);
      // console.log('restOfMine', restOfMine);
      mergedArrays.push(...restOfMine);
      break;
    }
    
    if (myCurrVal < alicesCurrVal) {
      mergedArrays.push(myCurrVal);
      if (myPointer < myArray.length) myPointer++;
    }
    else {
      mergedArrays.push(alicesCurrVal);
      if (alicesPointer < alicesArray.length) alicesPointer++;
    }
    i++;
    // console.log('bottom mergedArrays', mergedArrays);
    // console.log('------------------------------')
  }
  // console.log('ans', mergedArrays);
  return mergedArrays;
}
///////////// END First Attempt //////////////////

//Create an array w/ the same number of args as are passed in to og function
//Array(5) creates an array with 5 indexes
// Array(5).fill(null) fills each index with null
//.arguments can be run in a function to see details on args
//for in

//The version below can take an arbitrary amount of arrays as input
//each having an arbitrary length
//They do still need to be sorted

/////////////// Second Attempt ///////////////////

function mergeArrays(myArray, alicesArray, thirdArray) {
  let mergedArr = [];
  const numOfArgs = arguments.length;
  const currArgs = arguments;
  let totalIndexes = 0;
  let currNumbers = Array(numOfArgs).fill(null);
  
  for (let prop in currArgs) {
    const curr = currArgs[prop];
    // console.log(`args[${prop}]`, curr);
    totalIndexes += curr.length;
  }
  
  if (totalIndexes === 0) return [];
  
  function stockCurrNumbers() {
    for (let prop in currArgs) {
      if (currArgs[prop].length > 0 && !currNumbers[prop]) {
        currNumbers[prop] = currArgs[prop].shift();
      }
    }
  }
  
  while (mergedArr.length < totalIndexes) {
    // console.log('currNumbers foo', currNumbers);
    stockCurrNumbers();
    // console.log('currNumbars bar', currNumbers);
    const smallestCurrNum = Math.min(...currNumbers.filter(i => i !== null));
    // console.log('smallestCurrNum', smallestCurrNum);
    mergedArr.push(smallestCurrNum);
    currNumbers.forEach((el,i) => {
      if (el === smallestCurrNum) {
        currNumbers[i] = null;
      }
    })
    // console.log('mergedArr', mergedArr);
    // console.log('currNumbers baz', currNumbers);
    // console.log('---------------------');
  }
  
  // console.log('mergedArr final', mergedArr);
  return mergedArr;
}



// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

desc = 'three arrays'
actual = mergeArrays([1,4,7],[2,3,5],[6,8,9]);
expected = [1,2,3,4,5,6,7,8,9];
assertDeepEqual(actual, expected, desc);

desc = 'three on empty';
actual = mergeArrays([1,3,5], [], [2,4,6]);
expected = [1,2,3,4,5,6];
assertDeepEqual(actual, expected, desc);

desc = 'three different lengths';
actual = mergeArrays([1],[2,6], [3,4,5]);
expected = [1,2,3,4,5,6];
assertDeepEqual(actual, expected, desc);

desc = 'four arrays';
actual = mergeArrays([1, 12], [2,5,6], [3,8,11], [4,7,9,10]);
expected = [1,2,3,4,5,6,7,8,9,10,11,12];
assertDeepEqual(actual, expected, desc);


function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}

