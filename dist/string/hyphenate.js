/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}

export { hyphenate };
