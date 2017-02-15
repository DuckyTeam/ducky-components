export default (data, memberOf) => {
  if (data.length <= 14) return data;

  const nToRemove = data.length - 14 + 2;
  let yourPlace = -1;

  for ( var i = 0, len = data.length; i < len; i++ ) {
    if (data[i].id === memberOf) {
      yourPlace = i;
      break;
    }
  }

  const getEmpty = value => {
    return {
      id: `empty${value}`,
      value: null,
      sortValue: value,
      label: `empty${value}`
    };
  };

  let toRemoveBelow = 0;
  let toRemoveAbove = 0;

  const nBelowYou = data.length - yourPlace;
  const nAboveYou = yourPlace;

  const nBelowForRemoval = nBelowYou - 1;
  const nAboveForRemoval = nAboveYou - 1;

  const toRemoveAverage = nToRemove / 2;

  if (toRemoveAverage >= nBelowForRemoval) {
    toRemoveBelow = nBelowForRemoval;
    toRemoveAbove = nToRemove - nBelowForRemoval;
  } else if (toRemoveAverage >= nAboveForRemoval) {
    toRemoveAbove = nAboveForRemoval;
    toRemoveBelow = nToRemove - nAboveForRemoval;
  } else {
    toRemoveBelow = Math.ceil(toRemoveAverage);
    toRemoveAbove = Math.floor(toRemoveAverage)
  }

  if (toRemoveBelow <= 2 && nBelowForRemoval < 2) {
    toRemoveAbove += toRemoveBelow - 1;
    toRemoveBelow = 0;
  }
  if (toRemoveAbove <= 2 && nAboveForRemoval < 2) {
    toRemoveBelow += toRemoveAbove - 1;
    toRemoveAbove = 0;
  }

  //Remove Above
  if (toRemoveAbove > 1) {
    let sumUp = 0;
    for (let i = yourPlace - 2; i > yourPlace - 2 - toRemoveAbove; i--) {
      sumUp += data[i].value;
      data[i] = null;
    }
    data[yourPlace - 2] = getEmpty(sumUp/toRemoveAbove);
  }

  //Remove Below
  if (toRemoveBelow > 1) {
    let sumDown = 0;
    for (let i = yourPlace + 2; i < yourPlace + 3 + toRemoveAbove; i++) {
      sumDown += data[i].value;
      data[i] = null;
    }
    data[yourPlace + 2] = getEmpty(sumDown/toRemoveBelow);
  }

  return data.filter(d => d);
};
