import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as components from 'components';
import * as bindings from 'bindings';

const mapChildComponents = function(component, index) {
	if (typeof component !== 'string') {
		const children = component.children ? component.children.map(mapChildComponents) : [];
		component = React.createElement(components[component.name] || component.name, {...component, key:index}, children);
	}
	return component;
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
