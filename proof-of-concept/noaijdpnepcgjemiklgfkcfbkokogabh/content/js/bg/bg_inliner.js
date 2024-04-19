ImTranslator_inliner = {
	DetLang: "en",
		
	init: function(){
		//********************Options for inliner****************************
		if (!FExtension.store.get("SL_langSrc_it")) { FExtension.store.set("SL_langSrc_it", "auto"); }
		if (!FExtension.store.get("SL_langDst_it2")) { FExtension.store.set("SL_langDst_it2", "es"); }


		if (!FExtension.store.get("SL_style")) { FExtension.store.set("SL_style", "239e23");/*"color: #292;";*/ }
		if (!FExtension.store.get("SL_inject_before")) { FExtension.store.set("SL_inject_before", "false"); }
		if (!FExtension.store.get("SL_inject_brackets")) { FExtension.store.set("SL_inject_brackets", "true"); }
		if (!FExtension.store.get("SL_line_break")) { FExtension.store.set("SL_line_break", "false"); }
		if (!FExtension.store.get("SL_whole_word")) { FExtension.store.set("SL_whole_word", "false"); }
		if (!FExtension.store.get("SL_hide_translation")) { FExtension.store.set("SL_hide_translation", "false"); }
		if (!FExtension.store.get("SL_dictionary")) { FExtension.store.set("SL_dictionary", "false"); }
		//********************END Options for inliner****************************

		FExtension.browser.portOnConnectListener(function(port) {
			FExtension.browser.inlinerPortListener(port, ImTranslator_inliner.respondToMessage);
		});
		

//	        ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
//		if(FExtension.store.get("SL_hide_translation")!="true") FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
		

		if(FExtension.store.get("SL_CM7")==1){
			ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, false);
		}

		if(FExtension.store.get("SL_CM8")==1){
			ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
		}

	},
	/*setDefault: function(){
	},*/

	//********************BG inliner****************************
	getHttpRequest: function(){
		var ajaxRequest;
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					alert("Your browser broke");
					return false;
				}
			}
		}
		return ajaxRequest;
	},
	

	translate: function (text, injectDictionary) {
		var escapedText=text.replace(/#/g,"");
		escapedText=escapedText.replace(/%/g,"");
		
		var langSrc = "auto";
		var SL_TMPTMP1=ImTranslatorBG.SL_ListOfAvailableLanguages.split(",");
		for (var i = 0; i < SL_TMPTMP1.length; i++) {
			var SL_TMPTMP2 = SL_TMPTMP1[i].split(":");
			if (SL_TMPTMP2[0] == ImTranslator_inliner.DetLang) {
				langSrc = ImTranslator_inliner.DetLang;
				break;
			}
	    }

		var langDst = FExtension.store.get("SL_langDst_it2");

		var baseUrl = "";
		var SL_Params = "";
		var array = text.match(/\b\w+\b/g);
		var dictionary = false;
		if(injectDictionary == "true" && array.length == 1){
			var num = Math.floor((Math.random() * SL_GEO.length)); 
			var theRegion = SL_GEO[num];
			if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
			var baseUrl = "https://translate.google."+theRegion;

			baseUrl = baseUrl+"/translate_a/t";
			SL_Params = "client=drive&sl="+langSrc+"&tl="+langDst+"&multires=1&otf=2&ssel=0&tsel=0&notlr=0&sc=1&text="+encodeURIComponent(escapedText);
			dictionary = true;
		}else{
			var num = Math.floor((Math.random() * SL_GEO.length)); 
			var theRegion = SL_GEO[num];
			if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
			var baseUrl = "https://translate.google."+theRegion;

			SL_Params = "hl=en&langpair="+langSrc+"|"+langDst+"&q="+encodeURIComponent(escapedText)+"&tbb=1&ie=UTF-8&oe=UTF-8";
		}
	    
		ImTranslator_inliner.injectScript("inlinerScript", baseUrl, SL_Params, dictionary);
	},
	
	translateCallBack: function(result, dictionary) {
		var translation = "";
		if(dictionary){
			try {
				result = JSON.parse(result);
			} catch(e) {
				
			}
			if(result.dict){
				var dict = result.dict;
				if(dict.length > 0 && dict[0].terms){
					ImTranslator_inliner.translation = dict[0].terms.join();
				}
			}
		}else{
			if(result.indexOf('<span id=result_box class="long_text">')>-1)         
		    	var ImtranslatorGoogleResult1=result.split('<span id=result_box class="long_text">');
		    else
		    	var ImtranslatorGoogleResult1=result.split('<span id=result_box class="short_text">');
			var ImtranslatorGoogleResult2=ImtranslatorGoogleResult1[1].split('</span></div>');
		    	var ImtranslatorGoogleResult3=ImtranslatorGoogleResult2[0].replace(/<br>/ig,'@');
		    	ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&#39;/ig,"'");
		    	ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&quot;/ig,"'");
		    	ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&amp;/ig,"&");
		    	ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig,"");
		    	ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/@/ig,"<br>");
		    	var ImtranslatorGoogleResult4=ImtranslatorGoogleResult3.replace(/% 20/ig," ");
		    	translation = ImtranslatorGoogleResult4;
		}
		FExtension.browser.inlinerPostMessage({name:"inlinerSelectionResponse", message:translation});
	}, 
	
	respondToMessage: function(theMessageEvent) {
		if(theMessageEvent.name === "inlinerSelectionRequest") {
			ImTranslator_inliner.DODetectionLang(theMessageEvent.message);
			setTimeout(function(){
				ImTranslator_inliner.translate(theMessageEvent.message, FExtension.store.set("SL_dictionary"));
		    }, 750);
		} else if (theMessageEvent.name === "styleDestinationRequest") {
			FExtension.browser.inlinerPostMessage({name:"styleDestinationValue", message:FExtension.store.get("SL_style")});
		} else if (theMessageEvent.name === "injectBeforeRequest") {
			FExtension.browser.inlinerPostMessage({name:"injectBeforeValue", message:FExtension.store.get("SL_inject_before")});
		} else if (theMessageEvent.name === "injectBracketsRequest") {
			FExtension.browser.inlinerPostMessage({name:"injectBracketsValue", message:FExtension.store.get("SL_inject_brackets")});
		} else if (theMessageEvent.name === "injectLineBreak") {
			FExtension.browser.inlinerPostMessage({name:"injectLineBreak", message:FExtension.store.get("SL_line_break")});
		} else if (theMessageEvent.name === "injectWholeWord") {
			FExtension.browser.inlinerPostMessage({name:"injectWholeWord", message:FExtension.store.get("SL_whole_word")});
		} else if (theMessageEvent.name === "injectHideTranslation") {
			FExtension.browser.inlinerPostMessage({name:"injectHideTranslation", message:FExtension.store.get("SL_hide_translation")});
		} else if (theMessageEvent.name === "injectDictionary") {
			FExtension.browser.inlinerPostMessage({name:"injectDictionary", message:FExtension.store.get("SL_dictionary")});
		} else if (theMessageEvent.name === "injectLang") {
			FExtension.browser.inlinerPostMessage({name:"injectLang", message:ImTranslatorBG.SL_ListOfAvailableLanguages});
		} else if (theMessageEvent.name === "injectLangSrc") {
			FExtension.browser.inlinerPostMessage({name:"injectLangSrc", message:FExtension.store.get("SL_langSrc_it")});
		} else if (theMessageEvent.name === "injectLangDst") {
			FExtension.browser.inlinerPostMessage({name:"injectLangDst", message:FExtension.store.get("SL_langDst_it2")});
		}
	},
	
	updateClientSettings: function(){
		FExtension.browser.inlinerPostMessage({name:"updateSettings", message:true});
	},
	
	truncStrByWord: function (str, length){
		if(str!="undefined"){
			if(str.length>25){
				length=length-25;
				var thestr=str;
				if (str.length > length) {
					str = str.substring (0, length);
					str = str.replace(new RegExp("/(.{1,"+length+"})\b.*/"), "$1")    // VK - cuts str to max length without splitting words.
					var str2 = thestr.substring(length, (length+25));
					var tempstr=str2.split(" ");
					var tmp="";
					for (var i=0; i<tempstr.length-1; i++){
						tmp = tmp+tempstr[i]+" ";
					} 
					str=str+tmp;
				}
			} else { 
				str = str+" ";
			}
		}
		return str;
	},
	
	injectScript: function(id, url, param, dictionary){
		var xhr = ImTranslator_inliner.getHttpRequest();
		xhr.open("POST", url, true);
		xhr.onreadystatechange = function() {
		  if (xhr.readyState == 4) {
			  var result = xhr.responseText;
			  ImTranslator_inliner.translateCallBack(result, dictionary);
		  }
		}
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(param);
	},
	
	DODetectionLang: function(myTransText) {
		var SL_langSrc = FExtension.store.get("SL_langSrc");
		var AUTO = SL_langSrc;
		if(AUTO=="auto"){
			if(myTransText!=""){
				var baseUrl = 'https://' + 'translate.google.com/translate_a/t?client=drive&sl=auto&tl=en&multires=1&otf=2&ssel=0&tsel=0&notlr=0&sc=1&text='+encodeURIComponent(truncStrByWord(myTransText,100));
				var ajaxRequest = ImTranslator_inliner.getHttpRequest();  
				ajaxRequest.onreadystatechange = function(){
					if(ajaxRequest.readyState == 4){
						var resp = ajaxRequest.responseText;
						var GDImTranslator_lang=decodeURIComponent(resp);
						var GDImTranslator_lang1=GDImTranslator_lang.split('"src":"');
						var GDImTranslator_lang2=GDImTranslator_lang1[1].split('"');
						resp=GDImTranslator_lang2[0];
						ImTranslator_inliner.DetLang = resp;
					}
				}
				ajaxRequest.open("POST", baseUrl, true);
				ajaxRequest.send(null); 
			}
		}
	},


	
	//-------------Context Menu-----------------
	inlinerContextOnClick: function(info, tab) {
        	try{
			var ST = 0;
			if(tab.id==-1) ST=1;   
			if(tab.url.toLowerCase().indexOf("extension://")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf(".pdf")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("chrome://extensions/")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("addons.opera.com/")!=-1 && tab.url.indexOf("/extensions")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("addons.mozilla.org/")!=-1 && tab.url.indexOf("/firefox")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("mensuel.framapad.org")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("oasis.sandstorm.io")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("chrome.google.com/webstore/")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("etherpad.org")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("about:")!=-1 && tab.url.toLowerCase().indexOf("://")==-1) ST=1;
			if(tab.url.toLowerCase().indexOf("chrome://settings/")!=-1) ST=1;
			if(tab.url.toLowerCase().indexOf("file:///")!=-1) ST=1;
			//VK ; local files
			if(tab.url.toLowerCase().indexOf("file:///")!=-1 && (tab.url.toLowerCase().indexOf(".html")>-1 || tab.url.toLowerCase().indexOf(".htm")>-1 || tab.url.toLowerCase().indexOf(".txt")>-1)) ST=0;
			//------------
			if(ST==1){
        	              	ImTranslatorBG.ContMenuClick(info,tab);
			}else{
				FExtension.browser.tabsSendMessage(tab ? tab.id : '', "inlinerInjectInliner");
			}
        	}catch(e) {alert(e);}
	},

	inlinerContextClearOnClick: function(info, tab) {
	        FExtension.browser.tabsSendMessage(tab ? tab.id : '', "inlinerInjectClean");
	},

	inlinerContextShowOnClick: function(info, tab) {
        	FExtension.browser.tabsSendMessage(tab ? tab.id : '', "inlinerInjectShowOrigin");
		FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
	},

    refreshInlineSettings: function(){
        try{
            chrome.windows.getAll(null, function(wins) {
                for (var j = 0; j < wins.length; ++j) {
                    chrome.tabs.getAllInWindow(wins[j].id, function(tabs) {
                        var theMessageEvent = {};
                        for (var i = 0; i < tabs.length; ++i) {
                            //FExtension.browser.executeScript(null, tabs[i], "refreshSettings();");
                            FExtension.browser.tabsSendMessage(tabs[i].id, "refreshSettings");
                        }
                    });
                }
            });
        }catch(e){
            console.log(e);
        }
    }
}