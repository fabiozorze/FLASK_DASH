import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async"


function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Invest.AI"/>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
