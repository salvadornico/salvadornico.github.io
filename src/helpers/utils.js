export const getJson = (...params) => fetch(...params).then(data => data.json())

export const handleError = fn => (...params) =>
	fn(...params).catch(console.error)
