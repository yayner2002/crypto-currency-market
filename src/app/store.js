import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "../redux/crypto/Cryptos";

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});
