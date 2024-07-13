import 'styled-components'
import { defaultTheme } from '../styles/theme/defaultTheme'

type ThemeType = typeof defaultTheme

// está criando uma tipagem para o módulo styled-component do npm, mas ela irá somente sobreescrever ela, não criar do zero
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
