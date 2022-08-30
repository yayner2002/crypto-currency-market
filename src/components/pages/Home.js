import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinInfo, selectCoins } from '../../redux/crypto/Cryptos';
import Helmet from '../Helmet/Helmet';
import Header from './Header';
import '../../styles/Home.css';

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
      <Header />
      <div className="coinContainer">
        {coins.map((coin) => (
          <div className="singleCoin" key={coin.id} d-flex align-items-left>
            <h3>{coin.name}</h3>
            <h4>{coin.symbol}</h4>
            <small>{`${coin.priceUsd}$`}</small>
          </div>
        ))}
      </div>

    </Helmet>
  );
};

export default Home;
