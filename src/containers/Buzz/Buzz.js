import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import * as components from 'components';

// Component styles
// import styles from './SimpleComponent.styles.js';

// Actions
import * as actionCreators from 'actions/pageTree';

@connect(state => state.pageTree)
export default class Buzz extends Component {

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  render() {
    const { pageTree } = this.props;
    const _addClick = (componentType) => {
      this.actions.add(componentType);
    };
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

    var _components = pageTree.map(function(child, index){
    	return React.createElement(components[child.component], {key: index});
    });

    return (
      <div>
        <DocumentMeta {...metaData} />
        {_components}
        <div className="form-group">
          <button className="btn btn-default" onClick={() => _addClick('BuzzDiv')}>add div</button>
          {' '}
          <button className="btn btn-default" onClick={() => _addClick('BuzzHeading')}>add h3</button>
          {' '}
          <button className="btn btn-default" onClick={() => this.actions.del()}>delete</button>
        </div>
      </div>
    );
  }
}
