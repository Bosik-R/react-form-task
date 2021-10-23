export const parsePrepTime = (prep) => {
	const arr = prep.split(':');
	const hoursMinSecs = { hours: parseInt(arr[0]), minutes: parseInt(arr[1]), seconds: parseInt(arr[2]) };
	return hoursMinSecs;
};
