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
			type: 'SPOTLIGHT_FETCH'
		});
		setTimeout(() => {
			dispatch({
				type: 'SPOTLIGHT_SYNC',
				payload: mockData
			});
		}, 4500);
	};
}

export function sync(data) {
	return {
		type: 'SPOTLIGHT_SYNC',
		payload: data
	};
}

export function error(err) {
	return {
		type: 'SPOTLIGHT_ERROR',
		error: true,
		payload: err
	};
}
