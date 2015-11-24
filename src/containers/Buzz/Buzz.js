import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as components from 'components';
import * as bindings from 'bindings';

const connectComponentClass = function(componentClass, bindingsName) {
	if (!bindings[bindingsName]) {
		console.error('No bindings of type "'+bindingsName+'" are available in this context. Double-check the filename.');
	} else {
		componentClass = connect(bindings[bindingsName])(componentClass);
	}
	return componentClass;
};

const mapChildComponents = function(component, index) {
	if (typeof component !== 'string') {
		const children = component.children ? component.children.map(mapChildComponents) : [];
		var componentClass = components[component.name] || component.name;
		if (component.bindings) {
			componentClass = connectComponentClass(componentClass, component.bindings);
		}
		component = React.createElement(componentClass, {...component, key:index}, children);
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
