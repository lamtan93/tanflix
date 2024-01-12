import { FC } from 'react';
import { About, Pricing, Reviewer } from '../components';
import { reviewerListData } from '../fakedata/reviewerListData';

const Home: FC = () => {
    return (
        <>
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