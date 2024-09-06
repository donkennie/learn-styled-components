import { ThemeProvider } from "styled-components";
import Header from "./components/header"
import { Container } from "./components/styled/Container.styled";

const theme ={
  colors:{
    header: '#ebfbff',
    body: '#fff',
    footer
  }
}

function App() {
  return (
    <>
    <Header/>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  );
}

export default App;
