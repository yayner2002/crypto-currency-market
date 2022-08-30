import React from 'react';
import showcase from '../../assets/images/showcase1.png';
import '../../styles/Showcase.css';

const ShowCase = (props) => {
  const { title, numbers } = props;
  return (
    <div className="show-case-section">
      <div className="show-case-image">
        <img src={showcase} alt="showcase" className="showcaseimg" />
      </div>
      <div className="show-case-title">
        <span><h3>{title}</h3></span>
        <span>
          <h4>
            {numbers}
            {' '}
            coins
          </h4>
        </span>
      </div>

    </div>
  );
};

export default ShowCase;
