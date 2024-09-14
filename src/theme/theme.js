import { createTheme } from "@mui/material";

const baseFontSize = 15
const theme = createTheme({
    typography:{

       fontFamily:'Poppins,san-serif',
    //    pxToRem:()=>`${baseFontSize / 16}rem`,
    //    h5:{
    //      fontSize:'clamp(1rem,1vw,1.5rem)'
    //    }
    },
    palette: {
      primary: {
        main: "#f8b145",
      },
      text: {
        primary: '#1c201f', // Custom text color if needed
      },
    },
});

export default theme