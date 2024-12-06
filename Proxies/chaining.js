async function fetchData() {
    const data1 = await new Promise((resolve) => setTimeout(() => resolve('First data'), 1000));
    const data2 = await new Promise((resolve) => setTimeout(() => resolve('Second data'), 1000));
    const data3 = await new Promise((resolve) => setTimeout(() => resolve('Third data'), 1000));
    
    console.log(data1, data2, data3);
  }
  
  fetchData();