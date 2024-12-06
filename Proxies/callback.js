// Example of an asynchronous operation
setTimeout(() => {
    console.log('Data fetched!');
  }, 2000);
  

//Example of callback
function fetchData(callback) {
    setTimeout(() => {
      callback('Data fetched!');
    }, 2000);
  }
  
  fetchData((data) => {
    console.log(data);
  });
  