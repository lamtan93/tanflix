import React from 'react';
// import './App.scss';
import Header from './components/Header';
import Trending from './components/Trending';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Trending />
        <MovieList />
        <MovieDetail />
      </main>
      <Footer />
    </>
  );
}

export default App;
