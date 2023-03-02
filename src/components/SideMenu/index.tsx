import { SideMenuContainer, NavItem, Separator } from "./styles";
import { HouseLine, Briefcase, Gear, Lightbulb, Users } from 'phosphor-react'

import logo from '../../assets/logo.png'


export function SideMenu() {
  return (
    <SideMenuContainer>
      <img src={logo} />

      <ul>
        <NavItem to={'/'}>
          <HouseLine size={16}/>
          Home
        </NavItem>

        <NavItem to={'/teste'}>
          <Lightbulb size={16}/>
          Unidades
        </NavItem>

        <NavItem to={'/teste'}>
          <Users size={16}/>
          Usuários
        </NavItem>

        <NavItem to={'/teste'}>
          <Briefcase size={16}/>
          Empresas
        </NavItem>

        <Separator />

        <NavItem to={'/teste'}>
          <Gear size={16}/>
          Configurações
        </NavItem>
      </ul>
    </SideMenuContainer>
  )
}