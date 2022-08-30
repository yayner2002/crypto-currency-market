import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from '../redux/crypto/Cryptos';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
