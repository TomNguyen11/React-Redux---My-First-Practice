import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import '../../css/products.css';
import '../../css/App.css';

class ProductList extends Component {
  render() {
    var rows = [];
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.filterText) === -1 
        || (!product.stock && this.props.inStockOnly)) {
        return;
      }
      rows.push(<ProductItem key={product.name} product={product}/>);
    });
    return (
      <div className="product-list clear-fix">
        {rows}
      </div>
    );
  }
}

ProductList.PropTypes = {
  products: PropTypes.array.isRequired
}
export default ProductList;