import { AppProvider } from './contexts'
import { LayoutApp } from './Layout'

export function App() {
  return (
    <AppProvider>
      <LayoutApp />
    </AppProvider>
  )
}
