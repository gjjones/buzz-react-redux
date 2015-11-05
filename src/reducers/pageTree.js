import Immutable from 'immutable';

const initialState = Immutable.Map({
	pageTree: Immutable.List(),
});

export function pageTree(state = initialState, action) {
	switch (action.type) {
	case 'PAGETREE_ADD':
		return state.update(
			'pageTree',
			pageTree => pageTree.push(action.payload)
		);
	case 'PAGETREE_DELETE':
		return state.update(
			'pageTree',
			pageTree => pageTree.shift()
		);
	case 'PAGETREE_SET':
		return state.set(
			'pageTree',
			Immutable.List(action.payload)
		);
	default:
		return state;
	}
}
