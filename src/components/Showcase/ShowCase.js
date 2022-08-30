import React from 'react';
import showcase from '../../assets/images/showcase1.png';
import '../../styles/Showcase.css';

const ShowCase = () => (
  <div className="show-case-section">
    <div className="show-case-image">
      <img src={showcase} alt="showcase" className="showcaseimg" />
    </div>
    <div className="show-case-title">
      <span>titl</span>
      <span>title</span>
      <span>nubmer</span>
    </div>

  </div>
);

export default ShowCase;
