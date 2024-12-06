import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedColor, selectedSize } = action.payload;
      const existingItem = state.find(item => item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id, selectedColor, selectedSize } = action.payload;
      return state.filter(item => !(item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize));
    },
    updateQuantity: (state, action) => {
      const { id, selectedColor, selectedSize, quantity } = action.payload;
      const item = state.find(item => item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

