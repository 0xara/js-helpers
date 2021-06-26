import { toType } from './toType.js';

var dispatchTypeEquals = {
	array: arraysEqual,
	object: function object(a, b) {
		if (Object.getPrototypeOf(a) === Object.prototype && Object.getPrototypeOf(b) === Object.prototype) return objectsEqual(a, b);
		if (a instanceof Map && b instanceof Map) return mapsEqual(a, b);
		if (a instanceof Set && b instanceof Set) throw "Error: set equality by hashing not implemented.";
		if ((a instanceof ArrayBuffer || ArrayBuffer.isView(a)) && (b instanceof ArrayBuffer || ArrayBuffer.isView(b))) return typedArraysEqual(a, b);
	},
	number: function number(a, b) {
		return a === b;
	},
	string: function string(a, b) {
		return a === b;
	},
	boolean: function boolean(a, b) {
		return a === b;
	}
};

function deepEquals(a, b) {
	var typeA = toType(a);
	return typeA === toType(b) && dispatchTypeEquals[typeA](a, b);
}

function arraysEqual(a, b) {
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; i++) {
		if (!deepEquals(a[i], b[i])) return false;
	}return true;
}
function objectsEqual(a, b) {
	var aKeys = Object.getOwnPropertyNames(a);
	var bKeys = Object.getOwnPropertyNames(b);
	if (aKeys.length != bKeys.length) return false;
	aKeys.sort();
	bKeys.sort();
	for (var i = 0; i < aKeys.length; i++) {
		if (aKeys[i] != bKeys[i]) // keys must be strings
			return false;
	}return deepEquals(aKeys.map(function (k) {
		return a[k];
	}), aKeys.map(function (k) {
		return b[k];
	}));
}
function mapsEqual(a, b) {
	if (a.size != b.size) return false;
	var aPairs = Array.from(a);
	var bPairs = Array.from(b);
	aPairs.sort(function (x, y) {
		return x[0] < y[0];
	});
	bPairs.sort(function (x, y) {
		return x[0] < y[0];
	});
	for (var i = 0; i < a.length; i++) {
		if (!deepEquals(aPairs[i][0], bPairs[i][0]) || !deepEquals(aPairs[i][1], bPairs[i][1])) return false;
	}return true;
}
function typedArraysEqual(a, b) {
	a = new Uint8Array(a);
	b = new Uint8Array(b);
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; i++) {
		if (a[i] != b[i]) return false;
	}return true;
}

export { deepEquals };
