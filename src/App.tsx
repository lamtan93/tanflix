import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetailHome from './pages/MovieDetailHome';
import MovieHome from './pages/MovieHome';

function App() {
  return (
    <>
    <Provider store={store}>
      <Header />
      <main>
        <Routes>
          <Route path='/movies' element={<MovieHome />} />
          <Route path='/movie-detail/:id' element={<MovieDetailHome />} />
        </Routes>
      </main>
      <Footer />
      </Provider>
    </>
  );
}

export default App;
