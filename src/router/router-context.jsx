import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';

import RootLayout from '../layouts/rootLayout';
import CircularProgress from '@mui/material/CircularProgress';

const Login = React.lazy(() => import("../pages/login"));
const Home = React.lazy(() => import("../pages/home"));
const Register = React.lazy(() => import("../pages/register"));
const UserHome = React.lazy(() => import("../pages/user-home"));

// import Home from '../pages/home';
// import Login from '../pages/login';
// import Register from '../pages/register';
// import UserHome from '../pages/user-home';
import NotFound from '../pages/not-found';
import PrivateRoute from './private.route';



// Defining our custom router
const RouterContext = createBrowserRouter(
  createRoutesFromElements(
    // delcrere your routes

    <Route path='/' element={<RootLayout />}>

      <Route index element={<Suspense fallback={<CircularProgress />}><Home /></Suspense>} />

      <Route path='login' element={<Suspense fallback={<CircularProgress />}><Login /></Suspense>} />

      <Route path='register' element={<Suspense fallback={<CircularProgress />}><Register /></Suspense>} />

      <Route path='user-home' element={<Suspense fallback={<CircularProgress />}><PrivateRoute><UserHome /></PrivateRoute></Suspense>} />

      <Route path='*' element={<NotFound />} />
    </Route>



  )

)


export default RouterContext;