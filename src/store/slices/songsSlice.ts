import { createSlice } from '@reduxjs/toolkit';
import { resetApp } from './../index';

const songsSlice = createSlice({
  name: 'songs',
  initialState: [] as string[],
  reducers: {
    addSong(state, action) {
      state.push(action.payload); // refers to song state only.
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetApp.toString(), (/*state, action*/) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer; // RTK recommends exporting the combined reducer
