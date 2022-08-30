import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinInfo, selectCoins } from '../../redux/crypto/Cryptos';
import Helmet from '../Helmet/Helmet';
import Header from './Header';
import '../../styles/Home.css';
import 'remixicon/fonts/remixicon.css';

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
          <div className="singleCoin" key={coin.id}>
            <span><Link to="/"><i className="ri-arrow-right-circle-line" /></Link></span>
            <h4>{coin.name}</h4>
            <h5>{coin.symbol}</h5>
            <small>{`${coin.priceUsd}$`}</small>
          </div>
        ))}
      </div>
    </Helmet>
  );
};

export default Home;
