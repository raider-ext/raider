'use strict';
var prj="UA-93979-17";
var ttl="UA-93979-27";
switch(PLATFORM){
 case "Opera": prj="UA-93979-20"; break;
 case "OperaGT": prj="UA-93979-36"; break;
 case "Chrome": prj="UA-93979-17"; break;
}
var _gaq = _gaq || [];
_gaq.push(['_setAccount', prj]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', ttl]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();