import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/products.css';

export default class CategoryItem extends Component {
  static propTypes = {
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      quatity: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      stock: PropTypes.bool
    }).isRequired,
  }

  render() {
    let name = this.props.category.stock ?
      this.props.category.name :
      <span style={{color: 'red'}}>
        {this.props.category.name}
      </span>;

    return (
      <div className="product-item">
        <h3>{name}</h3>
        <h4>{this.props.category.quatity}</h4>
        <p>{this.props.category.description}</p>
      </div>
    );
  }
}

