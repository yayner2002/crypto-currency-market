import React from 'react';
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
            <span><h3>{title}</h3></span>
            <span>
              <h4>
                {numbers}
                {' '}
                coins
              </h4>
            </span>

          </>
        ) : (
          <>
            <span><h3>{name}</h3></span>
            <span>
              <h4>
                {symbol}
              </h4>
            </span>
            <span>{rank}</span>
          </>
        ) }

      </div>

    </div>
  );
};

export default ShowCase;
