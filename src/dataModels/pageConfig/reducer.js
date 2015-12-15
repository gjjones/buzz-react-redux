import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const initialState = Immutable.List();

export function reducer(state = initialState, action) {
	switch (action.type) {
	case actionTypes.ADD:
		return state.push(action.payload);
	case actionTypes.DELETE:
		return state.shift();
	case actionTypes.SET:
		return Immutable.List(action.payload);
	default:
		return state;
	}
}
