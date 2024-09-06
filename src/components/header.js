import { StyledHeader } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
export default function Header(){
    return(
        <StyledHeader>
            <Container>
              <Nav>
                <Logo src='.'></Logo>
              </Nav>
            </Container>
        </StyledHeader>
    )
}