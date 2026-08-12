import { configureStore, createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({

  name: "balance",

  initialState: {
    balance: 50000
  },

  reducers: {

    deposit: (state, action) => {
      state.balance += action.payload;
    },

    withdraw: (state, action) => {
      state.balance -= action.payload;
    }

  }

});


export const {
  deposit,
  withdraw
} = balanceSlice.actions;


const store = configureStore({

  reducer: {
    balance: balanceSlice.reducer
  }

});


export default store;