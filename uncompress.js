//uncompress
//Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

//<number><char>

//for example, '2c' or '3a'.
//The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

function uncompress(str) {
  // console.log(str);
  let uncompressedString = '';
  let currNumber = '';

  for (let i = 0; i < str.length; i++) {
    // console.log('i', i, 'iVal', str[i]);
    // console.log('currNumber', currNumber);
    // console.log('uncompressedStr', uncompressedString);
    if (!isNaN(str[i])) {
      // console.log('in if');
      currNumber += str[i];
      // console.log('currNumber +', currNumber);
    }
    else {
      const nOfLetter = new Array(Number(currNumber)).fill(str[i]).join('');
      // console.log('nOfLetter', nOfLetter);
      uncompressedString += nOfLetter;
      currNumber = '';
    }
  }
  console.log('uncompressedString', uncompressedString);
  return uncompressedString;
}

//test_00:
input = '2c3a1t';
actual = uncompress(input); // -> 'ccaaat'
expected = 'ccaaat';
assertDeepEqual(input, actual, expected);

//test_01:
input = '4s2b';
actual = uncompress(input);
expected = 'ssssbb';
assertDeepEqual(input, actual, expected);

//test_02:
input = "2p1o5p";
actual = uncompress(input); // -> 'ppoppppp'
expected = 'ppoppppp';
assertDeepEqual(input, actual, expected);

//test_03:
input = "3n12e2z";
actual = uncompress(input); // -> 'nnneeeeeeeeeeeezz'
expected = 'nnneeeeeeeeeeeezz';
assertDeepEqual(input, actual, expected);

//test_04:
input = "127y";
actual = uncompress(input); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
expected = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy';
assertDeepEqual(input, actual, expected);

function assertDeepEqual(input, actual, expected) {
  const aStr = JSON.stringify(actual);
  const bStr = JSON.stringify(expected);
  if (aStr === bStr) {
    console.log(`${input} ... PASS`);
  }
  else {
    console.log(`${input} ... FAIL: ${aStr} !== ${bStr}`);
  }
}