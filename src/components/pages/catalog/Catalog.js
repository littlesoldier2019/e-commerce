import React from 'react'
import ImageBoard from './ImageBoard'
import SideBar from './SideBar'
import Footer from '../../shared-components/Footer'
import Header from '../../shared-components/Header'
import '../../../assets/styles/catalog.scss'



function Catalog() {
    return (
        <>
            <div className='catalog__container'>
                <Header/>
                <SideBar />
                <ImageBoard />
            </div>
            <Footer />
        </>

    )
}

export default Catalog
