import React from 'react';
import './Success.css';

const Success = () => {
  return (
    <div className="SucessContainer">
      <div className="w3-modal-icon w3-modal-success animate">
        <span className="w3-modal-line w3-modal-tip animateSuccessTip"></span>
        <span className="w3-modal-line w3-modal-long animateSuccessLong"></span>
        <div className="w3-modal-placeholder"></div>
        <div className="w3-modal-fix"></div>
      </div>
    </div>
  );
};
export default Success;
