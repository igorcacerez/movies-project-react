import { NavLink } from 'react-router-dom'
import { ChildrenParams } from '../../core/ChildrenParams'
import { LinkStyle, TitleSectionStyle, TitleStyle } from './styles'
import { Container } from '../ui/Container'
import React from 'react'

interface LinkProps extends ChildrenParams {
  to: string
}

function Content({ children }: ChildrenParams) {
  const childrenCount = React.Children.count(children)

  return (
    <Container>
      <TitleSectionStyle numChildren={childrenCount}>
        {children}
      </TitleSectionStyle>
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
