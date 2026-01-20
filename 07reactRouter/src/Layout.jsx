import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    
    <Outlet />

    <Footer />
    </>
  )
}

export default Layout

/*
1. This file contains layout of our webpage,the fixed components which will be present on all the pages like Header and Footer.
2. We can insert the dynamic components in between using <Outlet/> component from react-router-dom.
3. Use nested Route. Serve this Layout component as the parent route and all other routes as its children.
*/