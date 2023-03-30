/////// First Attempt ///////
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // Check if we're serving orders first-come, first-served
  let takeOutPointer = 0;
  let dineInPointer = 0;
  let servedOrderPointer = 0;
  
  while (servedOrderPointer < servedOrders.length) {
    const currServedOrder = servedOrders[servedOrderPointer];
    if (currServedOrder === takeOutOrders[takeOutPointer]) {
      takeOutPointer++;
      servedOrderPointer++;
    }
    else if (currServedOrder === dineInOrders[dineInPointer]) {
      dineInPointer++;
      servedOrderPointer++;
    }
    else {
      return false;
    }
  }
  
  return servedOrders.length === takeOutOrders.length + dineInOrders.length;
}
///// END First Attempt /////

/////// Second Attempt ///////

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  if (servedOrders.length < takeOutOrders.length + dineInOrders.length) return false;
  // Check if we're serving orders first-come, first-served
  while (servedOrders.length > 0) {
    if (servedOrders[0] === takeOutOrders[0]) {
      takeOutOrders.shift();
    }
    else if (servedOrders[0] === dineInOrders[0]) {
      dineInOrders.shift();
    }
    else {
      return false;
    }
    servedOrders.shift();
  }
  return true;
}

///// END Second Attempt /////

//add line to test gitgit