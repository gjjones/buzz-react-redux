import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import { Demo } from 'containers';
import 'bootstrap-webpack';

// Global styles
// import 'style!./styles/main.scss';

// Application components
// import { Header, Typography, Footer } from 'components';

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
