import React from 'react';
import '../../../assets/styles/AlsoLike.scss';
import Image1 from '../../../assets/images/brow-shoes-1.jpg';
import Image2 from '../../../assets/images/brown-bag-1.jpg';
import Image3 from '../../../assets/images/hat-1.jpg';
import Image4 from '../../../assets/images/white-dress-3.jpg';

function AlsoLike() {
  return (
    <div className="container-fluid also-like">
      <h4 className="text-center">You may also like</h4>
      <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img src={Image1} className="img-fluid px-0" alt="Responsive"/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img src={Image2} className="img-fluid px-0" alt="Responsive"/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img src={Image3} className="img-fluid px-0" alt="Responsive"/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img src={Image4} className="img-fluid px-0" alt="Responsive"/>
          </div>
      </div>
    </div>
  );
}

export default AlsoLike;
