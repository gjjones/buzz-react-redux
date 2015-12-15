import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

// Always define initial state at top
const initialState = Immutable.fromJS({
	url: '',
	fetching: false,
	data: {
		caption: '',
		heading: 'Initial Spotlight Heading',
		linkTarget: '',
		subheading: '',
		items: []
	}
});

// Always export reducer function as default
export function reducer (state = initialState, action) {
	switch (action.type) {
	case actionTypes.FETCH:
		return state.set('fetching', true);
	case actionTypes.SYNC:
		return state.merge({data: Immutable.Map(action.payload), fetching: false});
	case actionTypes.ERROR:
		return state.merge({...initialState.toJS(), heading: 'Something went wrong... :('});
	default:
		return state;
	}
}
