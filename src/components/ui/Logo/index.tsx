import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

export function Logo() {
  return (
    <NavLink to="/">
      <img src={logo} alt="Imagem exibindo a logo do site - Movies" />
    </NavLink>
  )
}
