import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { MoviePage } from '../pages/MoviePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { EmBrevePage } from '../pages/EmBrevePage'
import { NosCinemasPage } from '../pages/NosCinemasPage'

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filme/:id/:slug" element={<MoviePage />} />
        <Route path="/em-breve" element={<EmBrevePage />} />
        <Route path="/disponivel-nos-cinemas" element={<NosCinemasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
