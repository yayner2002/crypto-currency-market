import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = [];
const apiEndPoint = 'https://api.coincap.io/v2/assets';

export const fetchCoinInfo =  createAsyncThunk(
  "coins/fetchCoinsInfo",
  async () => {
    const response = await axios.get(`${apiEndPoint}`);
    return response.data;
  }
)

const coinsSlice = createSlice({
  name:"coins",
  initialState,
  red
})

