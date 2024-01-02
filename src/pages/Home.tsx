import { FC } from 'react';
import Header from '../components/Header/Header';
import "../styles/_components/_about.scss";
import About from '../components/About/About';

const Home: FC = () => {
    return (
        <>
            <Header />
            <About />
            
            <section className='pricing'>
               
            </section>
        </>
    )
}

export default Home;