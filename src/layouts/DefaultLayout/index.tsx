import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { LayoutContainer, BaseContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <SideMenu />
      <BaseContainer>
        <Header />
        <Outlet />
      </BaseContainer>
    </LayoutContainer>
  )
}
