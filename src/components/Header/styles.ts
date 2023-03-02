import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.5rem;

  & h1 {
    color: ${props => props.theme['black']};
    font-size: 1.5rem;
  }
  
  & h3 {
    color: ${props => props.theme['black']};
    font-size: 0.875rem;
    font-weight: 600;
    margin-left: 2rem;
    margin-right: 1rem;
  }

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      margin-right: 1.5rem;
    }
  }
`

export const Separator = styled.header`
  height: 100%;
  width: 1px;
  background: ${props => props.theme['divider']};
`

export const Profile = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1.5px solid ${props => props.theme['divider']};
  border-radius: 100%;
  padding: 3px;

  img {
    display: block;
    width: 100%;
    border-radius: 100%;
    
  }
`