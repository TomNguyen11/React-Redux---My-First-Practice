import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/products.css';

export default class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quatity: PropTypes.number.isRequired,
      stock: PropTypes.bool
    }).isRequired,
  }

  render() {
    let name = this.props.product.stock ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    return (
      <div className="product-item">
        <h3>{name}</h3>
        <h4>${this.props.product.price}</h4>
        <h4>{this.props.product.quatity}</h4>
        <p>{this.props.product.description}</p>
      </div>
    );
  }
}

