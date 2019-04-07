module.exports = {
  succeed,
  fail,
  repair,
  get,
};


function repair(item) {
  if (typeof item === 'object' && item.hasOwnProperty('durability')) {
    return {...item, durability: 100};
  } else {
    return null;
  }
}

function succeed(item) {
  if (typeof item === 'object' && item.hasOwnProperty('enhancement') && item.enhancement < 20) {
    item.enhancement++
    return {...item}
  } else if (item.enhancement === 20) {
    return {...item}
  } else {
    return null
  }
}

function fail(item) {
  return { ...item };
}


function get(item) {
  return { ...item };
}
