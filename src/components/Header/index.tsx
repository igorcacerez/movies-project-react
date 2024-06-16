import { NavLink } from 'react-router-dom'
import { HeaderStyle } from './styles'
import { Logo } from '../ui/Logo'
import { Container } from '../ui/Container'

export function Header() {
  return (
    <Container>
      <HeaderStyle>
        <Logo />

        <nav>
          <NavLink to={'/'} title="Home">
            Início
          </NavLink>
          <NavLink to={'/populares'} title="Filmes Populares">
            Populares
          </NavLink>
          <NavLink to={'/em-breve'} title="Filmes que serão lançados em breve">
            Em Breve
          </NavLink>
        </nav>
      </HeaderStyle>
    </Container>
  )
}
