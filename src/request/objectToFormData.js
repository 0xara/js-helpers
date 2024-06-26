
import { each } from './../core/each';

function getKey(parent, property) {
    return parent ? `${parent}[${property}]` : property;
}

function appendToFormData(formData, key, value) {
    if (value instanceof Date) {
        return formData.append(key, value.toISOString());
    }

    if (value instanceof File) {
        return formData.append(key, value, value.name);
    }

    if (typeof value !== 'object') {
        return formData.append(key, value);
    }

    objectToFormData(value, formData, key);

    return formData;
}

function objectToFormData(object, formData = new FormData(), parent = null) {
    each(object, (property) => {
        appendToFormData(formData, getKey(parent, property), object[property]);
    });

    return formData;
}


export default objectToFormData;
