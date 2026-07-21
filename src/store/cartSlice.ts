import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '../utility/type/product';

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      //check item already in the cart
      const existing = state.items.find(
        item => item.product.id === action.payload.id,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
  },
});

export default cartSlice.reducer;
