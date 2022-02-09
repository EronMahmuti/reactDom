import logo from './logo.svg';
import './App.css';
import react from 'react';
import Todo from './components/Todo';
import {Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetups from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Todo text="Things to do today" />
      <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetups />} />
          <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

// 1.40

export default App;
