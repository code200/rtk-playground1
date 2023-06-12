import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong } from '../data';
import { addSong, removeSong } from './../store';
import type { RootState } from '../store';

function SongPlaylist() {
  const dispatch = useDispatch(); // uses context to get the dispatch function from the redux store.

  const songPlaylist: string[] = useSelector((state: RootState) => state.songs); // refers to entire state

  const handleSongAdd = (song: string) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song: string) => {
    dispatch(removeSong(song));
  };

  const renderedSongs =
    Boolean(songPlaylist) &&
    songPlaylist.map(song => {
      return (
        <li key={song}>
          {song}
          <button
            onClick={() => handleSongRemove(song)}
            className="button is-danger"
          >
            X
          </button>
        </li>
      );
    });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
