function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error('fml');
  }
  // Make a list of the products
  const productOfAllIntsExcludingIndex = [];
  
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productOfAllIntsExcludingIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productOfAllIntsExcludingIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }
  
  return productOfAllIntsExcludingIndex;
}
