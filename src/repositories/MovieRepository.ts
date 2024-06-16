import { MovieInterface } from '../core/MovieInterface'
import { requestAPI } from '../utils/request'

interface MoviRepositoryParams {
  id: number
}

interface MoviRepositoryResponse {
  movie: MovieInterface | null
}

export async function moviRepository({
  id,
}: MoviRepositoryParams): Promise<MoviRepositoryResponse> {
  const request = await requestAPI({
    url: String(id),
  })

  return {
    movie: request.movie,
  }
}
