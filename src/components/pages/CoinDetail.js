import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ShowCase from './ShowCase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectCoins } from '../../redux/crypto/Cryptos';

const CoinDetail = () => {
  const { id } = useParams();
  const coins = useSelector(selectCoins);
  const coinDetail = coins.filter((coin) => coin.id === id);
  window.console.log(coinDetail);

  return (

    <>
      <Header />
      <ShowCase />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Rank</th>
            <th>Supply</th>
            <th>Market Capital(USD)</th>
            <th>Volume(USD) 24Hrs</th>
            <th>Price(USD)</th>
            <th>Change Percent(24Hr)</th>
            <th>VWAP(24Hr)</th>
          </tr>
        </thead>
        <tbody>
          {coinDetail.map((coin) => (
            <tr key={coin.name}>
              <td>
                {coin.name}
              </td>
              <td>
                {coin.symbol}
              </td>
              <td>
                {coin.rank}
              </td>
              <td>
                {coin.supply}
              </td>
              <td>
                {coin.marketCapUsd}
              </td>
              <td>
                {coin.volumeUsd24Hr}
                priceUsd
              </td>
              <td>
                {coin.priceUsd}
              </td>
              <td>
                {coin.changePercent24Hr}
              </td>
              <td>
                {coin.vwap24Hr}
              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </>

  );
};

export default CoinDetail;
