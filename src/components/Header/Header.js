import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'reactstrap';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

import React from 'react';

const Header = () => (
  <>
    <header className="header">
      <div className="header-left">
        <span>
          <Link to="/">
            <i className="ri-arrow-left-s-line" />
          </Link>
        </span>
        <span>2020</span>
      </div>
      <div className="header-center">
        <h5>Crypto Market</h5>
      </div>
      <div className="header-right">
        <span>
          <i className="ri-mic-line" />
        </span>
        <span>
          <i className="ri-settings-5-fill" />
        </span>
      </div>
    </header>
  </>
);

export default Header;
