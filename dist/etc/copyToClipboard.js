function copyToClipboard(val) {
	var el = document.createElement("textarea");
	el.id = "textareaTemp";
	el.style.position = "fixed";
	el.style.opacity = 0;
	el.value = val;
	document.body.appendChild(el);
	if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
		var editable = el.contentEditable;
		var readOnly = el.readOnly;
		el.contentEditable = true;
		el.readOnly = false;
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		el.setSelectionRange(0, 999999);
		el.contentEditable = editable;
		el.readOnly = readOnly;
	} else {
		el.select();
	}

	var copied = true;
	try {
		document.execCommand('copy');
	} catch (e) {
		copied = false;
	} finally {
		document.body.removeChild(el);
	}
	return copied;
}

export { copyToClipboard };
