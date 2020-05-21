/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../../assets/styles/imagemix.scss'

function ImageMix() {
    return (
        <div className='imagemix__container'>
            <ul className='imagemix-title'>
               <a href='#'><li> shop instagram</li></a>
               <a href='#'><li style={{paddingLeft:'60px'}}> shop > </li></a>
            </ul>

            <div className='imagemix-content'>
                <div className='imagemix_section__first'></div>
                <div className='imagemix_section__second'>
                    <div className='imagemix_section__seconditem1'></div>
                    <div className='imagemix_section__seconditem2'></div>
                    <div className='imagemix_section__seconditem3'></div>
                    <div className='imagemix_section__seconditem4'></div>
                </div>
            </div>

        </div>
    )
}

export default ImageMix
