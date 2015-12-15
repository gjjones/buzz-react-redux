import React, { Component } from 'react';
import Button from '../Button';

import '!style!css!less!./style.less'

import classNames from 'classnames';

export default class Searchbar extends Component {
  render() {
  	var { children, className, ...props } = this.props,
  		className = classNames(className, 'searchbar');

    return (
      <div className={className} role="search" data-auto={props.dataAutoId || "search"}>
	      <form className="searchbar__input-group input-group">
	      	<div className="searchbar__input-reset input-reset" data-auto="searchbox">
	      		<input type="text" className="searchbar__input-txt input-txt input" placeholder={props.placeholder} value={props.term} data-auto="text-box" />
	      		<input type="reset" className="searchbar__reset reset" value="X" tabIndex="2" data-auto="reset-button" />
	      	</div>
	      	<Button className="searchbar__btn btn_responsive">Search</Button>
	      </form>
      </div>
    );
  }
}
