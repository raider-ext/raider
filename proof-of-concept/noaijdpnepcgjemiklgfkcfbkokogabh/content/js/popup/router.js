var STR = "";
var TRANSLATOR = FExtension.store.get("SL_PrefTrans");
var TXT = FExtension.store.get("SL_Dtext");

var STOP = 0;
 switch(TRANSLATOR){
   case "1":	
        StartImTranslator();
	break;
   case "2":
	setTimeout(function(){
           if(chrome.tabs){
	      chrome.tabs.executeScript( {
		  code: "window.getSelection().toString();"
	      }, function(selection) {
	          try{
		    var barTXT = selection[0].trim();
		    if(barTXT=="" && TXT!="") barTXT=TXT;
		    if(barTXT==""){
			document.write("<div style='width:140px;'><div align=center>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),"extpst").replace(/ /ig,"&nbsp;")+"</div></div>");
		    }else{
		        var tab = chrome.tabs;
		        var info = window.event;
			chrome.tabs.executeScript(tab.id, {
			    code: 'TranslatorIM.SL_runinlinerNOW(window.e, 0);'
			});
			window.close();		
		    }
		  } catch(err){
		    StartImTranslator();
		  }		 
	      });
	   }
	},300);
	break;
   case "3":
	setTimeout(function(){
           if(chrome.tabs){
	      chrome.tabs.executeScript( {
		  code: "window.getSelection().toString();"
	      }, function(selection) {
	          try{
		    var barTXT = selection[0].trim();
		    if(barTXT=="" && TXT!="") barTXT=TXT;
		    if(barTXT==""){
			document.write("<div style='width:140px;'><div align=center>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),"extpst").replace(/ /ig,"&nbsp;")+"</div></div>");
		    }else{
		        var tab = chrome.tabs;
			chrome.tabs.executeScript(tab.id, {
			    code: 'TranslatorIM.SL_BUBBLE_FROM_CM(window.e, 0);'
			});		
		       window.close();
		    }
		  } catch(err){
		    StartImTranslator();
//FExtension.bg.ImTranslatorBG.ContMenuClick(chrome.tabs, chrome.info);
		  }		 
	      });
	   }  

	},300);
	break;
   case "4":
        var tab = chrome.tabs;
	chrome.tabs.executeScript(tab.id, {
	    code: 'TranslatorIM.SL_WEB_PAGE_TRANSLATION_FROM_TB("'+FExtension.store.get("SL_GWPTAuto")+'","reset", '+FExtension.store.get("SL_wptGlobTb")+','+FExtension.store.get("SL_wptGlobTip")+');'
	});	
        window.close();
	break;
   case "5":
        var tab = chrome.tabs;
	chrome.tabs.executeScript(tab.id, {
	    code: 'TranslatorIM.SL_WPT(1);'
	});	
        window.close();
	break;

 }	




function StartImTranslator(){
	var BACK_VIEW=FExtension.store.get("SL_BACK_VIEW");
	var STR1 = String(document.location);
	if(STR1.indexOf("text=")!=-1){
		var STR2 = STR1.split("text=");
		STR = "?text="+STR2[1];
	}else	STR = "?text="+TXT;
//	STR = STR + "&stop=";	
	if(STR1.indexOf("&stop=")!=-1){
//		STR = STR + "&stop=";
		STOP = 1;
	}

       	if(window.location.pathname.indexOf("router.html")!=-1){
		if(BACK_VIEW==2) document.location="TB-translation-back.html" + STR; 
//		else		 document.location="TB-translator.html" + STR + "&tb="; 
		else		 document.location="TB-translator.html" + STR; 
	}else{
		if(STOP == 0){
			if(BACK_VIEW==1) document.location="TB-translator.html" + STR;
			else 		 document.location="TB-translation-back.html" + STR; 
		}
	}
}
