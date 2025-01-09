import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setWishlistLoading: (state, action) => {
      state.loading = action.payload;
    },
    setWishlistError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { addToWishlist, removeFromWishlist, setWishlistLoading, setWishlistError } = wishlistSlice.actions;

// Async thunks (if needed)
export const addToWishlistAsync = (product) => async (dispatch) => {
  try {
    dispatch(setWishlistLoading(true));
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    dispatch(addToWishlist(product));
    dispatch(setWishlistLoading(false));
  } catch (error) {
    dispatch(setWishlistError(error.message));
    dispatch(setWishlistLoading(false));
  }
};

export const removeFromWishlistAsync = (productId) => async (dispatch) => {
  try {
    dispatch(setWishlistLoading(true));
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    dispatch(removeFromWishlist(productId));
    dispatch(setWishlistLoading(false));
  } catch (error) {
    dispatch(setWishlistError(error.message));
    dispatch(setWishlistLoading(false));
  }
};

export default wishlistSlice.reducer;

