import React from 'react'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './components/Header'

export function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

// export default Layout