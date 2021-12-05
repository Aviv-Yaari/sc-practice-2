import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/GlobalStyle.styled";
import { MainContainer } from "./assets/styles/MainContainer.styled";
import { theme } from "./assets/styles/theme";
import { OrderSummary } from "./components/OrderSummary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <OrderSummary />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
