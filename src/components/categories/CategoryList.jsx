import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import '../../css/products.css';
import '../../css/App.css';

class CategoryList extends Component {
  render() {
    var rows = [];
    this.props.categories.forEach((category) => {
      if(category.name.indexOf(this.props.filterText) === -1 
        || (!category.stock && this.props.inStockOnly)) {
        return;
      }
      rows.push(<CategoryItem key={category.name} category={category}/>);
    });
    return (
      <div className="product-list clear-fix">
        {rows}
      </div>
    );
  }
}

CategoryList.PropTypes = {
  category: PropTypes.array.isRequired
}
export default CategoryList;