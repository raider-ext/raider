	var BACK_VIEW=FExtension.store.get("SL_BACK_VIEW");
	var STR = "";
	var STR1 = String(document.location);
	if(STR1.indexOf("?text=")!=-1){
		var STR2 = STR1.split("?text=");
		STR = "?text="+STR2[1];
	}
	if(BACK_VIEW==2 && window.location.pathname.indexOf("TB-translator.html")!=-1) document.location="TB-translation-back.html" + STR; 
	if(BACK_VIEW==1 && window.location.pathname.indexOf("TB-translation-back.html")!=-1) document.location="TB-translator.html";
