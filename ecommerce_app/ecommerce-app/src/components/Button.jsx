// import React from 'react';

// const Button = ({ text, onClick, className }) => {
//   return (
//     <button
//       className={`bg-blue-500 text-white p-2 rounded ${className}`}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;


import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`btn-primary ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

