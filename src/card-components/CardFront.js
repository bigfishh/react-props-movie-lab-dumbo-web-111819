import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    let {poster} = this.props
    // console.log(poster)
    return (
      <div className="card-front" style={{backgroundImage: `url(${poster})`}}>
      </div>
    )
  }
}
