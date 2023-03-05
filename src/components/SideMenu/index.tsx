import { SideMenuContainer, NavItem, Separator } from './styles'
import {
  HouseLine,
  Briefcase,
  Gear,
  Lightbulb,
  Users,
  ListChecks,
  Nut,
} from 'phosphor-react'

import logo from '../../assets/logo.png'

export function SideMenu() {
  return (
    <SideMenuContainer>
      <img src={logo} alt="Tractian logo" />

      <ul>
        <NavItem to={'/'}>
          <HouseLine size={16} />
          Home
        </NavItem>

        <NavItem to={'/assets'}>
          <Nut size={16} />
          Ativos
        </NavItem>

        <NavItem to={'/workorders'}>
          <ListChecks size={16} />
          Ordens de serviço
        </NavItem>

        <NavItem to={'/users'}>
          <Users size={16} />
          Usuários
        </NavItem>

        <NavItem to={'/companies'}>
          <Briefcase size={16} />
          Empresas
        </NavItem>

        <NavItem to={'/units'}>
          <Lightbulb size={16} />
          Unidades
        </NavItem>

        <Separator />

        <NavItem to={'/configs'} style={{ pointerEvents: 'none' }}>
          <Gear size={16} />
          Configurações
        </NavItem>
      </ul>
    </SideMenuContainer>
  )
}
