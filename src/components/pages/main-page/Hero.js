/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../../assets/styles/hero.scss'

function Hero() {
    
    return (

        <div className='hero__container'>

            <div className='hero-section__first'>
            </div>

            <div className='hero-section__second'>

                <div className='hero-title'>
                    <h2>new collection</h2>
                </div>
                <div className='hero-description'>
                    <p>Our easiest chuck-on-and-go staples come with a serious style heritage that's liberating, sexy, comfy and supremely cool.</p>
                </div>
                <div className='hero-button'> <a href='#'><button className='btn_newarrival'>SHOP NEW ARRIVALS</button></a> </div>
            </div>

        </div>

    )
}

export default Hero
