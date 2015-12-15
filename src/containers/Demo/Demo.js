import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Button, Spinner } from 'components';
import * as containers from 'containers';
import * as actionCreators from 'actions/pageTree';
import { actions as spotlightActionCreators } from 'dataModels/spotlight';

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
				<textarea value={JSON.stringify(pageTree.toJS(), null, '\t')} onChange={_textAreaChange} />
				<div>
					<Button className="primary" onClick={() => _addClick({name:'div', children: ['Sick div, bruh']})}>add div</Button>
					{' '}
					<Button className="primary" onClick={() => _addClick({name:'Cats'})}>add Cats</Button>
					{' '}
					<Button className="primary" onClick={() => _addClick({name:'Searchbar'})}>add Searchbar</Button>
					{' '}
					<Button className="primary" onClick={() => _addClick({name:'div', children: [{name:'Button',className:'search',bindings:'styleFetchText',events:'onClick_fetchSpotlight',children:['Test bindings and events']}]})}>add a button w/ bindings</Button>
					{' '}
					<Button className="primary" onClick={() => this.props.del()}>delete</Button>
					{' '}
					<Button className="primary" onClick={() => this.props.fetch()}>fetch spotlight</Button>
				</div>
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
