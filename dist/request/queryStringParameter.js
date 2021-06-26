import '../core/isWindow.js';
import '../core/toType.js';
import '../array/isArrayLike.js';
import { each } from '../core/each.js';
import { isArray } from '../array/isArray.js';

function encodeQueryData(data) {
	var s = [];

	each(data, function (k, v) {
		var key = encodeURIComponent(k);

		if (isArray(v)) {
			each(v, function (vItem) {
				s.push(key + '[]=' + encodeURIComponent(vItem));
			});
		} else {
			s.push(key + '=' + encodeURIComponent(v));
		}
	});

	return s.join('&');
}

function decodeQueryData(query) {
	var chunks = query.split('&');
	var params = {};

	for (var i = 0; i < chunks.length; i++) {
		var chunk = chunks[i].split('=');
		if (chunk[0].search("\\[\\]") !== -1) {
			if (typeof params[chunk[0]] === 'undefined') {
				params[chunk[0]] = [decodeURIComponent(chunk[1])];
			} else {
				params[chunk[0]].push(decodeURIComponent(chunk[1]));
			}
		} else {
			params[chunk[0]] = decodeURIComponent(chunk[1]);
		}
	}

	return params;
}

function removeQueryString(url) {
	return url.split('?')[0];
}

export { encodeQueryData, decodeQueryData, removeQueryString };
