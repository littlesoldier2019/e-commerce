import React from 'react';
import '../../../assets/styles/ProductInfo.scss';
import InfoImage from './InfoImage';
import InfoText from './InfoText';

function ProductInfo() {
  return (
    <div className="container-fluid product-info mb-5">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-9">
                <InfoImage />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <InfoText />
            </div>
        </div>
    </div>
  );
}

export default ProductInfo;
