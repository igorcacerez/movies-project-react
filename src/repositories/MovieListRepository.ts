import { MoviesListInterface } from '../core/MoviesListInterface'
import { requestAPI } from '../utils/request'

interface MoviListRepositoryParams {
  type: 'now_playing' | 'popular' | 'top_rated' | 'upcoming'
  page?: number
}

interface MoviListRepositoryResponse {
  movies: MoviesListInterface[] | null
}

export async function moviListRepository({
  type,
  page = 1,
}: MoviListRepositoryParams): Promise<MoviListRepositoryResponse> {
  const request = await requestAPI({
    url: type,
    page,
  })

  return {
    movies: request.movies,
  }
}
