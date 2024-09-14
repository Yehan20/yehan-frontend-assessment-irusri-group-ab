import { Typography, Grid2 as Grid, Container, Box, Button, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import AccordionSection from '../../components/common/accordion'
import FeaturesCard from '../../components/common/featurecard'
import { Link } from 'react-router-dom'
import workImg from '../../assets/img/work.jpg'
import timeImg from '../../assets/img/time.jpg'
import paperImg from '../../assets/img/paper.jpg'
import product from '../../assets/img/product.webp'

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3"
        textAlign={"center"}
        fontWeight={600}
        component={"h1"}
        gutterBottom
      >

        Welcome to Todos


      </Typography>
      <Typography variant='h6' component='p' align='center' paragraph>
        Manage your tasks efficiently with our easy-to-use todo application. Keep track of your to-dos, set reminders, and stay organized.
      </Typography>


      <Grid sx={{ margin: '50px 0px' }} container spacing={4}>
        {/* Column 1 */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <FeaturesCard image={workImg} title={'Well Organized'} />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <FeaturesCard image={timeImg} title={'Less time consuming'} />
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <FeaturesCard image={paperImg} title={'Less Space'} />
        </Grid>

      </Grid>

      <Grid sx={{ margin: '80px 0px' }} container spacing={4}>
        <Grid size={{ xs: 12 }}>
          <Box sx={{ p: 3, borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
            <Typography variant='h4' sx={{ marginBottom: "40px" }}>
              Get Started
            </Typography>
            <Typography variant='h5' sx={{ marginBottom: "40px" }}>
              Create a Free Account and Start Managing your Tasks <br />

            </Typography>
            <Link title='Click to visit' to={'/register'}>
              <Button variant='contained' size='large' sx={{
                textTransform: 'capitalize',
                fontSize:"1.2rem" // Makes the button text uppercase
              }} >Register Now</Button>
            </Link>
          </Box>
        </Grid>

      </Grid>

      <Grid sx={{ margin: '80px 0px' }} container spacing={4}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box sx={{ p: 2,textAlign: 'center' }}>
          <img
              
              src={product}
              alt={'Porduct'}
              loading="lazy"
              height={"300"}
              sx={{ width:"100%" }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Box sx={{ p: 2,  textAlign: 'start' }}>
            <Typography variant='h4' sx={{ marginBottom: "40px" }}>
              Already Registered
            </Typography>
            <Typography variant='h5' sx={{ marginBottom: "40px" }}>
              Click below to Start Planing your tasks <br />

            </Typography>
            <Link to={'/login'} title='Click to visit'>
              <Button variant='contained' size='large' sx={{
                textTransform: 'capitalize', // Makes the button text uppercase,
                fontSize:"1.2rem"
              }} >Login</Button>
            </Link>
          </Box>
        </Grid>

      </Grid>

    </Container>
  )
}

export default Home