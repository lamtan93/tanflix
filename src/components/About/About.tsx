import React from 'react';
import { Title, ButtonLink } from '../UI';
import Composition from '../Composition/Composition';
import '../../styles/_components/_about.scss';
import { CONFIG_API } from '../../utils/api';
import APPLICATION_PATHS from '../../utils/paths';
import Dico from '../../utils/dico';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function About() {
  useScrollAnimation('about');
  return (
    <section className="about">
      <div className="about__title">
        <Title
          name={Dico.SECTION_ABOUT.TITLE_PRESENTATION_GENERAL}
          position="center"
          size="big"
          hover
        />
      </div>
      <div className="about__content">
        <div className="about__introduce">
          <h3 className="scroll--hidden-about">{Dico.SECTION_ABOUT.TITLE_PRESENTATION_1}</h3>
          <p className="scroll--hidden-about">{Dico.SECTION_ABOUT.PARAGRAPH_PRESENTATION_1}</p>

          <h3 className="scroll--hidden-about">{Dico.SECTION_ABOUT.TITLE_PRESENTATION_2}</h3>
          <p className="scroll--hidden-about">{Dico.SECTION_ABOUT.PARAGRAPH_PRESENTATION_2}</p>
          <ButtonLink
            name={Dico.SECTION_ABOUT.BUTTONLINK_LEARN_MORE}
            color="orange"
            animated={false}
            size="small"
            href={APPLICATION_PATHS.MOVIE_LIST}
          />
        </div>
        <div className="about__composition">
          <Composition listSourceVideos={[
            { key: 0, sourceVideo: CONFIG_API.BASE_VIDEO_URL_COMPOSITION_1 },
            { key: 1, sourceVideo: CONFIG_API.BASE_VIDEO_URL_COMPOSITION_2 },
            { key: 2, sourceVideo: CONFIG_API.BASE_VIDEO_URL_COMPOSITION_3 },
          ]}
          />
        </div>

      </div>
    </section>
  );
}

export default About;
