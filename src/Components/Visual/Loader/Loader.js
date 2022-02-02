import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wraper">
      <div className="looping-rhombuses-spinner">
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="rhombus"></div>
      </div>
    </div>
  );
};

export default Loader;
