import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonCardProps {
  numItensRepet?: number
}

function Element() {
  return <Skeleton height={360} width={300} borderRadius={10} />
}

export function SkeletonCard({ numItensRepet = 4 }: SkeletonCardProps) {
  return (
    <>
      {Array.from({ length: numItensRepet }).map((_, index) => (
        <Element key={index} />
      ))}
    </>
  )
}
