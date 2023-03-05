import { HeaderContainer, Separator, Profile } from './styles'
import { MagnifyingGlass, Bell } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

export function Header() {
  const getRouteName = () => {
    const path = location.pathname

    switch (path) {
      case '/':
        return 'Home'
      case '/units':
        return 'Unidades'
      case '/users':
        return 'Usuários'
      case '/companies':
        return 'Empresas'
      case '/workorders':
        return 'Ordens de serviço'
      case '/assets':
        return 'Ativos'
      default:
        return ''
    }
  }

  const location = useLocation()
  return (
    <HeaderContainer>
      <h1>{getRouteName()}</h1>
      <div>
        <MagnifyingGlass size={24} />
        <Bell size={24} />
        <Separator />
        <h3>Rafael Trevisan</h3>
        <Profile>
          <img
            src="https://avatars.githubusercontent.com/u/57990932?v=4"
            alt=""
          />
        </Profile>
      </div>
    </HeaderContainer>
  )
}
