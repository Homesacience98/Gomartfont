import React, { Component } from 'react';

class CartCount extends Component {
  constructor() {
    super();
    this.state = {
      itemCount: 0,
    };
  }

  render() {
    return (
      <span>{this.state.itemCount}</span>
    );
  }
}

export default CartCount;
