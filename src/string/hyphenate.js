/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g;
export function hyphenate(str) {
	return str.replace(hyphenateRE, '-$1').toLowerCase()
}