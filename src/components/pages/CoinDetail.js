import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ShowCase from './ShowCase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectCoins } from '../../redux/crypto/Cryptos';
import '../../styles/CryptoDetail.css';

const CoinDetail = () => {
  const { id } = useParams();
  const coins = useSelector(selectCoins);
  const coinDetail = coins.filter((coin) => coin.id === id);
  window.console.log(coinDetail);

  return (

    <>
      <Header />
      <ShowCase />
      <h3>Coin Detail</h3>
      <div className="singleCoinDetail">
        {coinDetail.map((coin) => (
          <>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Name:</p>
              <p>{coin.name}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Symbol:</p>
              <p>{coin.symbol}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Rank:</p>
              <p>{coin.rank}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Supply:</p>
              <p>{coin.supply}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Market Capital(USD):</p>
              <p>{coin.marketCapUsd}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Volume(USD) 24Hrs:</p>
              <p>{coin.volumeUsd24Hr}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Price(USD):</p>
              <p>{coin.priceUsd}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>Change Percent(24Hr):</p>
              <p>{coin.changePercent24Hr}</p>
            </div>
            <div key={coin.name} className="d-flex justify-content-between">
              <p>VWAP(24Hr):</p>
              <p>{coin.vwap24Hr}</p>
            </div>

          </>
        ))}
      </div>

    </>

  );
};

export default CoinDetail;
