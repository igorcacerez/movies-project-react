import { LayoutDefault } from '../../layouts/LayoutDefault'
import { Banner } from './components/Banner'
import imagemBanner from '../../assets/imagem-banner.png'
import { SectionMovies } from '../../components/ui/SectionMovies'
import { Card } from '../../components/Card'
import { TitleSection } from '../../components/TitleSection'
import { useEffect, useState } from 'react'
import { moviListRepository } from '../../repositories/MovieListRepository'
import { MoviesListInterface } from '../../core/MoviesListInterface'
import { getRandomNumber } from '../../utils/random'

export function HomePage() {
  const [movieList, setMovieList] = useState<MoviesListInterface[] | null>(null)

  useEffect(() => {
    const searchMovies = async () => {
      const page = getRandomNumber(1, 13)
      const { movies } = await moviListRepository({ type: 'top_rated', page })
      setMovieList(movies)
    }

    searchMovies()
  }, [])

  return (
    <LayoutDefault>
      <Banner
        title="Próximo filme favorito"
        subtitle="Encontre o seu"
        image={imagemBanner}
      >
        Explore uma vasta coleção de filmes. Descubra os mais populares,
        lançamentos recentes e títulos que estarão em breve. Encontre seu
        próximo entretenimento com facilidade e aproveite ao máximo seu tempo
        livre!
      </Banner>

      <TitleSection.Content>
        <TitleSection.Title>Aclamados pela crítica</TitleSection.Title>
      </TitleSection.Content>

      <SectionMovies>
        {movieList?.map((item) => <Card key={item.id} movie={item} />)}
      </SectionMovies>
    </LayoutDefault>
  )
}
