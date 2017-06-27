import React, { Component } from 'react';
import Product from './Product';
import { products } from './Seed';

export default class ProductList extends Component {
  handleProductUpVote(productId) {
    console.log(productId + ' was upvoted.');
  }

  render() {
    const sortedProducts = products.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = sortedProducts.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    )
  }
}
