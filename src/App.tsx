import { Provider } from 'react-redux';
import { store } from './redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MovieDetailHome from './pages/MovieDetailHome';
import MovieHome from './pages/MovieHome';
import Home from './pages/Home';
import { Header } from './components';
import { Title } from './components/UI';

function App() {
  return (
    <>
    <Provider store={store}>
      <Header />
      <main className='main'>
        <Routes>
          <Route  path='*' element={<Title name='Sorry, page not found'size='med' position='center' />} />
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
