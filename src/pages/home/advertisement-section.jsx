import { Box, Button, Grid2 as Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import product from '../../assets/img/product.webp'

const AdertisementSection = () => {
    return (
        <React.Fragment>
            <Grid sx={{ margin: '80px 0px' }} container spacing={4}>
                <Grid size={{ xs: 12 }}>
                    <Box sx={{ p: 4, borderRadius: 2, boxShadow: 0, textAlign: 'center', background: '#f7f7f7' }}>
                        <Typography variant='h4' sx={{ marginBottom: "40px" }}>
                            Get Started
                        </Typography>
                        <Typography variant='h5' sx={{ marginBottom: "40px" }}>
                            Create a Free Account and Start Managing your Tasks <br />

                        </Typography>
                        <Link title='Click to visit' to={'/register'}>
                            <Button variant='contained' size='large' sx={{
                                textTransform: 'capitalize',
                                fontSize: "1.2rem" // Makes the button text uppercase
                            }} >Register Now</Button>
                        </Link>
                    </Box>
                </Grid>

            </Grid>

            <Grid sx={{ margin: '80px 0px' }} container spacing={4}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                        <img

                            src={product}
                            alt={'Porduct'}
                            loading="lazy"
                            height={"300"}
                            sx={{ width: "100%" }}
                        />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ p: 2, textAlign: 'start' }}>
                        <Typography variant='h4' sx={{ marginBottom: "40px" }}>
                            Already Registered
                        </Typography>
                        <Typography variant='h5' sx={{ marginBottom: "40px" }}>
                            Click below to Start Planing your tasks <br />

                        </Typography>
                        <Link to={'/login'} title='Click to visit'>
                            <Button variant='contained' size='large' sx={{
                                textTransform: 'capitalize', // Makes the button text uppercase,
                                fontSize: "1.2rem"
                            }} >Login</Button>
                        </Link>
                    </Box>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default AdertisementSection