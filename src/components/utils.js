// https://stackoverflow.com/a/44627252
const valueAtKeyPath = (array, keyPath) => (
	keyPath.split('.').reduce((previous, current) => (
		previous[current]
	), array)
)

// https://stackoverflow.com/a/34890276
export const groupArrayBy = (array, key) => (
	array.reduce((rv, x) => {
		(rv[valueAtKeyPath(x, key)] = rv[valueAtKeyPath(x, key)] || []).push(x)
		return rv
	}, {})
)
