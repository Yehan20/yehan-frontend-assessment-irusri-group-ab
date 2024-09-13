import React  from 'react';
import {createBrowserRouter,createRoutesFromElements,  Route,  } from 'react-router-dom';

import RootLayout from '../layouts/rootLayout';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import UserHome from '../pages/user-home';
import NotFound from '../pages/not-found';
import PrivateRoute from './private.route';


// Defining our custom router
const RouterContext = createBrowserRouter(
  createRoutesFromElements(
    // delcrere your routes
       <Route path='/'  element={<RootLayout/>}>

         <Route index element={<Home/>}/>

         <Route path='login' element={<Login/>}/>

         <Route path='register' element={<Register/>}/>

         <Route path='user-home' element={<PrivateRoute><UserHome/></PrivateRoute>}/>
    
          <Route path='*' element={<NotFound/>}/>
       </Route>

  )

)


export default RouterContext;