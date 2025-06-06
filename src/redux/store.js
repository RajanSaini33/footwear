// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './slice'

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// })
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice'; // path to your slice file

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
