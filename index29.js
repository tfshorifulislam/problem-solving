

function getUserData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "Test User",
      });
    }, 500);
  });
}

getUserData(1).then((user) => {
  console.log(user);
});