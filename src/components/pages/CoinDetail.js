import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ShowCase from '../Showcase/ShowCase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectCoins } from '../../redux/crypto/Cryptos';
import '../../styles/CryptoDetail.css';
import Helmet from '../Helmet/Helmet';

const CoinDetail = () => {
  const { id } = useParams();
  const coins = useSelector(selectCoins);
  const coinDetail = coins.filter((coin) => coin.id === id);
  return (
    <Helmet title="CoinDetail">
      <>
        {coinDetail.map((coin) => (
          <ShowCase name={coin.name} symbol={coin.symbol} key={uuidv4()} rank={coin.rank} />
        ))}
        <div className="coin-detail-title">
          <h5>Coin Detail</h5>
        </div>
        <ul className="singleCoinDetail">
          {coinDetail.map((coin) => (
            <div key={uuidv4()}>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Name:</p>
                <p>{coin.name}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Symbol:</p>
                <p>{coin.symbol}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Rank:</p>
                <p>{coin.rank}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Supply:</p>
                <p>{coin.supply}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Market Capital(USD):</p>
                <p>{coin.marketCapUsd}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Volume(USD) 24Hrs:</p>
                <p>{coin.volumeUsd24Hr}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Price(USD):</p>
                <p>{coin.priceUsd}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>Change Percent(24Hr):</p>
                <p>{coin.changePercent24Hr}</p>
              </li>
              <li key={uuidv4()} className="d-flex justify-content-between p-2 list-items">
                <p>VWAP(24Hr):</p>
                <p>{coin.vwap24Hr}</p>
              </li>
            </div>
          ))}
        </ul>
      </>
    </Helmet>

  );
};

export default CoinDetail;
