

const input = { a: 1, b: 2 };


const invertObject = (obj) => {
  let result = {};

  for (let [key, value] of Object.entries(obj)) {

    result[value] = key
  }

  return result;
}


console.log(invertObject(input));