import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

import { connect } from "react-redux";
import { addToCart } from "./../../global-store/actions";

class Product extends Component {
  render() {
    const { productInfo } = this.props;
    const { name, description, price, thumbnail } = productInfo;

    const formattedDesc =
      description.length > 110
        ? `${description.substring(0, 100)}...`
        : description;
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="initial"
            gutterBottom
            component="h2"
          >
            {name} | USD {price}
          </Typography>

          <CardMedia
            className={classes.media}
            component="img"
            alt={name}
            height="120"
            image={`https://backendapi.turing.com/images/products/${thumbnail}`}
            title="Paella dish"
          />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ margin: 10 }}
          >
            {formattedDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small "
            color="primary"
            onClick={() => this.props.addToCart(productInfo)}
          >
            {" "}
            Add to cart
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const classes = {
  root: {
    minWidth: 400
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 18,
    fontWeight: "700"
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

export default connect(null, { addToCart })(Product);
