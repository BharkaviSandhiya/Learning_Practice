// const orderFood = new Promise((resolve, reject) => {
//     let isDelivered = true; 
//     if (isDelivered) {
//       resolve('Food delivered!'); 
//     } else {
//       reject('Delivery failed!');
//     }
//   });
  
//   orderFood
//     .then(result => console.log(result)) 
//     .catch(error => console.error(error));


//Handling proxies then
console.log("start")
const myPromise = new Promise((resolve, reject) => {
    console.log("task")
    resolve('Task completed!'); 
  });
  
  myPromise.then(result => {
    console.log(result);
  });
console.log("end")
// // Handling proxies catch
// const myPromise = new Promise((resolve, reject) => {
//     reject('Something went wrong!'); 
//   });
  
//   myPromise.catch(error => {
//     console.error(error); 
//   });

// //Handling proxies finally
// myPromise
//   .then(result => {
//     console.log(result); 
//   })
//   .catch(error => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log('Done!'); 
//   });