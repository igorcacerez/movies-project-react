import { LayoutDefault } from '../../layouts/LayoutDefault'
import { SectionMovies } from '../../components/ui/SectionMovies'
import { Card } from '../../components/Card'
import { TitleSection } from '../../components/TitleSection'
import { useEffect, useState } from 'react'
import { moviListRepository } from '../../repositories/MovieListRepository'
import { MoviesListInterface } from '../../core/MoviesListInterface'

export function EmBrevePage() {
  const [movieList, setMovieList] = useState<MoviesListInterface[] | null>(null)

  useEffect(() => {
    const searchMovies = async () => {
      const { movies } = await moviListRepository({ type: 'upcoming' })
      setMovieList(movies)
    }

    searchMovies()
  }, [])

  return (
    <LayoutDefault>
      <TitleSection.Content>
        <TitleSection.Title>Disponíveis em Breve</TitleSection.Title>
      </TitleSection.Content>

      <SectionMovies>
        {movieList?.map(
          (item) => item.poster_path && <Card key={item.id} movie={item} />,
        )}
      </SectionMovies>
    </LayoutDefault>
  )
}
