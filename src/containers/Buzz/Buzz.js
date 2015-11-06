import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as components from 'components';
import * as actionCreators from 'actions/pageTree';
import * as spotlightActionCreators from 'actions/spotlight';

const { Spinner } = components; 

const mapChildComponents = function(component, index) {
	var children = component.children ? component.children.map(mapChildComponents) : [];
	return component.name ?
		React.createElement(components[component.name] || component.name, {...component, key:index}, children) : component;
};

var Buzz = React.createClass({

	mixins: [PureRenderMixin],

	render: function() {
		const { pageTree, spotlight } = this.props;
		const _addClick = (componentType) => {
			this.props.add(componentType);
		};
		const _textAreaChange = (evt) => {
			var pageConfig;
			try {
				pageConfig = JSON.parse(evt.target.value);
			} catch (e) {
				return;
			}
			this.actions.set(pageConfig);
		};

		var _components = pageTree.map(mapChildComponents);

		return (
		<div>
			{_components}
			<div className="form-group">
				<textarea onChange={_textAreaChange} />
				<button className="btn btn-default" onClick={() => _addClick({name:'div', children: ['Sick div, bruh']})}>add div</button>
				{' '}
				<button className="btn btn-default" onClick={() => _addClick({name:'Cats'})}>add Cats</button>
				{' '}
				<button className="btn btn-default" onClick={() => this.props.del()}>delete</button>
				{' '}
				<button className="btn btn-default" onClick={() => this.props.fetch()}>fetch spotlight</button>
			</div>
			<If condition={spotlight.get('fetching')}>
				<Spinner />
			<Else />
				<div>{spotlight.getIn(['data', 'heading'])}</div>
			</If>
		</div>
		);
	}
});

var mapStateToProps = function(state) {
	return {
		pageTree: state.pageTree,
		spotlight: state.spotlight
	};
};

export default connect(
	mapStateToProps,
	{ ...actionCreators, ...spotlightActionCreators }
)(Buzz)
