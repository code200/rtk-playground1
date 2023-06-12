import { useDispatch } from 'react-redux';
import './styles.css';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { resetApp } from './store';

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(resetApp());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
