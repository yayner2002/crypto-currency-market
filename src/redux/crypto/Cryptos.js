import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndPoint = 'https://api.coincap.io/v2/assets';

export const fetchCoinInfo = createAsyncThunk(
  'coins/fetchCoinsInfo',
  async () => {
    const response = await axios.get(`${apiEndPoint}`);
    return response.data;
  },
);

const initialState = [];
const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: {
    [fetchCoinInfo.fulfilled]: (state, { payload }) => {
      const specificCoinInfo = payload.map((coin) => ({
        id: coin.id,
        rank: coin.rank,
        symbol: coin.symbol,
        name: coin.name,
      }));
      return specificCoinInfo;
    },
  },
});

export default coinsSlice.reducer;
