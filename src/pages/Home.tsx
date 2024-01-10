import { FC } from 'react';
import { Header, About, Pricing, Reviewer } from '../components';
import "../styles/_components/_about.scss";
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