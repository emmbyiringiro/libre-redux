import React, { Component } from "react";
import Product from "./Product";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <GridList
        cellHeight={360}
        spacing={20}
        className={classes.gridList}
        cols={4}
      >
        {products.map(product => {
          return (
            <GridListTile key={product.product_id} cols={1}>
              <Product productInfo={product} />
            </GridListTile>
          );
        })}
      </GridList>
    );
  }
}

const classes = {
  root: {
    margin: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  gridList: {
    width: 500,
    height: 450
  }
};

const mapStateToProps = state => ({ products: state.products });
export default connect(mapStateToProps)(ProductList);
