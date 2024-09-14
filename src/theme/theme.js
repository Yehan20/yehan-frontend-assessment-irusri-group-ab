import { createTheme } from "@mui/material";

const theme = createTheme({
    typography:{

       fontFamily:'Poppins,san-serif',

    },
    palette: {
      primary: {
        main: "#f8b145", // yellowish clr
      },
      secondary: {
        main: '#1c201f', // Custom text color if needed
      },
    },

    components: {
      MuiButton: {
          styleOverrides: {
              root: {
                  // Default styles
               
                  '&:hover.MuiButton-containedPrimary': {
                      opacity:0.9,
                       background:"#f8b145"
                      // boxShadow: 'none',
                  },

                        '&.Mui-disabled': {
                  backgroundColor: '#ccc', // Disabled state background color
                  opacity:0.6,
                  color: '#1c201f', // Disabled state text color
                },
                  
              },
            
            
          },
      },
  },
});

export default theme