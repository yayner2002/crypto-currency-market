import React from 'react';
import PropTypes from 'prop-types';
import showcase from '../../assets/images/showcase1.png';

import '../../styles/Showcase.css';

const DetailShowCase = (props) => {
  const { name, rank, symbol } = props;
  return (
    <div className="show-case-section">
      <div className="show-case-image">
        <img src={showcase} alt="showcase" className="showcaseimg" />
      </div>
      <div className="show-case-title">
        <span>
          <h6>{name}</h6>
        </span>
        <span>
          <h5>{symbol}</h5>
        </span>
        <span>{rank}</span>
      </div>
    </div>
  );
};

DetailShowCase.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default DetailShowCase;
