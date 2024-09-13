import React, { useEffect } from 'react';
import { Form, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, FormControl, Grid2 as Grid, Typography } from '@mui/material';
import listImage from '../../assets/img/list.jpg'
import Prompt from '../../components/common/prompt';
import { useGlobalContext } from '../../context/auth-context';
import { useNavigate} from 'react-router-dom';

const Register = () => {

  const {register,user} = useGlobalContext()
  const navigate = useNavigate();

  const validationSchema = yup.object({
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
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string('Confirm your password')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
         console.log(values)
         register(values)
    },
  });

  // user is updated so got to home
  useEffect(()=>{
     if(user){
         navigate('/user-home')
     }
  },[user])


  return (
    <Box sx={{ paddingTop: "20px" }}>
      <Typography variant='h3' textAlign={"center"} fontWeight={600} component={'h1'}>Register</Typography>
      <Grid container spacing={10} sx={{ marginTop: "40px" }}> {/* Container with spacing */}

        <Grid  size={{ xs: 12, sm: 6 }}>

          <img

            src={listImage}
            alt={"list image"}
            loading="lazy"
            height={"400"}
            width={"100%"}
          />

        </Grid>

        <Grid  size={{ xs: 12 , sm: 6 }}>


          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 0 } }}
            noValidate
            onSubmit={formik.handleSubmit}
          >

            <Box component="div" sx={{ marginBottom: 4, '& .MuiTextField-root': { margin: 0 } }}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>

            <Box component="div" sx={{
              marginBottom: 4, '& .MuiTextField-root': {
                margin: 0
              }
            }}>

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}


              />
            </Box>

            <Box component="div" sx={{
              marginBottom: 4, '& .MuiTextField-root': {
                margin: 0
              }
            }}>

              <TextField

                fullWidth
                id="password"
                name="password"
                label="Password"
                required
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

            </Box>



            <Box component="div" sx={{ marginBottom: 4, '& .MuiTextField-root': { margin: 0 } }}>
              <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                required
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            </Box>


            <Box component={"div"} sx={{ marginBottom: 2 }} >

              <Button color="primary" variant="contained" fullWidth type="submit" >
                Submit
              </Button>
            </Box>

            <Prompt Messagetext={'Already a User '} linkText={'Click here'} url={'/login'} />
          </Box>

        </Grid>

      </Grid>
    </Box>
  )
}


export default Register;