export default function (state) {
	const fetching = state.spotlight.get('fetching');
	return {
		style: {
			color: !fetching ? 'blue' : 'red',
			'font-weight': !fetching ? 'normal' : 'bold'
		}
	}
}