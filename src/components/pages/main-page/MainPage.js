import React from 'react'
import Hero from './Hero'
import SingleImage from './SingleImage'
import ImageCollection from './ImageCollection'
import SingleImage2 from './SingleImage2'
import NewArrival from './NewArrival'
import SingleImage3 from './SingleImage3'
import ImageMix from './ImageMix'
import Footer from '../../shared-components/Footer'



function MainPage() {
    return (
        <>
        <Hero />
        <SingleImage />
        <ImageCollection />
        <SingleImage2 />
        <NewArrival />
        <SingleImage3 />
        <ImageMix />
        <Footer/>
    </>
    )
}

export default MainPage


