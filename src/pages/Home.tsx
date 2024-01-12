import { FC } from 'react';
import { About, Pricing, Reviewer } from '../components';
import { reviewerListData } from '../fakedata/reviewerListData';
import { scrollToViewId } from '../utils/utils';

const Home: FC = () => {
    scrollToViewId('root');
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