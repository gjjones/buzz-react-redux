import * as actionTypes from './actionTypes';

const mockData = {
	caption: '',
	heading: 'Mock Data Spotlight Heading',
	linkTarget: '',
	subheading: '',
	items: []
};

export function fetch() {  
	return dispatch => {
		dispatch({
			type: actionTypes.FETCH
		});
		setTimeout(() => {
			dispatch({
				type: actionTypes.SYNC,
				payload: mockData
			});
		}, 4500);
	};
}

export function sync(data) {
	return {
		type: actionTypes.SYNC,
		payload: data
	};
}

export function error(err) {
	return {
		type: actionTypes.ERROR,
		error: true,
		payload: err
	};
}
