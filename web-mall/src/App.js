import NavBar from "./components/navbar/NavBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { ProductProvider } from "./context/ProductContext";
import { theme } from "./theme/style";
import { Categories } from "./components/categories/Categories";
import { ProductCard } from "./components/cards/ProductCard";

function App() {
  return (
    <ProductProvider>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <NavBar />
          <Container>
            <Categories />
            <ProductCard />
          </Container>
        </>
      </ThemeProvider>
    </ProductProvider>
  );
}

export default App;
