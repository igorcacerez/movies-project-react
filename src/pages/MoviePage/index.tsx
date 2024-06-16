import { useParams } from 'react-router-dom'
import { ParamsDefaultInterface } from '../../core/ParamsDefaultInterface'
import { LayoutDefault } from '../../layouts/LayoutDefault'

interface MoviePageParams extends ParamsDefaultInterface {
  id: string
  slug: string
}

export function MoviePage() {
  const { id, slug } = useParams<MoviePageParams>()
  return (
    <LayoutDefault>
      <h1>TESTE</h1>
      <p>
        ID = {id} | SLUG = {slug}
      </p>
    </LayoutDefault>
  )
}
