import { NavLink  } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['side-bg']};

  img {
    max-width: 100%;
    padding: 2.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`

export const NavItem = styled(NavLink)`
  all: unset;
  border-left: 3px solid transparent;
  padding: 1.5rem 2rem; 
  font-size: 1rem;
  color: ${props => props.theme['side-menu-item']};;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;

  &.active {
    background: ${props => props.theme['side-menu-item-active']};
    color: ${props => props.theme['light-blue']};
    border-left-color: ${props => props.theme['light-blue']} !important;
  }

  &:hover {
    transition: all 0.2s;
  }
`

export const Separator = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 1px;
  background: ${props => props.theme['side-menu-item-active']};
`