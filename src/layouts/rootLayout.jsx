import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useGlobalContext } from '../context/auth-context'
import MainHeader from '../components/header/main-header'
import Footer from '../components/footer/footer'
import { Container } from '@mui/material'


const RootLayout = () => {
  
    return (
        <React.Fragment>
            <MainHeader />
             <Container sx={{ paddingTop:10 }}>
                <Outlet />
             </Container>
            <Footer />
        </React.Fragment>
    )
}

export default RootLayout
