import React from 'react'
import ImageBoard from './ImageBoard'
import SideBar from './SideBar'
import Footer from '../main-page/Footer'
import '../../../assets/styles/catalog.css'



function Catalog() {
    return (
        <>
            <div className='catalog__container'>
                <SideBar />
                <ImageBoard />
            </div>
            <Footer />
        </>

    )
}

export default Catalog
