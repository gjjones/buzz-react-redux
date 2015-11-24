export default function (state) {
	const fetching = state.spotlight.get('fetching');
	return {
		style: {
			color: fetching ? 'red' : 'blue',
			fontWeight: fetching ? 'bold' : 'normal'
		}
	}
}