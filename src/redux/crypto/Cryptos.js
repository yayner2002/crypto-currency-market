import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndPoint = 'https://api.coincap.io/v2/assets';

export const fetchCoinInfo = createAsyncThunk(
  'coins/fetchCoinsInfo',
  async () => {
    const response = await axios.get(`${apiEndPoint}`);
    return response.data.data;
  },
);

const initialState = [];
const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: {
    [fetchCoinInfo.fulfilled]: (state, { payload }) => payload.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      rank: coin.rank,
      supply: coin.supply,
      marketCapUsd: coin.marketCapUsd,
      volumeUsd24Hr: coin.volumeUsd24Hr,
      priceUsd: coin.priceUsd,
      changePercent24Hr: coin.changePercent24Hr,
      vwap24H: coin.vwap24H,
    })),
  },
});

export const selectCoins = (state) => state.coins;
export default coinsSlice.reducer;
