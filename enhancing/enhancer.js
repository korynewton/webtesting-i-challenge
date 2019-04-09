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
  if (typeof item === 'object' && item.hasOwnProperty('enhancement') && item.enhancement < 15) {
    item.durability = item.durability - 5
    return  {...item}
  }
  else if (item.enhancement >= 15) {
    item.durability = item.durability - 10 
    if (item.enhancement > 16) {
      item.enhancement = item.enhancement - 1
    }
    return {...item}
  }
  return null;
}


function get(item) {
  return { ...item };
}
