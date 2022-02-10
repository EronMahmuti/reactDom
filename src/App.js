import logo from './logo.svg';
import './App.css';
import react from 'react';
import Todo from './components/Todo';
import {Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetups from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
function App() {
  return (
    <div>
      <Layout>
        <Routes>
            <Route path='/' element={<AllMeetupsPage />} />
            <Route path='/new-meetup' element={<NewMeetups />} />
            <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
      {/* <Todo text="Things to do today" /> */}
    </div>
  );
}

// 1.40

export default App;
