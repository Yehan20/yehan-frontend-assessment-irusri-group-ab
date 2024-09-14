/*
 Place Where our validation schema is there futher usecases will be there as well
*/
import * as yup from 'yup';

export const LoginvalidationSchema = yup.object({

    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });


export const RegistrationvalidationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .matches(/^[A-Za-z\s]+$/, 'Name must only contain letters and spaces')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string('Confirm your password')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

