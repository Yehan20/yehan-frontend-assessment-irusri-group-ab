import React, { useEffect } from 'react'
import { Box, Button, Grid2 as Grid, TextField } from '@mui/material'
import Prompt from '../common/prompt'
import { useFormik } from "formik";
import { useGlobalContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { RegistrationvalidationSchema } from "../../utils/validationScehma";


const RegisterForm = () => {
    const { register, user } = useGlobalContext();
    const navigate = useNavigate();
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
      },
      validationSchema: RegistrationvalidationSchema,
  
      onSubmit: (values) => {
        console.log(values);
        register(values);
      },
    });
  
    // user is updated so got to home
    useEffect(() => {
      if (user) {
        navigate("/todo-list-user");
      }
    }, [user]);


  return (
    <Grid size={{ xs: 12, sm: 6 }}>
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 0 } }}
      noValidate
      onSubmit={formik.handleSubmit}
    >
      <Box
        component="div"
        sx={{ marginBottom: 4, "& .MuiTextField-root": { margin: 0 } }}
      >
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

      <Box
        component="div"
        sx={{
          marginBottom: 4,
          "& .MuiTextField-root": {
            margin: 0,
          },
        }}
      >
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

      <Box
        component="div"
        sx={{
          marginBottom: 4,
          "& .MuiTextField-root": {
            margin: 0,
          },
        }}
      >
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
          error={
            formik.touched.password && Boolean(formik.errors.password)
          }
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>

      <Box
        component="div"
        sx={{ marginBottom: 4, "& .MuiTextField-root": { margin: 0 } }}
      >
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
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword &&
            formik.errors.confirmPassword
          }
        />
      </Box>

      <Box component={"div"} sx={{ marginBottom: 2 }}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ padding:"10px 0" }}
        >
          Submit
        </Button>
      </Box>

      <Prompt
        Messagetext={"Already a User "}
        linkText={"Click here"}
        url={"/login"}
      />
    </Box>
  </Grid>
  )
}

export default RegisterForm