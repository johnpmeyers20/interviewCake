function pivotOfTwoSums(arr) { //[1,3,7,2,2]
  let sumLeft = 0;
  let sumRight = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length; i++) {
    //I wanted to do something fancy here with if statements
    //it's better to just move a part of the functionality to the front
    sumRight -= arr[i];
    if (sumLeft === sumRight) {
      return i;
    }
    else {
      console.log('else');
  
      sumLeft += arr[i];
    }
  }
  return -1;
}

//Tests

desc = 'test1';
actual = pivotOfTwoSums([1, 3, 7, 2, 2]);
expected = 2;
assertDeepEqual(actual, expected, desc);

desc = 'test2';
actual = pivotOfTwoSums([1, -2, -1, 0, 4, 0, 2, 0]);
expected = 5;
assertDeepEqual(actual, expected, desc);

desc = 'test3';
actual = pivotOfTwoSums([1, 3, -1]);
expected = -1;
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

//Notes:
// 