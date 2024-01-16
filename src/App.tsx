import { Provider } from 'react-redux';
import { store } from './redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MovieDetailHome from './pages/MovieDetailHome';
import MovieHome from './pages/MovieHome';
import Home from './pages/Home';
import { Header } from './components';
import { APPLICATION_PATHS } from './utils/paths';
import NotFound from './components/Utils/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className='main'>
        <Routes>
          <Route path={APPLICATION_PATHS.NOT_FOUND} element={<NotFound />} />
          <Route path={APPLICATION_PATHS.HOME} element={<Home />} />
          <Route path={APPLICATION_PATHS.MOVIE_LIST} element={<MovieHome />} />
          <Route path={APPLICATION_PATHS.MOVIE_DETAIL} element={<MovieDetailHome />} />
        </Routes>
      </main>
      <Footer />
      </Provider>
  );
}

export default App;
