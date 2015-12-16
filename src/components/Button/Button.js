import React from 'react';

import '!style!css!less!./style.less'

import classNames from 'classnames';

const Button = ({className, children, ...props}) => (
	<button className={classNames('btn', className)} {...props}>
		{children}
	</button>
)

export default Button;
