import React from 'react';
import image1 from '../../../assets/images/white-dress-1.jpg';
import image2 from '../../../assets/images/white-dress-2.jpg';

function InfoImage() {
  return (
    <div className="row px-0 info-image">
        <div className="col-md-12 col-lg-6 px-0">
            <img src={image1} className="img-fluid px-0" alt="Responsive"/>
        </div>
        <div className="col-md-12 col-lg-6 px-0">
            <img src={image2} className="img-fluid px-0" alt="Responsive"/>
        </div>
    </div>
  );
}

export default InfoImage;
