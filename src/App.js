import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductList from "./components/products/ProductList";
import CartList from "./components/cart/CartList";
import { Provider } from "react-redux";

import store from "./../src/global-store/store";

import { data } from "./data";
class App extends React.Component {
  state = {
    products: data.rows,
    cartItems: []
  };

  render() {
    return (
      <Provider store={store}>
        <Grid container spacing={3}>
          <Grid xs={3} item>
            <CartList removeFromCart={this.removeFromCart} />
          </Grid>
          <Grid xs={9} item>
            <ProductList addToCart={this.addToCart} />
          </Grid>
        </Grid>
      </Provider>
    );
  }
}

export default App;
