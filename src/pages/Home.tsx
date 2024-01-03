import { FC } from 'react';
import Header from '../components/Header/Header';
import "../styles/_components/_about.scss";
import About from '../components/About/About';
import Pricing from '../components/Pricing/Pricing';

const Home: FC = () => {
    return (
        <>
            <Header />
            <About />
            <Pricing />
        </>
    )
}

export default Home;