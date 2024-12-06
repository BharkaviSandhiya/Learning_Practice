import React, { useInsertionEffect } from 'react';

function DynamicStyles({ theme }) {
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .dynamicClass {
        color: ${theme === 'dark' ? 'white' : 'black'};
        background-color: ${theme === 'dark' ? 'black' : 'white'};
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  return <div className="dynamicClass">Themed Text</div>;
}

export default DynamicStyles;
