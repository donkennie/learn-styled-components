import { ThemeProvider } from "styled-components";
import Header from "./components/header"
import { Container } from "./components/styles/Container.styled";

const theme ={
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
      <Header/>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
