import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DetailShowCase from '../Showcase/DetailShowCase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectCoins } from '../../redux/crypto/Cryptos';
import '../../styles/CryptoDetail.css';

const CoinDetail = () => {
  const { id } = useParams();
  const coins = useSelector(selectCoins);
  const coinDetail = coins.filter((coin) => coin.id === id);
  return (
    <>
      {coinDetail.map((coin) => (
        <DetailShowCase name={coin.name} symbol={coin.symbol} key={uuidv4()} rank={coin.rank} />
      ))}
      <div className="coin-detail-title">
        <h5>Coin Detail</h5>
      </div>
      <ul className="singleCoinDetail">
        {coinDetail.map((coin) => (
          <div key={coin.id}>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Name:</p>
              <p>{coin.name}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Symbol:</p>
              <p>{coin.symbol}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Rank:</p>
              <p>{coin.rank}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Supply:</p>
              <p>{parseFloat(coin.supply || 0).toFixed(5)}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Market Capital(USD):</p>
              <p>{parseFloat(coin.marketCapUsd || 0).toFixed(5)}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Volume(USD) 24Hrs:</p>
              <p>{parseFloat(coin.volumeUsd24Hr || 0).toFixed(5)}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Price(USD):</p>
              <p>{parseFloat(coin.priceUsd || 0).toFixed(5)}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>Change Percent(24Hr):</p>
              <p>{parseFloat(coin.changePercent24Hr || 0).toFixed(5)}</p>
            </li>
            <li className="d-flex justify-content-between p-2 list-items">
              <p>VWAP(24Hr):</p>
              <p>{parseFloat(coin.vwap24H || 0).toFixed(5)}</p>
            </li>
          </div>
        ))}
      </ul>
    </>

  );
};

export default CoinDetail;
