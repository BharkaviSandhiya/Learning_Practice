async function fetchDataAsync() {
    try {
      const response = await fetchData();
      const data = await processResponse(response);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

//working
async function fetchData() {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Data fetched!');
        }, 2000);
      });
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();

//Benefits 
async function fetchData() {
    try {
      const data1 = await new Promise((resolve) => setTimeout(() => resolve('First data'), 1000));
      const data2 = await new Promise((resolve) => setTimeout(() => resolve('Second data'), 1000));
      console.log(data1, data2);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();