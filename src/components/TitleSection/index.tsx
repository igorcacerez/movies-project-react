import { NavLink } from 'react-router-dom'
import { ChildrenParams } from '../../core/ChildrenParams'
import { LinkStyle, TitleSectionStyle, TitleStyle } from './styles'
import { Container } from '../ui/Container'

interface LinkProps extends ChildrenParams {
  to: string
}

function Content({ children }: ChildrenParams) {
  return (
    <Container>
      <TitleSectionStyle>{children}</TitleSectionStyle>
    </Container>
  )
}

function Title({ children }: ChildrenParams) {
  return <TitleStyle>{children}</TitleStyle>
}

function Link({ children, to }: LinkProps) {
  return (
    <NavLink to={to}>
      <LinkStyle>{children}</LinkStyle>
    </NavLink>
  )
}

export const TitleSection = {
  Content,
  Title,
  Link,
}
