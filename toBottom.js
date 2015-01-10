/* jshint node: true */
/* jshint browser: true */
'use strict';

module.exports = ToBottom;

function ToBottom() {
  var scrollTop = (document.documentElement &&
      document.documentElement.scrollTop) || document.body.scrollTop;
  var distance = (scrollTop + window.innerHeight) - document.body.scrollHeight;
  return distance * -1;
}
