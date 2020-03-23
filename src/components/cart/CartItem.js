import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { removeFromCart } from "./../../global-store/actions";

class CartItem extends Component {
  render() {
    const { productInfo } = this.props;
    const { name, price } = productInfo;
    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Typography className={classes.productName}>
              {name} | USD {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              contained
              color="secondary"
              onClick={() => {
                this.props.removeFromCart(productInfo);
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
        <p />
      </div>
    );
  }
}

const classes = { productName: { fontSize: 20, fontWeight: "bold" } };

export default connect(null, { removeFromCart })(CartItem);
