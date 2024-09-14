import React, { useEffect } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import listImage from "../../assets/img/list.jpg";
import PeakImg from "../../assets/img/peak.gif";
import Prompt from "../../components/common/prompt";
import { useGlobalContext } from "../../context/auth-context";
import AlertMessage from "../../components/common/alert";
import { useNavigate } from "react-router-dom";
import { LoginvalidationSchema } from "../../utils/validationScehma";

const Register = () => {
  const { login, user, alert, setAlert,loading } = useGlobalContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginvalidationSchema,

    onSubmit: (values) => {
      console.log(values);
      login(values);
    },
  });

  // user is updated so login
  useEffect(() => {
    if (user) {
      navigate("/user-home");
    }
  }, [user]);


  // clear form
  useEffect(() => {
    if (alert) {
      formik.resetForm();
      setTimeout(() => {
        setAlert("");
      }, 1000);
    }
  }, [alert]);



  return (
    <React.Fragment >
      <Typography
        variant="h3"
        textAlign={"center"}
        fontWeight={600}
        component={"h1"}
        sx={{ sm:{padding: "30px 0"} }}
      >
        Login
      </Typography>
      <Grid container  spacing={{ xs: 2, sm: 4, md: 10 }} sx={{ marginTop: "40px",paddingBottom:"40px" }}>
 
        {/* Container with spacing */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <img
            src={PeakImg}
            alt={"list image"}
            loading="lazy"
            height={"450"}
            width={"100%"}
          />
        </Grid>
        <Grid sx={{display:"flex" ,alignItems:"center"}} size={{ xs: 12, sm: 6 }}>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 0 },width:"100%" }}
            noValidate
            onSubmit={formik.handleSubmit}
          >
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

            <Box component={"div"} sx={{ marginBottom: 2 }}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ padding:"10px 0" }}
              >
                Login
              </Button>
            </Box>

            <Prompt
              Messagetext={"Not Registered yet "}
              linkText={"Click here"}
              url={"/register"}
            />

            {alert && (
              <AlertMessage message={alert.message} type={alert.type} />
            )}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Register;
