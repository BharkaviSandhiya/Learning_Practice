import React, { useState } from 'react';
import DynamicStyles from './components/DynamicStyles';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <DynamicStyles theme={theme} />
    </div>
  );
}

export default App;
