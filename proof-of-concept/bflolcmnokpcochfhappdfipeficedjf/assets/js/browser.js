var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
  browser;
if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
  browser = "msie";
}
else {
  browser = ua[1].toLowerCase();
}



/*
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
{
  alert('MyViewBoard Casting will work on Chrome Browser')
  window.close();
  window.location.href='https://myviewboard.com';
}
else if(navigator.userAgent.indexOf("Chrome") != -1 )
{
  //alert('Chrome');
}
else if(navigator.userAgent.indexOf("Safari") != -1)
{
  alert('MyViewBoard Casting will work on Chrome Browser')
  window.close();
  window.location.href='https://myviewboard.com';
}
else if(navigator.userAgent.indexOf("Firefox") != -1 )
{
  //alert('Firefox');
  alert('MyViewBoard Casting will work on Chrome Browser')
  window.close();
  window.location.href='https://myviewboard.com';
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
  alert('MyViewBoard Casting will work on Chrome Browser')
  window.close();
  window.location.href='https://myviewboard.com';
}
else
{
  alert('unknown');
}
*/


