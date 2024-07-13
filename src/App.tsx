import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/defaultTheme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CycleContextsProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextsProvider>
          <Router />
        </CycleContextsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
