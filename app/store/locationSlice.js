import { createSlice } from '@reduxjs/toolkit';
import {fetchLocation} from "../api/fetchLocation";

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    region: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.region = action.payload;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default locationSlice.reducer;
