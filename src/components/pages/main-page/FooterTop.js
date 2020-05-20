/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../../assets/styles/footertop.css'

function FooterTop() {

    return (

        <div className='signup__container'>
            <h3 className='signup-title'> sign up for update </h3>
            <p>Sign up for exclusive early sale access and tailored new arrivals.</p>

            <div className='signup-input__btn'>
                <input
                    type="text"
                    id="title"
                    name='title'
                    placeholder="Your email address"
                >
                </input>
                <a href='#'> <button className='btn_signup'>JOIN</button></a>
            </div>

        </div>
    )
}

export default  FooterTop
