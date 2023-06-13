// export everything related to redux in this file to avoid circular imports.
import { configureStore } from '@reduxjs/toolkit';
// createAction import is used for the 'app/reset' action
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { resetApp } from './actions';

const store = configureStore({
  reducer: {
    songs: songsReducer, // big reducer inside redux store that forwards actions to mini-reducers.
    movies: moviesReducer, // dispatched actions go into every reducer.
  },
});

// can dispatch manually to debug. songsSlice.actions.addSong creates an action object to dispatch.
// store.dispatch(songsSlice.actions.addSong('my newest song'));
// store.dispatch(songsSlice.actions.removeSong('my newest song'));

export type RootState = ReturnType<typeof store.getState>;
export { store, resetApp, addSong, removeSong, addMovie, removeMovie };

// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie } = moviesSlice.actions;
