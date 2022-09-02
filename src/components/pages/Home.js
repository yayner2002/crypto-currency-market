/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinInfo, selectCoins } from '../../redux/crypto/Cryptos';
import '../../styles/Home.css';
import 'remixicon/fonts/remixicon.css';
import HomeShowCase from '../Showcase/HomeShowCase';

let init = true;
const Home = () => {
  const coins = useSelector(selectCoins);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (init) {
      dispatch(fetchCoinInfo());
      init = false;
    }
  }, [dispatch]);

  return (
    <>
      <HomeShowCase title="Digital Currency" numbers={coins.length} />
      <div className="coin-title-container">
        <h5 className="coins-title" data-testid="heading">Coins By Name</h5>
        <form className="form">
          <input type="text" placeholder="Search Coin..." name="coinName" id="coinName" value={searchTerm} onChange={(e) => setSearchTerm(e.target.coinName.value)} />
          <button type="submit"><i className="ri-search-line" /></button>
        </form>
      </div>
      <div className="coinContainer" data-testid="coins-page">
        {coins.map((coin) => (
          <div className="singleCoin" key={coin.id} data-testid="coin-container">
            <span>
              <Link to={`coinDetail/${coin.id}`}>
                <i className="ri-arrow-right-circle-line" />
              </Link>
            </span>
            <Link to={`coinDetail/${coin.id}`}>
              <p>{coin.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
