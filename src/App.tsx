import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetailHome from './pages/MovieDetailHome';
import MovieHome from './pages/MovieHome';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/movies' element={<MovieHome />} />
          <Route path='/movie-detail/:id' element={<MovieDetailHome />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
