import { BannerStyle, ImagemStyle, TextosStyle } from './styles'

interface BannerProps {
  title: string
  subtitle: string
  children: string
  image: string
}

export function Banner({ title, image, children, subtitle }: BannerProps) {
  return (
    <BannerStyle>
      <TextosStyle>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <p>{children}</p>
      </TextosStyle>

      <ImagemStyle>
        <img src={image} alt="Imagem de capa de alguns filmes" />
      </ImagemStyle>
    </BannerStyle>
  )
}
