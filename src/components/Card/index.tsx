import { NavLink } from 'react-router-dom'
import { CardStyle, DivTextosStyle } from './styles'
import { Rating } from 'react-simple-star-rating'
import { MoviesListInterface } from '../../core/MoviesListInterface'
import { getPosterURI } from '../../utils/poster'
import { createSlug } from '../../utils/slug'
import { useInView } from 'react-intersection-observer'
import { SkeletonCard } from '../Skeleton/SkeletonCard'
import { useEffect, useState } from 'react'

interface CardProps {
  movie: MoviesListInterface
}

export function Card({ movie }: CardProps) {
  const [loading, setLoading] = useState(true)
  const { id, title, vote_average: voto, poster_path: poster, overview } = movie
  const avaliacoes = voto / 2

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setLoading(false)
    }
    img.src = getPosterURI(poster)
  }, [poster])

  return (
    <div ref={ref}>
      <CardStyle loading={loading} bg={getPosterURI(poster)} blur={inView}>
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
      {loading === true && <SkeletonCard numItensRepet={1} />}
    </div>
  )
}
