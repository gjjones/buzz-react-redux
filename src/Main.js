import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';

// Global styles
import '!style!css!less!edna/edna.less';

// Application components
import { Demo } from 'containers';

export default class Main extends Component {

	render() {
		const metaData = {
			title: 'BuzzFramework Interface',
			description: 'I am a description, and I can create multiple tags',
			canonical: 'http://example.com/path/to/page',
			meta: {
				charset: 'utf-8',
				name: {
					keywords: 'buzz,react,meta,document,html,tags',
				},
			},
		};
		return (
			<div>
				<DocumentMeta {...metaData} />
				<Demo />
			</div>
		);
	}
}
