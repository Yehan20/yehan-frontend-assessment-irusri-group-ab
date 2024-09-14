import {  Container } from '@mui/material'
import React from 'react'


import FeaturedSection from './featured-section'
import AdertisementSection from './advertisement-section'
import IntroSection from './introsection'
import CustomSnackBar from '../../components/ui/snack-bar'

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
       <IntroSection/>
       <FeaturedSection/>
       <AdertisementSection/>
       <CustomSnackBar/>
    </Container>
  )
}

export default Home