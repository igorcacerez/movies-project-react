import { Logo } from '../ui/Logo'
import { FooterStyle } from './styles'

export function Footer() {
  return (
    <FooterStyle>
      <Logo />
      <p>
        ©{new Date().getFullYear()} Movies AI - Todos os direitos reservados
      </p>
    </FooterStyle>
  )
}
