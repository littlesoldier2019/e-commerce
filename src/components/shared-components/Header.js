import React from 'react';
import '../../assets/styles/header.scss';
import searchIcon from '../../assets/images/search-icon.png';
import heartIcon from '../../assets/images/heart-icon.png';

const Header = (props) => {
    return (
        <div 
            className='container-fluid header d-flex justify-content-between align-items-center'
            style={{backgroundColor:`${props.bkgcolor}`}}
        >
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item nav-link active mx-3">
                            New arrivals <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item nav-link mx-3">
                            shop
                        </li>
                        <li className="nav-item nav-link mx-3">
                            collections
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="">
                <p className="logo">modnikki</p>
            </div>
            <div className='d-flex justify-content-end align-items-center' >
                <form className="form-inline mx-3 my-lg-0">
                    <input 
                        className="form-control mr-sm-2" 
                        id='search' 
                        name='search' 
                        type="search" 
                        placeholder="" 
                        aria-label="Search"
                        style={{backgroundColor:`${props.bkgcolor}`}}
                    />                   
                    <img className='search-icon' src={searchIcon} alt='search icon'/>
                    <label htmlFor='search'>search</label>
                </form>               
                <p className="nav-item nav-link mx-3">sign in</p>
                <p className="nav-item nav-link mx-3">bag</p>
                <img className="nav-item nav-link mx-3" src={heartIcon} alt='heart icon'/>
            </div>
        </div>
    )
}

export default Header;