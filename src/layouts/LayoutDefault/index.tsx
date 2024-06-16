import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ChildrenParams } from '../../core/ChildrenParams'
import { MainStyle } from './styles'

export function LayoutDefault({ children }: ChildrenParams) {
  return (
    <>
      <Header />
      <MainStyle>{children}</MainStyle>
      <Footer />
    </>
  )
}
