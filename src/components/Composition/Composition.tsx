import { FC } from 'react';
import '../../styles/_components/_composition.scss';
import trending1 from "../../assets/images/trending-1.jpeg";
import trending2 from "../../assets/images/trending-2.jpeg";
import trending3 from "../../assets/images/trending-3.jpeg";

const Composition:FC = () => {
    return(
        <div className='composition '>
            <img className='composition__photo composition__photo--1' src={trending1} alt='trending1' />
            <img className='composition__photo composition__photo--2' src={trending2} alt='trending2' />
            <img className='composition__photo composition__photo--3' src={trending3} alt='trending3' />
        </div>
    )
}

export default Composition;