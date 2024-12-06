import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API calls for demonstration purposes
const mockGoogleLogin = () => Promise.resolve({ name: 'Google User', email: 'user@example.com' });
const mockGuestLogin = () => Promise.resolve({ name: 'Guest', email: null });

export const loginWithGoogle = createAsyncThunk('auth/loginWithGoogle', async (_, thunkAPI) => {
  try {
    const user = await mockGoogleLogin();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to log in with Google');
  }
});

export const loginAsGuest = createAsyncThunk('auth/loginAsGuest', async (_, thunkAPI) => {
  try {
    const user = await mockGuestLogin();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to log in as Guest');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginAsGuest.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginAsGuest.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
