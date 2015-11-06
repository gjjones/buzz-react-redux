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
		const { pageTree } = this.props;

		var _components = pageTree.map(mapChildComponents);

		return (
		<div>
			{_components}
		</div>
		);
	}
});

var mapStateToProps = function(state) {
	return {
		pageTree: state.pageTree
	};
};

export default connect(
	mapStateToProps
)(Buzz)
