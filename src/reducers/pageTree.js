import Immutable from 'immutable';

const initialState = Immutable.List();

export function pageTree(state = initialState, action) {
	switch (action.type) {
	case 'PAGETREE_ADD':
		return state.push(action.payload);
	case 'PAGETREE_DELETE':
		return state.shift();
	case 'PAGETREE_SET':
		return Immutable.List(action.payload);
	default:
		return state;
	}
}
