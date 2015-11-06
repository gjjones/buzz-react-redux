import Immutable from 'immutable';

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

export function spotlight(state = initialState, action) {
	switch (action.type) {
	case 'SPOTLIGHT_FETCH':
		return state.set('fetching', true);
	case 'SPOTLIGHT_SYNC':
		return state.merge({data: Immutable.Map(action.payload), fetching: false});
	case 'SPOTLIGHT_ERROR':
		return state.merge({...initialState.toJS(), heading: 'Something went wrong... :('});
	default:
		return state;
	}
}
