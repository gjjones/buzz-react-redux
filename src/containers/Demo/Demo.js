import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as components from 'components';
import * as containers from 'containers';
import * as actionCreators from 'actions/pageTree';
import { actions as spotlightActionCreators } from 'dataModels/spotlight';

const { Spinner } = components;
const { Buzz } = containers;

var Demo = React.createClass({

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
			this.props.set(pageConfig);
		};
		const _fetch = () => {
			this.props.setFetching(true);
			this.props.fetch();
		}

		return (
		<div>
			<div className="form-group">
				<textarea value={JSON.stringify(pageTree.toJS())} onChange={_textAreaChange} />
				<button className="btn btn-default" onClick={() => _addClick({name:'div', children: ['Sick div, bruh']})}>add div</button>
				{' '}
				<button className="btn btn-default" onClick={() => _addClick({name:'Cats'})}>add Cats</button>
				{' '}
				<button className="btn btn-default" onClick={() => _addClick({"name":"button","bindings":"styleFetchText","events":"onClick_fetchSpotlight","children":["Test bindings and events"]})}>add a button w/ bindings</button>
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
			<Buzz />
		</div>
		);
	}
});

var mapStateToProps = function(state) {
	return {
		spotlight: state.spotlight,
		pageTree: state.pageTree
	};
};

export default connect(
	mapStateToProps,
	{ ...actionCreators, ...spotlightActionCreators }
)(Demo)
