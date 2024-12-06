// //promise.all()
// const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
// const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 failed'), 1500));

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error); 
//   });

// //promise.race()

// const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 won the race!'), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 won the race!'), 2000));

// Promise.race([promise1, promise2])
//   .then((result) => {
//     console.log(result); 
//   })
//   .catch((error) => {
//     console.error(error);  
//   });

// // Promise.allSettled()
// const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 failed'), 1500));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 2000));

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//   });

//Promise.any()
const promise1 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 1 failed'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 failed'), 1500));

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);  
  })
  .catch((error) => {
    console.error(error);
  });