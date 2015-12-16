import React from 'react';

// Component styles
// import styles from './styles.js';

const Cats = (props) => (
	<div {...props}>
		<h4>Cat photos. How original.</h4>
		<img src='http://lorempixel.com/640/480/cats/' height='480' width='640' />
	</div>
)

export default Cats;
