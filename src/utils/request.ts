import { MovieInterface } from '../core/MovieInterface'
import { MoviesListInterface } from '../core/MoviesListInterface'

interface RequestAPIParams {
  url: string
  language?: string
  page?: number
  region?: string
}

interface APIResponse extends MovieInterface {
  results?: MoviesListInterface[]
}

interface RequestAPIResponse {
  movies: MoviesListInterface[] | null
  movie: MovieInterface | null
}

export async function requestAPI({
  url,
  page = 1,
  language = 'pt-BR',
  region = 'BR',
}: RequestAPIParams): Promise<RequestAPIResponse> {
  const queryString = `language=${language}&region=${region}&page=${page}`
  const urlBusca = `https://api.themoviedb.org/3/movie/${url}?${queryString}`

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2RjY2E0ZjYxMDdkNzM3MjdmMmNjZjZjNzQ3NTE1MyIsInN1YiI6IjY2NjllM2IxM2YwNjI0NzQ4YTM3ZjUzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._NoEK2SmKppdhRO035tE9kBx9XQJn4opKg8zNgQDOtk'

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  // console.log('REQ', urlBusca, options)

  const resposta = await fetch(urlBusca, options)
  const data: APIResponse = await resposta.json()

  const retorno: RequestAPIResponse = {
    movies: null,
    movie: null,
  }

  if (data.results) retorno.movies = data.results
  if (data.id) retorno.movie = data

  return retorno
}
