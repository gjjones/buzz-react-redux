import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

    var _components = pageTree.map(function(component, index){
    	return React.createElement(components[component.name] || component.name, {...component, key:index}, component.children);
    });

    return (
      <div>
        {_components}
        <div className="form-group">
          <button className="btn btn-default" onClick={() => _addClick({name:'div', children: ['Sick div, bruh']})}>add div</button>
          {' '}
          <button className="btn btn-default" onClick={() => _addClick({name:'Cats'})}>add Cats</button>
          {' '}
          <button className="btn btn-default" onClick={() => this.actions.del()}>delete</button>
        </div>
      </div>
    );
  }
}
