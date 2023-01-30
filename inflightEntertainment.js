function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  let setOfPotentialY = new Set();
  for (let i = 0; i < movieLengths.length; i++) {
    const potentialY = flightLength - movieLengths[i];
    if (setOfPotentialY.has(movieLengths[i])) {
      return true;
    } 
    else {
      setOfPotentialY.add(potentialY);
    }
  }

  return false;
}