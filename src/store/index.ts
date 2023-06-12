import { configureStore, createSlice } from '@reduxjs/toolkit';

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
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [] as string[],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// can dispatch manually to debug. songsSlice.actions.addSong creates an action object to dispatch.
// store.dispatch(songsSlice.actions.addSong('my newest song'));
// store.dispatch(songsSlice.actions.removeSong('my newest song'));

export { store };
export type RootState = ReturnType<typeof store.getState>;
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
