import { HeaderContainer, Separator,Profile } from "./styles";
import { MagnifyingGlass, Bell } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <h1>Home</h1>
      <div>
        <MagnifyingGlass size={24} />
        <Bell size={24} />
        <Separator />
        <h3>Rafael Trevisan</h3>
        <Profile>
          <img src="https://avatars.githubusercontent.com/u/57990932?v=4" />
        </Profile>
      </div>
    </HeaderContainer>
  )
}