import React from "react";

import { Grid2 as Grid, Typography } from "@mui/material";

import listImage from "../../assets/img/list.jpg";
import LoginForm from "../../components/auth/login";

const Register = () => {

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
            src={listImage}
            alt={"list image"}
            loading="lazy"
            height={"450"}
            width={"100%"}
          />
        </Grid>
         
         <LoginForm/>

      </Grid>
    </React.Fragment>
  );
};

export default Register;
