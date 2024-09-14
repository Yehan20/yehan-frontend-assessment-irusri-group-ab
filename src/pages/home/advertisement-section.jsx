import { Box, Button, Grid2 as Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import product from '../../assets/img/product.webp'

import { useTheme } from '@emotion/react'

const AdertisementSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <React.Fragment>
            <Grid sx={{ margin: '60px 0px' }} container spacing={4}>
                <Grid size={{ xs: 12 }}>
                    <Box sx={{ p: 4, borderRadius: 2, boxShadow: 0, textAlign: 'center', background: '#f7f7f7' }}>
                        <Typography  variant={isSmallScreen ? 'h5' : 'h4'} sx={{ marginBottom: "30px" }}>
                            Get Started
                        </Typography>
                        <Typography   variant={isSmallScreen ? 'h6' : 'h5'} sx={{ marginBottom: "30px" }}>
                            Create a Free Account and Start Managing your Tasks <br />

                        </Typography>
                        <Link title='Click to visit' to={'/register'}>
                            <Button variant='contained' size='large' sx={{
                                textTransform: 'capitalize',
                                fontSize: {
                                    xs: '1.1rem', 
                                    md: '1.3rem', 
                                  }, 
                            }} >Register Now</Button>
                        </Link>
                    </Box>
                </Grid>

            </Grid>

            <Grid sx={{ margin: '40px 0px' }} container spacing={4}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                        <img

                            src={product}
                            alt={'Porduct'}
                            loading="lazy"
                            width={"100%"}
                            style={{ minHeight:"250px" }}
                            sx={{ height: {
                                xs: '200px', 
                                sm: '400px', 
                              },
                              objectFit: 'cover',  }}
                        />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ p: 2, textAlign: 'start' }}>
                        <Typography   variant={isSmallScreen ? 'h5' : 'h4'} sx={{ marginBottom: "30px" }}>
                            Already Registered
                        </Typography>
                        <Typography  variant={isSmallScreen ? 'h6' : 'h5'} sx={{ marginBottom: "30px" }}>
                            Click below to Start Planing your tasks <br />

                        </Typography>
                        <Link to={'/login'} title='Click to visit'>
                            <Button variant='contained' size='large' sx={{
                                textTransform: 'capitalize', // Makes the button text uppercase,
                                fontSize: {
                                    xs: '1.1rem', // Font size for extra-small screens
                                    md: '1.3rem', // Font size for medium screens and up
                                  },
                            }} >Login</Button>
                        </Link>
                    </Box>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default AdertisementSection