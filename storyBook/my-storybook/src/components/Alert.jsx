import React from 'react';

const Alert = ({ type, message }) => {
  let alertClasses = 'border-l-4 p-4';
  let typeClasses = '';

  switch (type) {
    case 'error':
      typeClasses = 'bg-alert-error-bg border-alert-error-border text-alert-error-text';
      break;
    case 'success':
      typeClasses = 'bg-alert-success-bg border-alert-success-border text-alert-success-text';
      break;
    case 'warning':
      typeClasses = 'bg-alert-warning-bg border-alert-warning-border text-alert-warning-text';
      break;
    default:
      typeClasses = 'bg-alert-info-bg border-alert-info-border text-alert-info-text';
      break;
  }

  return (
    <div className={`${alertClasses} ${typeClasses}`} role="alert">
      <p className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
