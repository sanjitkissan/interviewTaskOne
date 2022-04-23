import React from 'react';
import "./style.css";
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
UserName: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    emailId: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
    UserName: '',
        emailId: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Create Account</h1>
          <Form>
            <TextField label="User Name" name="username" type="text" />
            <TextField label="Email Id" name="emailId" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn1" type="submit">Sign Up</button>
            
          </Form>
        </div>
      )}
    </Formik>
  )
      }