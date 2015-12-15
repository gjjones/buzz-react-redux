import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as components from 'components';
import * as bindings from 'bindings';
import * as events from 'events';

const connectComponentClass = function(componentClass, bindingsName, eventsName) {
	if (bindingsName && !bindings[bindingsName]) {
		console.error('No bindings file of type "'+bindingsName+'" is available in this context. Double-check the filename.');
	}
	if (eventsName && !events[eventsName]) {
		console.error('No events file of type "'+eventsName+'" is available in this context. Double-check the filename.');		
	}
	componentClass = connect(bindings[bindingsName], events[eventsName])(componentClass);
	return componentClass;
};

const mapChildComponents = function(component, index) {
	if (typeof component !== 'string') {
		const children = component.children ? component.children.map(mapChildComponents) : [];
		var componentClass = components[component.name] || component.name;
		if (component.bindings || component.events) {
			componentClass = connectComponentClass(componentClass, component.bindings, component.events);
		}
		component = React.createElement(componentClass, {...component, key:index}, children);
	}
	return component;
};

var Buzz = React.createClass({

	mixins: [PureRenderMixin],

	render: function() {
		const { pageConfig } = this.props;

		var _components = pageConfig.map(mapChildComponents);

		return (
		<div>
			{_components}
		</div>
		);
	}
});

var mapStateToProps = function(state) {
	return {
		pageConfig: state.pageConfig
	};
};

export default connect(
	mapStateToProps
)(Buzz)
