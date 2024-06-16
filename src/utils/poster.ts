export function getPosterURI(poster: string): string {
  return `https://image.tmdb.org/t/p/original/${poster}`
}

export function getPosterProxyURI(poster: string): string {
  return `http://localhost:3030/api/t/p/original/${poster}`
}
