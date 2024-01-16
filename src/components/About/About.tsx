import { FC, useEffect } from 'react';
import { Title, ButtonLink } from '../UI';
import Composition from '../Composition/Composition';
import '../../styles/_components/_about.scss';
import { scrollAnimation } from '../../utils/utils';
import { CONFIG_API } from '../../utils/api';
import { APPLICATION_PATHS } from '../../utils/paths';
import { Dico } from '../../utils/dico';

const About:FC = () => {
    useEffect(() => {
        scrollAnimation();
    }, [])
    return(
        <section className='about'>
            <div className='about__title'>
                <Title 
                    name={Dico.SECTION_ABOUT.TITLE_PRESENTATION_GENERAL}
                    position='center' 
                    size='big' 
                    hover={true} />
            </div>
            <div className='about__content'>
                <div className='about__introduce'>
                    <h3 className='scroll--hidden'>{Dico.SECTION_ABOUT.TITLE_PRESENTATION_1}</h3>
                    <p className='scroll--hidden'>{Dico.SECTION_ABOUT.PARAGRAPH_PRESENTATION_1}</p>

                    <h3 className='scroll--hidden'>{Dico.SECTION_ABOUT.TITLE_PRESENTATION_2}</h3>
                    <p className='scroll--hidden'>{Dico.SECTION_ABOUT.PARAGRAPH_PRESENTATION_2}</p>
                    <ButtonLink 
                        name={Dico.SECTION_ABOUT.BUTTONLINK_LEARN_MORE} 
                        color='orange' 
                        animated={false} 
                        size='small'
                        href={APPLICATION_PATHS.MOVIE_LIST}
                    />
                </div>
                <div className='about__composition'>
                    <Composition listSourceVideos={[
                        CONFIG_API.BASE_VIDEO_URL_COMPOSITION_1,
                        CONFIG_API.BASE_VIDEO_URL_COMPOSITION_2,
                        CONFIG_API.BASE_VIDEO_URL_COMPOSITION_3
                    ]}/>
                </div>
                
            </div>
        </section>
    )
}

export default About;