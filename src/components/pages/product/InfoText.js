import React from 'react';
import icon from '../../../assets/images/heart-icon.png';
import InfoToggle from './InfoToggle';

function InfoText() {
  return (
    <div className="row">
      <div className="info-text col d-flex justify-content-start align-items-start flex-column">
        <h3>chalk saints box</h3>
        <div>
          <h4 className='product-price'>USD $300.00</h4>
          <h4 className='product-status'>pre-order</h4>
        </div>
        <div className='product-color'>
          <h4>color</h4>
          <div></div>
        </div>
        <div>
          <h4 className='product-size'>size</h4>
          <div className='product-size-item'>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
          </div>
        </div>
        <div className='add-to-bag d-flex justify-content-center align-items-center'>
            <button><h4>add to bag</h4></button>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={icon} alt='add to bag'></img>
            </div>
        </div>
        <InfoToggle />
      </div>
    </div>
  );
}

export default InfoText;
