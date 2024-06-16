import { getPosterURI } from '../../../utils/poster'
import { BannerStyle, ImagemStyle, TextosStyle } from './styles'

interface BannerProps {
  title: string
  subtitle: string
  poster: string
  capa: string
  sinopse: string
}

export function MovieBanner({
  title,
  poster,
  capa,
  sinopse,
  subtitle,
}: BannerProps) {
  return (
    <BannerStyle capa={getPosterURI(capa)}>
      <ImagemStyle>
        <img
          src={getPosterURI(poster)}
          alt="Uma imagem grande representando o filme"
        />
      </ImagemStyle>

      <TextosStyle>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>

        <p>{sinopse}</p>
      </TextosStyle>
    </BannerStyle>
  )
}
