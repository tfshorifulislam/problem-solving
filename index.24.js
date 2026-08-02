const add = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(add(2)(3)); // 5