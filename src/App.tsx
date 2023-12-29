import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MovieDetailHome from './pages/MovieDetailHome';
import MovieHome from './pages/MovieHome';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Provider store={store}>
      <main className='main'>
        <Routes>
          <Route  path='/' element={<Home />} />
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
