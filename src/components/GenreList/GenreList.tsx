import React from 'react';
import { IGenreList } from './interfaces/IGenreList';
import { ButtonLink } from '../UI';
import '../../styles/_components/_genreList.scss';
import Dico from '../../utils/dico';
import Genre from '../UI/Genre/Genre';

function GenreList({
  genresList,
  selectedGenresList,
  onClickGenre,
  clearSelectedGenres,
}: IGenreList) {
  return (
    <section className="genres">
      <div className="genres__listNoSelected">
        <span className="genres__title">{Dico.SECTION_GENRE.GENRE_LIST_TITLE}</span>
        {genresList.map((g) => {
          if (!selectedGenresList.includes(g)) {
            return (
              <Genre
                key={g.id}
                genre={g}
                color="white"
                onClickGenre={() => onClickGenre(g)}
              />
            );
          }
          return false;
        })}
      </div>

      <div className="genres__listSelected">
        {selectedGenresList.length > 0
                    && (
                    <ButtonLink
                      name="clear"
                      size="extra-small"
                      color="white"
                      animated
                      onClick={(e) => { e.preventDefault(); clearSelectedGenres(); }}
                    />
                    )}
        {selectedGenresList.map((selectedGenre) => (
          <Genre
            key={selectedGenre.id}
            genre={selectedGenre}
            color="orange"
            withLineThroughHover
            onClickGenre={() => onClickGenre(selectedGenre)}
          />
        ))}
      </div>
    </section>
  );
}

export default GenreList;
