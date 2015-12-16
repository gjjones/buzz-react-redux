import React from 'react';
import Button from '../Button';

import '!style!css!less!./style.less'

import classNames from 'classnames';

const Searchbar = ({
	className,
	dataAutoId,
	placeholder,
	term
}) => (
	<div className={classNames(className, 'searchbar')} role="search" data-auto={dataAutoId || "search"}>
		<form className="searchbar__input-group input-group">
		<div className="searchbar__input-reset input-reset" data-auto="searchbox">
			<input type="text" className="searchbar__input-txt input-txt input" placeholder={placeholder} value={term} data-auto="text-box" />
			<input type="reset" className="searchbar__reset reset" value="X" tabIndex="2" data-auto="reset-button" />
		</div>
			<Button className="searchbar__btn btn_responsive">Search</Button>
		</form>
	</div>
)

export default Searchbar;
