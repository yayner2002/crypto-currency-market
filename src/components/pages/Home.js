import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinInfo, selectCoins } from '../../redux/crypto/Cryptos';
import Helmet from '../Helmet/Helmet';
import '../../styles/Home.css';
import 'remixicon/fonts/remixicon.css';
import ShowCase from '../Showcase/ShowCase';

let init = true;
const Home = () => {
  const coins = useSelector(selectCoins);

  const dispatch = useDispatch();

  useEffect(() => {
    if (init) {
      dispatch(fetchCoinInfo());
      init = false;
    }
  }, [dispatch]);
  return (
    <Helmet title="Home">
      <ShowCase title="Digital Currency" numbers={coins.length} />
      <div className="coin-title-container">
        <h5 className="coins-title">Coins By Name, Symbol, Price</h5>
      </div>
      <div className="coinContainer">
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
            <Link to={`coinDetail/${coin.id}`}>
              <p>{coin.symbol}</p>
            </Link>
            <small>{`${parseFloat(coin.priceUsd || 0).toFixed(5)}$`}</small>
          </div>
        ))}
      </div>
    </Helmet>
  );
};

export default Home;
