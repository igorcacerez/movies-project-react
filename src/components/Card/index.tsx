import { NavLink } from 'react-router-dom'
import { CardStyle, DivTextosStyle } from './styles'
import { Rating } from 'react-simple-star-rating'
import { MoviesListInterface } from '../../core/MoviesListInterface'
import { getPosterURI } from '../../utils/poster'
import { createSlug } from '../../utils/slug'

interface CardProps {
  movie: MoviesListInterface
}

export function Card({ movie }: CardProps) {
  const { id, title, vote_average: voto, poster_path: poster, overview } = movie
  const avaliacoes = voto / 2

  return (
    <div>
      <CardStyle bg={getPosterURI(poster)}>
        <NavLink to={`/filme/${id}/${createSlug(title)}`}>
          <DivTextosStyle>
            <h5>{title}</h5>

            <Rating
              disableFillHover={true}
              iconsCount={5}
              initialValue={avaliacoes}
              allowHover={false}
              size={15}
            />

            <p>{overview}</p>
          </DivTextosStyle>
        </NavLink>
      </CardStyle>
    </div>
  )
}
