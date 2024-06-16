import { LayoutDefault } from '../../layouts/LayoutDefault'
import { SectionMovies } from '../../components/ui/SectionMovies'
import { Card } from '../../components/Card'
import { TitleSection } from '../../components/TitleSection'
import { useEffect, useState } from 'react'
import { moviListRepository } from '../../repositories/MovieListRepository'
import { MoviesListInterface } from '../../core/MoviesListInterface'

export function NosCinemasPage() {
  const [movieList, setMovieList] = useState<MoviesListInterface[] | null>(null)

  useEffect(() => {
    const searchMovies = async () => {
      const { movies } = await moviListRepository({ type: 'now_playing' })
      setMovieList(movies)
    }

    searchMovies()
  }, [])

  return (
    <LayoutDefault>
      <TitleSection.Content>
        <TitleSection.Title>Em cartaz nos cinemas</TitleSection.Title>
      </TitleSection.Content>

      <SectionMovies>
        {movieList?.map(
          (item) => item.poster_path && <Card key={item.id} movie={item} />,
        )}
      </SectionMovies>
    </LayoutDefault>
  )
}
