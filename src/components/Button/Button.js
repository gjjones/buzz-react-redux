import React, { Component } from 'react';

import '!style!css!less!./style.less'

import classNames from 'classnames';

export default class Button extends Component {
  render() {
  	var { children, className, ...props } = this.props;

	className = classNames('btn', className);

    return (
      <button className={className} {...props}>
	      {children}
      </button>
    );
  }
}
