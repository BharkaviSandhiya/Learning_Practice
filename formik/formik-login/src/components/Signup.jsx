import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); 
  const [openDialog, setOpenDialog] = useState(false); 

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Repeat Password is required'),
    terms: Yup.boolean().oneOf([true], 'Must accept terms and conditions'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    terms: false,
  };

  const handleSubmit = (values, actions) => {
    console.log('Form submitted with values:', values);
    setIsRegistered(true);
    setOpenDialog(true); 
    actions.resetForm(); 
    actions.setSubmitting(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); 
    setIsRegistered(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-full max-w-screen-xl mx-auto bg-white p-30 md:p-12 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 flex-grow-0 md:flex-grow-1 pr-0 md:pr-10">
          <div className="text-center mb-6">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign up
            </h2>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className="space-y-4">
              <div>
                <Field name="name">
                  {({ field }) => (
                    <TextField
                      {...field}
                      id="name"
                      label="User Name"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="name" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              <div>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      id="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      InputProps={{  
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              <div>
                <Field name="password">
                  {({ field }) => (
                    <TextField
                      {...field}
                      id="password"
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="start"
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              <div>
                <Field name="repeatPassword">
                  {({ field }) => (
                    <TextField
                      {...field}
                      id="repeatPassword"
                      label="Repeat your password"
                      type={showRepeatPassword ? 'text' : 'password'}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle repeat password visibility"
                              onClick={handleClickShowRepeatPassword}
                              edge="start"
                            >
                              {showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="repeatPassword" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              <div>
                <Field name="terms" type="checkbox">
                  {({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} color="primary" />}
                      label={
                        <span>
                          I agree all statements in{' '}
                          <a href="#" className="font-medium textA-indigo-600 hover:text-indigo-500">
                            Terms of service
                          </a>
                        </span>
                      }
                    />
                  )}
                </Field>
                <ErrorMessage name="terms" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              <div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  REGISTER
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img src="https://www.userlane.com/wp-content/uploads/2019/12/hero-image-11-1024x576.webp" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">
          <div className="flex items-center justify-center">
            <CheckCircleIcon color="primary" style={{ fontSize: 48 }} />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="text-center">
            <p className="text-lg font-semibold">Registered Successfully!</p>
          </div>
        </DialogContent>                                                                                                                                                                                             
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Signup;
