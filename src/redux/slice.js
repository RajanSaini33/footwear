
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;
//       const existing = state.items.find(
//         (item) => item.id === product.id && item.size === product.size
//       );

//       if (existing) {
//         existing.quantity += product.quantity;
//       } else {
//         state.items.push(product);
//       }
//     },
//    removeFromCart: (state, action) => {
//   const { id, size } = action.payload;
//   state.items = state.items.filter(item => !(item.id === id && item.size === size));
// },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage', error);
    return [];
  }
};

const saveCartToLocalStorage = (cartItems) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Failed to save cart to localStorage', error);
  }
};

const initialState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existing) {
        existing.quantity += product.quantity;
      } else {
        state.items.push(product);
      }

      saveCartToLocalStorage(state.items); 
    },

    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(item => !(item.id === id && item.size === size));

      saveCartToLocalStorage(state.items); 
    },

    clearCart: (state) => {
      state.items = [];

      saveCartToLocalStorage([]); 
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
