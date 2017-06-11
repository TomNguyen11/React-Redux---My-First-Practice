import React, { Component } from 'react';
import { ProductList, SearchBar } from '../../components/products/';

var PRODUCTS = [
  {
    name: "Prod 01",
    price: 123.45,
    quatity: 123,
    description: "The Product 01",
    stock: true,
  },
  {
    name: "Prod 02",
    price: 120.99,
    quatity: 123,
    description: "The Product 02",
    stock: false,
  },
  {
    name: "Prod 03",
    price: 121.65,
    quatity: 123,
    description: "The Product 03",
    stock: true,
  },
  {
    name: "Prod 04",
    price: 128.00,
    quatity: 123,
    description: "The Product 04",
    stock: false,
  },
  {
    name: "Prod 05",
    price: 122.47,
    quatity: 123,
    description: "The Product 05",
    stock: true,
  }
];

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleInstockInput = this.handleInstockInput.bind(this);
    this.handleFilterTextInput =  this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
;
  handleInstockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <h1>Products Page</h1>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInstockInput}
        />
        <ProductList 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={PRODUCTS}
        />
      </div>
    );
  }
}

