import { useParams } from 'react-router-dom'
import { ParamsDefaultInterface } from '../../core/ParamsDefaultInterface'
import { LayoutDefault } from '../../layouts/LayoutDefault'
import { MovieBanner } from './MovieBanner'
import { useEffect, useState } from 'react'
import { moviRepository } from '../../repositories/MovieRepository'
import { MovieInterface } from '../../core/MovieInterface'

interface MoviePageParams extends ParamsDefaultInterface {
  id: string
  slug: string
}

export function MoviePage() {
  const { id } = useParams<MoviePageParams>()
  const [movie, setMovie] = useState<MovieInterface | null>(null)

  useEffect(() => {
    const searchMovies = async () => {
      const { movie: item } = await moviRepository({ id: Number(id) })
      setMovie(item)
    }

    searchMovies()
  }, [id])

  return (
    <LayoutDefault>
      {movie && (
        <MovieBanner
          title={movie.title}
          subtitle={movie.tagline}
          capa={movie.backdrop_path}
          poster={movie.poster_path}
          sinopse={movie.overview}
        />
      )}
    </LayoutDefault>
  )
}
