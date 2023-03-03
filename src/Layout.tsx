import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider } from 'antd'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

import ptBR from 'antd/lib/locale/pt_BR'

export function LayoutApp() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ConfigProvider locale={ptBR}>
        <BrowserRouter>
          <GlobalStyle /> 

          <Router />
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  )
}