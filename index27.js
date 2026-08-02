


function mergeArrays(...arrays) {
  return arrays.reduce((result, current) => {
    return [...result, ...current];
  }, []);
}