const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
    reject("Error!");
  }, 3000);
});
myPromise
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
