

function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (cache[arg] !== undefined) {
      console.log("From Cache");
      return cache[arg];
    }

    console.log("Computed");

    const result = fn(arg);
    cache[arg] = result;

    return result;
  };
}