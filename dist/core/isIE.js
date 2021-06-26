/**
 * note that in FF "false < 9" is "true". So, condition should be if (isIE () && isIE () < 9) {
 *
 * @returns {any}
 */
function isIE() {
  var myNav = navigator.userAgent.toLowerCase();
  return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
}

export default isIE;
