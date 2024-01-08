import { FC } from 'react';
import Header from '../components/Header/Header';
import "../styles/_components/_about.scss";
import About from '../components/About/About';
import Pricing from '../components/Pricing/Pricing';
import Reviewer from '../components/Reviewer/Reviewer';
import { reviewerListData } from '../fakedata/reviewerListData';

const Home: FC = () => {
    return (
        <>
            <Header />
            <About />
            <Pricing />
            <Reviewer
                title='They talk about us'
                withVideoBackground
                reviewerList={reviewerListData} 
            />
            
        </>
    )
}

export default Home;