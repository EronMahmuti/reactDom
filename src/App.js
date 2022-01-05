import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import newMeetup from './pages/NewMeetup';

function App() {
  return (

    <div>
      <Route path='/'></Route>
      <Route path='/all-meetups'>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <newMeetup />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </div>
  );
}

// 1.40

export default App;
