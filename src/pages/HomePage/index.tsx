import { LayoutDefault } from '../../layouts/LayoutDefault'
import { Banner } from './components/Banner'
import imagemBanner from '../../assets/imagem-banner.png'
import { SectionMovies } from '../../components/ui/SectionMovies'
import { Card } from '../../components/Card'
import { TitleSection } from '../../components/TitleSection'

export function HomePage() {
  return (
    <LayoutDefault>
      <Banner
        title="TV shows and more"
        subtitle="Find Movies"
        image={imagemBanner}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad
        aperiam laboriosam, quae sapiente natus unde nostrum! Aliquid delectus,
        laborum, ratione veniam impedit dolorum non veritatis animi ducimus,
        unde consequatur.
      </Banner>

      <TitleSection.Content>
        <TitleSection.Title>Os Mais Assistidos</TitleSection.Title>
        <TitleSection.Link to="/populares">Veja Mais</TitleSection.Link>
      </TitleSection.Content>

      <SectionMovies>
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            movie={{
              adult: false,
              backdrop_path: '/k9X79JC2dDTcSpxuKJ3p2Teq3oZ.jpg',
              genre_ids: [878, 28, 12],
              id: 1025463,
              original_language: 'pt',
              original_title: 'Biônicos',
              overview:
                'When the progress of robotics makes Paralympic athletes the new sports stars, Maria dreams of competing against her sister. For that, she will have to enter a world of crime and violence.',
              popularity: 486.389,
              poster_path: '/xVCYzdBE6lo3sUFK1OMZnXvpGtT.jpg',
              release_date: '2024-05-28',
              title: 'Bionic',
              video: false,
              vote_average: 5.608,
              vote_count: 74,
            }}
          />
        ))}
      </SectionMovies>
    </LayoutDefault>
  )
}
