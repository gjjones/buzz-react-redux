import React, { Component } from 'react';

// Component styles
// import styles from './styles.js';

export default class Cats extends Component {
  render() {
    return (
      <div className={this.props.className}>
      	<h4>Cat photos. How original.</h4>
      	<img src='http://lorempixel.com/640/480/cats/' height='480' width='640' />
      </div>
    );
  }
}
