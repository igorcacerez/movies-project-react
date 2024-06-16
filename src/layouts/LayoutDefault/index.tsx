import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from '../../components/ui/Container'
import { ChildrenParams } from '../../core/ChildrenParams'
import { MainStyle } from './styles'

export function LayoutDefault({ children }: ChildrenParams) {
  return (
    <>
      <Container>
        <Header />
        <MainStyle>{children}</MainStyle>
      </Container>
      <Footer />
    </>
  )
}
