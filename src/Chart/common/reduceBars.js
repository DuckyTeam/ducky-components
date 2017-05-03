import { max } from 'd3-array';

export default (data, memberOf) => {
  if (data.length <= 14) return data;

  let yourPlace = -1;

  for ( var i = 0, len = data.length; i < len; i++ ) {
    if (data[i].id === memberOf) {
      yourPlace = i;
      break;
    }
  }

  if (yourPlace === -1) {
    return [];
  }

  const getEmpty = value => {
    return {
      id: `empty${value}`,
      value: null,
      sortValue: value,
      label: `empty${value}`
    };
  };

  // If you are top 5 (no placeholder above)
  if (yourPlace <= 5) {
    return [
      ...data.slice(0, 10)
      /*getEmpty(data[yourPlace + 3].value),
      ...data.slice(data.length - (14 - yourPlace - 4))*/
    ];
  // If you are last to 4rd last (no placeholder below)
  } else if (yourPlace > data.length - 5) {
    return [
      ...data.slice(0, 14 - (1 + data.length - yourPlace + 2)),
      getEmpty(data[yourPlace - 3].value),
      ...data.slice(yourPlace - 2, data.length)
    ];
  //Placeholder above and below
  } else {
    const toAdd = 14 - 5 - 2;
    return [
      ...data.slice(0, Math.ceil(toAdd / 2)),
      getEmpty(data[yourPlace - 3].value),
      ...data.slice(yourPlace - 2, yourPlace + 3),
      getEmpty(yourPlace + 3),
      ...data.slice(data.length - Math.floor(toAdd / 2))
    ];
  }
  return data.filter(d => d);
};
