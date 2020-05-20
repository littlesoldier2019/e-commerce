/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../../assets/styles/footer.css'
import FooterTop from './FooterTop'

function Footer() {

    return (

        <>
           <FooterTop/> 
            <div className='footer__container'>

                <div className='footer-content'>
                    <span className='Footer-title'> <p>customer service</p></span>
                    <a href='#'><p>contact</p></a>
                    <a href='#'><p>track order</p></a>
                    <a href='#'><p>delivery and return</p></a>
                    <a href='#'><p>payment</p></a>
                    <a href='#'><p>make a return</p></a>
                    <a href='#'><p>faq</p></a>
                </div>

                <div className='footer-content'>
                    <span className='Footer-title'>
                        <p>info</p>
                    </span>
                    <a href='#'><p>get vouchers</p></a>
                    <a href='#'><p>size guide</p></a>
                    <a href='#'><p>careers at aheo</p></a>
                    <a href='#'><p>about us</p></a>
                    <a href='#'><p>ligal policies</p></a>
                </div>

                <div className='footer-content'>
                    <span className='Footer-title'>
                        <p>follow us</p>
                    </span>
                    <a href='#'><p> <i className="fab fa-facebook-square"></i> facebook</p></a>
                    <a href='#'><p> <i className="fab fa-instagram"></i> instagram</p></a>
                    <a href='#'><p> <i className="fab fa-twitter-square"></i> twitter</p></a>
                    <a href='#'><p> <i className="fab fa-pinterest-square"></i> pinterest</p></a>
                    <a href='#'><p> <i className="fab fa-linkedin"></i> linkedin</p></a>
                </div>


                <div className='footer-content' style
                    ={{ textTransform: 'capitalize' }}>
                    <span className='Footer-title'>
                        <p>contact</p>
                    </span>
                    <p>demo@aheo.co.fi</p>
                    <p>+ 356 xxx xx xxx</p>
                    <p>visit us @ aheokatu 52, helspoo, Finland</p>

                </div>
            </div>
        </>


    )
}

export default Footer
