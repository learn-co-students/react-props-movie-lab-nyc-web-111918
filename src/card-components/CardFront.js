import React, { Component } from 'react';

export default class CardFront extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
