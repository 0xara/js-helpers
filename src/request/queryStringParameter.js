import { each } from '../core/each';
import { isArray } from '../array/isArray';


export function encodeQueryData(data) {
    const s = [];

    each(data, (k, v) => {
        const key = encodeURIComponent(k);

        if(isArray(v)) {
            each(v, (vItem) => {
                s.push(`${key}[]=${encodeURIComponent(vItem)}`);
            });
        } else {
            s.push(`${key}=${encodeURIComponent(v)}`);
        }
    });

    return s.join('&');
}

export function decodeQueryData(query) {
	var chunks = query.split('&');
	var params = {};

	for (var i=0; i < chunks.length ; i++) {
		var chunk = chunks[i].split('=');
		if(chunk[0].search("\\[\\]") !== -1) {
			if( typeof params[chunk[0]] === 'undefined' ) {
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

export function removeQueryString(url) {
    return url.split('?')[0];
}
