import React from 'react';
import PropTypes from 'prop-types';
import showcase from '../../assets/images/showcase1.png';

import '../../styles/Showcase.css';

const ShowCase = (props) => {
  const {
    title, name, numbers, rank, symbol,
  } = props;
  return (
    <div className="show-case-section">
      <div className="show-case-image">
        <img src={showcase} alt="showcase" className="showcaseimg" />
      </div>
      <div className="show-case-title">

        {document.title === 'Home' ? (
          <>
            <span><h6>{title}</h6></span>
            <span>
              <h6>
                {numbers}
                {' '}
                coins
              </h6>
            </span>

          </>
        ) : (
          <>
            <span><h6>{name}</h6></span>
            <span>
              <h5>
                {symbol}
              </h5>
            </span>
            <span>{rank}</span>
          </>
        ) }

      </div>

    </div>
  );
};

ShowCase.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  numbers: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};
export default ShowCase;
