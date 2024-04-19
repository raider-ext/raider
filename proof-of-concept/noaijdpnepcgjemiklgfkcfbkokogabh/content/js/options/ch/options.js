  var str = top.location.toString();
  if(str.indexOf("?")!=-1){
	var line = str.split("?");
	var ob = "options-gt.html";
	switch(line[1]){
	 case "feed": ob="feedback.html"; break;
	 case "bbl": ob="options-bbl.html"; break;
	 case "it": ob="options-it.html"; break;
	 case "imt": ob="options-imt.html"; break;
	 case "wpt": ob="options-wpt.html"; break;
	 case "hist": ob="history.html"; break;
	 default: ob="options-gt.html";
	}
	setTimeout(function() {        document.getElementById('content').src=ob; }, 300);
  }
