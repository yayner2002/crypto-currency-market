import React from 'react';
import PropTypes from 'prop-types';
import showcase from '../../assets/images/showcase1.png';

import '../../styles/Showcase.css';

const HomeShowCase = (props) => {
  const { numbers, title } = props;
  return (
    <div className="show-case-section">
      <div className="show-case-image">
        <img src={showcase} alt="showcase" className="showcaseimg" />
      </div>
      <div className="show-case-title">
        <span>
          <h6>{title}</h6>
        </span>
        <span>
          <h6>
            {numbers}
            {' '}
            coins
          </h6>
        </span>
      </div>
    </div>
  );
};

HomeShowCase.propTypes = {
  title: PropTypes.string.isRequired,
  numbers: PropTypes.number.isRequired,
};

export default HomeShowCase;
