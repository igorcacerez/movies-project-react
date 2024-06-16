import { NavLink } from 'react-router-dom'
import { ChildrenParams } from '../../core/ChildrenParams'
import { LinkStyle, TitleSectionStyle, TitleStyle } from './styles'

interface LinkProps extends ChildrenParams {
  to: string
}

function Content({ children }: ChildrenParams) {
  return <TitleSectionStyle>{children}</TitleSectionStyle>
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
