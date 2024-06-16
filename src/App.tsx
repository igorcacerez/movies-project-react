import { ThemeProvider } from 'styled-components'
import { Navigation } from './navigation/Navigation'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
      <GlobalStyle />
    </ThemeProvider>
  )
}
