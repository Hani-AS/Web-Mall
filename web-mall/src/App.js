import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { ProductProvider } from "./context/products/ProductContext";
import { CartProvider } from "./context/cart/CartContext";
import { theme } from "./theme/style";
import { Home } from "./pages/Home";
import { Item } from "./components/item/Item";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <>
              <CssBaseline />
              <NavBar />
              <Container>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/:id">
                    <Item />
                  </Route>
                  <Route path="/cart">{/* <Cart /> */}</Route>
                </Switch>
              </Container>
            </>
          </Router>
        </ThemeProvider>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
