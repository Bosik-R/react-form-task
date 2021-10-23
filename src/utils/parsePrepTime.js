export const parsePrepTime = (prepTime) => {
	const arr = prepTime.split(':');
	const time = parseInt(arr[0]) * 3600000 + parseInt(arr[1]) * 60000 + parseInt(arr[2]) * 1000;
	//const minutes = parseInt(arr[1]) * 60000;
	//const seconds = parseInt(arr[2]) * 1000;
	return time;
};
