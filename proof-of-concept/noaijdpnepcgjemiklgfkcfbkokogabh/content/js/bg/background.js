ImTranslatorBG = {
        BTNstatus: 0,
    	BaseGTK:  "451769.3009291968",
        GFROZEN: 60,
	INTERNAL_ONLY: 0,
	YSID: "",
	YSIDold: "",
	YSIDstatus: false,
	/////////////
	audioElement: "",
	audioStatus: "on",
	ADVkey: 1,
	// 1 - show for all
	// 2 - show for new
	// 3 - show for old
	// 4 - do not show for all
	/////////////
	NEW_GDETECT: "",
	NEW_GTRANSLATE: "",
	DIC_TRIGGER: 0,
        tempresp: "",
	seltext: null,
	myWindow: "",
	NORUN: 0,
	ImTranslator_URL: "https://translate.imtranslator.net/1/",
	TextTransLimit: 8000,
	ImTranslator_Wconst: 550,
	ImTranslator_Hconst: 550,
        THE_URL: "",
        URL: "",
	first_run: false,
	the_ID0: null,
	the_ID1: null,
	the_ID2: null,
	the_ID3: null,
	the_ID4: null,
	the_ID5: null,
	the_ID6: null,
	the_ID7: null,
	the_ID8: null,
	the_ID9: null,
        ALLvoices: "",
        BUBBLE_RESP: "",
        BUBBLE_DET: "",
        INLINE_RESP: "",
	SLIDL: "",
	TRIGGER: 0,
	IT_DetLang: "",
        TMP_HIST_SEG: "",
        TMP_IT_SEG: "",
	PUSH_TXT: "",

	init: function(){



                FExtension.store.set("SL_GWPTHist", "");
		FExtension.browser.addOnRequestListener(function(request, sender, sendResponse)
		{
		    switch(request.message){
		        case 'setText':
		            window.seltext = request.data
		            break;
		        default:
		            sendResponse({data: 'Invalid arguments'});
		        	break;
		    }
		});


		if (!FExtension.store.get('ran_before')) {
			ImTranslatorBG.first_run = true;  
			//FExtension.store.set('ran_before', '1');
		}


		var tmpDOM = FExtension.store.get("SL_DOM");
		if(tmpDOM==null) FExtension.store.set("SL_DOM", "auto");
		else {
			if(tmpDOM!="auto" && tmpDOM!="com" && tmpDOM!="ca" && tmpDOM!="com.hk" && tmpDOM!="com.tw" && tmpDOM!="co.jp" && tmpDOM!="co.kr" && tmpDOM!="com.tr" && tmpDOM!="com.ua" && tmpDOM!="com.vn" && tmpDOM!="co.in" && tmpDOM!="co.uk" && tmpDOM!="cn" && tmpDOM!="de" && tmpDOM!="fr" && tmpDOM!="it" && tmpDOM!="pl" && tmpDOM!="ru" ) FExtension.store.set("SL_DOM", "auto");
		}

	        var manifestData = chrome.app.getDetails();
        	var version = manifestData.version;
        	var ADV = 0;
		if(ImTranslatorBG.ADVkey==2 && FExtension.store.get("FRUN")!=null) ADV = FExtension.store.get("ran_before");
//		ImTranslatorBG.setDefault();				
		if(FExtension.store.get("SL_Version") != "16.70"){	
			if (ImTranslatorBG.first_run) { 
				ImTranslatorBG.setDefault();
				FExtension.browser.getVersion(function(version){
					FExtension.store.set("SL_Version", version);
					FExtension.store.set("ADV", 0);
					FExtension.store.set("FRUN", 1);
					ADV = 1;
				})			
			} else {
                        	if(FExtension.store.get("SL_Version") != version){
					ImTranslatorBG.getUPDATES();
					FExtension.store.set("SL_Version", version);
					FExtension.store.set("ADV", 0);
					ADV = 1;
				}
			}
		} else ImTranslatorBG.getUPDATES();

                if(FExtension.store.get("ADV") == 0 && ADV == 0){
			ImTranslatorBG.SL_RunWelcomePage(); 
			FExtension.store.set("ADV", 1);
		}                                               
			
		// RESET FORMER CS
			// PL TRANSLATOR
			FExtension.store.set("PLT_TTSvolume", 10);
			FExtension.store.set("PLT_PROV", "Google");
			FExtension.store.set("PLT_OLD_TS_TR", "0");
			FExtension.store.set("PLT_TR_FIRSTRUN", "done");
			FExtension.store.set("PLT_LOC", "false");


			// PL DICTIONARY
			FExtension.store.set("PLD_TTSvolume", 10);
			FExtension.store.set("PLD_DPROV", "Google");
			FExtension.store.set("PLD_OLD_TS", "0");
			FExtension.store.set("PLD_DIC_FIRSTRUN", "dicdone");
			FExtension.store.set("PLD_LOC", "false");

			//IMTRANSLATOR SESSION RESET
			FExtension.store.set("SL_langSrc2", FExtension.store.get("SL_langSrc"));
			FExtension.store.set("SL_langDst2", FExtension.store.get("SL_langDst"));

			// OPTIONS
			FExtension.store.set("SL_anchor", "0");
			FExtension.store.set("SL_sort", "0");

			//BBL SESSION RESET
			FExtension.store.set("BL_T_PROV", "Google");
			FExtension.store.set("BL_D_PROV", "Google");
			FExtension.store.set("SL_langSrc_bbl2", FExtension.store.get("SL_langSrc"));
			FExtension.store.set("SL_langDst_bbl2", FExtension.store.get("SL_langDst"));
			FExtension.store.set("SL_Fontsize_bbl2", FExtension.store.get("SL_Fontsize"));
			if(FExtension.store.get("SL_pin_bbl")!="true"){
				FExtension.store.set("SL_BBL_X", 0);
				FExtension.store.set("SL_BBL_Y", 0);
			}
			FExtension.store.set("SL_pin_bbl2",FExtension.store.get("SL_pin_bbl"));

			if(FExtension.store.get("SL_no_detect_bbl") != "true") FExtension.store.set("SL_bbl_loc_langs", "true");
			else FExtension.store.set("SL_bbl_loc_langs", "false");
			FExtension.store.set("SL_show_button_bbl2", FExtension.store.get("SL_show_button_bbl"));
			FExtension.store.set("SL_langDst_it2", FExtension.store.get("SL_langDst_it"));

			//WPT SESSION RESET			
			FExtension.store.set("SL_WPT_TEMP_LANG", FExtension.store.get("SL_langDst_wpt"));



			// Reset FAVs to default
			ImTranslatorBG.SL_SAVE_FAVORITE_LANGUAGES(FExtension.store.get("SL_langDst_bbl"),"SL_FAV_LANGS_BBL");
			ImTranslatorBG.SL_SAVE_FAVORITE_LANGUAGES(FExtension.store.get("SL_langDst_it"),"SL_FAV_LANGS_IT");
			ImTranslatorBG.SL_SAVE_FAVORITE_LANGUAGES(FExtension.store.get("SL_langDst_wpt"),"SL_FAV_LANGS_WPT");
			// Reset FAVs to default

			localStorage["WINDOW_WIDTH"] = 555;
			localStorage["WINDOW_HEIGHT"] = 670; //540;
	    		localStorage["WINDOW_TOP"] = ((screen.height - localStorage["WINDOW_HEIGHT"] ) / 2);
		    	localStorage["WINDOW_LEFT"]= (( screen.width - localStorage["WINDOW_WIDTH"] ) / 2 );


		// RESET FORMER CS


		if(FExtension.store.get("SL_CM1")==1){
			ImTranslatorBG.the_ID0 = FExtension.browser.createContextMenus("ImTranslator",ImTranslatorBG.ContMenuClick, false);
		}

		if(FExtension.store.get("SL_CM1")==1){
			ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
		}

		if(FExtension.store.get("SL_CM2")==1){
				ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it2"))),ImTranslator_inliner.inlinerContextOnClick, true);
	    	}
		if(FExtension.store.get("SL_CM3")==1){
				ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
	    	}


		if(FExtension.store.get("SL_CM7")==1){
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
	    	}

/*
		if(FExtension.store.get("SL_CM8")==1){
				ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, true);
	    	}
*/

		if(FExtension.store.get("SL_CM4")==1){
			ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
	    	}
		if(FExtension.store.get("SL_CM5")==1){
			ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
		}
		if(FExtension.store.get("SL_CM6")==1){
			ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
		}


		if(FExtension.store.get("SL_ENABLE")=='false') ImTranslatorBG.SL_callbackRequestToChangeRightClickMenu(0);

		ImTranslatorBG.LOC_TABLE();
		
		ImTranslator_inliner.init();
/*
		var SL_TMPTMP1=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages').split(",");
		for (var i = 0; i < SL_TMPTMP1.length; i++) {
			var SL_TMPTMP2 = SL_TMPTMP1[i].split(":");
			if (SL_TMPTMP2[0] == FExtension.store.get("SL_langDst")) {
				FExtension.store.set("SL_langDst_name",SL_TMPTMP2[1]);
			}
			if (SL_TMPTMP2[0] == FExtension.store.get("SL_langDst_wpt")) {
				FExtension.store.set("SL_langDst_name_wpt",SL_TMPTMP2[1]);
			}
		}
*/		


		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.onMessage
			);

		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.ClearMessage
			);

		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.Status
			);

		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.onMessage
		);



	        if(FExtension.store.get("SL_GVoices")=="1") ImTranslatorBG.ALLvoices=G_TTS;
	        else ImTranslatorBG.ALLvoices=SL_TTS;


	},


	NewTAB: function(url) {
	 FExtension.browser.openNewTab(url);
	},

	LOC_TABLE: function(){
          var loc = chrome.i18n.getUILanguage();

          var layers="en,zh,zt,cs,nl,tl,fr,de,el,hi,it,ja,ko,pl,pt,ro,ru,sr,es,sv,tr,uk,vi,bg,sk";
          if(FExtension.store.get("SL_LOCALIZATION")=="none" || FExtension.store.get("SL_LOCALIZATION")=="" || FExtension.store.get("SL_LOCALIZATION")==null){
             if(layers.indexOf(loc)==-1){
	          var tmp = loc.split("-");
        	  if(tmp.length>=2) loc = tmp[0];
	          if(loc=="fil") loc="tl";
	          if(loc=="en-US") loc="en";
	          if(loc=="en-AU") loc="en";
	          if(loc=="en-GB") loc="en";
	          if(loc=="pt-BR") loc="pt";
	          if(loc=="pt-PT") loc="pt";
	          if(loc=="es-419") loc="es";
	          if(loc=="zh-CN") loc="zh";
	          if(loc=="zh-TW") loc="zh";
	          if(layers.indexOf(loc)!=-1) FExtension.store.set("SL_LOCALIZATION",loc);
		  else FExtension.store.set("SL_LOCALIZATION","en");
	      } else FExtension.store.set("SL_LOCALIZATION",loc);
           } else {
                loc=FExtension.store.get("SL_LOCALIZATION");
	          var tmp = loc.split("-");
        	  if(tmp.length>=2) loc = tmp[0];
	          if(loc=="fil") loc="tl";
	          if(loc=="en-US") loc="en";
	          if(loc=="en-AU") loc="en";
	          if(loc=="en-GB") loc="en";
	          if(loc=="pt-BR") loc="pt";
	          if(loc=="pt-PT") loc="pt";
	          if(loc=="es-419") loc="es";
	          if(loc=="zh-CN") loc="zh";
	          if(loc=="zh-TW") loc="zh";
	          if(loc=="zt") loc="zt";
		if(layers.indexOf(loc)==-1) FExtension.store.set("SL_LOCALIZATION","en");
		else FExtension.store.set("SL_LOCALIZATION",loc);
	   }
	},


	Lexicon: function(LongLngName) {
	 LongLngName=LongLngName.replace("ька","ьку");
	 return LongLngName;
	},

	open_trans_www: function(state,lang) {
	 var EXT="";

	 if(state==1) EXT="&anno=2";
	 var URL_host=content.document.location.href;
	 var LEGO=URL_host.split("&u=");
	 if(LEGO.length>1){
	  var newLANG1=LEGO[0].split("&tl=");
	  var FINALline=newLANG1[0]+"&tl="+lang;
	  URL_host=FINALline+"&u="+LEGO[1];
	 }
	 var GOhead=0;

//	 if(URL_host.indexOf("https://")>-1) {alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert1'));GOhead=1;}
	 if(URL_host.indexOf("file:///")>-1) {alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert2'));GOhead=1;}
	 FExtension.store.set("SL_langDst_wpt", lang);

	 if(GOhead==0) ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD();

	},
	
	
	setDefault: function(){
	        FExtension.store.setDefault();
	},



	
	getUPDATES: function(){
	        FExtension.store.getUPDATES();
	},

	ClearMessage: function(request, sender, sendResponse) {
	    if (request.greeting == "Clear")  ImTranslatorBG.SL_callbackRequestToAdd_Clear();
	    else{
		if(PLATFORM=="Chrome")  ImTranslatorBG.SL_callbackRequestToRemove_Clear();
	    }
	},


	onMessage: function(request, sender, sendResponse) {

		FExtension.browser.executeForSelectedTab(null, function(tab) { 
			if(tab){				
				FExtension.store.set("THE_URL", tab.url);				
			}
		});




//VK REQUEST 
                ImTranslatorBG.BUBBLE_RESP= ImTranslatorBG.BUBBLE_RESP.replace(/~/g,"^");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
		sendResponse({farewell: FExtension.store.get("SL_HKset")+"~"+FExtension.store.get("SL_HKset_inv")+"~"+FExtension.store.get("SL_langSrc_bbl")+"|"+FExtension.store.get("SL_langDst_bbl")+"|"+FExtension.store.get("SL_Fontsize_bbl")+"|"+FExtension.store.get("SL_show_button_bbl")+"|"+FExtension.store.get("SL_pin_bbl")+"|"+FExtension.store.get("SL_translation_mos_bbl")+"|"+FExtension.store.get("SL_MOSHK_bbl")+"|"+FExtension.store.get("SL_no_detect_bbl")+"|BLANK|"+FExtension.store.get("SL_ENABLE")+"|"+FExtension.store.get("SL_TH_2")+"|"+FExtension.store.get("SL_TH_4")+"|BLANK|"+FExtension.store.get("SL_no_detect_it")+"|"+FExtension.store.get("SL_dict_bbl")+"|"+FExtension.store.get("SL_MOSHK_bbl2")+"|BLANK~"+FExtension.store.get("SL_FK_box1")+"|"+FExtension.store.get("SL_inlinerFK1")+"|BLANK~"+FExtension.store.get("SL_FK_box2")+"|"+FExtension.store.get("SL_inlinerFK2")+"|BLANK|"+FExtension.store.get("SL_DBL_bbl")+"~"+FExtension.store.get("SL_HK_gt1")+"~"+FExtension.store.get("SL_HK_gt2")+"~"+FExtension.store.get("SL_HK_it1")+"~"+FExtension.store.get("SL_HK_it2")+"~"+FExtension.store.get("SL_HK_bb1")+"~"+FExtension.store.get("SL_other_bbl")+"~"+FExtension.store.get("SL_Timing")+"~"+FExtension.store.get("SL_Fontsize_bbl")+"~"+FExtension.store.get("SL_BBL_TS")+"~"+FExtension.store.get("SL_HK_wpt1")+"~"+FExtension.store.get("SL_HK_wpt2")+"~"+FExtension.store.get("SL_HK_opt")+"~"+FExtension.store.get("SL_HK_wptbox1")+"~"+FExtension.store.get("SL_HK_wptbox2")+"~"+FExtension.store.get("SL_HK_optbox")+"~"+FExtension.store.get("SL_langDst_wpt")+"~"+FExtension.store.get("SL_langSrc_wpt")+"~"+FExtension.store.get("SL_LOCALIZATION")+"~BLANK~"+FExtension.store.get("SL_Flag")+"~"+FExtension.store.get("SL_GVoices")+"~"+FExtension.store.get("SL_SLVoices")+"~"+ImTranslatorBG.ALLvoices+"~"+FExtension.store.get("SL_SaveText_box_bbl")+"~"+FExtension.store.get("SL_LNG_LIST")+"~"+FExtension.store.get("SL_DOM")+"~"+FExtension.store.get("SL_GWPTHist")+"~BLANK~BLANK~"+FExtension.store.get("SL_GWPT_Show_Hide")+"~"+FExtension.store.get("SL_GWPT_Show_Hide_tmp")+"~"+FExtension.store.get("SL_wptDHist")+"~"+FExtension.store.get("SL_wptLHist")+"~"+FExtension.store.get("SL_wptGlobAuto")+"~"+FExtension.store.get("SL_wptGlobTb")+"~"+FExtension.store.get("SL_wptGlobTip")+"~"+FExtension.store.get("SL_wptGlobLang")+"~"+FExtension.store.get("SL_ALL_PROVIDERS_BBL")+"~"+FExtension.store.get("SL_DICT_PRESENT")+"~"+FExtension.store.get("SL_HK_bb2")+"~"+FExtension.store.get("SL_HK_bb2box")+"~"+FExtension.store.get("SL_BTN_X")+"~"+FExtension.store.get("SL_BTN_Y")+"~"+FExtension.store.get("SL_BBL_X")+"~"+FExtension.store.get("SL_BBL_Y")+"~"+FExtension.store.get("FORSEbubble")+"~"+ImTranslatorBG.BUBBLE_DET+"~"+ImTranslatorBG.BUBBLE_RESP+"~"+FExtension.store.get("TTSvolume")+"~"+FExtension.store.get("BL_D_PROV")+"~"+FExtension.store.get("BL_T_PROV")+"~"+FExtension.store.get("INLINEflip")+"~"+FExtension.store.get("SL_ALL_PROVIDERS_IT")+"~"+FExtension.store.get("THEMEmode")+"~"+FExtension.store.get("SL_Delay")+"~"+FExtension.store.get("SL_langSrc_bbl2")+"~"+FExtension.store.get("SL_langDst_bbl2")+"~"+FExtension.store.get("SL_show_button_bbl2")+"~"+FExtension.store.get("SL_Fontsize_bbl2")+"~BLANK~"+FExtension.store.get("SL_bbl_loc_langs")+"~"+FExtension.store.get("SL_change_lang_HKbox_it")+"~"+FExtension.store.get("SL_change_lang_HK_it")+"~"+FExtension.store.get("SL_langDst_it2")+"~"+FExtension.store.get("SL_pin_bbl2")+"~"+ImTranslatorBG.audioStatus+"~"+FExtension.store.get("MoveBBLX")+"~"+FExtension.store.get("MoveBBLY")+"~"+FExtension.store.get("SL_HK_SObox_wpt")+"~"+FExtension.store.get("SL_HK_SO_wpt")+"~"+FExtension.store.get("SL_HK_CTbox_wpt")+"~"+FExtension.store.get("SL_HK_CT_wpt")+"~"+FExtension.store.get("SL_WPT_TEMP_LANG")+"~"+FExtension.store.get("SL_FAV_START")+"~"+FExtension.store.get("SL_FAV_MAX")+"~"+FExtension.store.get("SL_FAV_LANGS_BBL")+"~"+FExtension.store.get("SL_FAV_LANGS_IT")+"~"+FExtension.store.get("SL_FAV_LANGS_WPT")+"~"+FExtension.store.get("WPTflip")+"~"+FExtension.store.get("SL_UNTRUST") });


		var RESP = request.greeting;

		setTimeout(function(){
               		if(ImTranslatorBG.TRIGGER==1){
				ImTranslatorBG.TRIGGER=0;
			}
		},1000);

		if(request.from){
			var contentTabId;
			if (request.from == "content_detect") {  
			    var url = request.url;
			    var cgi = request.cgi;
                            ImTranslatorBG.SL_GOOGLE_DETECT(url,cgi,100);
			    contentTabId = sender.tab.id;
			    var cnt=0;
			    setTimeout(function(){
				    ImTranslatorBG.SLIDNEW_GDETECT = setInterval(function(){
					if(ImTranslatorBG.NEW_GDETECT!="" || cnt>250) {
						clearInterval(ImTranslatorBG.SLIDNEW_GDETECT);
						ImTranslatorBG.SLIDNEW_GDETECT="";
						var newGDRESULT = ImTranslatorBG.NEW_GDETECT;
							chrome.tabs.sendMessage(contentTabId, {
						      	from: "background",
				      			detected: newGDRESULT
						});
						ImTranslatorBG.NEW_GDETECT="";
                                	}else cnt++;
			    	},2);  
	        	    },100);  
			}

			if (request.from == "content_translate") {  
			    var url = request.url;
			    var cgi = request.cgi;
			    var theQ = request.theQ;

                            ImTranslatorBG.SL_NEW_GTRANSLATE(url,cgi,theQ);
			    contentTabId = sender.tab.id;
			    var cnt=0;
			    setTimeout(function(){
				    ImTranslatorBG.SLIDNEW_GTRANSLATE = setInterval(function(){
					if(ImTranslatorBG.NEW_GTRANSLATE!="" || cnt>250) {
						clearInterval(ImTranslatorBG.SLIDNEW_GTRANSLATE);
						ImTranslatorBG.SLIDNEW_GTRANSLATE="";
						var newGTRESULT = ImTranslatorBG.NEW_GTRANSLATE;
							chrome.tabs.sendMessage(contentTabId, {
						      	from: "background",
				      			translation: newGTRESULT
						});
						ImTranslatorBG.NEW_GTRANSLATE="";
                                	}else cnt++;
			    	},2);  
	        	    },100);  
			}

		}


		if (RESP != "" && RESP!="1" && RESP!=FExtension.store.getLocalStorage().length){
			RESP=(RESP + "").replace("{empty}",FExtension.store.get("SL_langSrc_wpt")+"|"+FExtension.store.get("SL_langDst_wpt"));
	                if(RESP.length && RESP.length>10 && RESP.indexOf("SAVE_D:>")==-1 && RESP.indexOf("SAVE_L:>")==-1 ) {

				if(request.greeting && request.greeting.indexOf("[i]") !=-1) {
				        var SAVE_I = request.greeting.replace("[i]","");
					if(ImTranslatorBG.TMP_HIST_SEG != SAVE_I){
		        	                if(RESP.indexOf('~~5^^') && FExtension.store.get("SL_TH_4")==1) FExtension.store.set("SL_History", SAVE_I + FExtension.store.get("SL_History"));
						ImTranslatorBG.TMP_HIST_SEG = SAVE_I;
					}
				}

				if(request.greeting && request.greeting.indexOf("[wp]") !=-1) {
				        var SAVE_WP = request.greeting.replace("[wp]","");
	        	                if(RESP.indexOf('~~4^^') && FExtension.store.get("SL_TH_3")==1) FExtension.store.set("SL_History", SAVE_WP + FExtension.store.get("SL_History"));
				}

				if(request.greeting && request.greeting.indexOf("[b]") !=-1) {
				        var SAVE_B = request.greeting.replace("[b]","");
	        	                if(RESP.indexOf('~~2^^') && FExtension.store.get("SL_TH_2")==1) FExtension.store.set("SL_History", SAVE_B + FExtension.store.get("SL_History"));
				}

			}
			if(request.greeting && request.greeting.indexOf("SAVE_D:>") !=-1) {
			        var SAVE_D = request.greeting.replace("SAVE_D:>","");

	                        var D_HIST = FExtension.store.get("SL_wptDHist");
                                if(D_HIST!="") {
	                                var D1 = D_HIST.split(":");
	                                var CNT1 = 0;
        	                        for(var I=0; I<D1.length; I++){
						var D2 = D1[I].split(",");
						if(SAVE_D.indexOf(D2[0])>-1){
							D_HIST = D_HIST.replace(D1[I],SAVE_D);
							FExtension.store.set("SL_GWPT_Show_Hide",D2[4]);
							FExtension.store.set("SL_GWPT_Show_Hide_tmp",D2[4]);
							CNT1++;
						}
					}
					if(CNT1==0) D_HIST = D_HIST +":"+ SAVE_D;
				} else D_HIST = SAVE_D;
			        FExtension.store.set("SL_wptDHist", D_HIST);

			}


			if(request.greeting && request.greeting.indexOf("TTS_BBL_on:>") !=-1) {
			        var tmp = request.greeting.replace("TTS_BBL_on:>","").split("||");
				var BTN = tmp[0];
				var baseUrl = tmp[1];
				var status = ImTranslatorBG.STOP_PLAY_HANDLER(BTN);
				if(status == 0){
			        return new Promise((resolve, reject) => {
			            const http = new XMLHttpRequest
			            http.onload = e => {
					const reader = new FileReader();
			                reader.onloadend = function() {
					     ImTranslatorBG.audioElement = document.createElement('audio');
					     ImTranslatorBG.audioElement.setAttribute('src', reader.result);
					     ImTranslatorBG.audioElement.setAttribute('preload', 'auto');
					     ImTranslatorBG.audioElement.setAttribute('autoplay', '');
					     document.body.appendChild (ImTranslatorBG.audioElement);
					     ImTranslatorBG.audioStatus="on";
			                    resolve(reader.result)
			                }
			                reader.readAsDataURL(e.target.response)
			            }
    
			            http.onerror = e => {
					ImTranslatorBG.audioStatus="off";
			            }
    
			            http.open("GET", baseUrl)
			            http.responseType = "blob"
			            http.send()
			        })
				}
			} 



			if(request.greeting && request.greeting.indexOf("TTS_BBL_off:>") !=-1) {
				try {
				       document.body.removeChild (ImTranslatorBG.audioElement);
					ImTranslatorBG.BTNstatus=2;
				} catch (ex){}	
			}



			if(request.greeting && request.greeting.indexOf("SAVE_L:>") !=-1) {
			        var SAVE_L = request.greeting.replace("SAVE_L:>","");

	                        var L_HIST = FExtension.store.get("SL_wptLHist");
                                if(L_HIST!="") {
	                                var L1 = L_HIST.split(":");
	                                var CNT2 = 0;
        	                        for(var I=0; I<L1.length; I++){
						var L2 = L1[I].split(",");
						if(SAVE_L.indexOf(L2[0])>-1){
							L_HIST = L_HIST.replace(L1[I],SAVE_L);
							CNT2++;
						}
					}
					if(CNT2==0) L_HIST = L_HIST +":"+ SAVE_L;
				} else L_HIST = SAVE_L;
			        FExtension.store.set("SL_wptLHist", L_HIST);
			}


			if(request.greeting && request.greeting.indexOf("SAVE_COORD:>") !=-1) {
			        var COORDS = request.greeting.replace("SAVE_COORD:>","");
				var SAVE_COORDS = COORDS.split(",");
			        FExtension.store.set("SL_BBL_X", SAVE_COORDS[0]);
			        FExtension.store.set("SL_BBL_Y", SAVE_COORDS[1]);
			}

			if(request.greeting && request.greeting.indexOf("SAVE_DATA:>") !=-1) {
			        var TMPDATA = request.greeting.replace("SAVE_DATA:>","");
				var SAVE_TMPDATA = TMPDATA.split(":");
			        FExtension.store.set(SAVE_TMPDATA[0], SAVE_TMPDATA[1]);
			}

			if(request.greeting && request.greeting.indexOf("RCL:>") !=-1) {
//				ImTranslatorBG.RCL();
			}

			if(request.greeting && request.greeting.indexOf("CM_BBL:>") !=-1) {
			        var TMPDATA = request.greeting.replace("CM_BBL:>","");
                                ImTranslatorBG.SL_BBL_Reset(TMPDATA);
			}

			if(request.greeting && request.greeting.indexOf("IT:>") !=-1) {
			        var TMPDATA = request.greeting.replace("IT:>","");
				if(ImTranslatorBG.TMP_IT_SEG != TMPDATA){
					ImTranslatorBG.SL_INLINE(TMPDATA);
					ImTranslatorBG.TMP_IT_SEG = TMPDATA;
				}
			}

			if(request.greeting && request.greeting.indexOf("ITY:>") !=-1) {
			        var TMPDATA = request.greeting.replace("ITY:>","");
				if(ImTranslatorBG.TMP_IT_SEG != TMPDATA){
					ImTranslatorBG.SL_Y_INLINE(TMPDATA);
					ImTranslatorBG.TMP_IT_SEG = TMPDATA;
				}
			}




			if(request.greeting && request.greeting.indexOf("wpt1:>") !=-1) {
	        		var str = request.greeting.replace("wpt1:>","");
			        str = str.split("*");
				ImTranslatorBG.SL_WPT(chrome.info, chrome.tabs, str[0], str[1]);
			}
			if(request.greeting && request.greeting.indexOf("wpt2:>") !=-1) {
	        		var str = request.greeting.replace("wpt2:>","");
			        str = str.split("*");
				ImTranslatorBG.SL_WPT_MO(chrome.info, chrome.tabs, str[0], str[1]);
			}

			if(request.greeting && request.greeting.indexOf("wptCM:>") !=-1) {
	        		var str = request.greeting.replace("wptCM:>","");
	        		if(str){
					FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID4, FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(str)),ImTranslatorBG.ContMenuClick);
				}
			}




		 if(ImTranslatorBG.SLIDL==""){

			if(request.greeting && request.greeting.indexOf("DET_GOOGLE:>") !=-1) {
			        var TR_DATA_all = request.greeting.replace("DET_GOOGLE:>","");
				var TR_DATA = TR_DATA_all.split(",");
				ImTranslatorBG.BUBBLE_DET="";
				if(ImTranslatorBG.TRIGGER==0){
					ImTranslatorBG.TRIGGER=1;
					ImTranslatorBG.SL_GOOGLE_WPT_DETECT (TR_DATA[0],TR_DATA[1]);
				        var cnt=0;
					var MAXtr=3000;
					if(ImTranslatorBG.INTERNAL_ONLY==1) MAXtr=2;
					setTimeout(function(){
					    ImTranslatorBG.SLIDL = setInterval(function(){
						if(ImTranslatorBG.BUBBLE_DET!="" || cnt>MAXtr) {
							clearInterval(ImTranslatorBG.SLIDL);
							ImTranslatorBG.SLIDL="";
							FExtension.browser.executeForSelectedTab(null, function(tab) { 
								if(tab){
									ImTranslatorBG.SL_PopUpBubbleActivateResult(tab.info, tab);
								}
							});                                        
						}else{
							if (cnt==(MAXtr-1))ImTranslatorBG.BUBBLE_DET="<#>";
							cnt++;
						} 
					    },1);  
	 		        	},5);  
				}
			}


			if(request.greeting && request.greeting.indexOf("TR_YANDEX:>") !=-1) {
			        var TR_DATA_all = request.greeting.replace("TR_YANDEX:>","");
				var TR_DATA = TR_DATA_all.split(",");
				ImTranslatorBG.BUBBLE_RESP="";
				if(ImTranslatorBG.TRIGGER==0){
					ImTranslatorBG.TRIGGER=1;
					ImTranslatorBG.SL_YANDEX (TR_DATA[0],TR_DATA[1],"BBL");
				        var cnt=0;
					setTimeout(function(){
					    ImTranslatorBG.SLIDL = setInterval(function(){
						if(ImTranslatorBG.BUBBLE_RESP!="" || cnt>50) {
							clearInterval(ImTranslatorBG.SLIDL);
							ImTranslatorBG.SLIDL="";
							FExtension.browser.executeForSelectedTab(null, function(tab) { 
								if(tab){
									ImTranslatorBG.SL_PopUpBubbleActivateResult(tab.info, tab);
								}
							});                                        
						}else cnt++;
					    },50);  
	 	        		},50);  
				}
			}


			if(request.greeting && request.greeting.indexOf("TR_GOOGLE:>") !=-1) {
			        var TR_DATA_all = request.greeting.replace("TR_GOOGLE:>","");
				var TR_DATA = TR_DATA_all.split(",");
				ImTranslatorBG.BUBBLE_RESP="";
				if(ImTranslatorBG.TRIGGER==0){
					ImTranslatorBG.TRIGGER=1;
					ImTranslatorBG.SL_GOOGLE (TR_DATA[0],TR_DATA[1],TR_DATA[2]);
				        var cnt=0;
					setTimeout(function(){
					    ImTranslatorBG.SLIDL = setInterval(function(){
					        var MaxTries = 3000;
						if(ImTranslatorBG.INTERNAL_ONLY==1) MaxTries=2;
						if(ImTranslatorBG.BUBBLE_RESP!="" || cnt>MaxTries) {
							clearInterval(ImTranslatorBG.SLIDL);
							ImTranslatorBG.SLIDL="";
							FExtension.browser.executeForSelectedTab(null, function(tab) { 
								if(tab){
									ImTranslatorBG.SL_PopUpBubbleActivateResult(tab.info, tab);
								}
							});
						}else{
							if (cnt==(MaxTries-1))ImTranslatorBG.BUBBLE_RESP="<#>";							
							cnt++;
						}
					    },1);  
	 	        		},5);  
				}
			}

			if(request.greeting && request.greeting.indexOf("TR_STOP:>") !=-1) {
				//by VK - RESET BUBLE RESULT from CONTENT PAGE
				ImTranslatorBG.BUBBLE_RESP="";
			}

			if(request.greeting && request.greeting.indexOf("PUSH:>") !=-1) {
				var text = request.greeting.replace("PUSH:>","");
                                ImTranslatorBG.PUSH_TXT=text;
				ImTranslatorBG.ContMenuClick();
			}

			if(request.greeting && request.greeting.indexOf("CNTR:>") !=-1) {
				var params = request.greeting.replace("CNTR:>","");
				var CNTR = params.split(",");
                                ImTranslatorBG.DO_CNTR(CNTR[0],CNTR[1],CNTR[2]);
			}

			if(request.greeting && request.greeting.indexOf("CNTRP:>") !=-1) {
				var params = request.greeting.replace("CNTRP:>","");
				var CNTRP = params.split(",");
                                ImTranslatorBG.DO_CNTR_P(CNTRP[0],CNTRP[1],CNTRP[2]);
			}

		   }
		}
                if(FExtension.store.get("SL_TS_LOC")==1){
			FExtension.store.set("SL_TS_LOC",0);
		}

		try {
			if(request.greeting && request.greeting.indexOf("SES:>") !=-1) {
		        	var SES_DATA_all = request.greeting.replace("SES:>","");
				var SES_DATA = SES_DATA_all.split(",");
			        FExtension.store.set("SL_langSrc_bbl2", SES_DATA[0]);
			        FExtension.store.set("SL_langDst_bbl2", SES_DATA[1]);
		        	var FNT = SES_DATA[2];
				if(FNT != undefined && FNT != "")	FExtension.store.set("SL_Fontsize_bbl2", FNT);
			        FExtension.store.set("SL_pin_bbl2", SES_DATA[3]);
			        FExtension.store.set("SL_bbl_loc_langs", SES_DATA[4]);
		        	FExtension.store.set("SL_show_button_bbl2", SES_DATA[5]);
			}

			if(request.greeting && request.greeting.indexOf("SES_IT:>") !=-1) {
			        var SES_DATA_all = request.greeting.replace("SES_IT:>","");
				var SES_DATA = SES_DATA_all.split(",");
			        FExtension.store.set("SL_langDst_it2", SES_DATA[0]);
				FExtension.store.set("SL_langDst_name_it", ImTranslatorBG.GetLongLanguageName(SES_DATA[0]));
				ImTranslatorBG.SL_callbackRequest4LOC();
			}

			if(request.greeting && request.greeting.indexOf("WPT_CURL:>") !=-1) {
				var params = request.greeting.replace("WPT_CURL:>","");
				FExtension.store.set("SL_WPT_TEMP_LANG", params);
			}

			if(request.greeting && request.greeting.indexOf("FAV_BBL:>") !=-1) {
			        var FAV_all = request.greeting.replace("FAV_BBL:>","");
			        FExtension.store.set("SL_FAV_LANGS_BBL", FAV_all);
			}

			if(request.greeting && request.greeting.indexOf("FAV_IT:>") !=-1) {
			        var FAV_all = request.greeting.replace("FAV_IT:>","");
			        FExtension.store.set("SL_FAV_LANGS_IT", FAV_all);
			}

			if(request.greeting && request.greeting.indexOf("FAV_WPT:>") !=-1) {
			        var FAV_all = request.greeting.replace("FAV_WPT:>","");
			        FExtension.store.set("SL_FAV_LANGS_WPT", FAV_all);
			}

			if(request.greeting && request.greeting.indexOf("RCM:>") !=-1) {
				ImTranslatorBG.PREPARE_RCM_CONTENT();
			}

			if(request.greeting && request.greeting.indexOf("OPEN_O:>") !=-1) {
			        var OPEN_O = request.greeting.replace("OPEN_O:>","");
				ImTranslatorBG.OPEN_OPTIONS(OPEN_O);
			}

		} catch (ex){}	


//VK REQUEST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	},


	Status: function(request, sender, sendResponse) {
	    if (request.method == "getStatus")	      sendResponse({status: FExtension.store.set("SL_Flag","TRUE")});
	},




        SL_callbackRequestToChangeRightClickMenu: function(st){
                if(st == 0){
			if(FExtension.store.get("SL_CM3")==1){
				FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3);
			}
                }else{
			if(FExtension.store.get("SL_CM1")==1){
	                        FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID1);
				ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
			}
			if(FExtension.store.get("SL_CM2")==1){
				FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID2);
				ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it2"))),ImTranslator_inliner.inlinerContextOnClick, true);
			}
			if(FExtension.store.get("SL_CM3")==1){
	                        FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3);
				ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl2"))),ImTranslatorBG.SL_PopUpBubble, true);
			}

			if(FExtension.store.get("SL_CM7")==1){
	                        FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
			}

			if(FExtension.store.get("SL_CM8")==1){
//				FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
				ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
   			}


		}

	},

        SL_callbackRequestToAdd_Clear: function(){

		if(FExtension.store.get("SL_hide_translation")=="true"){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
			ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
		}
	},

	SL_callbackRequestToRemove_Clear: function(){
	},

	SL_callbackRequest: function(){		
		if(FExtension.store.get("SL_CM4")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID4);
			ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
		}
		if(FExtension.store.get("SL_CM5")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID5);
			ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
		}
		if(FExtension.store.get("SL_CM2")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID2);
			ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it2"))),ImTranslator_inliner.inlinerContextOnClick, true);
		}

	},

	SL_callbackRequest2: function(){
		if(FExtension.store.get("SL_CM1")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID1);
			ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
		}
		if(FExtension.store.get("SL_CM3")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3);
			ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
		}

	},


	SL_callbackRequest4: function(){
		if(FExtension.store.get("SL_hide_translation")!="true")	FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
		else{
			if(FExtension.store.get("SL_CM6")==1){
				FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID6);
				ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
			}
		}
	},

	SL_PopUpBubbleActivateResult: function(info, tab){
		 clearInterval(ImTranslatorBG.SLIDL);
		 chrome.tabs.executeScript(tab.id, {
		    code: "ImTranslatorDataEvent.mousedown();"
		 });
	},


	SL_PopUpBubble: function(info, tab){
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
		if(ST==1){
                      ImTranslatorBG.ContMenuClick(info,tab);
		}else{
			 chrome.tabs.executeScript(tab.id, {
			    code: 'TranslatorIM.SL_BUBBLE_FROM_CM(window.e, 0);'
			 });
		}		
	},

	SL_InlineActivateResult: function(info, tab){
		 chrome.tabs.executeScript(tab.id, {
		    code: "TranslatorIM.InlineDataTransmitter('"+escape(ImTranslatorBG.INLINE_RESP)+"');"
		 });
	},

	SL_callbackRequest4LOC: function(){
		if(FExtension.store.get("SL_CM1")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID1);
			ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
		}

		if(FExtension.store.get("SL_CM4")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID4);
			ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
		}
		if(FExtension.store.get("SL_CM5")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID5);
			ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
		}
		if(FExtension.store.get("SL_CM3")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3); //4
			ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
		}
		if(FExtension.store.get("SL_CM2")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID2);
			ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it2"))),ImTranslator_inliner.inlinerContextOnClick, true);
		}
		if(FExtension.store.get("SL_CM6")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID6);
			ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
		}
		if(FExtension.store.get("SL_CM7")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
			ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
		}
		if(FExtension.store.get("SL_CM8")==1){
//			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
			ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
		}

	},


	GetLongLanguageName: function(code){
		var temp=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages').split(',');
		var lng="";
		var output="Spanish";
		for(var i=0; i<temp.length; i++){
			lng=temp[i].split(":");
		 	if(lng[0]==code) {
				output=lng[1]; 
				break;
			}
		}
		return (output);
       	},

	ContMenuClick: function(info, tab) {
	    if(ImTranslatorBG.myWindow != "") {
	        ImTranslatorBG.myWindow.close();
	    }

		var HEIGHT = FExtension.store.get("WINDOW_HEIGHT");
		var WIDTH = FExtension.store.get("WINDOW_WIDTH");


		var TOP = FExtension.store.get("WINDOW_TOP");
		if( TOP == null ) TOP = (( screen.height - HEIGHT ) / 2);
		var LEFT = FExtension.store.get("WINDOW_LEFT");
		if( LEFT == null ) LEFT = (( screen.width - WIDTH ) / 2);

	        var s="undefined";

		if(chrome.tabs){
	      		chrome.tabs.executeScript( {
			  code: "window.getSelection().toString();"
		      	}, function(selection) {
	        	  	try{
				    s = selection[0].trim();
				} catch(err){}		 
			});
	     	}

		if(ImTranslatorBG.PUSH_TXT==""){
	        	if(typeof info != "undefined"){
		            s=String(info.selectionText);
		//	    s=decodeURIComponent(encodeURIComponent(s).replace(/%20%20/g,"\n\n"))
	        	} else {
	        	    s=String(FExtension.browser.getSelectionText());
		        }
		} else s =ImTranslatorBG.PUSH_TXT;
		
		s = decodeURIComponent(encodeURIComponent(s).replace(/%20%20%20/ig,"%0D%0D"));
		s = s.replace(/Â/ig,"");

		var BACK_VIEW=FExtension.store.get("SL_BACK_VIEW");


		WIDTH=Math.ceil(WIDTH*1+10);


		if(s!='undefined'){
		    setTimeout(function(){
			    window.blur();
			    s=s.replace(/(^[\s]+|[\s]+$)/g, '');
			    var theQ=s.split(" ").length;

			    if(s.match(/[-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
			    if(FExtension.store.get("SL_dict")=="false") theQ=100;
			    s=encodeURIComponent(s);
			    if(s.indexOf("%0A")!=-1) theQ=100;
	 		    if(s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;
	 		    if(ImTranslatorBG.DIC_TRIGGER != 0) theQ = 100;
			    if(s!=""){
		 		    if(FExtension.store.get("SL_SaveText_box_gt")==1) FExtension.store.set("SL_SavedText_gt",s);
			    } else theQ=100;

			    s=decodeURIComponent(s);
			    if(theQ==1){
				ImTranslatorBG.myWindow = FExtension.browser.openPopUpWithAttributes(TOP, LEFT, HEIGHT, WIDTH,  "../../html/popup/dictionary.html", s);
			    } else {
				if(BACK_VIEW==2) ImTranslatorBG.myWindow = FExtension.browser.openPopUpWithAttributes(TOP, LEFT, HEIGHT, WIDTH,  "../../html/popup/translation-back.html", s);
				else ImTranslatorBG.myWindow = FExtension.browser.openPopUpWithAttributes(TOP, LEFT, HEIGHT, WIDTH,  "../../html/popup/translator.html", s);

							
			    }
			    if(ImTranslatorBG.myWindow)ImTranslatorBG.myWindow.focus(); 
	            },500);
                    ImTranslatorBG.PUSH_TXT="";
		 }else{
		    setTimeout(function(){
		   	window.blur();
		   	if(!ImTranslatorBG.myWindow){
	                	setTimeout(function(){
					if(BACK_VIEW==2) ImTranslatorBG.myWindow = FExtension.browser.openPopUpWithAttributes(TOP, LEFT, HEIGHT, WIDTH,  "../../html/popup/translation-back.html", s);
					else ImTranslatorBG.myWindow = FExtension.browser.openPopUpWithAttributes(TOP, LEFT, HEIGHT, WIDTH,  "../../html/popup/translator.html", s);
        	        	},500);

		   	}else {
				if(ImTranslatorBG.myWindow.name==""){
		                    setTimeout(function(){
					if(BACK_VIEW==2) ImTranslatorBG.myWindow = FExtension.browser.openPopUpWithAttributes(TOP, LEFT, HEIGHT, WIDTH,  "../../html/popup/translation-back.html", s);
					else ImTranslatorBG.myWindow = FExtension.browser.openPopUpWithAttributes(TOP, LEFT, HEIGHT, WIDTH,  "../../html/popup/translator.html", s);
		                    },500);

				}
		   	}	
		  	if(ImTranslatorBG.myWindow)ImTranslatorBG.myWindow.focus(); 
	            },500);
                    ImTranslatorBG.PUSH_TXT="";
		 }
	},


	SL_WEB_PAGE_TRANSLATION_PRELOAD: function(info, tab){
		 chrome.tabs.executeScript(tab.id, {
		    code: 'TranslatorIM.SL_WPT(0);'
		 });		
	},

	SL_WEB_PAGE_TRANSLATION_MO_PRELOAD: function(info, tab){
		 chrome.tabs.executeScript(tab.id, {
		    code: 'TranslatorIM.SL_WPT(1);'
		 });		
	},

	
	SL_WPT: function (info, tab, url, sl) {

		var URL_host= FExtension.browser.getCurrentUrl(tab);
		if (url!="") URL_host=url;
		var langS=FExtension.store.get("SL_langSrc_wpt");

		langS=sl;
		var langD=FExtension.store.get("SL_langDst_wpt");

		//FLIP
		if(langS == langD && FExtension.store.get("SL_langSrc_wpt")!="auto") langD = FExtension.store.get("SL_langSrc_wpt");

		var LEGO=URL_host.split("&u=");
		if(LEGO.length>1){
			var newLANG1=LEGO[0].split("&tl=");
			var FINALline=newLANG1[0]+"&tl="+langD;
			URL_host=FINALline+"&u="+LEGO[1];
		}
		var GOhead=0;
/*
		if(URL_host.indexOf("https://")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert1'));GOhead=1;
		}
*/
		if(URL_host.indexOf("file:///")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert2'));GOhead=1;
		}

		if(GOhead==0){
			var dom = FExtension.store.get("SL_DOM");
			if(dom == "auto") dom = "com";
			ImTranslatorBG.THE_URL = "https://translate.google."+dom+"/translate?sl="+langS+"&tl="+langD+"&u="+URL_host;
			if (FExtension.store.get("SL_TH_3")==1){
				var SLnow = new Date();
				SLnow=SLnow.toString();
	            		var TMPtime=SLnow.split(" ");
	            		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
	            		var tp=3;
				ImTranslatorBG.THE_URL = decodeURIComponent(ImTranslatorBG.THE_URL);
				URL_host = decodeURIComponent(URL_host);
	            		FExtension.store.set("SL_History", URL_host + "~~" + ImTranslatorBG.THE_URL + "~~"+langS+"|"+langD+"~~"+ ImTranslatorBG.THE_URL+"~~"+CurDT+"~~"+tp+"^^" + FExtension.store.get("SL_History"));
			}
			FExtension.browser.openNewTab(ImTranslatorBG.THE_URL);
		}
	},

	SL_WPT_MO: function (info, tab, url, sl) {
		var URL_host= FExtension.browser.getCurrentUrl(tab);
		if (url!="") URL_host=url;
		var langS=FExtension.store.get("SL_langSrc_wpt");

		langS=sl;

		var langD=FExtension.store.get("SL_langDst_wpt");
		//FLIP
		if(langS == langD && FExtension.store.get("SL_langSrc_wpt")!="auto") langD = FExtension.store.get("SL_langSrc_wpt");

		var LEGO=URL_host.split("&u=");
		if(LEGO.length>1){
			var newLANG1=LEGO[0].split("&tl=");
			var FINALline=newLANG1[0]+"&tl="+langD;
			URL_host=FINALline+"&u="+LEGO[1];
		}
		var GOhead=0;
/*
		if(URL_host.indexOf("https://")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert1'));GOhead=1;
		}
*/
		if(URL_host.indexOf("file:///")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert2'));GOhead=1;
		}
		if(GOhead==0){
			var dom = FExtension.store.get("SL_DOM");
			if(dom == "auto") dom = "com";
			ImTranslatorBG.THE_URL = "https://translate.google."+dom+"/translate?sl="+langS+"&tl="+langD+"&u="+URL_host;
			if (FExtension.store.get("SL_TH_3")==1){
				var SLnow = new Date();
				SLnow=SLnow.toString();
	            		var TMPtime=SLnow.split(" ");
	            		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
	            		var tp=3;
				ImTranslatorBG.THE_URL = decodeURIComponent(ImTranslatorBG.THE_URL);
				URL_host = decodeURIComponent(URL_host);
	            		FExtension.store.set("SL_History", URL_host + "~~" + ImTranslatorBG.THE_URL + "~~"+langS+"|"+langD+"~~"+ ImTranslatorBG.THE_URL+"~~"+CurDT+"~~"+tp+"^^" + FExtension.store.get("SL_History"));
			}
			FExtension.browser.openNewTab(ImTranslatorBG.THE_URL);
		}
	},
	

	SL_WEB_PAGE_TRANSLATION: function(info, tab) {
		var URL_host= FExtension.browser.getCurrentUrl(tab);
		FExtension.store.set("SL_GWPTHist","");
		setTimeout(function(){
		 chrome.tabs.executeScript(tab.id, {
		    code: 'TranslatorIM.SL_WEB_PAGE_TRANSLATION_FROM_CM_AND_HK("'+FExtension.store.get("SL_wptGlobAuto")+'","reset");'
		 });
		},500);
	},


	
	SL_SET_TRANSLATION_LNG: function (info, tab){
		FExtension.browser.openNewTab(FExtension.browser.getPopUpURL("options-router.html", true));
	},


	SL_RunWelcomePage: function(){
	        if(ImTranslatorBG.ADVkey<4){
		 	//NEW PARAMS---------------------
		 	FExtension.store.loadNewParams();
		 	FExtension.browser.openNewTab("https://imtranslator.net/Translator-for-"+PLATFORM+"-Imtranslator.asp");
		}
	},

	Version: function(){
	        var manifestData = chrome.app.getDetails();
        	var version = manifestData.version;
        	return(version);
	},
/*
	SL_BGRequest: function(){

	  alert("ok");
	},
*/
	SL_WorkingSet: function(){
	     try{
		FExtension.store.save_LOC4CONTEXT();
		chrome.contextMenus.removeAll();
		var CNT=0;
		for(var i=1; i<=8; i++){
			CNT = CNT + FExtension.store.get("SL_CM"+i)*1;
		}
		if(CNT!=0){
			if(FExtension.store.get("SL_CM1")==1){
				ImTranslatorBG.the_ID0 = FExtension.browser.createContextMenus("ImTranslator",ImTranslatorBG.ContMenuClick, false);
			}

			if(FExtension.store.get("SL_CM1")==1){
				if(FExtension.store.get("SL_langDst2") != null && FExtension.store.get("SL_langDst2") != "" ){
					ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst2"))),ImTranslatorBG.ContMenuClick, true);
				} else {
					ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst2"))),ImTranslatorBG.ContMenuClick, true);
				}
			}

			if(FExtension.store.get("SL_CM2")==1){
				ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it2"))),ImTranslator_inliner.inlinerContextOnClick, true);
	    		}
			if(FExtension.store.get("SL_CM3")==1){
				ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl2"))),ImTranslatorBG.SL_PopUpBubble, true);
		    	}

			if(FExtension.store.get("SL_CM4")==1){
				ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt2"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
		    	}
			if(FExtension.store.get("SL_CM5")==1){
				ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt2"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
			}
			if(FExtension.store.get("SL_CM6")==1){
				ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
			}

			if(FExtension.store.get("SL_CM7")==1){
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, false);
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
			}

			if(FExtension.store.get("SL_CM8")==1){
				ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
			}


		}
	    } catch (ex){}	
	},


	SL_Planshet_Reset: function(){
	   try{
		FExtension.store.save_LOC4CONTEXT();
		if(FExtension.store.get("SL_CM1")==1){
			if(FExtension.store.get("SL_langDst2") != null && FExtension.store.get("SL_langDst2") != "" ){
				FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID1, "ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst2"))),ImTranslatorBG.ContMenuClick);
			} else {
				FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID1, "ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick);
			}
		}
	    } catch (ex){}	
	},


	SL_BBL_Reset: function(TMPDATA){
	   try{
		FExtension.store.save_LOC4CONTEXT();
		        if (TMPDATA){
				if(FExtension.store.get("SL_CM3")==1){
					FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID3, "Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(TMPDATA)), ImTranslatorBG.SL_PopUpBubble);
				}
			}else{
				if(FExtension.store.get("SL_CM3")==1){
					FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID3, "Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))), ImTranslatorBG.SL_PopUpBubble);
				}
			}
	    } catch (ex){}	
	},

	getHttpRequest: function() {
	    var ajaxRequest;
	    try {
        	ajaxRequest = new XMLHttpRequest();
	    } catch (e) {
        	try {
	            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        	} catch (e) {
	            try {
        	        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	            } catch (e) {
        	        return false;
	            }
        	}
	    }
	    return ajaxRequest;
	},

	SL_Y_INLINE: function(str){	 
	 var SL_langSrc=FExtension.store.get("SL_langSrc_it");
	 var TMP = str.split(":|:");
	 if(TMP.length>=7){
		 var id = TMP[0];
		 var url = TMP[1];
		 var param = TMP[2];
		 var dictionary = TMP[3];
		 var text = TMP[4];
		 var langDst = TMP[5];
		 var PR = TMP[7];
		 if(langDst=="auto") langDst=SL_langDst;

		 ImTranslatorBG.IT_DetLang="";
		 var INLINEflip = FExtension.store.get("INLINEflip");


	         if(INLINEflip==1){
	         	ImTranslatorBG.INLINE_DETECTOR (text);

				    var cnt = 0;
				    var tries = 15;
				    setTimeout(function() {
			        	var SL_INLid = setInterval(function(){
						cnt++;
						if(ImTranslatorBG.IT_DetLang!="") {
							clearInterval(SL_INLid);
							var ln = langDst;
							if(cnt>=tries) ImTranslatorBG.IT_DetLang="en";
							if(ImTranslatorBG.IT_DetLang==ln) ln = SL_langSrc;	
							ImTranslatorBG.SL_YANDEX(ln,text,"IT");
						}
						if(cnt > tries) clearInterval(SL_INLid);
			        	}, 50);
				    }, 50);
		}else ImTranslatorBG.SL_YANDEX(langDst,text,"IT"); 
	   }
	},


	SL_INLINE: function(str){	 
	 var TMP = str.split(":|:");
	 if(TMP.length>=7){
		 var id = TMP[0];
		 var url = TMP[1];
		 var param = TMP[2];
		 var dictionary = TMP[3];
		 var text = TMP[4];
		 var langDst = TMP[5];
		 ImTranslatorBG.URL = TMP[6];
		 var INLINEflip = FExtension.store.get("INLINEflip");
		 var theQ=text.split(" ").length;
		 if(text.match(/[-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
		 if (text.match(/[\u3400-\u9FBF]/) && text.length>1) theQ=100;

		 if(theQ<=1){

		    if(INLINEflip==1){
			    var SL_langSrc=FExtension.store.get("SL_langSrc_it");
			    if(SL_langSrc!="auto!!!!"){
				    ImTranslatorBG.INLINE_DETECTOR (text);
				    var cnt = 0;
				    var tries = 3000;
				    setTimeout(function() {
			        	var SL_INLid = setInterval(function(){
						cnt++;
						if(ImTranslatorBG.IT_DetLang!="") {
							clearInterval(SL_INLid);
							if(cnt>=tries) ImTranslatorBG.IT_DetLang="en";
                                                        ImTranslatorBG.INLINE_DICTIONARY(text,url,param,dictionary,langDst,INLINEflip);
						}
						if(cnt > tries) clearInterval(SL_INLid);
			        	}, 1);
				    }, 5);
			     } else ImTranslatorBG.INLINE_DICTIONARY(text,url,param,dictionary,langDst,INLINEflip);
		    } else ImTranslatorBG.INLINE_DICTIONARY(text,url,param,dictionary,langDst,INLINEflip);

		  } else {
		    if(INLINEflip==1){
			    var SL_langSrc=FExtension.store.get("SL_langSrc_it");
			    if(SL_langSrc!="auto!!!!"){
				    ImTranslatorBG.INLINE_DETECTOR (text);
				    var cnt = 0;
				    var tries = 3000;
				    setTimeout(function() {
			        	var SL_INLid = setInterval(function(){
						cnt++;

						if(ImTranslatorBG.IT_DetLang!="") {
							clearInterval(SL_INLid);
							var ln = langDst;
							if(cnt>=tries) ImTranslatorBG.IT_DetLang="en";
							if(ImTranslatorBG.IT_DetLang==ln) ln = SL_langSrc;	
							ImTranslatorBG.GOOGLE_INLINE_TR_API(text, ln, 0);
						}
						if(cnt > tries) clearInterval(SL_INLid);
			        	}, 5);
				    }, 50);
			     } else 	ImTranslatorBG.GOOGLE_INLINE_TR_API(text, langDst, 0);
		    } else ImTranslatorBG.GOOGLE_INLINE_TR_API(text, langDst, 0);
		  }
	   }
	},

	INLINE_DICTIONARY: function(text,url,param,dictionary,langDst,INLINEflip){
	            text=text.toLowerCase();
		    var SL_langSrc=FExtension.store.get("SL_langSrc_it");
		    var xhr = ImTranslatorBG.getHttpRequest();
		    var ln = langDst;
		    if(INLINEflip==1){
			    if(ImTranslatorBG.IT_DetLang==ln) ln = SL_langSrc;	
			    var  p1 = param.split("&tl=");
			    var  p2 = p1[1].split('&');
		    	    param=p1[0]+"&tl="+ln+"&"+p2[1]+"&"+p2[2]+"&"+p2[3]+"&"+p2[4]+"&"+p2[5]+"&"+p2[6]+"&"+p2[7]+"&"+p2[8];
		    }

		    url = url + "?" + param ;
		    ImTranslatorBG.INLINE_RESP="";
		    xhr.open("POST", url, true);
		    xhr.onreadystatechange = function () {
        		if (xhr.readyState == 4) {
		            var result = xhr.responseText;
			    if(dictionary=="true"){
			     if(result.indexOf('"dict":[{"')!=-1){
                                                
				 dictionary=false;


				 const obj = JSON.parse(result);
				 var line="";
				 for(var i = 0; i < obj.dict.length; i++){
					for (var j=0; j < obj.dict[i].entry.length; j++){
						line=line+obj.dict[i].entry[j].word+", ";
					} 					
				 }
				 line = line.substring(0, line.length - 2);

				 result = line
				 if(result=="") result=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
				 if(result.indexOf("CaptchaRedirect")!=-1 || result.indexOf("<p><b>403.</b>")!=-1) ImTranslatorBG.GOOGLE_INLINE_TR_API(text,ln,0);
			    	 else result = ImTranslatorBG.translateCallBack(result, dictionary, text);

				 ImTranslatorBG.INLINE_RESP=result;
				 if(SL_langSrc=="auto"){
					SL_langSrc="en";
					if(ImTranslatorBG.IT_DetLang != "") SL_langSrc=ImTranslatorBG.IT_DetLang;	
				 }
                                 ImTranslatorBG.DO_CNTR("2131",SL_langSrc+"/"+langDst,text.length);
			         ImTranslatorBG.SaveTransToHistory(text,result,5);
				 FExtension.browser.executeForSelectedTab(null, function(tab) { 
					if(tab){
						ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
				 	}
				 });
			     }
			    }
			    if(ImTranslatorBG.INLINE_RESP==""){
				ImTranslatorBG.GOOGLE_INLINE_TR_API(text, ln,1);
			    }
		        }else{
        		     if(xhr.readyState==4){
					ImTranslatorBG.GOOGLE_INLINE_TR_API(text, ln,1);
			     }
			} 
		    }
		    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		    xhr.send(param);

	},


	GOOGLE_INLINE_TR_API: function(text,ln,st){

		ImTranslatorBG.INLINE_RESP="";
  		var num = Math.floor((Math.random() * SL_GEO.length)); 
  		var theRegion = SL_GEO[num];
  		text = text.trim();
		var SL_langSrc=FExtension.store.get("SL_langSrc_it");
		var SL_langDst=FExtension.store.get("SL_langDst_it2");
		var INLINEflip = FExtension.store.get("INLINEflip");
		ln = SL_langDst;	
		if(INLINEflip==1){
			    if(ImTranslatorBG.IT_DetLang==ln) ln = SL_langSrc;	
		}  

		var baseUrl = 'https://translate.google.'+theRegion+'/translate_a/single';
		var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(text) + "&sl=auto&tl="+ln+"&hl=en";
  		baseUrl = baseUrl +"?"+ SL_Params;
  		
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
					TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
					return false;
				}
			}
		  }
                  var resp = "";
		  ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	                        resp = ajaxRequest.responseText;

                                var result="";
                                var Gr1=resp.split('"trans":"');
                                for(var h=1; h<Gr1.length; h++){
                                    var Gr2 = Gr1[h].split('","orig"');
                                    var Gr3 = Gr2[0].replace(/\\n/ig,"\n");
                                    Gr3 = Gr3.replace(/\\"/ig,"'");
                                    Gr3 = Gr3.replace(/\\u0026/ig,"&");
               	                    Gr3 = Gr3.replace(/\\u003c/ig,"<");
               	                    Gr3 = Gr3.replace(/\\u003e/ig,">");
               	                    Gr3 = Gr3.replace(/\\u0027/ig,"'");
               	                    Gr3 = Gr3.replace(/\\u003d/ig,"=");
				    //Gr3 = Gr3.charAt(0).toUpperCase() + Gr3.slice(1);
                                    result=result+Gr3;
                                }
			        if(result!="") {
					var dictionary=false;				  
					result = ImTranslatorBG.translateCallBack(result, dictionary, text);
				        ImTranslatorBG.INLINE_RESP=result;

					if(SL_langSrc=="auto"){
						SL_langSrc="en";
						if(ImTranslatorBG.IT_DetLang != "") SL_langSrc=ImTranslatorBG.IT_DetLang;	
					}
          
		      		        ImTranslatorBG.DO_CNTR("2121",SL_langSrc+"/"+SL_langDst,text.length);

				        ImTranslatorBG.SaveTransToHistory(text,result,5);
					FExtension.browser.executeForSelectedTab(null, function(tab) { 
						if(tab){
							ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
				 		}
					});
	  			} else {
					if(resp.indexOf('[')!=-1 && resp.indexOf(']')!=-1 && resp.indexOf('[{')==-1){
						var dictionary=false;				  
						resp = resp.replace('["','');
						resp = resp.replace('"]','');
						resp = resp.replace(/\\"/g,'"');
					        ImTranslatorBG.INLINE_RESP=resp;

						if(SL_langSrc=="auto"){
							SL_langSrc="en";
							if(ImTranslatorBG.IT_DetLang != "") SL_langSrc=ImTranslatorBG.IT_DetLang;	
						}
          
			      		        ImTranslatorBG.DO_CNTR("2121",SL_langSrc+"/"+SL_langDst,text.length);
			
					        ImTranslatorBG.SaveTransToHistory(text,resp,5);
						FExtension.browser.executeForSelectedTab(null, function(tab) { 
							if(tab){
								ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
					 		}
						});


					} else 	ImTranslatorBG.GOOGLE_INLINE_TR_REMOTE(text,ln,st);
				}
			}else {
				if(ajaxRequest.readyState>=4)ImTranslatorBG.GOOGLE_INLINE_TR_REMOTE(text,ln,st);
			}
		  }

		  ajaxRequest.open("GET", baseUrl, true);
		  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  ajaxRequest.send(SL_Params);
	},


	GOOGLE_INLINE_TR_REMOTE: function (text,ln,st){
		ImTranslatorBG.INLINE_RESP="";
		var baseUrl = ImTranslator_theurl+"dotrans.asp";
		var cgi = "dir=auto/"+ln+"&provider=google&text="+encodeURIComponent(text);
	        ImTranslatorBG.DO_CNTR_P("2121","*a/"+ln,text.length);
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
					alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
		  if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	            var result = ajaxRequest.responseText;      

		    if(result.indexOf('>Url Too Long<')!=-1 || result.indexOf('>Request URL Too Long<>')!=-1 || result.indexOf('"ArgumentOutOfRangeException')!=-1) result=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extlim2000').replace("XXX","4000");

		    if(result.indexOf('>404 Not Found<')!=-1 || result.indexOf('>Error')!=-1 ) result=ImTranslatorBG.GetLongLanguageName(ln) +": " + FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotsupported');
		    var dictionary=false;				  
		    if(result=="") result=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
		    result = ImTranslatorBG.translateCallBack(result, dictionary, text);
		    ImTranslatorBG.INLINE_RESP=result;
	            ImTranslatorBG.SaveTransToHistory(text,result,5);
			 FExtension.browser.executeForSelectedTab(null, function(tab) { 
				if(tab){
					ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
			 	}
		    });
		}
	      }	
	     ajaxRequest.open("POST", baseUrl, true);
	     ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	     ajaxRequest.send(cgi); 
	},


	translateCallBack: function(result, text, dictionary) {
	    var translation = "";
	    if (dictionary) {
        	try {
	            result = JSON.parse(result);
        	} catch (e) {
	        }
        	if (result.dict) {
	            var dict = result.dict;
        	    if (dict.length > 0 && dict[0].terms) {
                	translation = dict[0].terms.join(', ');
	            }
        	} else {
	   //         translation = result.sentences[0].trans;
	 	        translation = result;
        	}
	    } else {
        	translation = ImTranslatorBG.get_translation(result);
	    }
	    //translation = " " + translation;
	    return(translation)
	},


	SaveTransToHistory: function(text,historyText,view,pr) {
		if(!pr) pr="G";
		else pr="Y";
	        if (FExtension.store.get("SL_TH_4") == 1){
		    var mySourceLang = FExtension.store.get("SL_langSrc_it");
	    	    var myTargetLang = FExtension.store.get("SL_langDst_it2");
		    if(FExtension.store.get("INLINEflip")==0) mySourceLang = "auto"
		    else {
			    if(ImTranslatorBG.IT_DetLang==myTargetLang){
				var tmp = myTargetLang;
				myTargetLang = mySourceLang;
				mySourceLang = tmp;
			    }else mySourceLang = ImTranslatorBG.IT_DetLang;
		    }
	            var SLnow = new Date();
        	    SLnow = SLnow.toString();
	            var TMPtime = SLnow.split(" ");
        	    var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];

	            text=text.replace(/~/ig," ");
        	    historyText=historyText.replace(/~/ig," ");

		    FExtension.store.set("SL_History", text + "~~" + historyText + "~~" + mySourceLang + "|" + myTargetLang + "~~" + ImTranslatorBG.URL + "~~" + CurDT + "~~" + view + "~~"  + pr + "^^" + FExtension.store.get("SL_History"));
	       }
	       ImTranslatorBG.IT_DetLang="";
	},



	get_translation:function (result){
	 if(result.indexOf('<span id')!=-1){
	    if (result.indexOf('<span id=result_box class="long_text">') > -1)   var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="long_text">');
	    else var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="short_text">');
	    var ImtranslatorGoogleResult2 = ImtranslatorGoogleResult1[1].split('</span></div>');
	    var ImtranslatorGoogleResult3 = ImtranslatorGoogleResult2[0].replace(/<br>/ig, '@');
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&#39;/ig, "'");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&quot;/ig, "'");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&amp;/ig, "&");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig, "");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/@/ig, "<br>");
	    var ImtranslatorGoogleResult4 = ImtranslatorGoogleResult3.replace(/% 20/ig, " ");
	    return ImtranslatorGoogleResult4;
	 } else return result;
	},


	SL_YANDEX: function(dir, text, TR){
	       	dir = dir.replace("zh-CN","zh");
		dir = dir.replace("jw","jv");
	        dir = dir.replace("iw","he");
		ImTranslatorBG.getYSID(0);
		setTimeout(function(){
		    ImTranslatorBG.YSLIDL = setInterval(function(){
			if(ImTranslatorBG.YSIDstatus === true) {
				clearInterval(ImTranslatorBG.YSLIDL);
				ImTranslatorBG.YSLIDL="";
				ImTranslatorBG.getY_TRANSLATION(dir,text,TR);
			} 
		    },5);  
        	},5);  		
	},

        getYSID: function(st){
                  var YK = FExtension.store.get("SL_YKEY");
		  ImTranslatorBG.YSIDold = YK;
		  if(st==1) YK=0;
		  if(YK==0) {
	        	var baseUrl="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false";
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
						return false;
					}
				}
			}

			ajaxRequest.onreadystatechange = function(){
			        var resp = "";
				if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
			            var resp = ajaxRequest.responseText.match(/sid\:\s\'[0-9a-f\.]+/);
		                    if (resp && resp[0] && resp[0].length > 7) {
                		        ImTranslatorBG.YSID = resp[0].substring(6);

					var H = FExtension.store.get("SL_YHIST");
					if(H == "") H="First key";
					else H = H +"; Rekey";
					var K = "***"+ImTranslatorBG.YSID.substring(45);
					FExtension.store.set("SL_YHIST",H+" -> "+K);

					FExtension.store.set("SL_YKEY", ImTranslatorBG.YSID);
		                        ImTranslatorBG.YSIDstatus = true;
                		    } else {
					var H = FExtension.store.get("SL_YHIST");
					FExtension.store.set("SL_YHIST",H+"; KEY not found");

		                        ImTranslatorBG.YSIDstatus = false;
					FExtension.store.set("SL_YKEY", "0");
                		    }
				}
			}
			ajaxRequest.open("GET", baseUrl, true);
			ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
			ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
			ajaxRequest.send();
		  } else {
			ImTranslatorBG.YSID = FExtension.store.get("SL_YKEY");
                        ImTranslatorBG.YSIDstatus = true;
		  }
	},


	getY_TRANSLATION: function(dir, text, TR){	
			var SL_langDst=FExtension.store.get("SL_langDst_it2");
		 	if(dir=="auto" && TR=="IT"){
				dir=ImTranslatorBG.IT_DetLang; 
			}
//			if(TR=="IT" && SL_langDst!="") dir=SL_langDst;
		        dir = dir.replace("zh-CN","zh");
		        dir = dir.replace("jw","jv");
        		dir = dir.replace("iw","he");

	        	var baseUrl="https://translate.yandex.net/api/v1/tr.json/translate?srv=tr-url-widget&id=" + ImTranslatorBG.YSID + "-0-0&format=html&lang=" + dir + "&text="+ text;

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
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
			        var resp = "";
				if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
			            var resp = ajaxRequest.responseText;
		        	    resp=resp.replace(/\\"/ig,"'");
		        	    if(resp.indexOf('text":["')!=-1){
			    		var R1 = resp.split('text":["');
				    	var R2 = R1[1].split('"');
			    		var R3 = R2[0];
       	        		        R3 = R3.replace(/~/ig,"\n");
		 	                resp=R3.replace(/\n/ig,"@");
					if(TR=="IT"){
					 ImTranslatorBG.INLINE_RESP=resp;

					 ImTranslatorBG.DO_CNTR('2122',dir+"/"+dir, text.length);

				         ImTranslatorBG.SaveTransToHistory(text,resp,5,"Y");
					 FExtension.browser.executeForSelectedTab(null, function(tab) { 
						if(tab){
							ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
					 	}
					 });
					}else ImTranslatorBG.BUBBLE_RESP=resp;

				   } else {
		                        ImTranslatorBG.YSIDstatus = false;
					FExtension.store.set("SL_YKEY", ImTranslatorBG.YSID);
					var H = FExtension.store.get("SL_YHIST");
					FExtension.store.set("SL_YHIST",H+"; Keys are equal -> yandex response: " +resp);
					if(TR=="IT") ImTranslatorBG.INLINE_RESP="<#>";
					else ImTranslatorBG.BUBBLE_RESP="<#>";
				   }
				   ImTranslatorBG.TRIGGER=0;
				} else {
				    if(ajaxRequest.status == 403){
					FExtension.store.set("SL_YKEY", 0);
					ImTranslatorBG.YSID=0;

					if(ImTranslatorBG.YSID!= ImTranslatorBG.YSIDold){
						ImTranslatorBG.SL_YANDEX(dir, text);
						var H = FExtension.store.get("SL_YHIST");
						FExtension.store.set("SL_YHIST",H+"; Yandex answers: #405 -> requesting a new key");
					}else{
			                        ImTranslatorBG.YSIDstatus = false;
						FExtension.store.set("SL_YKEY", 0);
						ImTranslatorBG.YSIDold = 0;
					}

				    }
				}
			}
			ajaxRequest.open("GET", baseUrl, true);
			ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
			ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
			ajaxRequest.send();
	},

	SL_GOOGLE_WPT_DETECT: function(baseUrl,SL_Params){
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
						TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
	                        var resp = "";
				if(ajaxRequest.status == "429") {
					ajaxRequest = null;
					ImTranslatorBG.SL_WPT_DETECT(SL_Params);
				}
				if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
		                        resp = ajaxRequest.responseText;
					if(resp.indexOf('[{"trans":"')!=-1){
						resp = JSON.parse(resp);
						if(resp.src=="zh-CN"){
							ImTranslatorBG.SL_WPT_DETECT(SL_Params);
							ImTranslatorBG.BUBBLE_DET="<#>";
						} else 	ImTranslatorBG.BUBBLE_DET=resp.src;
					} else ImTranslatorBG.BUBBLE_DET="<#>";
					ImTranslatorBG.TRIGGER=0;
				}
			}
			baseUrl = baseUrl +"?"+ SL_Params;
			ajaxRequest.open("GET", baseUrl, true);
		        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajaxRequest.send(SL_Params);         
	},

	SL_WPT_DETECT: function(SL_Params){
	    if(ImTranslatorBG.BUBBLE_DET==""){
	  	var theLIMIT = 100;
	  	var TMP = SL_Params.split("&q=");
	  	var TMP1 = TMP[1].split("&sl=");
		var text = TMP1[0];

		var SLDImTranslator_url = ImTranslator_theurl+"ld.asp?tr=wpt&text="+text;

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
					SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
                        	var tmp = ajaxRequest.responseText;
                        	tmp = tmp.replace("zh","zh-CN");
                        	tmp = tmp.replace("zt","zh-TW");
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    ImTranslatorBG.BUBBLE_DET="ru";
        		            if(tmp2[0].length>0 && tmp2[0].length<7) ImTranslatorBG.BUBBLE_DET=tmp2[0];
			    	} else ImTranslatorBG.BUBBLE_DET="en";
				ImTranslatorBG.TRIGGER=1;
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
	    }	
	},


	SL_GOOGLE_DETECT: function(baseUrl,SL_Params){
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
					TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
                        var resp = "";
			if(ajaxRequest.readyState == 4){
	                        resp = ajaxRequest.responseText;
				if(resp.indexOf('"src":"')!=-1){
					resp = JSON.parse(resp);
					ImTranslatorBG.NEW_GDETECT=resp.src;
					if(ImTranslatorBG.NEW_GDETECT=="zh-CN") ImTranslatorBG.NEW_GDETECT="<#>";
				} else ImTranslatorBG.NEW_GDETECT="<#>";
				ImTranslatorBG.TRIGGER=0;
			} else {
				if(ajaxRequest.status==429) ImTranslatorBG.NEW_GDETECT="<#>";
			}
		}
		baseUrl = baseUrl +"?"+ SL_Params;
		ajaxRequest.open("GET", baseUrl, true);
	        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.send(SL_Params);         
	},


	SL_GOOGLE: function(baseUrl, SL_Params, theQ){
		if(theQ == 1 && FExtension.store.get("SL_dict_bbl")=="false") theQ=0;
		if(theQ == 100) ImTranslatorBG.SL_GOOGLE_TRANSLATE(baseUrl, SL_Params, theQ);
		else  ImTranslatorBG.SL_GOOGLE_DICTIONARY(baseUrl, SL_Params, theQ);
	},

	SL_GOOGLE_TRANSLATE: function(baseUrl, SL_Params, theQ){
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
					TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
					return false;
				}
			}
		  }

		  ajaxRequest.onreadystatechange = function(){
                        var resp = "";
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	                        resp = ajaxRequest.responseText;
				if(resp.indexOf('[{"trans":"')!=-1){ 
					ImTranslatorBG.BUBBLE_RESP=resp;
			                ImTranslatorBG.BUBBLE_RESP=ImTranslatorBG.BUBBLE_RESP.replace(/~/g,"^");
				} else {
					if(resp.indexOf('[')!=-1 && resp.indexOf(']')!=-1 && resp.indexOf('[{')==-1){
						ImTranslatorBG.BUBBLE_RESP=resp.replace('["','');
						ImTranslatorBG.BUBBLE_RESP=ImTranslatorBG.BUBBLE_RESP.replace('"]','');
					} else ImTranslatorBG.BUBBLE_RESP="<#>";
				}
				ImTranslatorBG.TRIGGER=0;
			} else {
				if(ajaxRequest.status==429) ImTranslatorBG.BUBBLE_RESP="<#>";
			}
		  }
		  var METHOD = "POST";
		  ajaxRequest.open(METHOD, baseUrl, true);
		  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  ajaxRequest.send(SL_Params);
	},

	SL_GOOGLE_DICTIONARY: function(baseUrl, SL_Params, theQ){
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
					TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
					return false;
				}
			}
		  }
		  ajaxRequest.onreadystatechange = function(){
                        var resp = "";
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	                        resp = ajaxRequest.responseText;

				if(resp.indexOf('[{"trans":"')!=-1){ 
					if(theQ==0){
						var tmp1 = resp.split('"trans":"');
						var tmp2 = tmp1[1].split('","');
						ImTranslatorBG.BUBBLE_RESP=tmp2[0];
					}
					else ImTranslatorBG.BUBBLE_RESP=resp;
			                ImTranslatorBG.BUBBLE_RESP=ImTranslatorBG.BUBBLE_RESP.replace(/~/g,"^");
				} else {
					//resp='["VALERA"]'	
					if(resp.indexOf('[')!=-1 && resp.indexOf(']')!=-1 && resp.indexOf('[{')==-1){
						ImTranslatorBG.BUBBLE_RESP=resp.replace('["','');
						ImTranslatorBG.BUBBLE_RESP=ImTranslatorBG.BUBBLE_RESP.replace('"]','');
					} else ImTranslatorBG.BUBBLE_RESP="<#>";
				}
				ImTranslatorBG.TRIGGER=0;
			} else {
				if(ajaxRequest.status==429) ImTranslatorBG.BUBBLE_RESP="<#>";
			}
		  }

		  var METHOD = "POST";
		  ajaxRequest.open(METHOD, baseUrl, true);
		  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  ajaxRequest.send(SL_Params);
	},




	INLINE_DETECTOR: function(text){
		var resp = ImTranslatorBG.i18n_LanguageDetect(text);
		if(resp==""){
		  if(DET==0) ImTranslatorBG.G_INLINE_DETECT(text);
		  else ImTranslatorBG.SL_INLINE_DETECT(text);
		} else {
                  ImTranslatorBG.IT_DetLang=resp;
	 	}
	},




	G_INLINE_DETECT: function(text){
			text = text.substring(0,100);
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
						TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
						return false;
					}
				}
			}
			var cnt=0;
			ajaxRequest.onreadystatechange = function(){
	                        var resp = "";
				if(ajaxRequest.status == "429") ajaxRequest=null;
				if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
		                        resp = ajaxRequest.responseText;
					if(resp.indexOf('"src":"')!=-1){
						resp = JSON.parse(resp);
						ImTranslatorBG.IT_DetLang=resp.src;
						cnt++;
                                                ImTranslatorBG.DO_CNTR("2111",ImTranslatorBG.IT_DetLang+"/"+ImTranslatorBG.IT_DetLang,text.length);
						if(ImTranslatorBG.IT_DetLang=="zh-CN"){
							cnt=0;
						}
					} else ImTranslatorBG.SL_INLINE_DETECT(text);
					ImTranslatorBG.TRIGGER=0;
				}
			}
			var cntr=0;
			    setTimeout(function(){
				    var LOOPER = setInterval(function(){
					if(ImTranslatorBG.IT_DetLang!="" || cntr>25) {
						clearInterval(LOOPER);
						LOOPER="";
						if(cnt==0) ImTranslatorBG.SL_INLINE_DETECT(text);
                                	}else cntr++;
			    	},50);  
	        	},100);  


	  		var num = Math.floor((Math.random() * SL_GEO.length)); 
  			var theRegion = SL_GEO[num];
			if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
			var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";
			var SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(text)+"&sl=auto&tl=en&hl=en";
			baseUrl = baseUrl +"?"+ SL_Params;
			ajaxRequest.open("GET", baseUrl, true);
		        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajaxRequest.send(SL_Params);         
	},

	SL_INLINE_DETECT: function(text){
	    if(ImTranslatorBG.IT_DetLang==""){
	  	var theLIMIT = 100;

                ImTranslatorBG.DO_CNTR_P("2111","*a/*a",encodeURIComponent(text,theLIMIT).length);
		var SLDImTranslator_url = ImTranslator_theurl+"ld.asp?tr=pl&text="+encodeURIComponent(text,theLIMIT);

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
					SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
                        	var tmp = ajaxRequest.responseText;
                        	tmp = tmp.replace("zh","zh-CN");
                        	tmp = tmp.replace("zt","zh-TW");
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    ImTranslatorBG.IT_DetLang="ru";
        		            if(tmp2[0].length>0 && tmp2[0].length<7) ImTranslatorBG.IT_DetLang=tmp2[0];
			    	} else ImTranslatorBG.IT_DetLang="en";
				ImTranslatorBG.TRIGGER=1;
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
	    }	
	},



	SL_NEW_GTRANSLATE: function(baseUrl, SL_Params, theQ){
		if(theQ == 1 && FExtension.store.get("SL_dict_bbl")=="false") theQ=0;
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
					TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
					return false;
				}
			}
		  }
		  ajaxRequest.onreadystatechange = function(){
                        var resp = "";
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	                        resp = ajaxRequest.responseText;
				if(resp.indexOf('[{"trans":"')!=-1){ 
					if(theQ==0){
						var tmp1 = resp.split('"trans":"');
						var tmp2 = tmp1[1].split('","');
						ImTranslatorBG.NEW_GTRANSLATE=tmp2[0];
					}
					else ImTranslatorBG.NEW_GTRANSLATE=resp;
			                ImTranslatorBG.NEW_GTRANSLATE=ImTranslatorBG.NEW_GTRANSLATE.replace(/~/g,"^");
				} else ImTranslatorBG.NEW_GTRANSLATE="<#>";
				ImTranslatorBG.TRIGGER=0;
			}

		  }
		  var METHOD = "GET";
		  if(theQ==1) baseUrl = baseUrl + "?" + SL_Params;
		  else METHOD = "POST";

		  ajaxRequest.open(METHOD, baseUrl, true);
		  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  //if(navigator.userAgent) ajaxRequest.setRequestHeader("User-Agent", navigator.userAgent);
		  ajaxRequest.send(SL_Params);
	},


	i18n_LanguageDetect: function(text){
		return ("");
	},

	Shifter: function(n, str) {
        	for (var i = 0; i < str.length - 2; i += 3) {
	            var acc = str.charAt(i + 2);
        	    if ('a' <= acc) acc = acc.charCodeAt(0) - 87;
	            else acc = Number(acc);
        	    if (str.charAt(i + 1) == '+') acc = n >>> acc;
	            else acc = n << acc;
        	    if (str.charAt(i) == '+') n += acc & 4294967295;
	            else n ^= acc;
        	}
	        return n;
    	},

    	TQmaker: function(q) {
	        var bArr = [], idx = [];
	        for (var i = 0; i < q.length; i++) {
        	    var CC = q.charCodeAt(i);
	            if (128 > CC) bArr[idx++] = CC;
        	    else {
                	if (2048 > CC) bArr[idx++] = CC >> 6 | 192;
	                else {
        	            if (55296 == (CC & 64512) && i + 1 < q.length && 56320 == (q.charCodeAt(i + 1) & 64512)) {
                	        CC = 65536 + ((CC & 1023) << 10) + (q.charCodeAt(++i) & 1023);
                        	bArr[idx++] = CC >> 18 | 240;
	                        bArr[idx++] = CC >> 12 & 63 | 128;
        	            } else bArr[idx++] = CC >> 12 | 224;
                	    bArr[idx++] = CC >> 6 & 63 | 128;
	                }
        	        bArr[idx++] = CC & 63 | 128;
	            }
        	}
	        return bArr;
    	},

     	GetHash: function(q, w) {
	        var SplTK = w.split('.');
        	var indTK = Number(SplTK[0]) || 0;
	        var TK = Number(SplTK[1]) || 0;
        	var bArr = ImTranslatorBG.TQmaker(q);
	        var TMPr = indTK;
        	for (var i = 0; i < bArr.length; i++) {
	            TMPr += bArr[i];
        	    TMPr = ImTranslatorBG.Shifter(TMPr, '+-a^+6');
	        }
        	TMPr = ImTranslatorBG.Shifter(TMPr, '+-3^+b+-f');
	        TMPr ^= TK;
        	if (TMPr <= 0) TMPr = (TMPr & 2147483647) + 2147483648;
	        var Out = TMPr % 1000000;
        	return Out.toString() + '.' + (Out ^ indTK);
    	},



        STOP_PLAY_HANDLER: function(BTNcur){
		var st = 0
		if(ImTranslatorBG.BTNstatus!=2){
			if(ImTranslatorBG.BTNstatus==BTNcur){
				if(ImTranslatorBG.audioElement){
					if(!ImTranslatorBG.audioElement.ended){
						st = 1;
						ImTranslatorBG.audioElement.pause();
						ImTranslatorBG.audioElement = false;
					}
				}
			} else {
				st = 0; 
				if(ImTranslatorBG.audioElement) ImTranslatorBG.audioElement.pause();
				ImTranslatorBG.audioElement = false;
			}
		}  else st = 0;
		if(st==0) ImTranslatorBG.BTNstatus = BTNcur;
		return st;
        },


	DO_CNTR: function(code,dir,nmb){
		code = GLOB_CNTR + code.substring(1);

		var SLDImTranslator_url = "https://imtranslator.net/EXTENSIONS/cntr.asp?code="+code+"&dir="+dir+"&nmb="+nmb;
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
						return false;
					}
				}
			}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(); 
	},

	DO_CNTR_P: function(code,dir,nmb){
		code = GLOB_CNTR + code.substring(1);

		var SLDImTranslator_url = "https://imtranslator.net/EXTENSIONS/cntr-p.asp?code="+code+"&dir="+dir+"&nmb="+nmb;
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
						return false;
					}
				}
			}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(); 
	},

	SL_SAVE_FAVORITE_LANGUAGES: function (ln, TR){
		var OUT = "";
		var OUT2 = "";
		var SL_FAV_LANGS = FExtension.store.get(TR);
		var SL_FAV_MAX = FExtension.store.get("SL_FAV_MAX");
		if(SL_FAV_LANGS!=null){
			if(SL_FAV_LANGS.indexOf(ln)!=-1){
				SL_FAV_LANGS = SL_FAV_LANGS.replace(ln+",",""); 
				SL_FAV_LANGS = SL_FAV_LANGS.replace(ln,"");
			}
			OUT = ln + ",";	
			var ARR = SL_FAV_LANGS.split(",");
			for (var i = 0; i < ARR.length; i++){
	 			OUT = OUT + ARR[i]+",";
			}
			if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
			var TMP = OUT.split(",");
			if(TMP.length > SL_FAV_MAX) {
				for (var j = 0; j < TMP.length-1; j++){
		 			OUT2 = OUT2 + TMP[j]+",";
				}		
				OUT = OUT2 
			}
			if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
			FExtension.store.set(TR, OUT);
		}
	},

	PREPARE_RCM_CONTENT: function(){
		var MENU = FExtension.store.get("SL_LNG_LIST");
			var SL_FAV_LANGS = FExtension.store.get("SL_FAV_LANGS_IT");
			if(SL_FAV_LANGS!=""){
				var favArr=SL_FAV_LANGS.split(","); 
			    	FExtension.store.set("SL_langDst_it2",favArr[0]);  
			}
			var SL_FAV_LANGS = FExtension.store.get("SL_FAV_LANGS_BBL");
			if(SL_FAV_LANGS!=""){
				var favArr=SL_FAV_LANGS.split(","); 
			    	FExtension.store.set("SL_langDst_bbl2",favArr[0]);  
			}
			var SL_FAV_LANGS = FExtension.store.get("SL_FAV_LANGS_WPT");
			if(SL_FAV_LANGS!=""){
				var favArr=SL_FAV_LANGS.split(","); 
			    	FExtension.store.set("SL_langDst_wpt2",favArr[0]);  
			}
		ImTranslatorBG.SL_WorkingSet();
	},

	OPEN_OPTIONS: function(st){
		switch(st){
		   case "": FExtension.browser.openNewTab('../content/html/options/options.html'); break;
		   case "bbl": FExtension.browser.openNewTab('../content/html/options/options.html?bbl'); break;
		   case "hist": FExtension.browser.openNewTab('../content/html/options/options.html?hist'); break;
		   case "feed": FExtension.browser.openNewTab('../content/html/options/options.html?feed'); break;
		   case "wpt": FExtension.browser.openNewTab('../content/html/options/options.html?wpt'); break;
		   case "donate": FExtension.browser.openNewTab('https://imtranslator.net'+_CGI+'&a=0'); break;
		   default: FExtension.browser.openNewTab('../content/html/options/options.html'); break;
		}
		
//		FExtension.browser.openPopUpByURL('../../html/options/options.html');
	}

}

if(FExtension.browser && FExtension.browser.isLocalStoragePreset()){
	ImTranslatorBG.init();
}

