import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
        <ShowCase />
        <h5>Coin Detail</h5>
        <ul className="singleCoinDetail">
          {coinDetail.map((coin) => (
            <>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Name:</p>
                <p>{coin.name}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Symbol:</p>
                <p>{coin.symbol}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Rank:</p>
                <p>{coin.rank}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Supply:</p>
                <p>{coin.supply}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Market Capital(USD):</p>
                <p>{coin.marketCapUsd}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Volume(USD) 24Hrs:</p>
                <p>{coin.volumeUsd24Hr}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Price(USD):</p>
                <p>{coin.priceUsd}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>Change Percent(24Hr):</p>
                <p>{coin.changePercent24Hr}</p>
              </li>
              <li key={coin.name} className="d-flex justify-content-between p-2">
                <p>VWAP(24Hr):</p>
                <p>{coin.vwap24Hr}</p>
              </li>

            </>
          ))}
        </ul>

      </>
    </Helmet>

  );
};

export default CoinDetail;
