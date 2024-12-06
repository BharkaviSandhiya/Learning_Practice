const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };
  
  const validateForm = (values) => {
    const errors = {};
  
    if (!values.email || !validateEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password || values.password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
    }
  
    return errors;
  };
  
  export default validateForm;
  