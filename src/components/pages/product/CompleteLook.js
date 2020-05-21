import React from 'react';
import '../../../assets/styles/CompleteLook.scss';
import Image1 from '../../../assets/images/small-bag-1.jpg';
import Image2 from '../../../assets/images/white-shoes-1.jpg';

function CompleteLook() {
  return (
    <div className="container-fluid complete-look">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <h3>complete <br/>look</h3>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <img src={Image1} className="img-fluid px-0" alt="Responsive"/>
                </div>
                <div className="col-md-12 col-lg-6">
                  <img src={Image2} className="img-fluid px-0" alt="Responsive"/>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default CompleteLook;
