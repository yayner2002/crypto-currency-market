import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchCoinInfo, selectCoins } from '../../redux/crypto/Cryptos';
import Helmet from '../Helmet/Helmet';

let init = true;
const Home = () => {
  const coins = useSelector(selectCoins);
  // const {
  //   name, rank, symbol, priceUsd, marketCapUsd,
  // } = coins[0];

  const dispatch = useDispatch();

  useEffect(() => {
    if (init) {
      dispatch(fetchCoinInfo());
      init = false;
    }
  }, [dispatch]);
  return (
    <Helmet title="Home">
      <h1>
        <ul>
          {coins.map((coins) => (
            <li key={coins.id}>{coins.name}</li>
          ))}
        </ul>
      </h1>
    </Helmet>
  );
};

export default Home;
