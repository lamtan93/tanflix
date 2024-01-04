import { FC } from 'react';
import Header from '../components/Header/Header';
import "../styles/_components/_about.scss";
import About from '../components/About/About';
import Pricing from '../components/Pricing/Pricing';
import Review from '../components/Review/Review';

const Home: FC = () => {
    return (
        <>
            <Header />
            <About />
            <Pricing />
            <Review />
        </>
    )
}

export default Home;