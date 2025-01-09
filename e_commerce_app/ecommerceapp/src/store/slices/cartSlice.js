import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateCartQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ productId, quantity }, { getState, dispatch }) => {
    try {
      const state = getState();
      const item = state.cart.items.find(item => item.id === productId);
      if (item) {
        dispatch(cartSlice.actions.updateQuantity({ id: productId, quantity }));
        return { id: productId, quantity };
      }
      throw new Error('Item not found in cart');
    } catch (error) {
      throw error;
    }
  }
);

export const removeFromCartAsync = createAsyncThunk(
  'cart/removeItemAsync',
  async (productId) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return productId;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedSize, selectedColor } = action.payload;
      const existingItem = state.items.find(
        item => item.id === id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCartQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeFromCartAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(removeFromCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, clearCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

