import { configureStore } from '@reduxjs/toolkit';
import MainReducer from './mainReducer';

const store = configureStore({
  // reducer:{data: mainReducer}
  reducer: {
    data: MainReducer
  }
})

export default store;