
/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g;
export function camelize(str) {
	return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
}