//'use strict';
try{

TranslatorIM = {
        SL_WPT_ERROR: 0,
	AVOID_SHADOW_ROOT_TEXT: "",
        SL_UNTRUST_WORD: "",
        SL_UNTRUST_TEXT: "",
	globaltheQ: "",
	ONCE_DETECT: "",
	ONLYONCE: 0,
	CONTROL_SUM: "",
        MoveBBLX: 0,
	MoveBBLY: 0,
	TTS_btn_location: 0,
	TTS_status:"on",
	FlippedByAuto: 0,
        AVOIDAUTODETECT: 0,
        TIMEOUT: "",
	THEMEmode: 0,
	SL_DARK: "invert(95%)",
	SL_LIGHT: "invert(0%)",
	TTSvolume: 1,
	BL_D_PROV: "Google",
	BL_T_PROV: "Google",
	AutoFlipState: 1,
	BBL_RESULT: "",
	BBL_DETECT: "",
        FORSEbubble: 0,
        GlobalCorrectionX: 0,
        GlobalCorrectionY: 0,
        GlobalBoxX: 0,
        GlobalBoxY: 0,
	SL_FRAME: 0,
        SL_DICT_PRESENT: "",
	SL_MODE: "",
	synth: window.speechSynthesis,
	TheVolume: 10,
	TheNewText: "",
	TheNewLang: "",
	TTSbackupLangs: "zh,zt,en,de,hi,id,it,nl,pl,es,ru,ja,ko,fr,pt",
        SL_CNT: 0,
        LISTofPR: {},
	LISTofPRpairs: {},
    	invalidElements:  {
      		'APPLET': 1,
      		'AREA': 1,
      		'BASE': 1,
      		'BR': 1,
      		'COL': 1,
      		'B': 1,
      		'HR': 1,
      		'IMG': 1,
      		'INPUT': 1,
      		'IFRAME': 1,
      		'ISINDEX': 1,
      		'LINK': 1,
      		'NOFRAMES': 1,
      		'NOSCRIPT': 1,
      		'META': 1,
      		'OBJECT': 1,
      		'PARAM': 1,
      		'SCRIPT': 1,
      		'STYLE': 1,
      		'SELECT': 1
    	},
	SL_IS_SUBDOMAIN: false,
	SL_GWPT_Show_Hide: 0,
	SL_GWPT_Show_Hide_tmp: 0,
	SL_GWHOST: "",
	SL_DETLANG: "",
	SL_D_List: "",
	SL_L_List: "",

	SL_wptDHist: "",
	SL_wptLHist: "",
	SL_wptGlobAuto: "0",
	SL_wptGlobTb: "0",
	SL_wptGlobTip: "0",
	SL_wptGlobLang: "",

	SL_wptGlobAutoTmp: "0",
	SL_wptGlobTbTmp: "1",
	SL_wptGlobTipTmp: "1",
	SL_wptGlobLangTmp: "",

	//WPT D temp params
	SL_wptDp1: "",
	SL_wptDp2: "0",
	SL_wptDp3: "",
	SL_wptDp4: "0",
	SL_wptDp5: "0",
	SL_wptDp6: "0",

	//WPT L temp params
	SL_wptLp1: "",
	SL_wptLp2: "0",
	SL_wptLp3: "0",
	SL_wptLp4: "0",

	SL_WPT_SKIP: 0,
	SL_WPT_IGRORE: 0,
	SL_WPT_TB_DEFAULT: 0,
    	SL_WPT_TEMP_LANG: "",
    	SL_WPT_LANG: "",
        SL_DOM: "auto",
        SL_LNG_LIST: "",
	SL_LNG_CUSTOM_LIST: "",
	ImTranslator_theurl: ImTranslator_theurl,
        SL_WRONGLANGUAGEDETECTED: 0,
	GTTS_length: 200,
	SLIDL:"",
	SL_DBL_FLAG: 0,
        myWindow:null,
        DELAY:0,
        PROV: "",
	SL_TRIGGER:"TRUE",
        SL_storedSelections: [],
        ListProviders: "",
        SL_SHOW_PROVIDERS: "1",
	SL_FLAG: 0,        
        SL_ONETIMERUN: 0,
	SL_SETINTERVAL_ST: 0,
        SL_SETINTERVAL_PROXY: 0,
	SL_BALLON_W: 450,
	SL_BALLON_H: 85,
	SL_MoveX: "-1000px",
	SL_MoveY: "-1000px",
	SL_Xdelta: 0,
	SL_Ydelta: 0,
	SL_FROMlng: "en",
	SL_TEMP_TEXT: "",
	SL_temp_result: "",
	SL_temp_result2: "",
	SL_Balloon_translation_limit: 5000,
	SL_PLANSHET_LIMIT: 5000,
	SL_GLOBAL_X1: 0,
	SL_GLOBAL_X2: 0,
	SL_GLOBAL_Y1: 0,
	SL_GLOBAL_Y2: 0,
	SL_L: 0,
	SL_T: 0,
	SL_R: 0,
	SL_B: 0,
	SL_NEST: "TOP",
	SL_DETECT: "",
	SL_DETECTED: "",
	SL_IS_DICTIONARY: 0,
        SL_EVENT: window.event,
	SL_KEYCOUNT: { length: 0 },
	SL_KEYSTRING: "",
	SL_TEMPKEYSTRING: "",
	SL_MSG: "",
	SL_TEMPREARTEXT: "",
	//-------------------Globals for TRANSFER from BBL to PLANSHET
	SL_TRANSFER_SRC: "en",
	SL_TRANSFER_DST: "es",
	SL_TRANSFER_DET: "true",
	//-------------------Globals for TRANSFER from BBL to PLANSHET
        SL_dict_bbl: "true",
	//-------------------STORAGE
	SL_ENABLE: false,
	SL_OnOff_BTN: "true",
	SL_OnOff_BTN2: "true",
	SL_OnOff_PIN: "",
	SL_OnOff_HK: "",
	SL_langSrc: "",
	SL_langDst: "",
	SL_FontSize_bbl: "",
	SL_TH_2: "",
	SL_TH_4: "",
	SL_HK: "",
	SL_HK2: "",
	SL_actualkey: "",
	LNGforHISTORY: "",
        Timing: 3,
	Delay: 0,
	//-------------------STORAGE

	//-------------------SESSION
	SL_SID_PIN: "",
	SL_SID_TO: "",
	SL_SID_FROM: "",
	SL_FONT: "",
	SL_FONT2: "",
	SL_FONT_SID: "",
	SL_SID_TEMP_TARGET: "",
	SL_SID_TEMP_SOURCE: "",
	SL_TMPbox: "false",
	SL_bbl_loc_langs: "false",
	SL_pin_bbl2: "false",
	//-------------------SESSION

	//-------------------INLINER
	SL_FK_box1: true,
	SL_inlinerFK1: "Alt",
	SL_inliner: "T",
	SL_FK_box2: true,
	SL_inlinerFK2: "Ctrl",
	SL_clean: "X",
	INLINEflip: 0,
	//-------------------INLINER

	//------------------ NEW HOT KEYS
	SL_BBL_CLOSER: true,
	SL_HK_gt1: "Ctrl + Alt + Z",
	SL_HK_gt2: "Alt + Z",
	SL_HK_it1: "Alt + C",
	SL_HK_it2: "Alt + X",
	SL_HK_bb1: "Alt",
	SL_HK_bb2: "Escape",
	SL_WPT1: "Alt + P",
	SL_WPT2: "Alt + M",
	SL_OPT: "Ctrl + Alt + O",
	SL_WPTbox1: true,
	SL_WPTbox2: true,
	SL_OPTbox: true,
	SOWPTbox: true,
	SOWPT: "Alt + W",
	CTWPTbox: true,
	CTWPT: "Alt + Q",


	//------------------ NEW HOT KEYS

        SL_WPTsrclang: "auto",
        SL_WPTdstlang: "es",
	SL_WPTHosts: "",

	//------------------ DBL bbl
	SL_DBL: false,
	//------------------ DBL bbl

        TempActiveObjId: "",
        DBLClick_tempText: "",

	// CHECKBOX FOR BLANK GT
        SL_GT_INV: true,

        SL_LOC: "en",

	// ADVANCES
	SL_GVoices: "1",
	SL_SLVoices: "0",
	SL_ALLvoices: "",
	// ADVANCES
	
        SL_SAVETEXT: 0,

        GOOGLE_TTS_backup_loader: 0,
        SL_ALL_PROVIDERS_BBL: "Google,Microsoft,Translator,Yandex",
        SL_ALL_PROVIDERS_IT: "",

	SL_WPT_TRG_LNG: "",
	SL_WPT_DET_LNG: "",
	SL_WPT_FLAG: 0,

	// BBL session params
	SL_langSrc_bbl2: "auto",
	SL_langDst_bbl2:  "",
	SL_BBL_COORD_TRIGER: 0,
	SL_Fontsize_bbl2: "",

	// IT change lang
	SL_change_lang_it: 0,
	SL_change_lang_HKbox_it: 1,
	SL_change_lang_HK_it: "Alt + S",
        SL_langDst_it: "en",

	//FAVORITE LANGUAGES
	SL_FAV_START: 10,
	SL_FAV_MAX: 3,
	SL_FAV_LANGS_BBL: "",
	SL_FAV_LANGS_IT: "",
	SL_FAV_LANGS_WPT: "",

	WPTflip: 0,

	MOver_PROVIDERS:function(e){
	    try{
	        var id = e.target.id.replace("SL_PN","");
		if(e.target.id.indexOf("SL_PN")!=-1){
			var doc = FExtension.browserInject.getDocument();
		}
	    } catch(ex){}
	},

	MOut_PROVIDERS:function(e){
	    try{
	        var id = e.target.id.replace("SL_PN","");
		if(e.target.id.indexOf("SL_PN")!=-1){
			var doc = FExtension.browserInject.getDocument();
			TranslatorIM.SL_bring_DOWN();
		}
	    } catch(ex){}
	},

	Click_PROVIDERS:function(e){
	    try{
	        var id = e.target.id.replace("SL_PN","");

		if(id=="BBL_OPT") TranslatorIM.OPEN_BG_OPTIONS('bbl');
		if(id=="HIST_OPT") TranslatorIM.OPEN_BG_OPTIONS('hist');
		if(id=="FEED_OPT") TranslatorIM.OPEN_BG_OPTIONS('feed');
		if(id=="DONATE_OPT") TranslatorIM.OPEN_BG_OPTIONS('donate');
		if(e.target.id.indexOf("SL_PN")!=-1){
			var doc = FExtension.browserInject.getDocument();
			if(TranslatorIM.SL_MODE==1) TranslatorIM.SL_setTMPdata("BL_D_PROV",TranslatorIM.LISTofPR[id]);
			else TranslatorIM.SL_setTMPdata("BL_T_PROV",TranslatorIM.LISTofPR[id]);
			ImTranslatorDataEvent.mousedown();
			TranslatorIM.SET_FIRST_AVAILABLE_PROV();
			TranslatorIM.SL_bring_UP();
                        TranslatorIM.SL_JUMP(doc);
		}
	    } catch(ex){}
	},

// TOUCT SCREEN
	touchstart:function(e){
	      TranslatorIM.SL_HideButton();
	      TranslatorIM.SL_EVENT=e;
	      TranslatorIM.SL_bring_DOWN();
	},


	touchend:function(e){
     	  var doc = FExtension.browserInject.getDocument();
          TranslatorIM.SL_BBL_OBJ_OFF(0);
	  if(TranslatorIM.SL_ENABLE == "true"){
	    if(FExtension.browserInject.getSelectionText()!=""){
		TranslatorIM.SL_OBJ_BUILDER();
                var COORD = TranslatorIM.TSgetSelectionCoords();
		TranslatorIM.SL_ShowButton();
		var ratioX = document.body.clientWidth / window.innerWidth;
		var ratioY = document.body.clientHeight / window.innerHeight;

	        var theX = (COORD.x/ratioX) + window.pageXOffset;
	        var theY = (COORD.y/ratioY) + window.pageYOffset;

		TranslatorIM.SL_MoveX=Math.ceil(theX) + "px";
		TranslatorIM.SL_MoveY=Math.ceil(theY) + "px";
		var SLdivField = doc.getElementById("SL_button");
		SLdivField.style.left = TranslatorIM.SL_MoveX;
		SLdivField.style.top = TranslatorIM.SL_MoveY;
            } else { 
		if(doc && doc.getElementById("SL_button"))doc.getElementById("SL_button").style.display="none"; 
	    }	
	  }

	},


// TOUCT SCREEN


	dblclick:function(e){
	   try{	
	    var doc = FExtension.browserInject.getDocument();
            if(doc.getElementById("SL_shadow_translator").style.display!="block"){
              var txt=FExtension.browserInject.getSelectionText();

              if(txt!="")TranslatorIM.DBLClick_tempText=txt;

	      var target = e.target || e.srcElement;
              TranslatorIM.SL_DBL_FLAG=1;

	      if(target.className.toString().indexOf("CodeMirror-")==-1){


		if(TranslatorIM.SL_OnOff_HK=="true" && TranslatorIM.SL_ENABLE=="true"){
	                TranslatorIM.getSelectionCoords(e);
			var DBHOTKEYSline1=TranslatorIM.SL_HK_bb1.replace(" + ",":|").toLowerCase()+":|";
			DBHOTKEYSline1=DBHOTKEYSline1.replace(" + ",":|");
			var HOTKEYSline = TranslatorIM.HOTKEYS_line();
			if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline1,HOTKEYSline)==true) TranslatorIM.SL_ShowBalloon();
                        
			if(doc.getElementById("SL_balloon_obj")){
				TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
				TranslatorIM.SL_BBL_OBJ_OFF(0);
				TranslatorIM.SL_OBJ_BUILDER();
			}
		        var ext = FExtension.browserInject;
		  	doc.getElementById('SL_button').style.background='url('+ext.getURL('content/img/util/imtranslator-s.png')+')';
			doc.getElementById('SL_button').style.opacity=100;

		}

		if(TranslatorIM.SL_DBL=="true"){
		    	if(TranslatorIM.ONLYONCE==0){
				TranslatorIM.ONLYONCE = 1;
				setTimeout(function() {TranslatorIM.ONLYONCE = 0;}, 500);
				setTimeout(function() {TranslatorIM.SL_ShowBalloon();}, 50); 	                      	
			}
		}else TranslatorIM.SL_ShowButton();
	      }	
	    }
	  } catch(ex){}
	},

	SL_BTN_mousemove: function(e){
		var id = e.target.id;
	  	if(id=="SL_button") TranslatorIM.unfade();
	},
	SL_BTN_mouseout: function(e){
		TranslatorIM.dofade();
	},

	mousedown: function(e){
		try{
			var target = e.target || e.srcElement;
			var doc = FExtension.browserInject.getDocument();
                        TranslatorIM.FlippedByAuto = 0;
			//EXCEPTIONS
			var ROUT = 0;
			if(e.target.className.indexOf("ytp-fullscreen-button")!=-1) ROUT = 1;
			if(e.target.tagName.toLowerCase()=="button") ROUT = 1;
			if(e.target.tagName.toLowerCase()=="video") ROUT = 1;
			if(e.target.hasAttribute("onclick")==true) ROUT = 1;
			if(e.which == 3) {
				//if(doc.getElementById("SL_shadow_translator").style.display!="block") 
				FExtension.browserInject.runtimeSendMessage({greeting: "RCM:>"}, function(response) {});
			}
			if(e.which != 3 && target.type=="file") ROUT = 1;
			if(e.which == 2) ROUT = 1;

			//EXCEPTIONS

			//IT change target menu

		    	var txt = FExtension.browserInject.getSelectionText();
	    		if(txt == "" && TranslatorIM.AVOID_SHADOW_ROOT_TEXT!="") txt=TranslatorIM.AVOID_SHADOW_ROOT_TEXT;
	    		if(txt!=""){		

			        if(e.which != 3){
					if(e.target.id.indexOf("_MENU")==-1) TranslatorIM.CloseIT_target_lang();
					else{
						if(e.target.id!="SL_IT_MENU") e.preventDefault();
						TranslatorIM.SL_addEvent(doc.getElementById("SL_IT_MENU"), 'change', TranslatorIM.SL_IT_retranslate);
						TranslatorIM.SL_addEvent(doc.getElementById("SL_MENU_CLOSE"), 'click', TranslatorIM.SL_IT_retranslate_and_close);
					}
				} else e.preventDefault();

				if(TranslatorIM.SL_SAVETEXT == 1 && TranslatorIM.BL_T_PROV==""){
				    if(TranslatorIM.ListProviders!=""){
					TranslatorIM.SL_BBL_OBJ_OFF(1);
					TranslatorIM.SL_OBJ_BUILDER();
				    }	
				}
			}

			if(e.target.id!="SL_BBL_VOICE" && e.target.id!="SL_TTS_voice")	TranslatorIM.REMOTE_Voice_Close();

			if(TranslatorIM.SL_ENABLE == "true"){
	        	     	FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {
       					if(response && response.farewell){
       	        				var theresponse = response.farewell.split("~");
				                var theresponse2 = theresponse[2].split("|");
       				        	TranslatorIM.SL_OnOff_BTN=theresponse2[3];
						TranslatorIM.SL_OnOff_BTN2=theresponse[62];

						TranslatorIM.SL_langSrc_bbl2=theresponse[60];
						TranslatorIM.SL_langDst_bbl2=theresponse[61];
				                TranslatorIM.SL_langSrc=theresponse2[0];
				                TranslatorIM.SL_langDst=theresponse2[1];
						TranslatorIM.SL_bbl_loc_langs=theresponse[65];
						if(TranslatorIM.SL_bbl_loc_langs=="true") TranslatorIM.SL_TMPbox="true";
						else TranslatorIM.SL_TMPbox="false";

						TranslatorIM.SL_Fontsize_bbl2=theresponse[63];
                                                TranslatorIM.SL_FONT_SID=TranslatorIM.SL_Fontsize_bbl2;

						TranslatorIM.SL_ALL_PROVIDERS_BBL=theresponse[42];
						TranslatorIM.SL_LOC=theresponse[22];
						TranslatorIM.SL_LNG_CUSTOM_LIST=theresponse[29];
						TranslatorIM.SL_pin_bbl2=theresponse[69];
                                                TranslatorIM.SL_OnOff_PIN=TranslatorIM.SL_pin_bbl2;
						TranslatorIM.SL_FAV_MAX=theresponse[79];
						TranslatorIM.SL_FAV_LANGS_BBL=theresponse[80];
						TranslatorIM.SL_FAV_LANGS_IT=theresponse[81];
						TranslatorIM.SL_FAV_LANGS_WPT=theresponse[82];
						TranslatorIM.WPTflip=theresponse[83];
	             			}
					TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
					TranslatorIM.LISTofPR = TranslatorIM.SL_ALL_PROVIDERS_BBL.split(",");


       				});
			}

			if(ROUT == 0){


				//by VK - SENDING A REQUEST TO BG to reset bubble result data exchange buffer ------
			        FExtension.browserInject.runtimeSendMessage({greeting: "TR_STOP:>"}, function(response) {});
	        		//by VK ----------------------------------------------------------------------------
		                TranslatorIM.SL_ONETIMERUN=0;

				if(TranslatorIM.SL_ENABLE == "true"){

					var id = target.id;

					if(target.className.toString().indexOf("CodeMirror-")==-1){
						TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));	       
					        if(e.which != 3){
							//WPT------

//							if(id.indexOf("SL_")==-1 && id=="SL_WPT_SHOW" || id =="") TranslatorIM.SL_WPT_OPTIONS_CLOSE(1);
							if(id.indexOf("SL_")==-1 || id =="") TranslatorIM.SL_WPT_OPTIONS_CLOSE(1);

							//WPT------


							if(id == "SL_button"){                                        
								e.preventDefault();
								TranslatorIM.SL_ShowBalloon();
							} else {
								var id2 = TranslatorIM.BBL_IfMouseIsInside(e);

								if(id2==0){
									TranslatorIM.SL_BBL_OBJ_OFF(0);
                                                                        if(doc.location.href.indexOf("rsa.com/") != -1){
										if (window.getSelection().empty) {  // Chrome
											window.getSelection().empty();
										} else if (window.getSelection().removeAllRanges) {  // Firefox
											window.getSelection().removeAllRanges();
										}
									}
								}
							}

							FExtension.browserInject.setEvent(e);
							TranslatorIM.TempActiveObjId = id;                

							if(id == "SLHKclose" || id == "SL_alert_cont" || id == "SL_alert_bbl" || id == "SL_shadow_translation_result" || id == "SL_shadow_translation_result2" || id=="") TranslatorIM.SLShowHideAlert();
							if(id == "SL_BBL_VOICE") TranslatorIM.SL_BBL_VOICE();
							if(id != "SL_button" || id !="SL_TTS_voice") {

								TranslatorIM.SL_GLOBALPosition(e, 0);
								TranslatorIM.SL_HideButton();
					                	TranslatorIM.SL_EVENT=e;
								if(id.indexOf("SL")==-1 || id=="") TranslatorIM.SL_CloseBalloon();	

							}
							if(id != "SL_button") {
								TranslatorIM.SL_HideButton();
						                TranslatorIM.SL_EVENT=e;
								TranslatorIM.SL_bring_DOWN();
							}

						}else {
							FExtension.browserInject.runtimeSendMessage({greeting: "RCL:>"}, function(response) {}); 
							if(doc.getElementById("SL_button")) doc.getElementById("SL_button").style.display="none"; 
						}

				       } 


				}else TranslatorIM.SL_BBL_OBJ_OFF(0);
			} //else inlinerInjectClean();
		  } catch(ex){}
	          TranslatorIM.CleanUpAll(e);
	},


	
	mouseup:function(e){
		if(e.which != 3){
			//EXCEPTIONS
			var ROUT = 0;
			if(e.target){
				if(e.target.tagName.toLowerCase()=="video") ROUT=1;
				if(e.target.tagName.toLowerCase()=="img") ROUT=1;
		                try{
					if(e.target.className.indexOf("ytp-")!=-1) ROUT = 1;
				} catch (e){chrome.runtime.lastError}			
			}
			//EXCEPTIONS
			var doc = FExtension.browserInject.getDocument();
			if(e.target.id == "SL_WPT_MENU_CLOSE") {TranslatorIM.closeWPT_ERROR_MSG();}
			if(doc.getElementById("SL_MENU_WPT")){
				if(e.target.id != "SL_WPT_MENU_CLOSE" && doc.getElementById("SL_MENU_WPT").style.display!='none') {TranslatorIM.closeWPT_ERROR_MSG();}
			}
			if(ROUT==1) TranslatorIM.SL_HideButton();
			else{
                                TranslatorIM.AVOID_SHADOW_ROOT_TEXT="";
				if(TranslatorIM.SL_ENABLE == "true"){
				        TranslatorIM.AVOID_SHADOW_ROOT_TEXT = FExtension.browserInject.getSelectionText();
					if(FExtension.browserInject.getSelectionText()!=""){		
						try{    							
						        var id = e.target.id;
							if(id.indexOf("SL_")==-1) TranslatorIM.SL_OBJ_BUILDER();

							if(TranslatorIM.SL_SID_TO != "") TranslatorIM.SL_langDst=TranslatorIM.SL_SID_TO;
							else TranslatorIM.SL_langDst=TranslatorIM.SL_langDst_bbl2;
							FExtension.browserInject.runtimeSendMessage({greeting: "CM_BBL:>" + TranslatorIM.SL_langDst}, function(response) {}); 
						} catch (e){chrome.runtime.lastError}	

						if(window.top==window.self)TranslatorIM.SL_FRAME=0;
						else TranslatorIM.SL_FRAME=1;
						var SLdivField = doc.getElementById("SL_shadow_translator");
						if(TranslatorIM.SL_FRAME==1){
							TranslatorIM.SL_EVENT=e;
							TranslatorIM.WINDOW_and_BUBBLE_alignment(doc,SLdivField)
						}
				                TranslatorIM.getSelectionCoords(e);
				                TranslatorIM.unfade();
						var wl = doc.location.href;
						if(wl.indexOf("http")!=-1){
							if(TranslatorIM.SL_SAVETEXT == 1){
							        TranslatorIM.SL_GLOBALPosition(e, 1);
	        						TranslatorIM.SL_EVENT=e;
							        FExtension.browserInject.setEvent(e);
								TranslatorIM.QuickInitTranslators(e);
						                TranslatorIM.SL_GOOGLE_WPT();				
							} else {

								if(SLdivField && SLdivField.style.display!="block"){
							        	TranslatorIM.SL_GLOBALPosition(e, 1);
						        		TranslatorIM.SL_EVENT=e;
								        FExtension.browserInject.setEvent(e);
									TranslatorIM.QuickInitTranslators(e);
						        	        TranslatorIM.SL_GOOGLE_WPT();				
								}
							}
						}


				  	       if(TranslatorIM.SL_OnOff_BTN2=="true") {
						   try{
						        var ext = FExtension.browserInject;
						  	doc.getElementById('SL_button').style.background='url('+ext.getURL('content/img/util/imtranslator-s.png')+')';
							doc.getElementById('SL_button').style.opacity=100;
						   }catch(e){}
						}

				    } else{
					if(TranslatorIM.SL_SAVETEXT == 1 && doc.getElementById("SL_shadow_translator").style.display!="block"){
						TranslatorIM.SL_BBL_OBJ_OFF(1);

					}
			                TranslatorIM.CleanUpAll(e);
				    }
		           } else { 
				if(doc.getElementById("SL_button"))doc.getElementById("SL_button").style.display="none"; 
			   }
		  	}
	         }
	},


	keydown:function(e){                
		setTimeout(function() {
		        //ALT-Tab handler
			window.onfocus = function() {
			    TranslatorIM.SL_KEYSTRING="";
			    TranslatorIM.SL_TEMPKEYSTRING="";
			}
			//---------------
/*
			if(e.key==TranslatorIM.SL_HK_bb2){
				TranslatorIM.REMOTE_Voice_Close();
		 	        var doc = FExtension.browserInject.getDocument();       
				if(TranslatorIM.SL_BBL_CLOSER=="true"){
					TranslatorIM.SL_CloseBalloonWithLink();
				} else {
					TranslatorIM.SL_BBL_OBJ_OFF(0);
				}


			//IT change target menu
				if(doc.getElementById("SL_MENU")) TranslatorIM.SL_IT_retranslate_and_close();


			}else{
*/
			    	if(!TranslatorIM.SL_KEYCOUNT[e.keyCode] && TranslatorIM.SL_KEYCOUNT.length<3)   {
        				TranslatorIM.SL_KEYCOUNT[e.keyCode] = true;
				        TranslatorIM.SL_KEYCOUNT.length++;
					TranslatorIM.SL_KEYSTRING=TranslatorIM.SL_KEYSTRING+e.keyCode+":|";
                			if(TranslatorIM.SL_KEYSTRING!="") {TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_KEYSTRING;TranslatorIM.SL_CNT=0;}
				}
//			}
		}, 100);		
        },



	keyup:function(e){ 
//		if(e.key=="Escape") {
//			TranslatorIM.CloseAnyOpenTranslator();			
//		}

		TranslatorIM.QuickInitTranslators(e);
		var HOTKEYSline = TranslatorIM.HOTKEYS_line();
		if(TranslatorIM.SL_MSG.indexOf("~")!=-1){
			var theresponse = TranslatorIM.SL_MSG.split("~");

			var theresponse2 = theresponse[1].split("|");
			var thekey4 = theresponse2[1];
			var theresponse4 = theresponse[4].split("|");
			var INLINER_CLEAN_ONOFF = theresponse4[0];
			var BUBBLE_CLEAN_ONOFF = theresponse[45];
		
			var INL_CL_HK1 = theresponse4[1];
			var INL_CL_HK2 = theresponse4[2];

			//WPT
			if(TranslatorIM.SL_WPT1=="") TranslatorIM.SL_WPTbox1="false";
			var DBHOTKEYSlineWPT1=TranslatorIM.SL_WPT1.replace(/ \+ /g,":|").toLowerCase()+":|";
       			DBHOTKEYSlineWPT1=DBHOTKEYSlineWPT1.replace(/ \+ /g,":|");
			if(TranslatorIM.SL_WPTbox1 == "true"){
	                        if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSlineWPT1,HOTKEYSline)==true){
					if(TranslatorIM.SL_CNT==0){
						TranslatorIM.SL_WEB_PAGE_TRANSLATION_FROM_CM_AND_HK(TranslatorIM.SL_wptGlobAuto, "reset");
						TranslatorIM.SL_CNT++;
					}
				}
	                }

			//WPT MO
			if(TranslatorIM.SL_WPT2=="") TranslatorIM.SL_WPTbox2="false";
			var DBHOTKEYSlineWPT2=TranslatorIM.SL_WPT2.replace(/ \+ /g,":|").toLowerCase()+":|";
       			DBHOTKEYSlineWPT2=DBHOTKEYSlineWPT2.replace(/ \+ /g,":|");
			if(TranslatorIM.SL_WPTbox2 == "true"){
	                        if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSlineWPT2,HOTKEYSline)==true) TranslatorIM.SL_WPT(1);
	                }

			//OPT
			if(TranslatorIM.SL_OPT=="") TranslatorIM.SL_OPTbox="false";
			var DBHOTKEYSlineOPT=TranslatorIM.SL_OPT.replace(/ \+ /g,":|").toLowerCase()+":|";
       			DBHOTKEYSlineOPT=DBHOTKEYSlineOPT.replace(/ \+ /g,":|");
			if(TranslatorIM.SL_OPTbox == "true"){                                       
	                        if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSlineOPT,HOTKEYSline)==true) TranslatorIM.OPEN_BG_OPTIONS("");
	                }

			//ImTranslator Blank
			if(TranslatorIM.SL_HK_gt2=="") TranslatorIM.SL_GT_INV="false";
			var DBHOTKEYSline1=TranslatorIM.SL_HK_gt2.replace(/ \+ /g,":|").toLowerCase()+":|";
      			DBHOTKEYSline1=DBHOTKEYSline1.replace(/ \+ /g,":|");
			if(TranslatorIM.SL_GT_INV == "true"){
				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline1,HOTKEYSline)==true) setTimeout(function() {TranslatorIM.HotKeysWindow(e,0);}, 100);
			}

			//Inline clean
			if(TranslatorIM.SL_HK_it2=="") INLINER_CLEAN_ONOFF="false";
			var DBHOTKEYSline2=TranslatorIM.SL_HK_it2.replace(/ \+ /g,":|").toLowerCase()+":|";
	       		DBHOTKEYSline2=DBHOTKEYSline2.replace(/ \+ /g,":|");
			if(INLINER_CLEAN_ONOFF=="true"){
				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline2,HOTKEYSline)==true) inlinerInjectClean();
			}

			//BUBBLE close
			if(TranslatorIM.SL_HK_bb2==""){ BUBBLE_CLEAN_ONOFF="false"}
			var DBHOTKEYSline2=TranslatorIM.SL_HK_bb2.replace(/ \+ /g,":|").toLowerCase()+":|";
		       	DBHOTKEYSline2=DBHOTKEYSline2.replace(/ \+ /g,":|");
			if(BUBBLE_CLEAN_ONOFF=="true"){
				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline2,HOTKEYSline)==true){
					TranslatorIM.REMOTE_Voice_Close();
			        	var doc = FExtension.browserInject.getDocument();       
					if(TranslatorIM.SL_BBL_CLOSER=="true"){
						TranslatorIM.SL_CloseBalloonWithLink();
					} else {
						TranslatorIM.SL_BBL_OBJ_OFF(0);
					}
				}
			}

			//WPT SHOW ORIGINAL
			if(TranslatorIM.SOWPT=="") TranslatorIM.SOWPTbox="false";
			var DBHOTKEYSlineSOWPT=TranslatorIM.SOWPT.replace(/ \+ /g,":|").toLowerCase()+":|";
       			DBHOTKEYSlineSOWPT=DBHOTKEYSlineSOWPT.replace(/ \+ /g,":|");

			if(TranslatorIM.SOWPTbox == "true"){
	                        if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSlineSOWPT,HOTKEYSline)==true) TranslatorIM.SL_SHOW_ORIGINAL();
	                }

			//WPT CLOSE TRANSLATION
			if(TranslatorIM.CTWPT=="") TranslatorIM.CTWPTbox="false";
			var DBHOTKEYSlineCTWPT=TranslatorIM.CTWPT.replace(/ \+ /g,":|").toLowerCase()+":|";
       			DBHOTKEYSlineCTWPT=DBHOTKEYSlineCTWPT.replace(/ \+ /g,":|");
       			DBHOTKEYSlineCTWPT=DBHOTKEYSlineCTWPT.replace(/esc/g,"escape");
			if(TranslatorIM.CTWPTbox == "true"){
	                        if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSlineCTWPT,HOTKEYSline)==true) TranslatorIM.CloseAnyOpenTranslator();
	                }


		}
		TranslatorIM.SL_closer(e);
        },

	QuickInitTranslators: function(e){
 	        var doc = FExtension.browserInject.getDocument();       
                var HOTKEYSline = TranslatorIM.HOTKEYS_line();
		setTimeout(function() {
		  try{
		    if(TranslatorIM.SL_MSG!="" || TranslatorIM.SL_MSG!="undefuned"){
			var theSLtext = window.getSelection().toString();
			theSLtext = theSLtext.replace(/(^\s+|\s+$)/g, '');

			var theresponse = TranslatorIM.SL_MSG.split("~");
			var theresponse1 = theresponse[0].split("|");
			var thekey2 = theresponse1[1];

                        if(theresponse[3].indexOf("|")!=-1){
				var theresponse3 = theresponse[3].split("|");
				var INLINER_ONOFF = theresponse3[0];
				var INL_HK1 = theresponse3[1];
				var INL_HK2 = theresponse3[2];
				var theresponse4 = theresponse[4].split("|");
			}

			//Balloon
			if(TranslatorIM.SL_HK_bb1=="") TranslatorIM.SL_OnOff_HK = "false";
                        var SLdivField = doc.getElementById("SL_shadow_translator");

			if(TranslatorIM.SL_SAVETEXT==0){
				if(SLdivField && SLdivField.style.display!="block"){
					var DBHOTKEYSline1=TranslatorIM.SL_HK_bb1.replace(/ \+ /g,":|").toLowerCase()+":|";
					DBHOTKEYSline1=DBHOTKEYSline1.replace(/ \+ /g,":|");
				} else DBHOTKEYSline1="";
			} else {
				var DBHOTKEYSline1=TranslatorIM.SL_HK_bb1.replace(/ \+ /g,":|").toLowerCase()+":|";
				DBHOTKEYSline1=DBHOTKEYSline1.replace(/ \+ /g,":|");
			}

			//ImTranslator Blank
			if(TranslatorIM.SL_HK_gt1=="") theresponse1[2] = "false";
			if(theSLtext!=""){
				var DBHOTKEYSline2=TranslatorIM.SL_HK_gt1.replace(/ \+ /g,":|").toLowerCase()+":|";
				DBHOTKEYSline2=DBHOTKEYSline2.replace(/ \+ /g,":|");
			}

			//Inline Translation
			if(TranslatorIM.SL_HK_it1=="") INLINER_ONOFF = "false";
			var DBHOTKEYSline3=TranslatorIM.SL_HK_it1.replace(/ \+ /g,":|").toLowerCase()+":|";
			DBHOTKEYSline3=DBHOTKEYSline3.replace(/ \+ /g,":|");

			//Inline Translation with target lang selection
			var DBHOTKEYSline4=TranslatorIM.SL_change_lang_HK_it.replace(/ \+ /g,":|").toLowerCase()+":|";
			DBHOTKEYSline4=DBHOTKEYSline4.replace(/ \+ /g,":|");


			if(theSLtext!=""){

			   	if(TranslatorIM.SL_OnOff_BTN2=="true" && theSLtext.indexOf("Google - Map Data")==-1 && theSLtext!="." && theSLtext!="," && theSLtext!="?" && theSLtext!="!" && theSLtext!=":" && theSLtext!=";" && theSLtext!="-"){
				 	if(TranslatorIM.SL_ENABLE=="true"){
						if(TranslatorIM.TempActiveObjId!="SL_button")	TranslatorIM.SL_ShowButton();
					}
				}



				if((TranslatorIM.SL_OnOff_HK=="true" && TranslatorIM.SL_ENABLE=="true") && TranslatorIM.FORSEbubble!=1){
					if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline1,HOTKEYSline)==true){
						if(doc.getElementById("SL_balloon_obj")){
							TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
							TranslatorIM.SL_BBL_OBJ_OFF(0);
							TranslatorIM.SL_OBJ_BUILDER();
						} 
						TranslatorIM.SL_ShowBalloon();
					}
				}
				if(TranslatorIM.FORSEbubble==1){
					if(doc.getElementById("SL_balloon_obj")){
						TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
						TranslatorIM.SL_BBL_OBJ_OFF(0);
						TranslatorIM.SL_OBJ_BUILDER();
					}
					TranslatorIM.SL_ShowBalloon();
				}
			}	
			if(theresponse1[2]=="true"){
				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline2,HOTKEYSline)==true) TranslatorIM.HotKeysWindow(e, 1);
			}

			if(INLINER_ONOFF=="true"){
				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline3,HOTKEYSline)==true){
					if(TranslatorIM.SL_ONETIMERUN==0) {runinliner();TranslatorIM.SL_ONETIMERUN=1;}
			        }
			}
			if(theresponse[66]=="true" && theresponse[67]!=""){
        				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline4,HOTKEYSline)==true) {
					if(TranslatorIM.SL_ONETIMERUN==0) {TranslatorIM.InitiateIT_target_lang();/*runinliner();*/TranslatorIM.SL_ONETIMERUN=1;}
				}
			}


			
		    }	
		  }catch(e){
			//alter(e);
		  }
		}, 20); //VK: was 200 
		setTimeout(function() {
			TranslatorIM.SL_closer(e);
			HOTKEYSline="";
		}, 500);
	},

	SL_SYNC_FILTER: function (l1,l2){
		if(l1=="auto translate:|") return true;
	        if(l1!=":|"){
		        var LINE1 = l1.split(":|");
		        var LINE2 = l2.split(":|");
	        	var CNT1 = LINE1.length-1;
		        var CNT2 = LINE2.length-1; 
		        var cnt=0;
                	var CNTlimit=3;
		        if(CNT1 == CNT2){
				CNTlimit = CNT1;
	        		for(var i=0; i<CNT1; i++){
		        		for(var j=0; j<CNT2; j++){
						if(LINE1[i]==LINE2[j]){
							cnt++; 	
						}
					}
				}
			}
			if(cnt>=CNTlimit) return true;
			else return false;
		} else {
		 if(l2=="") return true;
		 else return false;
		}
	},

	SL_closer:function(e){
		setTimeout(function() {TranslatorIM.SL_KEYCOUNT = { length: 0 }; TranslatorIM.SL_KEYSTRING="";TranslatorIM.SL_TEMPKEYSTRING="";}, 300);
        },


	HOTKEYS_line: function(){
                TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_TEMPKEYSTRING.replace("18:|","Alt:|");
                TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_TEMPKEYSTRING.replace("17:|","Ctrl:|");
                TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_TEMPKEYSTRING.replace("16:|","Shift:|");
                TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_TEMPKEYSTRING.replace("27:|","Escape:|");
		var TMP1= TranslatorIM.SL_TEMPKEYSTRING.split(":|");
		var NUM = TMP1.length-1;
		var HOTKEY = Array();
		var HOTKEYSline="";
		var cnt=0;
		for(var x=0; x<NUM; x++){
		    if(TMP1[x]!="Alt" && TMP1[x]!="Ctrl" && TMP1[x]!="Shift" && TMP1[x]!="Escape") HOTKEY[x]=String.fromCharCode(TMP1[x]);
		    else HOTKEY[x]=TMP1[x];
                    HOTKEYSline=HOTKEYSline+HOTKEY[x]+":|";
                    if(TMP1[x]=="Alt")cnt++;
                    if(TMP1[x]=="Ctrl")cnt++;
                    if(TMP1[x]=="Escape")cnt++;
		}
		if(cnt==2){
                  HOTKEYSline=HOTKEYSline.replace("Alt:|","");
                  HOTKEYSline=HOTKEYSline.replace("Ctrl:|","");
                  HOTKEYSline="Ctrl:|Alt:|"+HOTKEYSline;
		}
		return HOTKEYSline.toLowerCase();
	},


	SL_setTMPdata: function(name, value) {
       		FExtension.browserInject.runtimeSendMessage({greeting: "SAVE_DATA:>"+name+":"+value}, function(response) {});
		switch(name){
		 	case "BL_T_PROV": TranslatorIM.BL_T_PROV=value; break;
		 	case "BL_D_PROV": TranslatorIM.BL_D_PROV=value; break;
		 	case "TTSvolume": TranslatorIM.TTSvolume=value; break;
		}
	},

	init: function(){
   	   var doc = FExtension.browserInject.getDocument();	   
//	   TranslatorIM.SL_setTMPdata("BL_D_PROV","");
//	   TranslatorIM.SL_setTMPdata("BL_T_PROV","");
//=========================================================
	   if(self==top){
		 TranslatorIM.SL_IS_SUBDOMAIN=TranslatorIM.SL_DETECTsubDomain();
		 setTimeout(function() {
		   TranslatorIM.SL_getSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp");
		   TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP");
		   var r = doc.getElementsByClassName("goog-te-banner-frame");
		   if(r[0]) r[0].style = "display:none !important";
	           if(TranslatorIM.SL_GWPT_Show_Hide_tmp!="2" && TranslatorIM.SL_GWPT_Show_Hide_tmp!="none"){
			TranslatorIM.SL_WPT_DETECT(1);
			TranslatorIM.SL_GWHOST = TranslatorIM.SL_GetHost();
			TranslatorIM.SL_getLNG_TMP("SL_G_WPT_TO");

			setTimeout(function() {
			  var SL_WPTid = setInterval(function(){
				var FirstRun = 0;
				if(TranslatorIM.SL_GWPT_Show_Hide_tmp!=2) FirstRun=1;

				if(TranslatorIM.SL_WPT_LANG!="") {
					clearInterval(SL_WPTid);
					TranslatorIM.SL_getDATA();
					setTimeout(function() {
						var DOMAINS = TranslatorIM.SL_D_List;
						var LANGUAGES = TranslatorIM.SL_L_List;
						TranslatorIM.SL_IS_SUBDOMAIN=TranslatorIM.SL_DETECTsubDomain();
		                		var MH = TranslatorIM.SL_GetMAINHost(TranslatorIM.SL_GWHOST);

						var isLangPresented = LANGUAGES.indexOf("All");
						if(isLangPresented == -1) isLangPresented = LANGUAGES.indexOf(TranslatorIM.SL_WPT_LANG);

						if(TranslatorIM.SL_wptGlobAutoTmp==0) isLangPresented=-1;
                                                
						if(TranslatorIM.SL_wptGlobAutoTmp==1){
							if(TranslatorIM.SL_IS_DOMAIN_IN_THE_LIST(DOMAINS,TranslatorIM.SL_GWHOST)==1){
								TranslatorIM.SL_WEB_PAGE_TRANSLATION(TranslatorIM.SL_wptGlobAuto,"continue");
							} else {
						               if(TranslatorIM.SL_WPT_TEMP_LANG!="" || isLangPresented!=-1) TranslatorIM.SL_WEB_PAGE_TRANSLATION(TranslatorIM.SL_wptGlobAuto,"continue");
						               else TranslatorIM.SL_WEB_PAGE_TRANSLATION(TranslatorIM.SL_wptGlobAutoTmp,"continue");
							}
						} else {
							if(FirstRun!=1){
						                if(TranslatorIM.SL_WPT_TEMP_LANG!="" || isLangPresented!=-1) TranslatorIM.SL_WEB_PAGE_TRANSLATION(TranslatorIM.SL_wptGlobAuto,"continue"); 
							}
						}

					}, 100);    
				}
			    },100);//was 10
			}, 300);  //was 100
		   } 
  		  }, 100);    
	     }
//=========================================================



                
                TranslatorIM.SL_GOOGLE_WPT();

      	
        	doc.addEventListener('mousedown', TranslatorIM.mousedown,!1);
        	doc.addEventListener('dblclick', TranslatorIM.dblclick,!1);

	        doc.addEventListener('mouseup', TranslatorIM.mouseup,!1);

        	doc.addEventListener('keydown', TranslatorIM.keydown,!1);
        	doc.addEventListener('keyup', TranslatorIM.keyup,!1);


        	doc.addEventListener('touchstart', TranslatorIM.touchstart,!1);
        	doc.addEventListener('touchend', TranslatorIM.touchend,!1);


        	doc.addEventListener('mouseover', TranslatorIM.MOver_PROVIDERS,!1);
        	doc.addEventListener('mouseout', TranslatorIM.MOut_PROVIDERS,!1);
        	doc.addEventListener('click', TranslatorIM.Click_PROVIDERS,!1);




/*
		try{
	            doc.addEventListener("load", function(){
				setTimeout('TranslatorIM.SL_Hider()',500); 

			}, false);
		}catch(e){
			//alter(e);
		}
	
*/	
		(function(){                 

			var SL_d=!0,SL_e=null,SL_g=!1,SL_j,
			SL_k=function(SL_a){
				return SL_a.replace(/^\s+|\s+$/g,"")
			},
			SL_o=function(SL_a,SL_b){
				return function(){
					return SL_b.apply(SL_a,arguments)
					}
			 },
			 SL_p=function(SL_a){
			  if(SL_a&&SL_a.tagName){
				  var SL_b=SL_a.tagName.toLowerCase();
				  if("input"==SL_b||"textarea"==SL_b)
					  return SL_d;
			  }
			  for(;SL_a;SL_a=SL_a.parentNode)
				  if(SL_a.isContentEditable)
					  return SL_d;
			  	   return SL_g;
			  },
			  SL_r=/[0-9A-Za-z]/,
			  SL_A=function(){
				  FExtension.browserInject.extensionSendRequest({type:"initialize"},SL_o(this,
				  function(SL_a){
					  this.SL_B=SL_a.instanceId;
					  FExtension.browserInject.addOnRequestListener(SL_z);

				  })
			  )}
			  var SL_x=function(SL_a,SL_b,SL_c){
				  FExtension.browserInject.getDocument().addEventListener?SL_c.addEventListener(SL_a,SL_b,SL_g):SL_c.attachEvent("on"+SL_a,SL_b)
			  },
			  SL_w=function(){};
			  var SL_z=function(SL_a,SL_b,SL_c){
		                      "get_selection"==SL_a.type&&(SL_a=SL_k(FExtension.browserInject.getSelectionText()))&&SL_c({selection:SL_a})
			  };
			  window.SLInstance=new SL_A;  

/*
			  try{
				if(document.location.href.indexOf('acid3.acidtests.org')!=-1){
					setTimeout('TranslatorIM.SL_OBJ_BUILDER()',1000); 
				} else TranslatorIM.SL_OBJ_BUILDER();
			  }catch(e){
				//alter(e);
			  }

*/

			  FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {
				  FExtension.browserInject.setStyle();
		      });

		})();


	},


    addEvent: function (element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, callback);
        }
    },

    openFeedback: function(){
        FExtension.browserInject.openNewTab(FExtension.browserInject.getURL('feedback.html', false));
    },
	
	SL_Links: function(ob,todo){
		FExtension.browserInject.getDocument().getElementById(ob).style.display=todo;
	},
/*
	SL_Hider: function(){
		if(FExtension.browserInject.getDocument().getElementById("SL_shadow_translator")){
			FExtension.browserInject.getDocument().getElementById("SL_shadow_translator").style.display='none';
		}
	},
*/
	StartImTranslatorWindow: function(){
		 var tmpSLstr = FExtension.browserInject.getSelectionText();
		 if(tmpSLstr=="")  tmpSLstr=" ";

		 FExtension.browserInject.extensionSendMessage({greeting: tmpSLstr}, function(response) {
			 //chrome.extension.sendMessage({greeting: tmpSLstr}, function(response) {
             if(response){
			    //console.log(response.farewell);
             }
		 });
	},

	//---------------BUTTON

	SL_ShowButton: function(){
         clearTimeout(TranslatorIM.TIMEOUT);
	 TranslatorIM.TIMEOUT = setTimeout(function() {
	   if(TranslatorIM.SL_OnOff_BTN2 == "true"){
	        var doc = FExtension.browserInject.getDocument();
		 if(TranslatorIM.SL_SAVETEXT == 0){
			if(doc.getElementById('SL_shadow_translator') && doc.getElementById('SL_shadow_translator').style.display!="block"){
				TranslatorIM.SL_ShowButtonEXEC(doc);
			}
		 } else TranslatorIM.SL_ShowButtonEXEC(doc);	 	
	   }
	 }, TranslatorIM.Delay*1000);
	},


	SL_ShowButtonEXEC: function(doc){
	  	TranslatorIM.dofade();
		   if(doc.getElementById("SL_shadow_translator")){
			if(doc.getElementById("SL_shadow_translator").style.backgroundColor==''){
				var theSLtext=FExtension.browserInject.getSelectionText();
				if(theSLtext!=""){
					doc.getElementById("SL_shadow_translator").style.backgroundColor="";					
					doc.getElementById('SL_button').style.display="block";
					doc.getElementById('SL_button').style.opacity=1;
				    	TranslatorIM.SL_addEvent(doc.getElementById('SL_button'), 'mousemove', TranslatorIM.SL_BTN_mousemove);
				    	TranslatorIM.SL_addEvent(doc.getElementById('SL_button'), 'mouseover', TranslatorIM.SL_BTN_mousemove);
				    	TranslatorIM.SL_addEvent(doc.getElementById('SL_button'), 'mouseout', TranslatorIM.SL_BTN_mouseout);
		        	        if(TranslatorIM.SL_DBL_FLAG==1){
					   var TN = TranslatorIM.SL_EVENT.target.tagName.toLowerCase();
					   if(TN == "input" || TN == "textarea"){
					     var corrector=-3;
					     TranslatorIM.SL_GLOBAL_Y1=TranslatorIM.SL_GLOBAL_Y1+corrector;
					     TranslatorIM.SL_GLOBAL_Y2=TranslatorIM.SL_GLOBAL_Y2+corrector;
					   }
					   TranslatorIM.SL_DBL_FLAG=0;
					}
					TranslatorIM.SL_GetButtonCurPosition(TranslatorIM.SL_GLOBAL_X1, TranslatorIM.SL_GLOBAL_Y1, TranslatorIM.SL_GLOBAL_X2, TranslatorIM.SL_GLOBAL_Y2);
				} else doc.getElementById('SL_button').style.display="none";
			}
		   }
	},

	SL_HideButton: function(){
	         var doc = FExtension.browserInject.getDocument();
		 var SLdivField=doc.getElementById("SL_button");
		 if(SLdivField){
			 TranslatorIM.SL_addEvent(SLdivField, 'mouseover', TranslatorIM.SL_addButtonColor);
			 TranslatorIM.SL_addEvent(SLdivField, 'mouseout', TranslatorIM.SL_removeButtonColor);
			 SLdivField.style.display="none"; 		   
		 }
	},



	SL_addButtonColor: function() {
		TranslatorIM.unfade();
	},
	SL_removeButtonColor: function() {
		TranslatorIM.fade();
	},



	SL_GetButtonCurPosition: function (X1,Y1,X2,Y2) {
	        var doc = FExtension.browserInject.getDocument();
	        var SLdivField = doc.getElementById("SL_button");

                var delta1=-25;
                if(X1<X2) delta1=10;
                var delta2=-5;

              //  if(Y1<Y2) delta2=10;
                var pos = "top";
                if(Y1<Y2) pos="bottom";

                //VK BUTTON MOVER

                var correctionX = Math.ceil(TranslatorIM.GlobalCorrectionX/2);
                var correctionY = Math.ceil(TranslatorIM.GlobalCorrectionY/2);

		if(PLATFORM=="Opera"){
			if(correctionY==0) correctionY = correctionY-10;
		}else{
			if(correctionX==0) correctionX = correctionX-15;
		}

                if(pos=="top"){
	                //correctionX = correctionX * -1;
        	        correctionY =  correctionY * -1;
		}
                var AL = TranslatorIM.SL_AlignCoordL(doc,delta1,correctionX);
                var AT = TranslatorIM.SL_AlignCoordT(doc,delta2,correctionY);

		var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
		var NEWleft = ((X2-delta2+AL)+correctionX);

		if(delta2<0){
			if((bodyScrollLeft+window.innerWidth-40)<=NEWleft) NEWleft=((bodyScrollLeft+window.innerWidth)-40);
		}

		if(NEWleft<5) NEWleft=(bodyScrollLeft+5);
	        SLdivField.style.left = NEWleft+"px";

		var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;

		//NEW BUTTON CORRECTION
		correctionY = correctionY-7; 
		//-----------------------

		
	       	if(pos=="top"){
	        	SLdivField.style.top = ((Y2+delta1+AT)+correctionY)+"px";
        		if(((Y2+delta1+AT)+correctionY)<=bodyScrollTop)	SLdivField.style.top = (bodyScrollTop+2)+"px";
        		if(((Y2+delta1+AT)+correctionY)>=(bodyScrollTop+window.innerHeight-25))	SLdivField.style.top = (bodyScrollTop+window.innerHeight-25)+"px";
		} else {
			if(correctionY<0){
				SLdivField.style.top = ((Y2-delta1-AT)-correctionY)+"px";
	        		if(SLdivField.style.top.replace("px","")>=(bodyScrollTop+window.innerHeight-25)){
					SLdivField.style.top = (bodyScrollTop+window.innerHeight-45)+"px";
				}
			}else{
				SLdivField.style.top = ((Y2-AT)-correctionY)+"px";
				if((Y1-delta1-AL-TranslatorIM.GlobalCorrectionY)<=(bodyScrollTop)) SLdivField.style.top = (bodyScrollTop+2)+"px";
			}
		}



	},

        SL_AlignCoordT: function(doc,delta,correction){
		var T=0;
		var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
		if(correction>0){
			if(bodyScrollTop>(TranslatorIM.SL_T+bodyScrollTop+delta) && delta < 0){
				if(correction>25) T=correction;
				else              T=25;
			}
			var screen = window.innerHeight;
			var r = (TranslatorIM.SL_B+bodyScrollTop+correction-(bodyScrollTop+screen));
			if(r<0)	if((bodyScrollTop+screen)<(TranslatorIM.SL_B+bodyScrollTop+correction) ) T=correction+delta-r;
			if(T==0) T = T + correction;
			else{
				if(T==10) T = -5;
			}
		}else{
			var r = correction+TranslatorIM.SL_T+bodyScrollTop-bodyScrollTop;
			if(bodyScrollTop>(TranslatorIM.SL_T+bodyScrollTop+correction)) T=correction-r-delta*2;
			else T=correction; 
		}
		return(T);
	},

        SL_AlignCoordL: function(doc,delta,correction){
		var L=delta;
		var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
		if(correction>=0){
			if(bodyScrollLeft<(TranslatorIM.SL_R+bodyScrollLeft)) L=correction;
			var screen = window.innerWidth;
			r = TranslatorIM.SL_R+bodyScrollLeft+correction-(bodyScrollLeft+screen);
			if(r>delta) r=delta*2;			
			if((bodyScrollLeft+screen)<(TranslatorIM.SL_R+bodyScrollLeft+correction-delta)){
				L=correction+r;
			}
		}else{
			L=correction; 
			if(bodyScrollLeft>(TranslatorIM.SL_R+bodyScrollLeft+correction)) L=5;
			if(TranslatorIM.SL_L<Math.abs(correction)) L=5;
		}
		return(L);
	},

	SL_GLOBALPosition: function(e, state) {

		if(!e) e = TranslatorIM.SL_EVENT;
	        var doc = FExtension.browserInject.getDocument();
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;

		if(e){
			if (e.pageX || e.pageY){
				posx = e.pageX;
				posy = e.pageY;
			}
			else if (e.clientX || e.clientY){
				posx = e.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft;
				posy = e.clientY + doc.body.scrollTop + doc.documentElement.scrollTop;
			}
		}


		if(state==0){
			TranslatorIM.SL_GLOBAL_X1 = posx;
			TranslatorIM.SL_GLOBAL_Y1 = posy;
		}else{
			TranslatorIM.SL_GLOBAL_X2 = posx;
			TranslatorIM.SL_GLOBAL_Y2 = posy;
		}
	},
	//---------------BUTTON
	//---------------BALLOON
        SL_quikCloseBalloon: function(){
		TranslatorIM.SL_removeBalloonColor();
		TranslatorIM.SL_CloseBalloon();
	},

	SL_ShowBalloon: function(){

		TranslatorIM.SL_BBL_locer_settler();
	        TranslatorIM.SL_HideButton();

	        var doc = FExtension.browserInject.getDocument();
		try{
			doc.onmousemove = null;			
		}catch(e){}

		//HANDLER: http://www.legislation.gov.uk/ukpga/2008/22/contents
		var theurl = String(doc.location);
		if(doc.body.innerHTML.indexOf("/1999/xhtml")!=-1 && theurl.indexOf("legislation.gov.uk")!=-1) {	
			//runinliner();
			var theSLtext = FExtension.browserInject.getSelectionText();
			if(theSLtext=="" && TranslatorIM.DBLClick_tempText!="") theSLtext = TranslatorIM.DBLClick_tempText;
		        FExtension.browserInject.runtimeSendMessage({greeting: "PUSH:>"+theSLtext}, function(response) {});
			return false;
		}
   		//-------------------------------------------------------------

		var SL_tb = doc.getElementById("SL_TB");
		var SLdivField = doc.getElementById("SL_shadow_translator");
		var SLdivField2 = doc.getElementById("SL_button");
		SLdivField2.style.display = "none";


                if(TranslatorIM.SL_TRIGGER=="FALSE"){
			doc.getElementById("SL_lng_to").value=TranslatorIM.SL_langDst;
			doc.getElementById("SL_lng_from").value=TranslatorIM.SL_langSrc;
			chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
			 // console.log(response.status);
			});
		}


		doc.getElementById('SL_planshet').style.background = "#efefef";
		doc.getElementById('SL_Balloon_options').style.background = "#efefef";


		var SLselect = doc.getElementById("SL_lng_to");
		var SLselectFROM = doc.getElementById("SL_lng_from");
		var SL_locer = doc.getElementById("SL_locer");
		var SLswitch = doc.getElementById('SL_switch_b');

		var SL_P0 = doc.getElementById("SL_PN0");
		var SL_P1 = doc.getElementById("SL_PN1");
		var SL_P2 = doc.getElementById("SL_PN2");
		var SL_P3 = doc.getElementById("SL_PN3");

		if(SLdivField.style.backgroundColor==""){

	                TranslatorIM.SLShowHideAlert();
		        TranslatorIM.SL_DETECT =  "";
			TranslatorIM.SL_GetTransCurPosition();
			var theSLtext = FExtension.browserInject.getSelectionText();

			if(theSLtext=="" && TranslatorIM.DBLClick_tempText!="") theSLtext = TranslatorIM.DBLClick_tempText;
			TranslatorIM.DBLClick_tempText="";
			if(theSLtext == "" && TranslatorIM.AVOID_SHADOW_ROOT_TEXT != "") theSLtext = TranslatorIM.AVOID_SHADOW_ROOT_TEXT;
			if(theSLtext != ""){

				theSLtext = theSLtext.substring(0, TranslatorIM.SL_Balloon_translation_limit);
				var OBJ = doc.getElementById('SL_pin');

				if(theSLtext.length > TranslatorIM.SL_Balloon_translation_limit) {
					TranslatorIM.SL_FLOATER();
				}else{
					var evt = window.event;
					SLdivField.style.backgroundColor = "#FEFEFE";
					if(TranslatorIM.SL_SID_TEMP_TARGET != "") SLselect.value = TranslatorIM.SL_SID_TEMP_TARGET;

				}
				var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
				var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;

				var OBJ = doc.getElementById('SL_pin');

				if(TranslatorIM.SL_FRAME==0){
					if(TranslatorIM.SL_SAVETEXT == 1){
						TranslatorIM.SL_NEST="FLOAT";
						TranslatorIM.SL_SID_PIN="true";
					}
				}

                                theSLtext = theSLtext.trim();
				//theSLtext = theSLtext.replace(/\n/ig," @ "); 

				theSLtext = theSLtext.replace(/(^\s+|\s+$)/g, '');

				TranslatorIM.SL_TEMP_TEXT = theSLtext;
				var win = null;
				
				TranslatorIM.SL_BALLOON_TRANSLATION(theSLtext,evt,0, win);
				
				        if(TranslatorIM.GlobalBoxX!=0 && TranslatorIM.GlobalBoxY != 0) TranslatorIM.SL_NEST = "FLOAT";

					// TO HANDLE INVOKING FROM CM
				        if(TranslatorIM.SL_NEST=="") TranslatorIM.SL_NEST="TOP";
				        //---------------------------

	                                switch(TranslatorIM.SL_NEST){
						case "TOP":  	SLdivField.style.top=TranslatorIM.SL_T+bodyScrollTop-164+"px"; 
								TranslatorIM.SL_arrows('up'); 
								OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-off.png')+")";
								OBJ.title=FExtension.element(TranslatorIM.SL_LOC,"extPin_ttl");
								break;
						case "BOTTOM": 	SLdivField.style.top=TranslatorIM.SL_B+bodyScrollTop+9+"px"; 
								TranslatorIM.SL_arrows('down'); 
								OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-off.png')+")";
								OBJ.title=FExtension.element(TranslatorIM.SL_LOC,"extPin_ttl");
								break;
						case "FLOAT": 	TranslatorIM.SL_arrows('all');
								OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-on.png')+")";
								OBJ.title=FExtension.element(TranslatorIM.SL_LOC,"extUnPin_ttl");
								TranslatorIM.SL_FLOATER();
								break;
					}				


					var situation = 0;
					var setleft=(TranslatorIM.SL_L+TranslatorIM.SL_R)/2-448/2;
					if(setleft+473>window.innerWidth){
						setleft=window.innerWidth-467-18;
						var situation = 1;
					}
					if(setleft<25){
						setleft=25;
						var situation = 2;
					}
					var ArrowLeft='3px';

					if(TranslatorIM.SL_NEST!="FLOAT") SLdivField.style.left=(bodyScrollLeft*1)+setleft +"px";

        	                        var textCenter=Math.ceil((TranslatorIM.SL_R-TranslatorIM.SL_L)/2);
					switch(situation){
					  case 0:ArrowLeft='214px'; break;
					  case 1:var obj = (SLdivField.style.left.replace("px","")*1)
						 var coord = TranslatorIM.SL_L-obj+bodyScrollLeft+textCenter-10;
						 var delta=0;
						 if(bodyScrollLeft!=0) delta=5;
						 if(coord>obj) ArrowLeft = coord-delta+"px";
						 else ArrowLeft=coord+'px'; 
						 break;
					  case 2:if(TranslatorIM.SL_L<25){
							if(textCenter<25) ArrowLeft='3px';
                	                                else ArrowLeft=textCenter-25 + 'px';
						 }else ArrowLeft=TranslatorIM.SL_L+textCenter-35+'px'; 
						 break;
					}

					doc.getElementById("SL_arrow_down").style.left=ArrowLeft;
					doc.getElementById("SL_arrow_up").style.left=ArrowLeft;

                                TranslatorIM.SL_Bubble_Reposition();

                               
				TranslatorIM.SL_NotAllowed();

				TranslatorIM.SL_addEvent(SLdivField, 'mouseup', TranslatorIM.SL_ShowBalloon);
			    	TranslatorIM.SL_addEvent(SLdivField, 'mousedown', TranslatorIM.SL_CloseBalloon);
			    	TranslatorIM.SL_addEvent(SLdivField, 'mouseover', TranslatorIM.SL_addBalloonColor);
			    	TranslatorIM.SL_addEvent(SLdivField, 'mouseout', TranslatorIM.SL_removeBalloonColor);

			    	TranslatorIM.SL_addEvent(SLselect, 'change', TranslatorIM.SL_retranslate);
			    	TranslatorIM.SL_addEvent(SLselectFROM, 'change', TranslatorIM.SL_retranslate);
			    	TranslatorIM.SL_addEvent(SL_switch_b, 'click', TranslatorIM.SL_flip);
			    	TranslatorIM.SL_addEvent(SL_locer, 'click', TranslatorIM.SL_locker);  

			    	TranslatorIM.SL_addEvent(SL_P0, 'click', TranslatorIM.SL_retranslate);  
			    	TranslatorIM.SL_addEvent(SL_P1, 'click', TranslatorIM.SL_retranslate);  
			    	TranslatorIM.SL_addEvent(SL_P2, 'click', TranslatorIM.SL_retranslate);  
			    	TranslatorIM.SL_addEvent(SL_P3, 'click', TranslatorIM.SL_retranslate);  

			    	TranslatorIM.SL_addEvent(SL_BBL_locer, 'click', TranslatorIM.SL_BBL_locer);  

			    	if(theSLtext.indexOf(' ')!=-1){
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result"), 'mousedown', TranslatorIM.ClickInside);				    
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result"), 'mousedown', TranslatorIM.SL_bring_UP);
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result2"), 'mouseout', TranslatorIM.SL_addBalloonColor);
			    	}else{
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result"), 'mousedown', TranslatorIM.ClickInside);
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result"), 'mousedown', TranslatorIM.SL_bring_UP);
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result2"), 'mouseout', TranslatorIM.SL_bring_DOWN);
			    	}

				



//			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_alert100"), 'mousedown', TranslatorIM.SL_ALERTPROTECT);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_lng_to"), 'mousedown', TranslatorIM.SL_SCROLL);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_lng_to"), 'mouseout', TranslatorIM.SL_bring_DOWN);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_TTS_voice"), 'click', TranslatorIM.SL_Voice);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_copy"), 'click', TranslatorIM.SL_CopyToClipBoard);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_bbl_font"), 'click', TranslatorIM.SL_Font);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_pin"), 'click', TranslatorIM.SL_pinme);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_bbl_help"), 'click', TranslatorIM.SL_bbl_help);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_Balloon_Close"), 'click', TranslatorIM.SL_CloseBalloonWithLink);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_Balloon_Close"), 'mouseover', TranslatorIM.SL_bring_DOWN);



			    	TranslatorIM.SL_addBalloonColor();
			    	TranslatorIM.SL_removeBalloonColor();
			    	setTimeout(function() { 
				    	doc.getElementById("SL_button").style.display = "none";
				}, 10);    
			}
			
		}		 
		var OBJ = doc.getElementById('SL_shadow_translation_result');
		var OBJ2 = doc.getElementById('SL_shadow_translation_result2');
		// FONT SIZE icon
		var OBJ3 = doc.getElementById('SL_bbl_font');




		if(TranslatorIM.SL_FONT_SID==""){
		 	TranslatorIM.SL_FontSize_bbl = TranslatorIM.SL_FONT;
			TranslatorIM.SL_FONT2 = TranslatorIM.SL_FONT;
		}else TranslatorIM.SL_FontSize_bbl = TranslatorIM.SL_FONT_SID;

		if(TranslatorIM.SL_FontSize_bbl != OBJ.style.fontSize){
			if(TranslatorIM.SL_FontSize_bbl == "16px"){
				OBJ.style.fontSize = "16px";
				OBJ.style.lineHeight = "22px";
				OBJ2.style.fontSize = "16px";
				OBJ2.style.lineHeight = "22px";
			}else{
				OBJ.style.fontSize = "14px";
			   	OBJ.style.lineHeight = "20px";
			   	OBJ2.style.fontSize = "14px";
			   	OBJ2.style.lineHeight = "20px";
			}
			TranslatorIM.SL_FontSize_bbl = OBJ.style.fontSize;
		}

		if(TranslatorIM.SL_FontSize_bbl == "14px")   OBJ3.className="SL_font_on";
		if(TranslatorIM.SL_FontSize_bbl == "16px")   OBJ3.className="SL_font_off";

		// COPY icon
		doc.getElementById('SL_copy').className="SL_copy_hand";
		// TRANSLATION HISTORY icon
		//doc.getElementById('SL_TH').className="SL_TH";


		setTimeout(function() { 
                        var SLdivField2=FExtension.browserInject.getDocument().getElementById("SL_button");
			if(SLdivField2) SLdivField2.style.display = "none";
		}, 1300); 
		if(TranslatorIM.SL_SHOW_PROVIDERS!="1"){
			doc.getElementById("SL_Bproviders").style.visibility = "hidden";
		} else 	doc.getElementById("SL_Bproviders").style.visibility = "visible";

              

		setTimeout(function() { 
	            try {
			if(doc.getElementById('SL_lng_from')){
			 	if(doc.getElementById('SL_lng_from').value=="auto"){
					doc.getElementById('SL_switch_b').title=FExtension.element(TranslatorIM.SL_LOC,"extDisabled");
					doc.getElementById('SL_switch_b').style.cursor="not-allowed";
				} else {
					doc.getElementById('SL_switch_b').title=FExtension.element(TranslatorIM.SL_LOC,"extSwitch_languages_ttl");
					doc.getElementById('SL_switch_b').style.cursor="pointer";
				}
			}
		     } catch (ex){}
	 	}, 1300); 

		setTimeout(function() { 
	        	 var obj_1="Tn"+"IT"+"Tt"+"w-t"+"oo"+"lt"+"ip"+"-wr"+"ap";
		         var zi=Math.floor((Math.random() * 100) + 1);
			 if(doc.getElementById(obj_1)) doc.getElementById(obj_1).style.zIndex=zi;
		}, 10); 



        	if(doc.doctype){
	             doc.getElementById("SL_shadow_translator").style.width="467px";
		}
		TranslatorIM.ACTIVATE_THEMEbbl(TranslatorIM.THEMEmode);
	},

	SL_BBL_VOICE: function(){	
	   TranslatorIM.TTS_btn_location=0;	
           var doc = FExtension.browserInject.getDocument();	
//	   doc.getElementById('SL_alert100').style.display="none";	
	   var SL_to= doc.getElementById("SL_lng_to").value;	
	   SL_to= SL_to.replace("-TW","");	
	   SL_to= SL_to.replace("-CN","");	

	   var TTStext=TranslatorIM.SL_temp_result.replace(/<br>/g, " ");	
	   var text = TTStext;	
	   text = TranslatorIM.truncStrByWord(text,1200);	
	   switch(TranslatorIM.SL_SLVoices){	
		case "0": if(TranslatorIM.SL_ALLvoices.indexOf(SL_to)!=-1){	
                              if(SL_TTS.indexOf(SL_to)!=-1){	
				if(text.length>TranslatorIM.GTTS_length) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text)); 	
				else TranslatorIM.Google_TTS(text,SL_to);	
			      } else TranslatorIM.Google_TTS(text,SL_to);	
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));	
			  break;	
		case "1": if(TranslatorIM.SL_ALLvoices.indexOf(SL_to)!=-1){	
				if(G_TTS.indexOf(SL_to)!=-1) TranslatorIM.Google_TTS(text,SL_to);	
				else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));	
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));	
			  break;	
		case "2": if(TranslatorIM.SL_ALLvoices.indexOf(SL_to)!=-1){	
                              if(SL_TTS.indexOf(SL_to)!=-1) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text));	
			      else TranslatorIM.Google_TTS(text,SL_to);	
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));	
			  break;	
	   }	
	},	

	SL_BBL_locer_settler: function(){
          var doc = FExtension.browserInject.getDocument();
	 if(TranslatorIM.SL_OnOff_BTN2=="true") doc.getElementById('SL_BBL_locer').checked=true;
	 else doc.getElementById('SL_BBL_locer').checked=false;
	},

	SL_BBL_locer: function(){
		if(TranslatorIM.SL_EVENT){ 
			var ev = TranslatorIM.SL_EVENT;
		        var doc = FExtension.browserInject.getDocument();

				if(doc.getElementById('SL_BBL_locer')) {
					if(ev.target.id == "SL_BBL_locer") TranslatorIM.SL_OnOff_BTN2 = doc.getElementById('SL_BBL_locer').checked.toString();
				}
			TranslatorIM.SAVE_SES_PARAMS();
		}
	},

	SL_bbl_help: function(){
		switch(PLATFORM){
			 case "Opera" : var slurl="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/opera-bubble-translator/"; break;
			 case "Chrome": var slurl="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/chrome-bubble-translator/"; break;
			 default      : var slurl="https://about.imtranslator.net/tutorials/presentations/";break;
		}
		window.open(slurl,"ImTranslator:Bubble");
	},


	SL_locker: function(){	
	        var doc = FExtension.browserInject.getDocument();
		var ev = TranslatorIM.SL_EVENT;
		if(doc.getElementById('SL_locer')) {
			if(ev.target.id == "SL_locer"){
				if(doc.getElementById('SL_locer').checked==false){
					TranslatorIM.SL_TMPbox="false";
				} else {
					TranslatorIM.SL_TMPbox="true";
				}
				TranslatorIM.SL_MAKE_FROM();
			}
		}

	},

	SL_locker_settler: function(){
	        var doc = FExtension.browserInject.getDocument();
		if(TranslatorIM.SL_TMPbox=="true") {
			doc.getElementById('SL_locer').checked=true;
			TranslatorIM.SL_TMPbox="true";
		}else{ 
			doc.getElementById('SL_locer').checked=false;
			TranslatorIM.SL_TMPbox="false";
		}		
	},


        SL_ALERTPROTECT: function(){
                TranslatorIM.SL_quikCloseBalloon();
	},

	SL_flip: function(){
	        var doc = FExtension.browserInject.getDocument();
		try{ doc.onmousemove = null; }catch(e) { console.log(e); }
		var SLselTO=doc.getElementById("SL_lng_to");
		var SLselFROM=doc.getElementById("SL_lng_from");
		if(SLselFROM.value!="auto"){
 		 if(TranslatorIM.SL_DETECT != SLselFROM.value || doc.getElementById('SL_locer').checked==true){
		   var TMP = SLselTO.value;
		   SLselTO.value=SLselFROM.value;
		   SLselFROM.value=TMP;  		   
		 }
		 TranslatorIM.SL_retranslate();
		}
	},

        SL_hist: function(){
		window.open(FExtension.browserInject.getURL('options.html?hist', true),"ImTranslator:Translation_History");
	},

	SL_SYN: function(ob){
		TranslatorIM.SL_retranslate();
	},

	SL_bring_UP: function(){
	    try{
		var doc = FExtension.browserInject.getDocument();

       	   	doc.getElementById('SL_alert100').style.display="none";

		if(window.event && window.event.which==1){
			var theMainOBJ = doc.getElementById('SL_shadow_translator');
			var theOBJ = doc.getElementById('SL_shadow_translation_result');
			var theOBJ2 = doc.getElementById('SL_shadow_translation_result2');
			var ToLng = doc.getElementById('SL_lng_to').value;
			theOBJ2.style.display = 'block';
			theOBJ2.style.marginTop = theMainOBJ.offsetTop + 30 + "px";
			theOBJ2.style.marginLeft = theMainOBJ.offsetLeft + 1 + "px";
			theOBJ.style.visibility = "hidden";


                        theOBJ2.style.direction="ltr";
                        theOBJ2.style.textAlign="left";

			if(ToLng=="ar" || ToLng=="iw" || ToLng=="fa" || ToLng=="yi" || ToLng=="ur" || ToLng=="ps" || ToLng=="sd" || ToLng=="ckb" || ToLng=="ug" || ToLng=="dv" || ToLng=="prs"){
                          theOBJ2.style.direction="rtl";
                          theOBJ2.style.textAlign="right";
			}
		}
	     }catch(ex){}
	},

	SL_bring_DOWN: function(){
		var theOBJ = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result');
		var theOBJ2 = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result2');
	        if(theOBJ2){
			theOBJ2.style.display = 'none';
			theOBJ.style.visibility = "visible";
		}
	},

	SL_MAKE_FROM:function(){     
	        var doc = FExtension.browserInject.getDocument();
		var SLselFROM = doc.getElementById("SL_lng_from");
		var SLselTO = doc.getElementById("SL_lng_to");
		if(doc.getElementById('SL_locer').checked!=true){
		     if(TranslatorIM.SL_Finde_Lang()==1){
 			if(TranslatorIM.LNGforHISTORY == SLselTO.value){
			   var TMP = SLselTO.value;
			   SLselTO.value=SLselFROM.value;
			   SLselFROM.value=TMP;  		   
			}else{
				SLselFROM.value = TranslatorIM.LNGforHISTORY;
			}
		     }  else {
 			if(TranslatorIM.LNGforHISTORY == SLselTO.value){
			   var TMP = SLselTO.value;
			   SLselTO.value=SLselFROM.value;
			   SLselFROM.value=TMP;  		   
			}

		     }
		}
		TranslatorIM.SL_retranslate();
	},

	SL_Finde_Lang(){
		var out = 0;
		var ln = TranslatorIM.LNGforHISTORY;
		var MENU = TranslatorIM.SL_LNG_LIST.split(",");
		for(var i = 0; i<MENU.length; i ++){
			if(MENU[i]==ln) out = 1;
		}
		return out;
	},

	SL_retranslate:function(){     
	   if(TranslatorIM.SL_EVENT.target.parentNode.className!="SL_BL_LABLE_DEACT"){
		TranslatorIM.AutoFlipState=0;
		TranslatorIM.FlippedByAuto=0;
	        var doc = FExtension.browserInject.getDocument();
	   	doc.getElementById('SL_alert100').style.display="none";
		TranslatorIM.SL_bring_DOWN();
		TranslatorIM.SL_bring_UP();
		
		var theSLtext = FExtension.browserInject.getSelectionText();
                //theSLtext = theSLtext.replace("\n","");
		if(theSLtext == "") theSLtext = TranslatorIM.SL_TEMP_TEXT;
		//theSLtext=theSLtext.replace(/\n/ig," @ "); 

		TranslatorIM.SL_BALLOON_TRANSLATION(theSLtext,window.event, 1);	
		if(doc.getElementById('SL_lng_from').value=="auto"){
			doc.getElementById('SL_switch_b').title=FExtension.element(TranslatorIM.SL_LOC,"extDisabled");
			doc.getElementById('SL_switch_b').style.cursor="not-allowed";
		} else { 
			doc.getElementById('SL_switch_b').title=FExtension.element(TranslatorIM.SL_LOC,"extSwitch_languages_ttl");
			doc.getElementById('SL_switch_b').style.cursor="pointer";
		}
		
                switch(TranslatorIM.SL_NEST){
			case "TOP": TranslatorIM.SL_arrows('up'); break;
			case "BOTTOM": TranslatorIM.SL_arrows('down'); break;
			case "FLOAT": TranslatorIM.SL_arrows('all'); break;
		}
                TranslatorIM.SL_HideShowTTSicon();
//                TranslatorIM.SL_DETECT="";
		TranslatorIM.SL_NotAllowed();
		TranslatorIM.SET_FIRST_AVAILABLE_PROV();
		TranslatorIM.SAVE_SES_PARAMS();
	   }	
	},

        SL_HideShowTTSicon: function(){
	         var doc = FExtension.browserInject.getDocument();
		 var SL_from = doc.getElementById('SL_lng_from').value;
		 if(doc.getElementById('SL_locer').checked==false || doc.getElementById('SL_lng_from').value=="auto") SL_from = TranslatorIM.SL_DETECT;
		 if(TranslatorIM.SL_ALLvoices.indexOf(SL_from)!=-1) doc.getElementById('SL_TTS_voice').style.visibility="visible";
		 else doc.getElementById('SL_TTS_voice').style.visibility="hidden";
	},

	SL_CloseBalloonWithLink: function(){
	    	try{
		 	var doc = FExtension.browserInject.getDocument();
		  	doc.getElementById('SL_shadow_translator').style.display='none';		
                        TranslatorIM.SL_BBL_OBJ_OFF(1);
		}catch (ex){}
	},

	SL_CloseBalloon: function() {
	 try{
           var doc = FExtension.browserInject.getDocument();
	   var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
	   if((window.innerWidth+bodyScrollLeft-window.event.pageX)>20){

		var SLdivField = doc.getElementById("SL_shadow_translator");
		if(doc.getElementById('SL_shadow_translation_result2').style.display == "none"){
			TranslatorIM.SL_Xdelta = window.event.pageX - SLdivField.offsetLeft;
			TranslatorIM.SL_Ydelta = window.event.pageY - SLdivField.offsetTop;

			TranslatorIM.SL_addEvent(SLdivField, 'mouseover', TranslatorIM.SL_addBalloonColor);
			TranslatorIM.SL_addEvent(SLdivField, 'mouseout', TranslatorIM.SL_removeBalloonColor);

			if(SLdivField.style.backgroundColor == ""){
				if(TranslatorIM.SL_SAVETEXT == 0){
					doc.getElementById("SL_shadow_translation_result").innerText="";
					doc.getElementById("SL_shadow_translation_result2").innerText="";
	                              	SLdivField.style.left="-10000px";
	                                SLdivField.style.top="-10000px";
					SLdivField.style.display = 'none';
				}
                                doc.getElementById('SL_balloon_obj').alt="0";
			}else{
				var evt = window.event;
				TranslatorIM.SL_MoveX = evt.pageX + "px";
				TranslatorIM.SL_MoveY = evt.pageY + "px";
				try{
				    if(evt.target.id!="SL_pin")	doc.onmousemove = TranslatorIM.SL_GetTransCurPosition;
				}catch(e){}
			}
		}
	    }
	 } catch(ex){}
	},

	SL_addBalloonColor: function() {
	        var doc = FExtension.browserInject.getDocument();
		var SLdivField = doc.getElementById("SL_shadow_translator");
		if(SLdivField){
			SLdivField.style.backgroundColor = "#FEFEFE";
			SLdivField.style.boxShadow = "0px 0px 0px #000";
		}
	},
	SL_removeBalloonColor: function() {
        	var doc = FExtension.browserInject.getDocument();
		var SLdivField = doc.getElementById("SL_shadow_translator");
		if(SLdivField){
			SLdivField.style.backgroundColor = "";
			SLdivField.style.boxShadow = "0px 0px 0px #BAB9B5";
		}
	},


	SL_addEvent: function( obj, type, fn ) {
		if (obj) {
			if ( obj.attachEvent ) {
				obj['e'+type+fn] = fn;
				obj[type+fn] = function(){ obj['e'+type+fn]( window.event ); }
				obj.attachEvent( 'on'+type, obj[type+fn] );
			} else 	obj.addEventListener(type, fn, false);
		}
	},



	SL_Bubble_Reposition: function() {
		setTimeout(function(){
			var doc = FExtension.browserInject.getDocument();
			var SLdivField = doc.getElementById("SL_shadow_translator");
			var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
			var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
			var position = SLdivField.getBoundingClientRect();
			var x = position.left;
			var y = position.top;
			var DELTAy = 1;
			if (doc.body.offsetHeight < window.innerHeight)	var DELTAy = 17;

			var DELTAx = 1;
			if (doc.body.offsetWidth < window.innerWidth)	var DELTAx = 17;

			if((x+SLdivField.offsetWidth)>(bodyScrollLeft+window.innerWidth-DELTAx)){
				TranslatorIM.SL_MoveX = (bodyScrollLeft+window.innerWidth-SLdivField.offsetWidth-DELTAx) +"px";
                                SLdivField.style.left = TranslatorIM.SL_MoveX;
			}
		}, 50);  
	},

	SL_GetTransCurPosition: function(e) {
	 try{
	  if(e){
		var doc = FExtension.browserInject.getDocument();
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		var id = e.target.id;
		var cl = e.target.className;
		var SLdivField = doc.getElementById("SL_shadow_translator");
		if(cl!="SL_options" && (id.indexOf("SL_")==-1 || id=="SL_button")){
			if (e.pageX || e.pageY)	{
				posx = e.pageX;
				posy = e.pageY;
			}
			else if (e.clientX || e.clientY) {
				posx = e.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft;
				posy = e.clientY + doc.body.scrollTop + doc.getDocument().documentElement.scrollTop;
			}


			var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
			var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;

			var DELTAy = 1;
			if (doc.body.offsetHeight < window.innerHeight)	var DELTAy = 17;

			var DELTAx = 1;
			if (doc.body.offsetWidth < window.innerWidth)	var DELTAx = 17;

			TranslatorIM.SL_MoveX = posx - TranslatorIM.SL_Xdelta + "px";
			if((posx - TranslatorIM.SL_Xdelta) < bodyScrollLeft) {
				TranslatorIM.SL_MoveX = (bodyScrollLeft+DELTAx) +"px";
			}
			if((posx - TranslatorIM.SL_Xdelta) > (bodyScrollLeft+window.innerWidth - SLdivField.offsetWidth-DELTAx) ) {
				TranslatorIM.SL_MoveX = (bodyScrollLeft+window.innerWidth - SLdivField.offsetWidth-DELTAx) +"px";
			}
		
			TranslatorIM.SL_MoveY = posy - TranslatorIM.SL_Ydelta + "px";
			if((posy - TranslatorIM.SL_Ydelta) < bodyScrollTop) {
				TranslatorIM.SL_MoveY = bodyScrollTop +"px";
			}
			if((posy - TranslatorIM.SL_Ydelta) > (bodyScrollTop+window.innerHeight - SLdivField.offsetHeight-DELTAy) ) {
				TranslatorIM.SL_MoveY = (bodyScrollTop+window.innerHeight - SLdivField.offsetHeight-DELTAy) +"px";
			}



			if(TranslatorIM.SL_FRAME==0){
				TranslatorIM.GlobalBoxY=TranslatorIM.SL_MoveY.replace("px","")-bodyScrollTop;
				TranslatorIM.GlobalBoxX=TranslatorIM.SL_MoveX.replace("px","")-bodyScrollLeft;
	               		FExtension.browserInject.runtimeSendMessage({greeting: "SAVE_COORD:>"+TranslatorIM.GlobalBoxX+","+TranslatorIM.GlobalBoxY}, function(response) {});
			}
			SLdivField.style.left = TranslatorIM.SL_MoveX;
			SLdivField.style.top = TranslatorIM.SL_MoveY;


			var OBJ = doc.getElementById('SL_pin');

			if(TranslatorIM.SL_FRAME==0){
				if(cl!="SL_options"){
					OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-on.png')+")";
					OBJ.title=FExtension.element(TranslatorIM.SL_LOC,"extUnPin_ttl");
					TranslatorIM.SL_NEST="FLOAT";
					TranslatorIM.SL_arrows('all');
					TranslatorIM.SL_SID_PIN="true";
					TranslatorIM.SL_FLOATER();
				} 
			}

			if(id!="" || cl!=""){
				//STOPS MOUSE EVENT WHEN A CURSOR IS PRESSED ON THE ARROWS
				if(id=="SL_arrow_down" || id=="SL_arrow_up" || id=="SL_Balloon_Close" || cl=="SL_options"){ 
					var sel = window.getSelection ? window.getSelection() : document.selection;
					SLdivField.style.backgroundColor = "#FEFEFE";
					TranslatorIM.SL_ShowBalloon();
					sel.removeAllRanges();
				}

				//STOPS MOUSE EVENT WHEN A CURSOR IS OUT OF VIEWPORT

				var OUTofVIEWport=5; // was: 50;
				if(e.clientX<=OUTofVIEWport || e.clientY<10 || (e.clientX+OUTofVIEWport) >= (window.innerWidth-DELTAx) || (e.clientY+OUTofVIEWport) >= (window.innerHeight-DELTAy)){
					var sel = window.getSelection ? window.getSelection() : document.selection;
					SLdivField.style.backgroundColor = "#FEFEFE";
					TranslatorIM.SL_ShowBalloon();
					sel.removeAllRanges();
					if (e.stopPropagation) {
					      e.stopPropagation();
					}
				}
			}
		}
	   }
	 }catch(ex){}
	},

	SL_IMG_LOADER: function(){
		TranslatorIM.LISTofPR = TranslatorIM.SL_ALL_PROVIDERS_BBL.split(",");
		for (var SL_I = 0; SL_I < TranslatorIM.LISTofPR.length; SL_I++){
		    switch(TranslatorIM.LISTofPR[SL_I]){
			case "Google": TranslatorIM.LISTofPRpairs[SL_I]=LISTofLANGsets[0];break;
			case "Microsoft": TranslatorIM.LISTofPRpairs[SL_I]=LISTofLANGsets[1];break;
			case "Translator": TranslatorIM.LISTofPRpairs[SL_I]=LISTofLANGsets[2];break;
			case "Yandex": TranslatorIM.LISTofPRpairs[SL_I]=LISTofLANGsets[3];break;
		    }	
		}
	        var ext = FExtension.browserInject;
		var doc = ext.getDocument()
            	doc.getElementById('SL_pin').style.background='url('+ext.getURL('content/img/util/pin-on.png')+')';

       		doc.getElementById('SL_TTS_voice').style.background='url('+ext.getURL('content/img/util/ttsvoice.png')+')';
            	doc.getElementById('SL_switch_b').style.background='url('+ext.getURL('content/img/util/switchb.png')+')';
       	    	doc.getElementById('SL_copy').style.background='url('+ext.getURL('content/img/util/copy.png')+')';
               	doc.getElementById('SL_bbl_font').style.background='url('+ext.getURL('content/img/util/font.png')+')';
            	doc.getElementById('SL_bbl_help').style.background='url('+ext.getURL('content/img/util/bhelp.png')+')';
	    	doc.getElementById('SL_Balloon_options').style.background="#FFF url('"+ext.getURL('content/img/util/bg3.png')+"')";
    		doc.getElementById('SL_loading').style.background="url('"+ext.getURL('content/img/util/loading.gif')+"')";
	    	doc.getElementById('SLHKclose').style.background="url('"+ext.getURL('content/img/util/delete.png')+"')";
	    	doc.getElementById('SL_arrow_down').style.background="url('"+ext.getURL('content/img/util/down.png')+"')";
    		doc.getElementById('SL_arrow_up').style.background="url('"+ext.getURL('content/img/util/up.png')+"')";
	    	doc.getElementById('SL_BBL_IMG').style.background="url('"+ext.getURL('content/img/util/bbl-logo.png')+"')";
	},

	//---------------BALLOON

        CONTROL_SUM_SYN: function (text){
           if(TranslatorIM.SL_DETECT == "") TranslatorIM.CONTROL_SUM="";
	},

	DODetection: function(myTransText) {
 	   myTransText = myTransText.replace(/@/ig,"")
	   myTransText = myTransText.trim();
	   var doc = FExtension.browserInject.getDocument();
	   TranslatorIM.SL_SETINTERVAL_ST=0;
	   var AUTO = doc.getElementById('SL_locer').checked;
	   var isAuto=0;

	   //DETECTION ONLY ONCE-------------------
           TranslatorIM.CONTROL_SUM_SYN(myTransText);
	   if(TranslatorIM.CONTROL_SUM == myTransText){
		AUTO = true;
		isAuto = 0;
	   } else TranslatorIM.CONTROL_SUM = myTransText;
	   //DETECTION ONLY ONCE-------------------
	   if(doc.getElementById('SL_lng_from').value=="auto"){AUTO = false; isAuto=1;}

	   if(AUTO==false || isAuto==1){
		  if(myTransText!=""){

			    myTransText = myTransText.replace(/|/g,"");
			    myTransText = myTransText.replace(/&/g,"");
			    myTransText = myTransText.replace(/$/g,"");
			    myTransText = myTransText.replace(/^/g,"");
			    myTransText = myTransText.replace(/~/g,"");
			    myTransText = myTransText.replace(/`/g,"");
			    myTransText = myTransText.replace(/@/g,"");
			    myTransText = myTransText.replace(/%/g," ");
			    var a=Math.floor((new Date).getTime()/36E5)^123456;
			    var tk = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);
			    var num = Math.floor((Math.random() * SL_GEO.length)); 
			    var theRegion = SL_GEO[num];
			    var cntr = myTransText.split(" ");
                	    var newTEXT = truncStrByWord(myTransText,100);
			    if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;


			    var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";
			    var SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(newTEXT)+"&sl=auto&tl=en&hl=en";



			   FExtension.browserInject.runtimeSendMessage({from:"content_detect", url: baseUrl, cgi:SL_Params,});
			   chrome.runtime.onMessage.addListener(function(msg) {
			   if (msg.from == "background") {
				TranslatorIM.BBL_DETECT = msg.detected;

						chrome.runtime.onMessage.removeListener(arguments.callee);
						if(TranslatorIM.BBL_DETECT!="" && TranslatorIM.BBL_DETECT!="<#>") {
							var resp = TranslatorIM.BBL_DETECT;
							TranslatorIM.BBL_DETECT="";

							if(doc.getElementById("SL_shadow_translator").style.display=='block'){	
							       	var myTransText = FExtension.browserInject.getSelectionText();
								if(myTransText == "") myTransText = TranslatorIM.SL_TEMP_TEXT;
								var AUTO = doc.getElementById('SL_locer').checked;
								DetLang = resp;
								var Det=DetLang;


						                TranslatorIM.CNTR('2211',Det+"/"+Det, newTEXT.length);

								// NOT TRUSTED LANGUAGES
								myTransText = myTransText.trim();
								TranslatorIM.globaltheQ = myTransText.split(" ").length;

					                        if(TranslatorIM.SL_UNTRUST_WORD.indexOf(Det)!=-1 && TranslatorIM.globaltheQ==1){
									TranslatorIM.SLDetector(myTransText);
									return false;
								}	

					                        if(Det==TranslatorIM.SL_UNTRUST_TEXT){
									TranslatorIM.CONTROL_SUM="";TranslatorIM.SLDetector(myTransText);
									return false;
								}
								//----------------------


					                        TranslatorIM.SL_DETECT = DetLang;
					                        TranslatorIM.SL_DETECTED = DetLang;
				        	                TranslatorIM.SL_FLAG=0;
				                	        var cnt=0;

								var LANGSALL = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
								var LANGS = TranslatorIM.SL_LNG_LIST.split(",");

								for (var i = 0; i < LANGSALL.length; i++){
									var templang = LANGSALL[i].split(":");
									if(DetLang == templang[0]){ 
									        var tmp = doc.getElementById('SL_lng_from').value;
										if(tmp == "" || tmp == "auto") tmp = TranslatorIM.SL_langSrc;
										//DetLang=tmp;
										TranslatorIM.SL_FLAG=1;
										cnt=1;
									}
								}

			                        	        TranslatorIM.SL_WRONGLANGUAGEDETECTED=0;
								if(cnt==0){
			        	                                TranslatorIM.SL_DETECT = DetLang;
						                        TranslatorIM.SL_DETECTED = DetLang;
									TranslatorIM.SL_setTMPdata("BL_D_PROV","Google");
									TranslatorIM.SL_setTMPdata("BL_T_PROV","Google");
									TranslatorIM.SL_WRONGLANGUAGEDETECTED=1;
								}

				                                TranslatorIM.SL_HideShowTTSicon(); 
			        	                	TranslatorIM.LNGforHISTORY = DetLang;

				        	                TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
								TranslatorIM.SL_SID_TO   = doc.getElementById('SL_lng_to').value;

							        if(TranslatorIM.SL_SID_TO!=""){
									doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
									doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
								}

						                if(doc.getElementById('SL_lng_to').value==resp && doc.getElementById('SL_lng_from').value!="auto"){
						                        var TMP=doc.getElementById('SL_lng_to').value;
						                        doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
					        	                doc.getElementById('SL_lng_from').value = TMP;
									TranslatorIM.SL_SID_FROM=doc.getElementById('SL_lng_from').value;
									TranslatorIM.SL_SID_TO=doc.getElementById('SL_lng_to').value;
                                                                        TranslatorIM.AutoFlipState=1;
									TranslatorIM.FlippedByAuto=1;
					       	        	}else{
									// AVOIDING AUTO DETETECT TAG 
									var autopattern = TranslatorIM.AUTOhandler(doc,AUTO,DetLang);
			                       	        		if(doc.getElementById('SL_lng_from').value!=autopattern){
				                       	                cnt=0;
									for (var i = 0; i < LANGS.length; i++){
										var templang = LANGS[i].split(":");
										if(DetLang == templang[0]) cnt=1;
									}
									if(cnt==1){TranslatorIM.FlippedByAuto=1; doc.getElementById('SL_lng_from').value=DetLang;}
								}
							}

						        TranslatorIM.SL_SETINTERVAL_ST=1;

						   }
			        	    	}  else {
							TranslatorIM.SLDetector(TranslatorIM.SL_TEMP_TEXT);
						}

			  }
			});


	          }
	 }else{



	     	TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
		TranslatorIM.SL_SID_TO  = doc.getElementById('SL_lng_to').value;
       		if(TranslatorIM.SL_SID_TO!=""){
			doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
			doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
		}
		if(TranslatorIM.SL_SID_FROM=="auto" && TranslatorIM.SL_DETECT!="" && doc.getElementById('SL_locer').checked==false) doc.getElementById('SL_lng_from').value=TranslatorIM.SL_DETECT;

		TranslatorIM.SL_SETINTERVAL_ST=1;


	 }

         TranslatorIM.FlipNonStandartDir(doc);
	},


	FlipNonStandartDir: function(doc){

		if(doc.getElementById('SL_lng_from').value != "auto" && doc.getElementById('SL_locer').checked==false){
		        if(TranslatorIM.SL_DETECT == "zh") TranslatorIM.SL_DETECT="zh-CN";
			if(TranslatorIM.SL_DETECT == "zt") TranslatorIM.SL_DETECT="zh-TW";
			if(TranslatorIM.SL_DETECT == "or-IN") TranslatorIM.SL_DETECT="or";
			if(TranslatorIM.SL_DETECT == "ku-Latn") TranslatorIM.SL_DETECT="ku";
			if(TranslatorIM.SL_DETECT == "ku-Arab") TranslatorIM.SL_DETECT="ckb";
			if(TranslatorIM.SL_DETECT == "sr-Latn-RS") TranslatorIM.SL_DETECT="sr-Latn";


		  	if(doc.getElementById("SL_lng_to").value == "tlsl" && TranslatorIM.SL_DETECT == "tl") TranslatorIM.SL_DETECT = "tlsl";
			if(doc.getElementById("SL_lng_to").value == "srsl" && TranslatorIM.SL_DETECT == "sr") TranslatorIM.SL_DETECT = "srsl";
		  	if(doc.getElementById("SL_lng_to").value == "tl" && TranslatorIM.SL_DETECT == "tlsl") TranslatorIM.SL_DETECT = "tl";
		  	if(doc.getElementById("SL_lng_to").value == "sr" && TranslatorIM.SL_DETECT == "srsl") TranslatorIM.SL_DETECT = "sr";

		  if(doc.getElementById("SL_lng_to").value == TranslatorIM.SL_DETECT){
			var TMP=doc.getElementById('SL_lng_to').value;
			doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
			doc.getElementById('SL_lng_from').value = TMP;
			doc.getElementById('SL_lng_from').title=FExtension.element(TranslatorIM.SL_LOC,'extDetected') + " " + TranslatorIM.SL_GetLongName(TranslatorIM.SL_DETECT);
		  }
		}

	},



	SLDetector: function(myTransText) {
		myTransText = myTransText.replace(/@/ig,"");
		setTimeout(function() {

		var doc = FExtension.browserInject.getDocument();
		TranslatorIM.SL_SETINTERVAL_ST=0;
		var AUTO = doc.getElementById('SL_locer').checked;
		if(AUTO==false || doc.getElementById('SL_lng_from').value=="auto"){
		  if(myTransText!=""){

		    myTransText = myTransText.replace(/|/g,"");
		    myTransText = myTransText.replace(/&/g,"");
		    myTransText = myTransText.replace(/$/g,"");
		    myTransText = myTransText.replace(/^/g,"");
		    myTransText = myTransText.replace(/~/g,"");
		    myTransText = myTransText.replace(/`/g,"");
		    myTransText = myTransText.replace(/@/g,"");
		    myTransText = myTransText.replace(/%/g," ");

		    var theLIMIT = 100;
		    //myTransText = TranslatorIM.DELAY+"XX"+myTransText;
		    var fr = doc.getElementById('SL_lng_from').value;
		    if(doc.getElementById('SL_lng_from').value=="auto") fr="*a";
                    TranslatorIM.CNTRP('2211',fr+"/"+doc.getElementById('SL_lng_to').value, truncStrByWord(myTransText,100).length);


		    var SLDImTranslator_url = TranslatorIM.ImTranslator_theurl+"ld.asp?tr=bl&text="+encodeURIComponent(truncStrByWord(myTransText,theLIMIT));

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
				if(ajaxRequest.readyState == 4){

		                   var resp = ajaxRequest.responseText;

		                   if(resp!=""){     
					if(resp.indexOf('#|#')!=-1){
				 	  	var tmp=decodeURIComponent(resp);
						var tmp2 = tmp.split("#|#");
					  	resp=tmp2[0];               

						var DetLang = resp;

						DetLang=DetLang.replace("zh","zh-CN");
						DetLang=DetLang.replace("zt","zh-TW");

                                                TranslatorIM.SL_FLAG=0;
						var LANGSALL = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
						var LANGS = TranslatorIM.SL_LNG_LIST.split(",");
						var cnt=0;



						for (var i = 0; i < LANGSALL.length; i++){
							var templang = LANGSALL[i].split(":");
							if(DetLang == templang[0] ){ 
							        var tmp = doc.getElementById('SL_lng_from').value;
								if(tmp == "" || tmp == "auto") tmp = TranslatorIM.SL_langSrc;
								//DetLang=tmp;
								cnt=1;
								TranslatorIM.SL_FLAG=1;
							}
						}


                                                TranslatorIM.SL_WRONGLANGUAGEDETECTED=0;
						if(cnt==0){
							if(doc.getElementById('SL_lng_from').value!="auto") DetLang=doc.getElementById('SL_lng_from').value;
						        else DetLang="en";
							TranslatorIM.SL_WRONGLANGUAGEDETECTED=1;						        
							TranslatorIM.SL_setTMPdata("BL_D_PROV","Google");
							TranslatorIM.SL_setTMPdata("BL_T_PROV","Google");
						}

                                                TranslatorIM.SL_DETECT =  DetLang;
			                        TranslatorIM.SL_DETECTED = DetLang;
		                        	TranslatorIM.LNGforHISTORY = DetLang;
                                                TranslatorIM.SL_HideShowTTSicon();


			                        TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
						TranslatorIM.SL_SID_TO   = doc.getElementById('SL_lng_to').value;
						        if(TranslatorIM.SL_SID_TO!=""){
								doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
								doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
							}




			                        if(doc.getElementById('SL_lng_to').value==DetLang && doc.getElementById('SL_lng_from').value!="auto"){
			                                var TMP=doc.getElementById('SL_lng_to').value;
			                                doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
		        	                        doc.getElementById('SL_lng_from').value = TMP;
                                                        TranslatorIM.AutoFlipState=1;
							TranslatorIM.FlippedByAuto=1;
		                	        }else{
							// AVOIDING AUTO DETETECT TAG 
							var autopattern = TranslatorIM.AUTOhandler(doc,AUTO,DetLang);
		                        	        if(doc.getElementById('SL_lng_from').value!=autopattern){
		                        	                cnt=0;
								for (var i = 0; i < LANGS.length; i++){
									var templang = LANGS[i].split(":");
									if(DetLang == templang[0]) cnt=1;
								}
								if(cnt==1){TranslatorIM.FlippedByAuto=1; doc.getElementById('SL_lng_from').value=DetLang;}
							}
						}
					        TranslatorIM.SL_SETINTERVAL_ST=1;


					} else 	{
						var DetLang = "en";

                                                TranslatorIM.SL_FLAG=0;
						var LANGSALL = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
						var LANGS = FExtension.element(TranslatorIM.SL_LOC,'extLanguagesNew').split(",");
						for (var i = 0; i < LANGSALL.length; i++){
							var templang = LANGSALL[i].split(":");
							if(DetLang == templang[0]){ 
							        var tmp = doc.getElementById('SL_lng_from').value;
								if(tmp == "" || tmp == "auto") tmp = TranslatorIM.SL_langSrc;
								DetLang=tmp;
								TranslatorIM.SL_FLAG=1;
							}
						}

                                                
		                        	TranslatorIM.LNGforHISTORY = DetLang;
			                        TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
						TranslatorIM.SL_SID_TO   = doc.getElementById('SL_lng_to').value;
						        if(TranslatorIM.SL_SID_TO!=""){
								doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
								doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
							}



			                        if(doc.getElementById('SL_lng_to').value==resp && doc.getElementById('SL_lng_from').value!="auto"){
			                                var TMP=doc.getElementById('SL_lng_to').value;
			                                doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
		        	                        doc.getElementById('SL_lng_from').value = TMP;
		                	        }else{
		                        	        if(doc.getElementById('SL_lng_from').value!="auto"){
		                        	                cnt=0;
								for (var i = 0; i < LANGS.length; i++){
									var templang = LANGS[i].split(":");
									if(DetLang == templang[0]) cnt=1;
								}
								if(cnt==1) doc.getElementById('SL_lng_from').value=DetLang;
							}


						}
					        TranslatorIM.SL_SETINTERVAL_ST=1;
					}
				    } else {
					doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc; 
					doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst; 
					TranslatorIM.SL_SETINTERVAL_ST=1;
				    }
				}
			}
			ajaxRequest.open("POST", SLDImTranslator_url, true);
			ajaxRequest.send(null); 
		  }
		 }else{
		      	TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
			TranslatorIM.SL_SID_TO  = doc.getElementById('SL_lng_to').value;
	        		if(TranslatorIM.SL_SID_TO!=""){
					doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
					doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
				}

			TranslatorIM.SL_SETINTERVAL_ST=1;
		 }
		}, 300);
	},


        theLastStageTranslator: function (){

	},

	truncStrByWord: function(str, length){
		if(str != "undefined"){
			if(str.length > 25){
				length = length - 25;
				var thestr = str;
				if (str.length > length) {
					str = str.substring(0, length);
					str = str.replace(new RegExp("/(.{1,"+length+"})\b.*/"), "$1");    // VK - cuts str to max length without splitting words.
					var str2 = thestr.substring(length, (length+25));
					var tempstr = str2.split(" ");
					var tmp = "";
					for (var i = 0; i < tempstr.length - 1; i++){
						tmp = tmp + tempstr[i] + " ";
					} 
					str = str + tmp;
				}
			} else 
				str = str + " ";
		}
		return str;
	},

	SL_IF_DETECT_IS_PRESENT: function(dl, ob){
		var resp=dl, out=0;
		var doc = FExtension.browserInject.getDocument();
		if(doc.getElementById('SL_locer').checked==true){
			dl = "";
			TranslatorIM.SL_DETECTED="";
			for(var i=0; i < ob.length; i++) if(ob[i].value == dl) out=1;
			if(out==0 && ob.value != "auto") resp = ob.value;
		} else resp = dl;
		return resp;
	},



	SL_Voice: function(){
	   TranslatorIM.TTS_btn_location=1;
           var doc = FExtension.browserInject.getDocument();

	   var TTStext=TranslatorIM.SL_TEMP_TEXT.replace(/@/g, " ");
	   var text = TTStext;
	   text = TranslatorIM.truncStrByWord(text,1200);

	   var SL_from = TranslatorIM.SL_IF_DETECT_IS_PRESENT(TranslatorIM.SL_DETECTED, doc.getElementById("SL_lng_from"));

	   SL_from = SL_from.replace("-TW","");
	   SL_from = SL_from.replace("-CN","");
	   switch(TranslatorIM.SL_SLVoices){
		case "0": if(TranslatorIM.SL_ALLvoices.indexOf(SL_from)!=-1){
                              if(SL_TTS.indexOf(SL_from)!=-1){
				if(text.length>TranslatorIM.GTTS_length) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_from+"&text="+encodeURIComponent(text)); 
				else TranslatorIM.Google_TTS_ON_TOP(text,SL_from);
			      } else TranslatorIM.Google_TTS_ON_TOP(text,SL_from);
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  break;
		case "1": if(TranslatorIM.SL_ALLvoices.indexOf(SL_from)!=-1){
				if(G_TTS.indexOf(SL_from)!=-1) TranslatorIM.Google_TTS_ON_TOP(text,SL_from);
				else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  break;
		case "2": if(TranslatorIM.SL_ALLvoices.indexOf(SL_from)!=-1){
                              if(SL_TTS.indexOf(SL_from)!=-1) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_from+"&text="+encodeURIComponent(text));
			      else TranslatorIM.Google_TTS_ON_TOP(text,SL_from);
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  break;
	   }

	},

	SetTTStextLimit: function(text,limit){
	 text=text.replace(/(\r\n|\n|\r)/gm,"");
	 var ttstexttmp=text.split(" ");
	 var OutPut="";
	 var OutPut_="";
	 for(var i=0; i<ttstexttmp.length; i++){
	     OutPut=OutPut+ttstexttmp[i]+" ";
	     if(OutPut.length>limit) break;
	     else OutPut_=OutPut_+ttstexttmp[i]+" ";
	 }
	 return(OutPut_);
	},

	REMOTE_Voice: function(dir, text){

	   TranslatorIM.GOOGLE_TTS_backup_loader=0;
	   var BackUpDir = dir;
	   var BackUpText = text;


	   dir = dir.replace("-TW","");
	   dir = dir.replace("-CN","");
	   dir = dir.replace("en","en-BR");
	   dir = dir.replace("es","es-419");
//	   dir = dir.replace("pt","pt-BR");
	   if(dir=="fr-CA") dir="fr";
	   if(dir=="lzh") dir="zh";
	   if(dir=="yue") dir="zh";
	   if(dir=="pt") dir="pt-BR";


	   var a=Math.floor((new Date).getTime()/36E5)^123456;
	   var TK = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);

	   var length = text.length;
	   var num = Math.floor((Math.random() * SL_GEO.length)); 
	   var theRegion = SL_GEO[num];
           if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;
	   var baseUrl = "https://translate.google."+theRegion;

           var doc = FExtension.browserInject.getDocument();

	   if(text=="") text=doc.getElementById("SL_shadow_translation_result").outerHTML.replace(/<[^>]*>?/g,'').substring(0,100);

	   var client = "tw-ob";

//	   if(BackUpDir=="es") client="t";


	   baseUrl = baseUrl+'/translate_tts?tk='+TK+'&ie=UTF-8&tl='+dir+'&total=1&idx=0&textlen='+length+'&client='+client+'&q='+encodeURIComponent(text);  
	    FExtension.browserInject.runtimeSendMessage({greeting: "TTS_BBL_on:>"+TranslatorIM.TTS_btn_location +"||"+ baseUrl}, function(response) {
            TranslatorIM.SL_DETECT = "";	


	     
		     if(doc.getElementById("PL_lbplayer")){
			doc.getElementById("PL_lbplayer").style.display='none';
			TranslatorIM.synth.cancel();
		     }


			setTimeout(function(){

			   try{
		        	 if(TranslatorIM.TTS_status=="off") {					
					if(PLATFORM=="Chrome" && TranslatorIM.TTSbackupLangs.indexOf(BackUpDir)!=-1)TranslatorIM.GOOGLE_TTS_backup(BackUpText,BackUpDir);
					else{
				        	var furl = FExtension.browserInject.getURL('content/html/options/options.html?feed');
						doc.getElementById("SL_player2").innerHTML="<div id='noplmsg' align=center><font color='#BD3A33'>"+FExtension.element(TranslatorIM.SL_LOC,"extADVstu")+"</font><br><a href='"+furl+"' target='_blank' class='SL_links'>"+FExtension.element(TranslatorIM.SL_LOC,"extFeedback")+"</a></div>";     
				     		doc.getElementById('SL_player2').style.height="35px";
//					     	if(doc.getElementById("SL_alert100")) doc.getElementById("SL_alert100").style.display="none";
					}
				 }
			   } catch (ex) {if(PLATFORM=="Chrome" && TranslatorIM.TTSbackupLangs.indexOf(BackUpDir)!=-1 && TranslatorIM.GOOGLE_TTS_backup_loader==0)TranslatorIM.GOOGLE_TTS_backup(BackUpText,BackUpDir);}

       		TranslatorIM.SL_bring_DOWN();


			}, 100);  

	    }); 
	},


	REMOTE_Voice_Close: function(){
	    try{
	       FExtension.browserInject.runtimeSendMessage({greeting: "TTS_BBL_off:>"}, function(response) {}); 
	       if(window.event.target.lang==""){
	  	  var doc = FExtension.browserInject.getDocument();
		  TranslatorIM.synth.cancel();
		  if(window.event.target.id!="SL_volume" && window.event.target.id!="SL_controls"){
			  if(doc.getElementById("PL_lbplayer"))doc.getElementById("PL_lbplayer").style.display='none';
//			  if(doc.getElementById('SL_alert100')) doc.getElementById('SL_alert100').style.display="none";
			  if(doc.getElementById('SL_player2')) doc.getElementById('SL_player2').style.display="none";
		  }
		  var frame = doc.getElementById('lbframe');
		  if(frame)	frame.parentNode.removeChild(frame);
	          var target = window.event.target || window.event.srcElement;
	          var id = target.id;
	          if(id!="SL_controls" && id!="SL_volume" && id!="SL_myRange"){
			  doc.getElementById("SL_player2").innerText="";
		  } else {
			if(id=="SL_controls"){
				if(doc.getElementById(id).className=="SL_play") TranslatorIM.handleSpeechResume();
				else TranslatorIM.handleSpeechPause();
			}
			if(id=="SL_volume") TranslatorIM.handleSpeechVolume();
		  }
		}
//		if(doc.getElementById('SL_alert100')) doc.getElementById('SL_alert100').style.display="none";
		if(doc.getElementById('SL_player2')) doc.getElementById('SL_player2').style.display="none";
	    } catch (ex){}
            TranslatorIM.GOOGLE_TTS_backup_loader=1;
	},


	SL_CopyToClipBoard: function(){
	  	var doc = FExtension.browserInject.getDocument();
		var OBJ = doc.getElementById('SL_shadow_translation_result');
		OBJ.contentEditable = true;
		OBJ.unselectable = "off";
		OBJ.focus();
		var ZIPtext = OBJ.innerHTML;
		//This line is for plant text only
		var preZIPtext = ZIPtext.replace(/<br>/ig,'~');
		preZIPtext = preZIPtext.replace(/(<([^>]+)>)/ig,'').replace(/&nbsp;/ig,'');
		preZIPtext = preZIPtext.replace(/~/ig,'<br>');
		OBJ.innerHTML = preZIPtext;
	        FExtension.browserInject.getDocument().execCommand('SelectAll');
		FExtension.browserInject.getDocument().execCommand("Copy", false, null);
		OBJ.innerHTML = ZIPtext;
                OBJ.style.opacity=0.2;
		setTimeout(function(){ 
			OBJ.style.opacity=1; 
			if (FExtension.browserInject.getDocument().getSelection) {
			    if (FExtension.browserInject.getDocument().getSelection().empty) {  // Chrome
			        FExtension.browserInject.getDocument().getSelection().empty();
			    } else if (FExtension.browserInject.getDocument().getSelection().removeAllRanges) {  // Firefox
			        FExtension.browserInject.getDocument().getSelection().removeAllRanges();
			    }
			} else if (FExtension.browserInject.getDocument().selection) {  // IE?
			    FExtension.browserInject.getDocument().selection.empty();
			}
       	                doc.getElementById('SL_copy_tip').style.display="block";
               	        doc.getElementById('SL_copy_tip').innerHTML=FExtension.element(TranslatorIM.SL_LOC,"extTextCopied");
			setTimeout(function(){ 
	       	                doc.getElementById('SL_copy_tip').style.display="none";
			}, 1500);
		}, 350);
		OBJ.contentEditable = false;
	},

	SL_Font: function(){
	  	var doc = FExtension.browserInject.getDocument();
		var OBJ = doc.getElementById('SL_shadow_translation_result');
		var OBJ2 = doc.getElementById('SL_shadow_translation_result2');
		var OBJ3 = doc.getElementById('SL_bbl_font');
		if(TranslatorIM.SL_FontSize_bbl == OBJ.style.fontSize){
			if(TranslatorIM.SL_FontSize_bbl=="14px"){
				OBJ.style.fontSize = "16px";
				OBJ.style.lineHeight = "22px";
				OBJ2.style.fontSize = "16px";
				OBJ2.style.lineHeight = "22px";
				OBJ3.className = "SL_font_off";
				OBJ3.style.background="url("+FExtension.browserInject.getURL('content/img/util/font-on.png')+")";
				TranslatorIM.SL_FontSize_bbl = "16px";
			}else{
				OBJ.style.fontSize = "14px";
				OBJ.style.lineHeight = "20px";
				OBJ2.style.fontSize = "14px";
				OBJ2.style.lineHeight = "20px";
				OBJ3.className = "SL_font_on";
				OBJ3.style.background="url("+FExtension.browserInject.getURL('content/img/util/font.png')+")";
				TranslatorIM.SL_FontSize_bbl = "14px";
			}

			TranslatorIM.SL_FONT_SID = TranslatorIM.SL_FontSize_bbl;
		}
                TranslatorIM.SL_JUMP(doc);
		TranslatorIM.SAVE_SES_PARAMS();

	},
	SL_pinme: function(){                 
	  if(TranslatorIM.SL_FRAME==0){
	        var doc = FExtension.browserInject.getDocument();
		var OBJ = doc.getElementById('SL_pin');
		var SLdivField = doc.getElementById("SL_shadow_translator");
		if(OBJ.style.background.indexOf("pin-off.png")!=-1){
			setTimeout(function() {
				OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-on.png')+")";
				OBJ.className = "SL_pin_on";
				OBJ.title = FExtension.element(TranslatorIM.SL_LOC,"extUnPin_ttl");
				TranslatorIM.SL_NEST="FLOAT";
				TranslatorIM.SL_FLOATER();
			        var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
				var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
				TranslatorIM.SL_MoveY=Math.ceil(SLdivField.style.top.replace("px",""))+"px";
				TranslatorIM.SL_MoveX=Math.ceil(SLdivField.style.left.replace("px",""))+"px";
				TranslatorIM.GlobalBoxY=(parseInt(TranslatorIM.SL_MoveY.replace("px",""))-bodyScrollTop);
//				TranslatorIM.GlobalBoxX=(parseInt(TranslatorIM.SL_MoveX.replace("px",""))-bodyScrollLeft+SLdivField.offsetWidth);
				TranslatorIM.GlobalBoxX=3000;
		               	FExtension.browserInject.runtimeSendMessage({greeting: "SAVE_COORD:>"+TranslatorIM.GlobalBoxX+","+TranslatorIM.GlobalBoxY}, function(response) {});
			}, 100);
		    TranslatorIM.SL_SID_PIN="true";
		}else{
			TranslatorIM.SL_NEST="";
			OBJ.className = "SL_pin_off";
			OBJ.title = FExtension.element(TranslatorIM.SL_LOC,"extPin_ttl");
			OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-off.png')+")";
			TranslatorIM.SL_SID_PIN="false";
	               	FExtension.browserInject.runtimeSendMessage({greeting: "SAVE_COORD:>0,0"}, function(response) {});
			TranslatorIM.SL_MoveY="-10000px";
			TranslatorIM.SL_MoveX="-10000px";
//			SLdivField.style.left=Math.ceil(SLdivField.style.left.replace("px","")-20)+"px";
			doc.onscroll = function(){}; 
		}   
		TranslatorIM.SAVE_SES_PARAMS();
	    }
	},
	SL_FLOATER: function(){
	  if(TranslatorIM.SL_FRAME==0){
	    	try{ 

			//ALWAYS KEEPS FLOATING MODE FOR 'SAVE RESENT WORK'

			if(TranslatorIM.SL_SAVETEXT == 1) TranslatorIM.SL_NEST= "FLOAT";

			if(TranslatorIM.SL_NEST=="FLOAT"){
			        var doc = FExtension.browserInject.getDocument();
				var THEobj = doc.getElementById("SL_shadow_translator");
				if(TranslatorIM.GlobalBoxY<0)TranslatorIM.GlobalBoxY=1;
				if(parseInt(TranslatorIM.SL_MoveX.replace("px",""))<0) TranslatorIM.SL_MoveX = TranslatorIM.GlobalBoxX +"px";
				if(TranslatorIM.GlobalBoxX>0){
					THEobj.style.top = TranslatorIM.SL_getScrollY() + TranslatorIM.GlobalBoxY + "px";
					THEobj.style.left = TranslatorIM.SL_MoveX;
				}else{
					THEobj.style.top = TranslatorIM.SL_getScrollY() + (window.innerHeight / 2 - 150) + "px";
					THEobj.style.left = (window.innerWidth - 460 - 30) + "px";
				}
				TranslatorIM.WINDOW_and_BUBBLE_alignment(doc,THEobj);
				doc.onscroll = TranslatorIM.SL_FLOATER; 
				window.addEventListener("resize", TranslatorIM.SL_FLOATER);
				doc.getElementById("SL_arrow_up").style.display="none";
			} else doc.onscroll = function(){}; 
		} catch(e){}
	  }
	},

	SL_getScrollX: function(){
		var scrOfX = 0;
	        var doc = FExtension.browserInject.getDocument();
		if( doc.body && doc.body.scrollLeft ) scrOfX = doc.body.scrollLeft;
		else if( doc.documentElement && doc.documentElement.scrollLeft  ) scrOfX = doc.documentElement.scrollLeft;
		return scrOfX;
	},

	SL_getScrollY: function(){
		var scrOfY = 0;
	        var doc = FExtension.browserInject.getDocument();
		if( doc.body && doc.body.scrollTop ) scrOfY = doc.body.scrollTop;
		else if( doc.documentElement && doc.documentElement.scrollTop  ) scrOfY = doc.documentElement.scrollTop;
		return scrOfY;
	},

	SL_GOOGLE_WPT: function(){
		if(FExtension.browserInject.getDocument().getElementById("wtgbr")){ 
			FExtension.browserInject.getDocument().getElementById("wtgbr").style.display = 'none';
			FExtension.browserInject.getDocument().getElementById("gt-bbar").style.display = 'none';
			FExtension.browserInject.getDocument().getElementById("clp-btn").style.display = 'none';
			FExtension.browserInject.getDocument().getElementById("contentframe").style.marginTop = '-60px';

			var frames = FExtension.browserInject.getDocument().getElementsByTagName('iframe');
			for(var i = 0; i < frames.length; i++){
			   if(frames[i].name=='c'){ frames[i].sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation"; break; }
			}

		} 
	},
	HotKeysWindow: function(e, st){
		 var s = FExtension.browserInject.getSelectionText();

		 s=s.substring(0,TranslatorIM.SL_PLANSHET_LIMIT);
//		 if(st==0) s="";
//		 if(s!=""){
		  chrome.extension.sendMessage({greeting: "hello"}, function(response) {
	              if(response){
		        //console.log(response.farewell);
        	      }
		  });
		  s=s.replace(/(^[\s]+|[\s]+$)/g, '');
		  var theQ=s.split(" ").length;
	          if(s.match(/[-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`、\[\]]/g)!=null) theQ=100;
		  
 		  //if(TranslatorIM.SL_dict_bbl=="false") theQ=100;
		  if (s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;

		  if(theQ==1 && s!=""){
			  TranslatorIM.SL_MODE=1;
		          FExtension.browserInject.runtimeSendMessage({greeting: "PUSH:>"+s}, function(response) {});
		   }else{
			  TranslatorIM.SL_MODE=0;
		          FExtension.browserInject.runtimeSendMessage({greeting: "PUSH:>"+s}, function(response) {});
		   }
//		 }
	},

	SL_BALLOON_TRANSLATION: function(myTransText,evt,st) {   
//	   FExtension.browserInject.runtimeSendMessage({greeting: "CM_BBL:>" + TranslatorIM.SL_SID_TO}, function(response) {}); 
	   if(myTransText!=""){
		var doc = FExtension.browserInject.getDocument();


		doc.getElementById('SL_loading').style.display='block';
		TranslatorIM.SL_IS_DICTIONARY=0;
		doc.getElementById('SL_TTS_voice').style.display='block';
		doc.getElementById('SL_bbl_font_patch').style.display='none';

		if(TranslatorIM.AVOIDAUTODETECT==0){
		     var resp = TranslatorIM.i18n_LanguageDetect(myTransText,0);
		     if (resp != ""){
	                TranslatorIM.SL_DETECT = resp;
		        TranslatorIM.SL_FLAG=0;
			var DetLang = resp;

                       	var AUTO = doc.getElementById('SL_locer').checked;
			if(AUTO==false || doc.getElementById('SL_lng_from').value=="auto"){

                                var cnt=0;
                        	var LANGSALL = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
				var LANGS = TranslatorIM.SL_LNG_LIST.split(",");


                        	for (var i = 0; i < LANGSALL.length; i++){
					var templang = LANGSALL[i].split(":");
					if(DetLang == templang[0]){ 
					        var tmp = doc.getElementById('SL_lng_from').value;
						if(tmp == "" || tmp == "auto") tmp = TranslatorIM.SL_langSrc;
						TranslatorIM.SL_FLAG=1;
						cnt=1;
					}
				}


                       	        TranslatorIM.SL_WRONGLANGUAGEDETECTED=0;
				if(cnt==0){
       	                                TranslatorIM.SL_DETECT = DetLang;
					TranslatorIM.SL_setTMPdata("BL_D_PROV","Google");
					TranslatorIM.SL_setTMPdata("BL_T_PROV","Google");
					TranslatorIM.SL_WRONGLANGUAGEDETECTED=1;
				}
                                TranslatorIM.SL_HideShowTTSicon(); 
       	                	TranslatorIM.LNGforHISTORY = DetLang;

        	                TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
				TranslatorIM.SL_SID_TO   = doc.getElementById('SL_lng_to').value;
			        if(TranslatorIM.SL_SID_TO!=""){
					doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
					doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
				}


		                if(doc.getElementById('SL_lng_to').value==resp && doc.getElementById('SL_lng_from').value!="auto"){
		                        var TMP=doc.getElementById('SL_lng_to').value;
		                        doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
	        	                doc.getElementById('SL_lng_from').value = TMP;
					TranslatorIM.SL_SID_FROM=doc.getElementById('SL_lng_from').value;
					TranslatorIM.SL_SID_TO=doc.getElementById('SL_lng_to').value;
                                        TranslatorIM.AutoFlipState=1;
					TranslatorIM.FlippedByAuto=1;
	       	        	}else{
				// AVOIDING AUTO DETETECT TAG 
					var autopattern = TranslatorIM.AUTOhandler(doc,AUTO,DetLang);
	       	        		if(doc.getElementById('SL_lng_from').value!=autopattern){
	                       	                cnt=0;
						for (var i = 0; i < LANGS.length; i++){
							var templang = LANGS[i].split(":");
							if(DetLang == templang[0]) cnt=1;
						}
						if(cnt==1) doc.getElementById('SL_lng_from').value=DetLang;
					}
				}
        		        TranslatorIM.SL_SETINTERVAL_ST=1;
        	       } else  TranslatorIM.SL_SETINTERVAL_ST=1;   
		     } else {
			if(DET == 0) TranslatorIM.DODetection(myTransText);
			else         TranslatorIM.SLDetector(myTransText);
		     }
		}else 		TranslatorIM.SL_SETINTERVAL_ST=1;
		TranslatorIM.AVOIDAUTODETECT=0;
		var Tobj = doc.getElementById('SL_shadow_translation_result');
		var Tobj2 = doc.getElementById('SL_shadow_translation_result2');

                var SLdivField=doc.getElementById('SL_shadow_translator');
               	Tobj.innerText = "";
                Tobj2.innerText = "";

       		doc.getElementById('SL_loading').style.display='block';

		SLdivField.style.display='block';

		var cntr = 0;

		setTimeout(function(){
		    var SLIDL = setInterval(function(){
			if(cntr<250) {
			  if(TranslatorIM.SL_SETINTERVAL_ST==1) {
				clearInterval(SLIDL);
                                TranslatorIM.SL_SETINTERVAL_ST=0;
				TranslatorIM.SL_EXECUTE_TRANSLATION(myTransText,evt,st);
					if(Tobj.outerHTML.replace(/<[^>]*>?/g,'')==""){
						doc.getElementById('SL_loading').style.display = 'block';
		                                TranslatorIM.SL_JUMP(doc);
						doc.getElementById('SL_loading').style.display = 'none';
		                        }
				doc.getElementById('SL_loading').style.display = 'none';
				return true;
			  }
			} else {cntr=0;TranslatorIM.SL_SETINTERVAL_ST=1;}
			cntr++;
		    },10);  
 	         },50);  
          }	
	},

	InlineDataTransmitter: function (data){
	    data = unescape(data);
	    inlinerInjectHandleMessage({name: "inlinerSelectionResponse", message: data});
	},

        SL_SET_PROVIDERS: function(mode){
          TranslatorIM.ListProviders="";
 	  var doc = FExtension.browserInject.getDocument();
 	  var from = doc.getElementById("SL_lng_from").value;

	  var list = TranslatorIM.SL_LNG_CUSTOM_LIST;

	  if(list=="all") list = TranslatorIM.LISTofPRpairs[0];

	  var L1 = list.split(",");
	  var finded = 0;
	  for(var i=0; i<L1.length; i++){
	  	if(L1[i] == TranslatorIM.SL_DETECT) finded = 1;
	  }


//	  if(finded==0)	  if(TranslatorIM.SL_DETECT!="" && from=="auto") from = TranslatorIM.SL_DETECT;
//	  else	  if(TranslatorIM.SL_DETECT!="") from = TranslatorIM.SL_DETECT;

	  if(finded==1)	  if(TranslatorIM.SL_DETECT!="") from = TranslatorIM.SL_DETECT;


	  if(doc.getElementById("SL_locer").checked==true)  from = doc.getElementById("SL_lng_from").value;

 	  var to = doc.getElementById("SL_lng_to").value;

 	  try{

 	  if(to!=""){
 	   for(var I=0; I<TranslatorIM.LISTofPR.length; I++){
            if(mode==1){
		    if(TranslatorIM.BL_D_PROV == TranslatorIM.LISTofPR[I]) 	doc.getElementById("SL_P"+I).className="SL_BL_LABLE_ON";
		    else doc.getElementById("SL_P"+I).className="SL_BL_LABLE_OFF";
	    }else{
		    if(TranslatorIM.BL_T_PROV == TranslatorIM.LISTofPR[I]) 	doc.getElementById("SL_P"+I).className="SL_BL_LABLE_ON";
		    else doc.getElementById("SL_P"+I).className="SL_BL_LABLE_OFF";
	    }


	    if(from!="auto"){
	     var ftemp = from;
	     if(TranslatorIM.SL_DETECT!=from) ftemp = TranslatorIM.SL_DETECT;
	     if(doc.getElementById('SL_locer').checked==true) ftemp = from;
	     if(TranslatorIM.LISTofPRpairs[I].indexOf(","+ftemp) ==-1 || TranslatorIM.LISTofPRpairs[I].indexOf(","+to)==-1) doc.getElementById("SL_P"+I).className="SL_BL_LABLE_DEACT";
	     else TranslatorIM.ListProviders=TranslatorIM.ListProviders+TranslatorIM.LISTofPR[I]+",";
	     if(TranslatorIM.LISTofPR[I]=="Translator"){
	      if(TranslatorIM.LISTofPRpairs[I].indexOf(ftemp + "/" + to)==-1){
		 doc.getElementById("SL_P"+I).className="SL_BL_LABLE_DEACT";
                 TranslatorIM.ListProviders=TranslatorIM.ListProviders.replace(TranslatorIM.LISTofPR[I]+",","");
	      } else TranslatorIM.ListProviders=TranslatorIM.ListProviders+TranslatorIM.LISTofPR[I]+",";
	     }
	    } else {
	     if(TranslatorIM.LISTofPRpairs[I].indexOf(","+TranslatorIM.SL_DETECT) ==-1 || TranslatorIM.LISTofPRpairs[I].indexOf(","+to)==-1) doc.getElementById("SL_P"+I).className="SL_BL_LABLE_DEACT";
	     else TranslatorIM.ListProviders=TranslatorIM.ListProviders+TranslatorIM.LISTofPR[I]+",";
	     if(TranslatorIM.LISTofPR[I]=="Translator"){
	      if(TranslatorIM.LISTofPRpairs[I].indexOf(TranslatorIM.SL_DETECT + "/" + to)==-1){
		 doc.getElementById("SL_P"+I).className="SL_BL_LABLE_DEACT";
                 TranslatorIM.ListProviders=TranslatorIM.ListProviders.replace(TranslatorIM.LISTofPR[I]+",","");
	      } else TranslatorIM.ListProviders=TranslatorIM.ListProviders+TranslatorIM.LISTofPR[I]+",";
	     }
	    }
            TranslatorIM.ListProviders=TranslatorIM.ListProviders.replace("Translator,Translator","Translator");
           }
	  }

	  } catch(ex){}

	  if(TranslatorIM.SL_SHOW_PROVIDERS==0) {
	        var PR = "Google";
		TranslatorIM.ListProviders= PR + ",";	  
		TranslatorIM.SL_setTMPdata("BL_D_PROV",PR);
		TranslatorIM.SL_setTMPdata("BL_T_PROV",PR);
	  }           
        },

	SET_FIRST_AVAILABLE_PROV: function(){

	  if(TranslatorIM.SL_SHOW_PROVIDERS!=0) {
	    var doc = FExtension.browserInject.getDocument();
	    var s = FExtension.browserInject.getSelectionText();
	    if(s=="" && TranslatorIM.SL_temp_result!="") s=TranslatorIM.SL_temp_result;

	    s=s.replace(/(^[\s]+|[\s]+$)/g, '');
	    var theQ=s.split(" ").length;

  	    if(s.match(/[-/ΓÇº┬╖∩╣ò∩╣ù∩╝ü∩╝Ü∩╝îπÇé∩╣û∩╝ƒ:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
	    //if(TranslatorIM.SL_dict_bbl=="false") theQ=100;

	    if (s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;
	    TranslatorIM.SL_SET_PROVIDERS(theQ);
	    var theList = TranslatorIM.ListProviders.split(",");

	    if(theQ==1){
	      TranslatorIM.SL_MODE=1;	
	      if(TranslatorIM.BL_D_PROV=="" || TranslatorIM.BL_D_PROV==null || TranslatorIM.BL_D_PROV=="undefined"){
		  if(TranslatorIM.SL_dict_bbl=="true"){
			  var arr1 = TranslatorIM.SL_DICT_PRESENT.split(",");
			  for(I=0; I<(theList.length-1); I++){
			    for(J=0; J<arr1.length; J++){
		        	var arr2=arr1[J].split(":");
				if(arr2[1]==1 && theList[I]==arr2[0]){

					TranslatorIM.SL_setTMPdata("BL_D_PROV",arr2[0]);
					I=1000;J=1000;
				}
			    }
			  }
		 } else {
			TranslatorIM.SL_setTMPdata("BL_D_PROV",theList[0]);
		 }


		  var arr = TranslatorIM.SL_ALL_PROVIDERS_BBL.split(",");	
		  for(I=0; I<arr.length; I++){
			if(arr[I]==TranslatorIM.BL_D_PROV){
				doc.getElementById("SL_P"+I).className="SL_BL_LABLE_ON";
				I=1000;
			}
		  }
	      } else {
		 if(TranslatorIM.ListProviders.indexOf(TranslatorIM.BL_D_PROV)==-1){
		  var arr1 = TranslatorIM.SL_DICT_PRESENT.split(",");
		  for(I=0; I<(theList.length-1); I++){
		    for(J=0; J<arr1.length; J++){
		        var arr2=arr1[J].split(":");
			if(arr2[1]==1 && theList[I]==arr2[0]){
				TranslatorIM.SL_setTMPdata("BL_D_PROV",arr2[0]);
				doc.getElementById("SL_P"+I).className="SL_BL_LABLE_ON";
				I=1000;J=1000;
			}
		    }
		  }
		 }

//alert(TranslatorIM.ListProviders + " | " + TranslatorIM.BL_D_PROV);
	         if(TranslatorIM.ListProviders.indexOf(TranslatorIM.BL_D_PROV) == -1){
			TranslatorIM.SL_setTMPdata("BL_D_PROV",theList[0]);	
			TranslatorIM.SET_FIRST_AVAILABLE_PROV();
		 }

	      }
	    }else{
	      TranslatorIM.SL_MODE=0;
	      if(TranslatorIM.BL_T_PROV=="" || TranslatorIM.BL_T_PROV==null || TranslatorIM.BL_T_PROV=="undefined"){
		  TranslatorIM.SL_setTMPdata("BL_T_PROV",theList[0]);
		  var arr = TranslatorIM.SL_ALL_PROVIDERS_BBL.split(",");	
		  for(I=0; I<arr.length; I++){
			if(theList[0]==arr[I]){
				doc.getElementById("SL_P"+I).className="SL_BL_LABLE_ON";
				break;
			}
		  }
	      } else {
		 if(TranslatorIM.ListProviders.indexOf(TranslatorIM.BL_T_PROV)!=-1){
		  var arr = TranslatorIM.SL_ALL_PROVIDERS_BBL.split(",");	
		  for(I=0; I<arr.length; I++){
			if(arr[I]==TranslatorIM.BL_T_PROV){
				doc.getElementById("SL_P"+I).className="SL_BL_LABLE_ON";
				I=1000;
			}
		  }
		 } else {
		
		  var arr = TranslatorIM.ListProviders.split(",");	
		  TranslatorIM.SL_setTMPdata("BL_T_PROV",arr[0]);
//		  doc.getElementById("SL_P0").className="SL_BL_LABLE_ON";
	   	  TranslatorIM.SET_FIRST_AVAILABLE_PROV();
		 }
	      }

            }	


	    if(TranslatorIM.SL_WRONGLANGUAGEDETECTED==1){
		var pattern = doc.getElementById("SL_Bproviders").getElementsByTagName("div");
		var cnt=0;
		for(var j=0; j<pattern.length; j++){
		    if(pattern[j].id.indexOf("SL_PN")==-1){
			if(pattern[j].title.toLowerCase()=="google"){
				pattern[j].className="SL_BL_LABLE_ON";
			} else {
				pattern[j].className="SL_BL_LABLE_DEACT";
			}
		    }
		}
		TranslatorIM.SL_setTMPdata("BL_D_PROV","Google");
		TranslatorIM.SL_setTMPdata("BL_T_PROV","Google");
	    }


	 } else{
		TranslatorIM.SL_setTMPdata("BL_D_PROV","Google");
		TranslatorIM.SL_setTMPdata("BL_T_PROV","Google");
	 }

        },

/////////

	SL_EXECUTE_TRANSLATION: function(myTransText,evt,st, win) {
         var doc = FExtension.browserInject;
 	 var doc2 = doc.getDocument();
	 var tmptext = FExtension.browserInject.getSelectionText();
	 if(tmptext !="") myTransText = tmptext;
         else myTransText = TranslatorIM.SL_TEMP_TEXT;

	 if(myTransText != TranslatorIM.SL_TEMP_TEXT) myTransText=TranslatorIM.SL_TEMP_TEXT;
         var t1 = new Date().getTime();
         var S = doc2.getElementById('SL_lng_from').value;
         var T = doc2.getElementById('SL_lng_to').value;
                if(doc2.getElementById("SL_player2")) {
			doc2.getElementById("SL_player2").innerHTML="";
			doc2.getElementById("SL_player2").style.display="none";
			doc2.getElementById("SL_player2").style.height="0px";
		}
	 var ttl = TranslatorIM.SL_DETECT;
	 if(ttl == "") ttl = 	doc2.getElementById('SL_lng_from').value;
//	 TranslatorIM.SL_DETECT = ttl;

         doc2.getElementById('SL_TTS_voice').title=TranslatorIM.SL_GetLongName(ttl);

   	 TranslatorIM.SET_FIRST_AVAILABLE_PROV();
	 if(TranslatorIM.ListProviders=="" && TranslatorIM.SL_SHOW_PROVIDERS == 1) TranslatorIM.NoProvidersAlert();
	 else {
           var STATUS = TranslatorIM.DETERMIN_IF_LANGUAGE_IS_AVAILABLE_BBL();

	   if(STATUS == 0 && TranslatorIM.SL_SHOW_PROVIDERS == 0) TranslatorIM.NoProvidersAlert();
	   else {
	           if(doc2.getElementById("SL_locer").checked==true){
		 	if(doc2.getElementById('SL_lng_from').value!="auto"){
				doc2.getElementById('SL_lng_from').title="";
			}
		   }



//		   FExtension.browserInject.runtimeSendMessage({greeting: "CM_BBL:>" + T}, function(response) {}); 


		   if(TranslatorIM.SL_DETECT != "" && doc2.getElementById("SL_locer").checked==false && S != "auto") {
			var LANGS = TranslatorIM.SL_LNG_LIST.split(",");
	        	cnt=0;
			for (var i = 0; i < LANGS.length; i++){
				var templang = LANGS[i].split(":");
				if(TranslatorIM.SL_DETECT == templang[0]) cnt=1;
			}
			if(cnt==1) doc2.getElementById('SL_lng_from').value=TranslatorIM.SL_DETECT;		
		   }
		   var PR = TranslatorIM.BL_T_PROV;
		   if(TranslatorIM.SL_MODE==1) PR = TranslatorIM.BL_D_PROV;
		   doc2.getElementById('SL_shadow_translation_result').innerHTML="";
		   doc2.getElementById('SL_shadow_translation_result2').innerHTML="";

	           myTransText = myTransText.replace(/\t/g,"");

	 	   if(T!="") TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(T, 'SL_lng_to', 0, TranslatorIM.SL_FAV_LANGS_BBL, "BBL");
		   else TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(TranslatorIM.SL_langDst_bbl2, 'SL_lng_to', 0, TranslatorIM.SL_FAV_LANGS_BBL, "BBL");


		   if(PR == "" && TranslatorIM.ListProviders!="") {
			var theList = TranslatorIM.ListProviders.split(",");
			PR = theList[0];
			TranslatorIM.BL_D_PROV = PR;
			TranslatorIM.SET_FIRST_AVAILABLE_PROV();
		   }
		   if(PR == "Google"){
			doc2.getElementById('SL_loading').style.display = 'block';
	           	myTransText = myTransText.trim();
//			myTransText = myTransText.replace(/#/g,"");

	                if(myTransText.length<=TranslatorIM.SL_Balloon_translation_limit){
				if(myTransText != ""){

					TranslatorIM.SL_SETINTERVAL_PROXY=0;
        	        	        doc2.getElementById('SL_balloon_obj').alt="1";

			        	myTransText=myTransText.replace(/(^[\s]+|[\s]+$)/g, '');
				       	var theQ=myTransText.split(" ").length;
					if(myTransText.match(/[-/ΓÇº┬╖∩╣ò∩╣ù∩╝ü∩╝Ü∩╝îπÇé∩╣û∩╝ƒ:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;

//				        if(TranslatorIM.SL_dict_bbl=="false") theQ=100;
					var num = Math.floor((Math.random() * SL_GEO.length)); 
					var theRegion = SL_GEO[num];
					if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;
					var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";
					var Stemp=S;
                		        if(doc2.getElementById("SL_locer").checked==false) Stemp = TranslatorIM.SL_DETECT;

//					if(Stemp=="en" || TranslatorIM.SL_FLAG==0) Stemp="auto";

					if(TranslatorIM.SL_WRONGLANGUAGEDETECTED==1) Stemp="auto";
			
					var a=Math.floor((new Date).getTime()/36E5)^123456;
					var tk = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);

					if(Stemp == "srsl") Stemp = "sr";
					if(Stemp == "tlsl") Stemp = "tl";
					if(T == "srsl") T = "sr";
					if(T == "tlsl") T = "tl";

					var SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(myTransText)+"&sl="+Stemp+"&tl="+T+"&hl=en&tk="+tk;

					if(theQ==1){
						TranslatorIM.SL_MODE=1;
					        if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;
						myTransText=myTransText.replace(/\./gi,"");
						myTransText=myTransText.replace(/\)/gi,"");
						myTransText=myTransText.replace(/\(/gi,"");
						myTransText=myTransText.replace(/\"/gi,"");
						SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(myTransText.toLowerCase())+"&sl="+Stemp+"&tl="+T+"&hl=en&tk="+tk;
					}

					SL_Params = SL_Params.replace("sl=&","sl=auto&");
				        FExtension.browserInject.runtimeSendMessage({greeting: "TR_GOOGLE:>"+baseUrl+","+ SL_Params+","+ theQ}, function(response) {});

					setTimeout(function(){
					    var SLIDL="";
					    clearInterval(SLIDL);
					    SLIDL = setInterval(function(){
					           FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {
				        	     if(response && response.farewell){
					        	var theresponse = response.farewell.split("~");
							TranslatorIM.BBL_RESULT=theresponse[52].replace(/\^/ig,"~");
					                TranslatorIM.BBL_RESULT=TranslatorIM.BBL_RESULT.replace(/\\"/g,"'");
					                TranslatorIM.BBL_RESULT=TranslatorIM.BBL_RESULT.replace(/\\n/g,"<br>");
					                TranslatorIM.BBL_RESULT=TranslatorIM.BBL_RESULT.replace(/\\u0027/g,"'");
						
							if(TranslatorIM.BBL_RESULT!="") {

								var resp = TranslatorIM.BBL_RESULT;

								TranslatorIM.BBL_RESULT="";
								clearInterval(SLIDL);
								if(doc2.getElementById("SL_shadow_translator").style.display=='block'){	
									var S = doc2.getElementById('SL_lng_from').value;
							           	var T = doc2.getElementById('SL_lng_to').value;
							           	var myTransText = doc.getSelectionText();
									if(myTransText == "") myTransText = TranslatorIM.SL_TEMP_TEXT;
									if(myTransText != TranslatorIM.SL_TEMP_TEXT) myTransText=TranslatorIM.SL_TEMP_TEXT;
						       	   		var theQ=100;

							       	   	if(resp.indexOf('"reverse_translation":')>-1)theQ=1;
								   	var NoDict=0;
							                if(resp.indexOf('{"trans":')>-1){
							       		 	if(theQ>1){
							                                  var ReadyToUseGoogleText="";
							                                  var Gr1=resp.split('"trans":"');
							                               	  for(var h=1; h<Gr1.length; h++){
							                      	              var Gr2 = Gr1[h].split('","orig"');
							               	                      var Gr3 = Gr2[0].replace(/\\n/ig,"<br>");
						      		                              Gr3 = Gr3.replace(/\\"/ig,"'");
						       	        	                      Gr3 = Gr3.replace(/\\u0026/ig,"&");
						       	                	              Gr3 = Gr3.replace(/\\u003c/ig,"<");
							                        	      Gr3 = Gr3.replace(/\\u003e/ig,">");
								                              Gr3 = Gr3.replace(/\\u0027/ig,"'");
								                              Gr3 = Gr3.replace(/\\u003d/ig,"=");
								                              Gr3 = Gr3.replace(/\\/g,"");
                        	                                                              //Gr3 = Gr3.charAt(0).toUpperCase() + Gr3.slice(1);
							                                      ReadyToUseGoogleText=ReadyToUseGoogleText+Gr3;
							                                   }
											   resp = ReadyToUseGoogleText;
								 			   var nmr = myTransText.split(" ").length;
											   if(nmr > 1) TranslatorIM.CNTR('2221',Stemp+"/"+T, myTransText.length);
											   else TranslatorIM.CNTR('2231',Stemp+"/"+T, myTransText.length);
							                       	}
										var HID=2;
									} 
						
									if(resp.indexOf('sentences":')>-1){
							                        TranslatorIM.SL_SETINTERVAL_PROXY++;
							               		if(theQ==1 && resp.indexOf('src":"')==-1){
							       		         	if(resp.indexOf('","')!=-1){
									                      	resp = resp.replace('["',''); 
							        				var R1 = resp.split('","');
							                	                resp = R1[0];
						        	                	} else resp = resp.replace(/"/ig,'');
						                	                NoDict = 1;
										}

									        if(NoDict==0 && resp.indexOf('sentences":')>-1){
											TranslatorIM.SL_SETINTERVAL_PROXY++;
											resp = TranslatorIM.SL_DICTparser(resp);
//											resp = resp.replace(/\"/ig,"'");
											resp = resp.replace(/\''/ig,"'");
											resp = resp.replace(/\\/g,"");
											TranslatorIM.CNTR('2231',Stemp+"/"+T, myTransText.length);
									        } else {
											resp="";
											TranslatorIM.SL_OTHER_PROVIDERS(myTransText,st);
										}

										var idtmp="";
										var HID=6;
										if(resp.indexOf('id=_X')==-1) HID=2;
									}else{
										if(resp.indexOf('word_postproc":')>-1){
								                        TranslatorIM.SL_SETINTERVAL_PROXY++;
								               		if(theQ==1 && resp.indexOf('word_postproc":')==-1){
							       			         	if(resp.indexOf('","')!=-1){
										                      	resp = resp.replace('["',''); 
							        					var R1 = resp.split('","');
							                	        	        resp = R1[0];
								                        	} else resp = resp.replace(/"/ig,'');
							        	                        NoDict = 1;
											}
									        	if(NoDict==0 && resp.indexOf('sentences":')>-1){
												TranslatorIM.SL_SETINTERVAL_PROXY++;
												resp = TranslatorIM.SL_DICTparser(resp);
										        } else {
											resp="";
											TranslatorIM.SL_OTHER_PROVIDERS(myTransText,st);
											}
											var idtmp="";
											var HID=6;
											if(resp.indexOf('id=_X')==-1) HID=2;
										}
									}
								
									if(resp != "" && resp != "<#>"){	
								                var resptmp = resp;
										if(resp.indexOf('<div')==-1) resptmp = TranslatorIM.PPB_tts_icon(T,resp);

										doc2.getElementById('SL_shadow_translation_result').innerHTML=resptmp;
										doc2.getElementById('SL_shadow_translation_result2').innerHTML=resptmp;

										TranslatorIM.ACTIVATE_THEMEbbl(TranslatorIM.THEMEmode);
								                TranslatorIM.SL_JUMP(doc2);
						        	                TranslatorIM.SL_temp_result=resp;
										if (TranslatorIM.SL_TH_2 == 1){

											var SLnow = new Date();
											SLnow = SLnow.toString();
											var TMPtime = SLnow.split(" ");
											var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];
								                        var LNGfrom = S;
								                        if(S=="auto" || doc2.getElementById("SL_locer").checked == false) var LNGfrom = TranslatorIM.LNGforHISTORY;
											if(TranslatorIM.SL_WRONGLANGUAGEDETECTED==1) LNGfrom="auto";
						        	                        var ImtranslatorGoogleResult="";
						                	                myTransText=myTransText.replace(/~/ig," ");
						                        		        var ImtranslatorGoogleResult4 = resp.replace(/~/ig," ");
							 				if(theQ==1){
												var TEMresp = ImtranslatorGoogleResult4.split("<br>");
												if(TEMresp.length>2){
													for(var k=0; k<TEMresp.length; k++){
														if(k>0)ImtranslatorGoogleResult = ImtranslatorGoogleResult + TEMresp[k];
													}
												} else ImtranslatorGoogleResult = ImtranslatorGoogleResult4;
											} else ImtranslatorGoogleResult = ImtranslatorGoogleResult4;
									
										        myTransText=myTransText.replace(/\^/g,"@");


											doc.runtimeSendMessage({greeting: "[b]" + myTransText + "~~" + ImtranslatorGoogleResult + "~~" + LNGfrom + "|" + T + "~~"+ doc2.location+"~~"+CurDT+"~~"+HID+"~~G^^"}, function(response) {
												if(response){ 
												//	console.log(response.farewell); 
												}
											});
										}
									} else 	TranslatorIM.SL_OTHER_PROVIDERS(myTransText,0);

									doc2.getElementById('SL_shadow_translation_result').style.direction = "ltr";
									doc2.getElementById('SL_shadow_translation_result').style.textAlign = "left";
									if(T=="ar" || T=="iw" || T=="fa" || T=="yi" || T=="ur" || T=="ps" || T=="sd" || T=="ckb" || T=="ug" || T=="dv" || T=="prs"){
										doc2.getElementById('SL_shadow_translation_result').style.direction = "rtl";
										doc2.getElementById('SL_shadow_translation_result').style.textAlign = "right";
									}
									doc2.getElementById('SL_shadow_translator').style.display = 'block';
									TranslatorIM.SL_temp_result = resp;
									if(doc2.getElementById('SL_shadow_translator').offsetHeight > 100) TranslatorIM.SL_BALLON_H = doc2.getElementById('SL_shadow_translator').offsetHeight;
								   }	
				        	    	}
						     }
					           });
					    },50);  
 		        		 },50);  

				  } 

		            } else TranslatorIM.SL_OTHER_PROVIDERS(myTransText,st);
		  } else {
			   if(PR == "Microsoft") TranslatorIM.MS(S,T,myTransText,st);
			   else TranslatorIM.SL_OTHER_PROVIDERS(myTransText,st);	
		  }
		}
	      }
	      TranslatorIM.SAVE_SES_PARAMS();
	},

	SL_OTHER_PROVIDERS: function(text,st){
	     var doc = FExtension.browserInject;
	     var doc2 = doc.getDocument();
	     if(doc2.getElementById('SL_shadow_translation_result').outerHTML.replace(/(<([^>]+)>)/ig,"")==""){
		doc2.getElementById('SL_shadow_translation_result').innerHTML="";
		doc2.getElementById('SL_shadow_translation_result2').innerHTML="";
                doc2.getElementById('SL_loading').style.display="block";

	        var S = doc2.getElementById('SL_lng_from').value;

	//        if(TranslatorIM.SL_DETECT != "") S=TranslatorIM.SL_DETECT;
       	        if(doc2.getElementById("SL_locer").checked==false && TranslatorIM.SL_DETECT != "") S = TranslatorIM.SL_DETECT;

	        var T = doc2.getElementById('SL_lng_to').value;
	        var Tbk = T;
		var PR = TranslatorIM.BL_T_PROV;
		if(TranslatorIM.SL_MODE==1) PR = TranslatorIM.BL_D_PROV;
	        if(PR.toLowerCase()=="yandex") { 
			TranslatorIM.SL_YANDEX(text,S,T); return false;
		}
		if(text != ""){
			var baseUrl = ImTranslator_theurl+"dotrans.asp";
			if(TranslatorIM.LNGforHISTORY=="")TranslatorIM.LNGforHISTORY="en";
			if(S=="auto")S=TranslatorIM.LNGforHISTORY;

                        if(PR.toLowerCase()=="google"){
		  		text = text.trim();
  				var nmr = text.split(" ").length;
  				if(nmr > 1) TranslatorIM.CNTRP('2221',S+"/"+T, text.length);
				else TranslatorIM.CNTRP('2231',S+"/"+T, text.length);
                        }

			var TT = T;
		        if(PR.toLowerCase()=="microsoft"){
				if(T == "zh-CN") T = "zh-CHS";
				if(T == "zh-TW") T = "zh-CHT";
				if(T == "iw") T = "he";
				if(T == "bs") T = "bs-Latn";
				if(T == "tlsl") T = "fil";
				if(T == "tl") T = "fil";
				if(T == "hmn") T = "mww";
				if(T == "srsl") T = "sr-Cyrl";
				if(T == "sr") T = "sr-Cyrl";
				if(T == "ku") T = "kmr";
				if(T == "ckb") T = "ku";

				if(S == "zh-CN") S = "zh-CHS";
				if(S == "zh-TW") S = "zh-CHT";
				if(S == "iw") S = "he";
				if(S == "bs") S = "bs-Latn";
				if(S == "tlsl") S = "fil";
				if(S == "tl") S = "fil";
				if(S == "hmn") S = "mww";
				if(S == "srsl") S = "sr-Cyrl";
				if(S == "sr") S = "sr-Cyrl";
				if(S == "ku") S = "kmr";
				if(S == "ckb") S = "ku";
		
				text=text.replace(/</g,"< ");
				text=TranslatorIM.truncStrByWord(text,3000);
			}


			var cgi = "dir="+S+"/"+T+"&provider="+PR.toLowerCase()+"&text="+encodeURIComponent(text);


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

				if(ajaxRequest.readyState == 4){
			             var resp = ajaxRequest.responseText;
			             if(resp.indexOf('>Url Too Long<')!=-1 || resp.indexOf('>Request URL Too Long<')!=-1 || resp.indexOf('"ArgumentOutOfRangeException')!=-1) resp=PR + ": "+ FExtension.element(TranslatorIM.SL_LOC,'extADVstu').replace("XXX","4000");
			             if(resp.indexOf('<#<')!=-1 || resp.indexOf('&lt;#')!=-1) resp=PR + ": "+ FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");
				     if(resp=="" || resp.indexOf("<h1>Not Found</h1>")>-1) resp=PR + ": "+ FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");

				     if(ajaxRequest.status!=200) resp=PR + ": "+ FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");
				     if(ajaxRequest.status==414) resp=PR + ": "+ FExtension.element(TranslatorIM.SL_LOC,'extADVstu').replace("XXX","4000");;
			             if(resp.indexOf('<#<')!=-1 || resp.indexOf('&lt;#')!=-1) resp=PR + ": "+ FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");


					//-------------
				     	if(PR.toLowerCase()=="google") {
		                             	resp=resp.replace(/\\n/g,"<br>");
				     	}

				     	if(PR.toLowerCase()=="microsoft") {
		                             	resp=resp.replace(/\\n/g,"<br>");
						resp=resp.replace(/< /g,"<");
						resp=resp.replace(/ >/g,">");
						resp=resp.replace(/\\"/g,"'");
				     	}

				     	if(PR.toLowerCase()=="translator") {
						resp=resp.replace(/&lt;/g,"<");
						resp=resp.replace(/&gt;/g,">");
					}
	                             	resp=resp.replace(/\\/g,"");
					//-------------


					doc2.getElementById('SL_shadow_translator').style.display = 'block';

					TranslatorIM.SL_temp_result=resp;

			                var resptmp = resp;
			                var resptmp = TranslatorIM.PPB_tts_icon(Tbk,resp);

				        if(PR.toLowerCase()!="translator") {
						doc2.getElementById('SL_shadow_translation_result').innerHTML=resptmp.replace(/\\n/ig,'<br>');
						doc2.getElementById('SL_shadow_translation_result2').innerHTML=resptmp.replace(/\\n/ig,'<br>');
					} else {
						doc2.getElementById('SL_shadow_translation_result').innerHTML=resptmp.replace(/\n/ig,'<br>');
						doc2.getElementById('SL_shadow_translation_result2').innerHTML=resptmp.replace(/\n/ig,'<br>');
					}

					doc2.getElementById('SL_shadow_translation_result').style.direction = "ltr";
					doc2.getElementById('SL_shadow_translation_result').style.textAlign = "left";

					if(T == "ar" || T == "he" || T == "fa" || T == "yi" || T == "ur" || T == "ps" || T == "sd" || T == "ku" || T == "ug" || T == "dv" || T == "prs"){
						doc2.getElementById('SL_shadow_translation_result').style.direction = "rtl";
						doc2.getElementById('SL_shadow_translation_result').style.textAlign = "right";
					}
                                        doc2.getElementById('SL_loading').style.display="none";

                                       	TranslatorIM.SL_JUMP(doc2);

					setTimeout(function() {	
         					var HID=2;
					        if (TranslatorIM.SL_TH_2 == 1){

							var SLnow = new Date();
							SLnow = SLnow.toString();
							var TMPtime = SLnow.split(" ");
							var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];
				                        var LNGfrom = S;
				                        if(S=="auto" || doc2.getElementById("SL_locer").checked == false) var LNGfrom = TranslatorIM.LNGforHISTORY;
							if(TranslatorIM.SL_WRONGLANGUAGEDETECTED==1) LNGfrom="auto";

	                                                text=text.replace(/~/ig," ");
        	                                        resp=resp.replace(/~/ig," ");
						        text=text.replace(/\^/g,"@");
						        var DICT = TranslatorIM.BL_T_PROV;
							if(TranslatorIM.SL_MODE==1) DICT = TranslatorIM.BL_D_PROV;
							doc.runtimeSendMessage({greeting:"[b]" + text + "~~" + resp + "~~" + LNGfrom + "|" + TT + "~~"+ doc2.location+"~~"+CurDT+"~~"+HID+"~~"+DICT[0]+"^^"}, function(response) {
								if(response){ 
								//	console.log(response.farewell); 
								}
							});
					        }
					}, 500);					


				}
			}
			ajaxRequest.open("POST", baseUrl, true);
			ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajaxRequest.send(cgi); 

		    }
	     }
	},





	SL_DICTparser: function (resp){

		TranslatorIM.SL_IS_DICTIONARY=1;
	        var ext = FExtension.browserInject;
		var doc = ext.getDocument();
		doc.getElementById('SL_player2').style.display="none";

		var parsedRES="",parsedTRANS="";
		var PARTS = new Array();
		var SL_to = doc.getElementById('SL_lng_to').value;
		var SL_from = doc.getElementById('SL_lng_from').value;
		var ttsurl=ext.getURL('content/img/util/tts.png');


		var SLDetLngCodes =    new Array ();
		var SLDetLngNames =    new Array ();
//		var SL_Lnum = SL_Languages.split(",");
		var SL_Lnum = TranslatorIM.SL_LNG_LIST.split(",");
		for(var i = 0; i < SL_Lnum.length; i++){
		        var SL_tmp = SL_Lnum[i].split(":");
			SLDetLngCodes.push(SL_tmp[0]);
			SLDetLngNames.push(SL_tmp[1]);
		}


		var Dt1=resp.split('src":"');
		var Dt2=Dt1[1].split('"');
		var DETECTEDlng=Dt2[0];
		var DETECTEDlongName="English";
		for (var z=0; z<SLDetLngCodes.length; z++){
			if(DETECTEDlng==SLDetLngCodes[z]) { DETECTEDlongName=SLDetLngNames[z];break; }
		}
		for (var z=0; z<SLDetLngNames.length; z++){
			if(SL_from==SLDetLngNames[z]) { SL_from=SLDetLngCodes[z];break; }
		}
		var Tr1=resp.split('dict":[');
		var Tr2=Tr1[0].split('orig":"');

		var Tr3=Tr2[1].split('"');
		var TRANSLATION = Tr3[0];


		var Gurl=FExtension.browserInject.getURL('content/html/popup/dictionary.html');
		var WAY = TranslatorIM.SL_TTSicn(DETECTEDlng);

		var WAY2 = TranslatorIM.SL_TTSicn(SL_to);
		var SL_DETECT = DETECTEDlng;

		if(TranslatorIM.SL_ALLvoices.indexOf(SL_DETECT)!=-1){
			if(resp.indexOf("reverse_translation")!=-1){
				if(WAY == 1) 	parsedTRANS = "<div id=_X><div id=_XL><div class=TTS"+WAY+" id=SL_000 style=\"background:url("+ttsurl+");\" lang=\""+DETECTEDlng+"\" title=\""+TRANSLATION+"\"></div></div><div id=_XR align=left style='margin-left:5px;font-weight:bold;font-size:14px;'>" + TRANSLATION + "</div></div>";
				else    	parsedTRANS = "<div id=_X><div id=_FL><div class=TTS"+WAY+" id=SL_000 style=\"background:url("+ttsurl+");\" lang=\""+DETECTEDlng+"\" title=\""+TRANSLATION+"\"></div></div><div id=_FR>" + TRANSLATION + "</div></div>";
			} else {
				if(WAY == "1") parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
				else parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
			}

		} else {
			if(resp.indexOf("reverse_translation")!=-1){
				if(WAY == 1) 	parsedTRANS = "<div id=_X><div id=_XR align=left style='margin-left:5px;font-weight:bold;font-size:14px;'>" + TRANSLATION + "</div></div>";
				else    	parsedTRANS = "<div id=_X><div id=_FR>" + TRANSLATION + "</div></div>";
			} else {
				if(WAY == "1") parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
				else parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
			}
		}




		if(resp.indexOf('pos":"')!=-1){
		   try{
		        var Rline,article;
			const obj = JSON.parse(resp);
			for(var i = 0; i < obj.dict.length; i++){
				parsedRES = parsedRES + "<div id=_Y>" +obj.dict[i].pos + "</div>";
				for (var j=0; j < obj.dict[i].entry.length; j++){
				        article="<x id=_ART>" + obj.dict[i].entry[j].word + "</x> ";
                               		Rline = "";

					for(var k = 0; k < obj.dict[i].entry[j].reverse_translation.length; k++){
						var tmpLNK = obj.dict[i].entry[j].reverse_translation[k].replace(/\\'/g,'~');
						tmpLNK = tmpLNK.replace(/\\u0027/g,'~');

						var F = SL_from;
						var T = SL_to;
						if(k < obj.dict[i].entry[j].reverse_translation.length-1){
							Rline = Rline + "<a class=_ALNK title=\""+tmpLNK+"\" id='SL_" +i+"_"+ j+"_"+ k + "' href='"+Gurl+"?dir="+ SL_from + "|" + SL_to +"&text=" + encodeURIComponent(tmpLNK) + "'>" + tmpLNK + "</a>, ";
						} else {
							Rline = Rline + "<a class=_ALNK title=\""+tmpLNK+"\" id='SL_" +i+"_"+ j+"_"+ k + "' href='"+Gurl+"?dir="+ SL_from + "|" + SL_to +"&text=" + encodeURIComponent(tmpLNK) + "'>" + tmpLNK + "</a>";
						}
					}

					var REV=obj.dict[i].entry[j].reverse_translation;
					var WORD=obj.dict[i].entry[j].word;
					var SL_myTTS = article;// + REV;
				        if(SL_TTS.indexOf(SL_to)!=-1 || (G_TTS.indexOf(SL_to)!=-1 && localStorage["SL_GVoices"]!="0")){
					   if(WAY2==1) SL_myTTS = "<div id=_X><div id=_XL><div class=_V id=\"SL_"+i+j+"\" style=\"background:url("+ttsurl+");\" lang=\""+SL_to+"\" title=\"" + WORD + "\"></div></div><div id=_XR>" + article + "</div></div>";
					   else SL_myTTS = "<div id=_X><div id=_FL><div class=TTS"+WAY2+" id=\"SL_"+i+j+"\" style=\"background:url("+ttsurl+");\" lang=\""+SL_to+"\" title=\"" + WORD + "\"></div></div><div id=_XR>" + article + "</div></div>";
					}			
					parsedRES = parsedRES + "<div id=_A><div id=_AL>" + SL_myTTS + "</div><div id=_AR>" + Rline + "</div></div>";
				}
				parsedRES = parsedRES + "<br>";
			}

		        doc.getElementById('SL_TTS_voice').style.display='none';
		        doc.getElementById('SL_bbl_font_patch').style.display='block';

		      } catch(ex){
			const obj = JSON.parse(resp);
		       	parsedRES="";
			parsedTRANS=obj.sentences[0].trans;
		      }	



		    } else {
		   	Tr2=Tr1[0].split('trans":"');
	   		Tr3=Tr2[1].split('"');
		   	parsedTRANS = Tr3[0];
		        doc.getElementById('SL_TTS_voice').style.display='block';
		    }

		 if(parsedRES==""){
		   doc.getElementById('SL_shadow_translation_result').style.direction="ltr";
		   doc.getElementById('SL_shadow_translation_result').style.textAlign="left";
		   if(SL_to=="ar" || SL_to=="iw" || SL_to=="fa" || SL_to=="yi" || SL_to=="ur" || SL_to=="ps" || SL_to=="sd" || SL_to=="ckb" || SL_to=="ug" || SL_to=="dv" || SL_to=="prs"){
			 doc.getElementById('SL_shadow_translation_result').style.direction="rtl";
			 doc.getElementById('SL_shadow_translation_result').style.textAlign="right";
		   }
		 } 
		 parsedRES = parsedTRANS +"<br>"+ parsedRES;
		 SL_temp_result2 = parsedRES;
		 setTimeout(function(){
		     TranslatorIM.SL_ALIGNER1(SL_to);
		     TranslatorIM.SL_ALIGNER2(DETECTEDlng);
		 },5);
		 
		 return parsedRES;

	},


SL_ALIGNER1: function (SL_to){
 var doc = FExtension.browserInject.getDocument();
 var nums=doc.getElementsByTagName("div").length;
 if(SL_to!="ar" && SL_to!="iw" && SL_to!="fa" && SL_to!="yi" && SL_to!="ur" && SL_to!="ps" && SL_to!="sd" && SL_to!="ckb" && SL_to!="ug" && SL_to!="dv" && SL_to!="prs"){
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AL")	 doc.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AL")	 doc.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
},

SL_ALIGNER2: function (SL_from){
 var doc = FExtension.browserInject.getDocument();
 var nums=doc.getElementsByTagName("div").length;
 if(SL_from!="ar" && SL_from!="iw" && SL_from!="fa" && SL_from!="yi" && SL_from!="ur" && SL_from!="ps" && SL_from!="sd" && SL_from!="ckb" && SL_from!="ug" && SL_from!="dv" && SL_from!="prs"){
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AR")	 doc.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AR")	 doc.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
},

SL_TTSicn: function (lng){
 var doc = FExtension.browserInject.getDocument();
 var OUT="";
 if(lng!="ar" && lng!="iw" && lng!="fa" && lng!="yi" && lng!="ur" && lng!="ps" && lng!="sd" && lng!="ckb" && lng!="ug" && lng!="dv" && lng!="prs")   OUT=1;
 else   OUT=2;
 return(OUT);
},





	ClickInside: function(event){
		var target = event.target || event.srcElement;
		var id = target.id
           
		var className = target.className;

		if(className == "_V") 	 TranslatorIM.tagClick(event,id);
		if(className == "TTS1") TranslatorIM.tagClick(event,id);
		if(className == "TTS2") TranslatorIM.tagClick(event,id);

		if(className == "_ALNK") {
		    var tags = FExtension.browserInject.getDocument().getElementsByClassName("_ALNK");
		    for (var j=0; j<tags.length; j++){
		         tags[j].href='javascript:void(0);';
			 tags[j].addEventListener('mouseup', function(e){ TranslatorIM.UrltagClick(e) }, false);
			 TranslatorIM.AVOIDAUTODETECT=1;
		    }
		}
	},


	tagClick: function(event,id){
		var doc = FExtension.browserInject.getDocument();
                if(doc.getElementById("SL_player2")) {
			doc.getElementById("SL_player2").innerHTML="";
			doc.getElementById("SL_player2").style.display="none";
			doc.getElementById("SL_player2").style.height="0px";
		}


		   var SL_from = doc.getElementById('SL_lng_from').value;
		   if(doc.getElementById("SL_000")) doc.getElementById("SL_000").lang=SL_from;
		   event.target.onmousemove = function () {TranslatorIM.SL_ShowBalloon();}
		   var SL_to = doc.getElementById(id).lang;
		   SL_to=SL_to.replace("zh-CN","zh");
		   SL_to=SL_to.replace("zh-TW","zh");

		   if(doc.getElementById('SL_lng_from').value=="auto" || doc.getElementById("SL_locer").checked == false) {if(id=="SL_000") SL_to = TranslatorIM.LNGforHISTORY;}
		   else{ 
			if(id=="SL_000"){
				SL_to = SL_from;

				// By VK . A patch------------------------------------
				if(SL_to.length>7)SL_to="en";
				// By VK . A patch------------------------------------
			}

		   }

	   var text = doc.getElementById(event.target.id).title;
	   text = TranslatorIM.truncStrByWord(text,1200);
	   switch(TranslatorIM.SL_SLVoices){
		case "0": if(TranslatorIM.SL_ALLvoices.indexOf(SL_to)!=-1){
                              if(SL_TTS.indexOf(SL_to)!=-1){
				if(text.length>TranslatorIM.GTTS_length) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text)); 
				else TranslatorIM.Google_TTS(text,SL_to);
			      } else TranslatorIM.Google_TTS(text,SL_to);
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  break;
		case "1": if(TranslatorIM.SL_ALLvoices.indexOf(SL_to)!=-1){
				if(G_TTS.indexOf(SL_to)!=-1) TranslatorIM.Google_TTS(text,SL_to);
				else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  break;
		case "2": if(TranslatorIM.SL_ALLvoices.indexOf(SL_to)!=-1){
                              if(SL_TTS.indexOf(SL_to)!=-1) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text));
			      else TranslatorIM.Google_TTS(text,SL_to);
			  } else TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNo_Voice"));
			  break;
	   }

	},



        Google_TTS: function(text,SL_to){
		text = TranslatorIM.truncStrByWord(text,1200);
                var doc = FExtension.browserInject.getDocument();
		if(TranslatorIM.SL_GVoices=="1"){
			if(text.length>TranslatorIM.GTTS_length){
			   text=text.substring(0,TranslatorIM.GTTS_length);
			   doc.getElementById('SL_alert100').style.display="block";
			}
	        	TranslatorIM.REMOTE_Voice(SL_to,text);			
		} else window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text));
	},


        Google_TTS_ON_TOP: function(text,SL_to){
		text = TranslatorIM.truncStrByWord(text,1200);
                var doc = FExtension.browserInject.getDocument();
		if(TranslatorIM.SL_GVoices=="1"){
			if(text.length>TranslatorIM.GTTS_length){
			   text=text.substring(0,TranslatorIM.GTTS_length);
			   doc.getElementById('SL_alert100').style.display="block";
			}
	        	TranslatorIM.REMOTE_Voice(SL_to,text);			
		} else window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text));
	},


	UrltagClick: function(e){
  	    if(e.which != 3){
		e.target.onmousemove = function () {TranslatorIM.SL_ShowBalloon();}
		FExtension.browserInject.getDocument().getElementById(e.target.id).href='#';
		FExtension.browserInject.getDocument().getElementById(e.target.id).style.cursor='pointer';
		var txt = FExtension.browserInject.getDocument().getElementById(e.target.id).title;
                TranslatorIM.SL_TEMP_TEXT=txt;
		setTimeout(function() { 
			TranslatorIM.SL_BALLOON_TRANSLATION(txt,null,3); 
		    	TranslatorIM.SL_removeBalloonColor();
		    	TranslatorIM.SL_addBalloonColor();
		}, 150);   
		e.stopPropagation();
		e.cancelBubble = true;       
	    }	
	},



	SL_SCROLL: function(){
		TranslatorIM.SL_bring_UP();
	},


	SL_OBJ_BUILDER: function(){

                  ImTranslatorDataEvent.mousedown();
                  
                  var doc = FExtension.browserInject.getDocument();
                  var btn = doc.getElementById('SL_button');
                  if(btn){			
                      return;
                  }

	          var container = doc.body;



                  if(container){

		  var newElem = doc.createElement ("div");
		  var newElemid = doc.createAttribute("id");
		  newElemid.value = "SL_balloon_obj";
	          newElem.setAttributeNode(newElemid);

		  var newElemtp = doc.createAttribute("alt");
		  newElemtp.value = "0";
	          newElem.setAttributeNode(newElemtp);

		  //---------------------------
		  

			  var OB = doc.createElement('div');
			  var id = doc.createAttribute("id");
			  id.value = "SL_button";
		          OB.setAttributeNode(id);
 			  var cl = doc.createAttribute("class");
			  cl.value = "SL_ImTranslatorLogo";
	        	  OB.setAttributeNode(cl);
		          newElem.appendChild(OB);

		        
			  OB1 = doc.createElement('div');
			  id = doc.createAttribute("id");
			  id.value = "SL_shadow_translation_result2";
		          OB1.setAttributeNode(id);
		          newElem.appendChild(OB1);

			  OB2 = doc.createElement('div');
			  id = doc.createAttribute("id");
			  id.value = "SL_shadow_translator";
	        	  OB2.setAttributeNode(id);
		          newElem.appendChild(OB2);

				  OB3 = doc.createElement('div');
				  id = doc.createAttribute("id");
				  id.value = "SL_planshet";
	        		  OB3.setAttributeNode(id);

 				    OBup = doc.createElement('div');
				    OBup.id = "SL_arrow_up";
			            OB3.appendChild(OBup);


					OB4 = doc.createElement('div');
					id = doc.createAttribute("id");
					id.value = "SL_TB";
	        			OB4.setAttributeNode(id);


				        	var OB6 = doc.createElement("div");
						id = doc.createAttribute("id");
						id.value = "SL_tables";
						OB6.setAttributeNode(id);
						var cs = doc.createAttribute("cellspacing");
						cs.value = "1";
						OB6.setAttributeNode(cs);

						        var OB7 = doc.createElement("tr");
						        OB6.appendChild(OB7); 

							        var OB8 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB8.setAttributeNode(cl);
								var w = doc.createAttribute("width");
								w.value = "10%";
								OB8.setAttributeNode(w);
								var a = doc.createAttribute("align");
								a.value = "right";
								OB8.setAttributeNode(a);
							        OB7.appendChild(OB8);

								        var OB9 = doc.createElement("input");
									id = doc.createAttribute("id");
									id.value = "SL_locer";
									OB9.setAttributeNode(id);
									var ty = doc.createAttribute("type");
									ty.value = "checkbox";
									OB9.setAttributeNode(ty);
									var va = doc.createAttribute("checked");
									va.value = Boolean(TranslatorIM.SL_TMPbox);

									OB9.setAttributeNode(va);
									var ti = doc.createAttribute("title");
									ti.value = FExtension.element(TranslatorIM.SL_LOC,"extLock_in_language");
									OB9.setAttributeNode(ti);
				        				OB8.appendChild(OB9); 



							        var OB10 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB10.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "20%";
								OB10.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "left";
								OB10.setAttributeNode(a);
							        OB7.appendChild(OB10);

									var OB11 = doc.createElement("select");
									id = doc.createAttribute("id");
									id.value = "SL_lng_from";
									OB11.setAttributeNode(id);

									cl = doc.createAttribute("class");
									cl.value = "SL_lngs";
									OB11.setAttributeNode(cl);


										if(TranslatorIM.SL_LNG_CUSTOM_LIST.indexOf("auto")!=-1 || TranslatorIM.SL_LNG_CUSTOM_LIST=="all"){
											var OB12 = doc.createElement('option');
											var v = document.createAttribute("value");
											v.value = "auto";
											OB12.setAttributeNode(v);
											OB12.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extDetect_language_from_box")));
											OB11.appendChild(OB12); 
										}

										var MENU = TranslatorIM.SL_LNG_LIST.split(",");
										for(var J=0; J < MENU.length; J++){
										    var CURlang3 = MENU[J].split(":");
										    var OB12 = doc.createElement('option');
										    var v = doc.createAttribute("value");
										    v.value = CURlang3[0];
										    OB12.setAttributeNode(v);
										    OB12.appendChild(doc.createTextNode(CURlang3[1]));
										    OB11.appendChild(OB12);
										}							                       

								        OB10.appendChild(OB11);

							        var OB13 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB13.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "3";
								OB13.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB13.setAttributeNode(a);
							        OB7.appendChild(OB13);

									var OB14 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_switch_b";
								        OB14.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = FExtension.element(TranslatorIM.SL_LOC,"extSwitch_languages_ttl");
					        			OB14.setAttributeNode(ti);
								        OB13.appendChild(OB14);

							        var OB15 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB15.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "20%";
								OB15.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "left";
								OB15.setAttributeNode(a);
							        OB7.appendChild(OB15);

									var OB16 = doc.createElement("select");
									id = doc.createAttribute("id");
									id.value = "SL_lng_to";
									OB16.setAttributeNode(id);
									cl = doc.createAttribute("class");
									cl.value = "SL_lngs";
									OB16.setAttributeNode(cl);


									     var SEL = 0
									     if(MENU.length>=TranslatorIM.SL_FAV_START){
										var SL_FAV_LANGS_LONG = TranslatorIM.SL_ADD_LONG_NAMES(TranslatorIM.SL_FAV_LANGS_BBL);

										if(SL_FAV_LANGS_LONG!=""){
											var favArr=SL_FAV_LANGS_LONG.split(","); 
											for(var J=0; J < favArr.length; J++){
											    var CURlang3 = favArr[J].split(":");
											    var OB_FAV = doc.createElement('option');
											    var v = doc.createAttribute("value");
											    v.value = CURlang3[0];

											    if(J == 0){
												    var sel = doc.createAttribute("selected");
												    sel.value = "selected";
												    OB_FAV.setAttributeNode(sel);
												    SEL = 1;
												    TranslatorIM.SL_langDst_bbl2=CURlang3[0];
											    }

											    OB_FAV.setAttributeNode(v);
											    OB_FAV.appendChild(doc.createTextNode(CURlang3[1]));
											    OB16.appendChild(OB_FAV);
											}
											OB_FAV = doc.createElement('option');
											var d = doc.createAttribute("disabled");
											d.value = true;
											OB_FAV.setAttributeNode(d);
											var all = FExtension.element(TranslatorIM.SL_LOC,"extwptDAll");
										    	OB_FAV.appendChild(doc.createTextNode("-------- [ "+ all +" ] --------"));

										    	OB16.appendChild(OB_FAV);
										}
									     }	


									        var thelang = "es";
										if(TranslatorIM.SL_langDst!="" && TranslatorIM.SL_SID_TO=="") thelang = TranslatorIM.SL_langDst_bbl2;
										for(J=0; J < MENU.length; J++){
										    CURlang3 = MENU[J].split(":");
										    option = doc.createElement('option');
										    if(SEL == 0){	
											    if(CURlang3[0] == thelang){
												    var sel = doc.createAttribute("selected");
												    sel.value = "selected";
												    option.setAttributeNode(sel);
											    }
										    }
										    v = doc.createAttribute("value");
										    v.value = CURlang3[0];
										    option.setAttributeNode(v);
										    option.appendChild(doc.createTextNode(CURlang3[1]));
										    OB16.appendChild(option);
										}							                       

								        OB15.appendChild(OB16);									

							        var OB17 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB17.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "5%";
								OB17.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB17.setAttributeNode(a);
							        OB7.appendChild(OB17);

									OB17.appendChild(doc.createTextNode(" "));

							        var OB18 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB18.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB18.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB18.setAttributeNode(a);
							        OB7.appendChild(OB18);

									var OB19 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_TTS_voice";
								        OB19.setAttributeNode(id);
							 		ti = doc.createAttribute("title");                 
									ti.value = TranslatorIM.SL_GetLongName(TranslatorIM.SL_DETECT);
					        			OB19.setAttributeNode(ti);
								        OB18.appendChild(OB19);

							        var OB20 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB20.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB20.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB20.setAttributeNode(a);
							        OB7.appendChild(OB20);

									var OB21 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_copy";
								        OB21.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = FExtension.element(TranslatorIM.SL_LOC,"extCopy_ttl");
					        			OB21.setAttributeNode(ti);
							 		cl = doc.createAttribute("class");
									cl.value = "SL_copy";
					        			OB21.setAttributeNode(cl);
								        OB20.appendChild(OB21);
										var OB21tip = doc.createElement('div');
										id = doc.createAttribute("id");
										id.value = "SL_copy_tip";
									        OB21tip.setAttributeNode(id);
								        	OB21.appendChild(OB21tip);


							        var OB22 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB22.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB22.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB22.setAttributeNode(a);
							        OB7.appendChild(OB22);

									var OB23 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_bbl_font_patch";
								        OB23.setAttributeNode(id);
//							 		var js = doc.createAttribute("onclick");
//									js.value = "TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extNot_available"))";
//					        			OB23.setAttributeNode(js);
								        OB22.appendChild(OB23);

									var OB24 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_bbl_font";
								        OB24.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = FExtension.element(TranslatorIM.SL_LOC,"extFont_Size_ttl");
					        			OB24.setAttributeNode(ti);
							 		cl = doc.createAttribute("class");
									cl.value = "SL_bbl_font";
					        			OB24.setAttributeNode(cl);
								        OB22.appendChild(OB24);

							        var OB25 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB25.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB25.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB25.setAttributeNode(a);
							        OB7.appendChild(OB25);


									var OB26 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_bbl_help";
								        OB26.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = FExtension.element(TranslatorIM.SL_LOC,"extHelp");
					        			OB26.setAttributeNode(ti);
								        OB25.appendChild(OB26);



							        var OB28 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB28.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "15%";
								OB28.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "right";
								OB28.setAttributeNode(a);
							        OB7.appendChild(OB28);

									var OB29 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_pin";
								        OB29.setAttributeNode(id);
									cl = doc.createAttribute("class");
									cl.value = "SL_pin_off";
								        OB29.setAttributeNode(cl);
							 		ti = doc.createAttribute("title");
									ti.value = FExtension.element(TranslatorIM.SL_LOC,"extPin_ttl");
					        			OB29.setAttributeNode(ti);
								        OB28.appendChild(OB29);


						OB4.appendChild(OB6);


						var OBpr = doc.createElement('div');
						id = doc.createAttribute("id");
						id.value = "SL_Bproviders";
						
						if(TranslatorIM.SL_SHOW_PROVIDERS!="1"){
							st = doc.createAttribute("style");
							st.value = "visibility:hidden;";
							OBpr.setAttributeNode(st);
						}
					        OBpr.setAttributeNode(id);
					        OB4.appendChild(OBpr);

					        for(var p=0; p<TranslatorIM.LISTofPR.length; p++){
							var OBprov = doc.createElement('div');
							id = doc.createAttribute("id");
							id.value = "SL_P"+p;

							cl = doc.createAttribute("class");
							cl.value = "SL_BL_LABLE_ON";
							OBprov.setAttributeNode(cl);

							ti = doc.createAttribute("title");
							ti.value = TranslatorIM.LISTofPR[p];
						        OBprov.setAttributeNode(ti);

						        OBprov.setAttributeNode(id);

							var span = doc.createElement('div');
							span.id = "SL_PN"+p;
						        OBprov.appendChild(span);

                                                        span.appendChild(doc.createTextNode(TranslatorIM.LISTofPR[p][0]));
						        OBpr.appendChild(OBprov);

					        }
						OB3.appendChild(OBpr);

						var OBalert = doc.createElement('div');
						OBalert.id = "SL_alert_bbl";
						OBalert.height = "30px;";
					        OB3.appendChild(OBalert);

							var OBclose = doc.createElement('div');
							OBclose.id = "SLHKclose";
						        OBalert.appendChild(OBclose);

							var OBalertcont = doc.createElement('div');
							OBalertcont.id = "SL_alert_cont";
						        OBalert.appendChild(OBalertcont);



			        	OB3.appendChild(OB4);
		        	OB2.appendChild(OB3);

				var OB30 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_shadow_translation_result";
			        OB30.setAttributeNode(id);

			        OB2.appendChild(OB30);

					        var eUL16 = doc.createElement("div");
						st30 = doc.createAttribute("id");
						st30.value = "SL_loading";
						eUL16.setAttributeNode(st30);
						var st30 = doc.createAttribute("class");
						st30.value = "SL_loading";
						eUL16.setAttributeNode(st30);
						OB2.appendChild(eUL16);


				var OB31 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_player2";
			        OB31.setAttributeNode(id);
			        OB2.appendChild(OB31);

				var OB32 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_alert100";
			        OB32.setAttributeNode(id);
			        OB2.appendChild(OB32);

					OB32.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extTTS_Limit")));


				var OB34 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_Balloon_options";
			        OB34.setAttributeNode(id);
			        OB2.appendChild(OB34);

				  OBdown = doc.createElement('div');
				  OBdown.id = "SL_arrow_down";
			          OB34.appendChild(OBdown);

		var OBtbl = doc.createElement("div");
		id = doc.createAttribute("id");
		id.value = "SL_tbl_opt";
		OBtbl.setAttributeNode(id);
		OBtbl.width = "100%";
		OBtbl.height = "16";


               	        var OBtr = doc.createElement("tr");
		        OBtbl.appendChild(OBtr); 

			        var OBtd3_ = doc.createElement("td");
				cl = doc.createAttribute("class");
				cl.value = "SL_td";
				OBtd3_.setAttributeNode(cl);
				OBtd3_.width = "5%";
				OBtd3_.align = "center";
			        OBtr.appendChild(OBtd3_);

				        var OB9_ = doc.createElement("input");
					id = doc.createAttribute("id");
					id.value = "SL_BBL_locer";
					OB9_.setAttributeNode(id);
					var ty = doc.createAttribute("type");
					ty.value = "checkbox";
					OB9_.setAttributeNode(ty);
					var va = doc.createAttribute("checked");
					va.value = Boolean(TranslatorIM.SL_OnOff_BTN2);
					OB9_.setAttributeNode(va);
					var ti = doc.createAttribute("title");
					ti.value = FExtension.element(TranslatorIM.SL_LOC,'extSTB') + " "+ TranslatorIM.Timing +" " +FExtension.element(TranslatorIM.SL_LOC,'extSeconds');
					OB9_.setAttributeNode(ti);
        				OBtd3_.appendChild(OB9_); 

			        var OBtd3__ = doc.createElement("td");
				cl = doc.createAttribute("class");
				cl.value = "SL_td";
				OBtd3__.setAttributeNode(cl);
				OBtd3__.width = "5%";
				OBtd3__.align = "left";
			        OBtr.appendChild(OBtd3__);
			                          


				        var OB9__ = doc.createElement("div");
					id = doc.createAttribute("id");
					id.value = "SL_BBL_IMG";
					OB9__.setAttributeNode(id);
					var ti = doc.createAttribute("title");
					ti.value = FExtension.element(TranslatorIM.SL_LOC,'extSTB') + " "+ TranslatorIM.Timing +" " +FExtension.element(TranslatorIM.SL_LOC,'extSeconds');
					OB9__.setAttributeNode(ti);
        				OBtd3__.appendChild(OB9__); 






			        var OBtd2 = doc.createElement("td");
				cl = doc.createAttribute("class");
				cl.value = "SL_td";
				OBtd2.setAttributeNode(cl);
				OBtd2.width = "100%";
				OBtd2.align = "center";
			        OBtr.appendChild(OBtd2);


					var OB35 = doc.createElement('span');
			 		var id = doc.createAttribute("id");
					id.value = "BBL_OPT";
	        			OB35.setAttributeNode(id);

					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB35.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = FExtension.element(TranslatorIM.SL_LOC,"extOptions_ttl");
				        OB35.setAttributeNode(ti);
				        OBtd2.appendChild(OB35);

					OB35.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extOptions")));

					OBtd2.appendChild(doc.createTextNode(" : "));

					var OB36 = doc.createElement('span');

			 		var id = doc.createAttribute("id");
					id.value = "HIST_OPT";
	        			OB36.setAttributeNode(id);
					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB36.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = FExtension.element(TranslatorIM.SL_LOC,"extHistory_ttl");
				        OB36.setAttributeNode(ti);
				        OBtd2.appendChild(OB36);

					OB36.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extHistory")));

					OBtd2.appendChild(doc.createTextNode(" : "));


					var OB38 = doc.createElement('span');
			 		var id = doc.createAttribute("id");
					id.value = "FEED_OPT";
	        			OB38.setAttributeNode(id);

					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB38.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = FExtension.element(TranslatorIM.SL_LOC,"extFeedback_ttl");
				        OB38.setAttributeNode(ti);
				        OBtd2.appendChild(OB38);

					OB38.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extFeedback")));

					OBtd2.appendChild(doc.createTextNode(" : "));

					var OB37 = doc.createElement('span');
			 		var id = doc.createAttribute("id");
					id.value = "DONATE_OPT";
	        			OB37.setAttributeNode(id);

					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB37.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = FExtension.element(TranslatorIM.SL_LOC,"extContribution_ttl");
				        OB37.setAttributeNode(ti);
				        OBtd2.appendChild(OB37);

					OB37.appendChild(doc.createTextNode('Donate'));



        				            
			        var OBtd3 = doc.createElement("td");
				cl = doc.createAttribute("class");
				cl.value = "SL_td";
				OBtd3.setAttributeNode(cl);
				OBtd3.width = "15%";
				OBtd3.align = "right";
			        OBtr.appendChild(OBtd3);
				var nw = doc.createAttribute("nowrap");
				nw.value = "nowrap";
				OBtd3.setAttributeNode(nw);



					var OB39 = doc.createElement('span');
					id = doc.createAttribute("id");
					id.value = "SL_Balloon_Close";
				        OB39.setAttributeNode(id);
					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB39.setAttributeNode(cl);

					ti = doc.createAttribute("title");
					ti.value = FExtension.element(TranslatorIM.SL_LOC,"extClose");
				        OB39.setAttributeNode(ti);
				        OBtd3.appendChild(OB39);

					OB39.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extClose")));

			        OBtbl.appendChild(OBtr);

		        OB34.appendChild(OBtbl); 
                        OB2.classList.add("notranslate");

		  //---------------------------
	  
		  TranslatorIM.idleCounter = 0;
                  if(container.tagName == "FRAMESET"){
                      container.parentNode.insertBefore(newElem, container.nextSibling);
                  }else{
                    container.appendChild (newElem);
		    doc.getElementById("SL_balloon_obj").style.display='block';
                  }
                  doc.getElementById('SL_shadow_translation_result2').style.display="none";
		  TranslatorIM.SL_IMG_LOADER();
		  }
                  if(doc.getElementById("SL_balloon_obj")){
			//STOP WORKING ON IFRAMES
			  if(self!=top){
                               if(String(window.location).indexOf('mail.live.')!=-1) container.removeChild (doc.getElementById("SL_balloon_obj"));
			  }

/*
        	          var id = TranslatorIM.TempActiveObjId;                                                                                    
       	        	  if(!window.getSelection().anchorNode && id != "SL_button" && id !="SL_TTS_voice" && id !="SL_lng_from" && id !="SL_lng_to" && id !="SL_locer") container.removeChild (doc.getElementById("SL_balloon_obj"));
	               	  else {doc.getElementById("SL_balloon_obj").style.display='block';}
*/
			  if(doc.getElementById('SL_tables')){						
	        	         var escaper = doc.getElementById('SL_tables').offsetWidth;		
       	          		 if((escaper != 0 && escaper > 410) && TranslatorIM.TempActiveObjId !="SL_button") container.removeChild (doc.getElementById("SL_balloon_obj"));
			  }

		  }



		  //STOP WORKING ON OLD FORUMS
		  if(container.tagName=="BODY" && doc.body.id=="check") container.removeChild (doc.getElementById("SL_balloon_obj"));
		  //STOP WORKING ON WP WIDGETS
		  if(container.tagName=="BODY" && doc.body.id=="tinymce") container.removeChild (doc.getElementById("SL_balloon_obj"));	     


		if(doc.getElementById('SL_lng_from')){
	                doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc_bbl2;
	       	        doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst_bbl2;
        		TranslatorIM.SL_locker_settler();
		}
	},


	fade: function (){
	 var doc = FExtension.browserInject.getDocument();
	 TranslatorIM.unfade();
	 setTimeout(function() { 
		var THEobj = doc.getElementById('SL_button');
		if(THEobj){
			 THEobj.style.opacity=0;
			 THEobj.style.transition='opacity 1s linear';
		}
	 }, (TranslatorIM.Timing*1000));
	},

	dofade: function (){
	 var doc = FExtension.browserInject.getDocument();
	 var THEobj = doc.getElementById('SL_button');
	   setTimeout(function() { 
		if(THEobj){
			THEobj.style.opacity=0;
			THEobj.style.transition='opacity 1s linear';
			THEobj.addEventListener('transitionend', function() {
			    THEobj.style.display='none';
			}, false );
		}
	   }, (TranslatorIM.Timing*1000));
	},

	unfade: function (){
	 var doc = FExtension.browserInject.getDocument();
	 if(doc.getElementById("SL_button")){
		doc.getElementById("SL_button").style.opacity=0;
		var THEobj = doc.getElementById('SL_button');
		if(THEobj){
			 THEobj.style.opacity=1;
			 THEobj.style.transition='';
		}
	 }
	},


	SLShowHideAlert: function(){
	  var doc = FExtension.browserInject.getDocument();
	  if(doc.getElementById('SL_alert_bbl')) doc.getElementById('SL_alert_bbl').style.display='none'; 
	},
                

	SL_alert: function(txt){
	  var doc = FExtension.browserInject.getDocument();
	  if(doc.getElementById('SL_alert_bbl')){
		doc.getElementById('SL_alert_bbl').style.display="block";
		doc.getElementById('SL_alert_bbl').style.marginTop="-1px";
		doc.getElementById('SL_alert_bbl').style.marginLeft="0px";
		doc.getElementById("SL_alert_cont").innerText=txt;
          }
	},

/*
        getObjPosition: function (el){
	    var _x = event.clientX + document.body.scrollLeft - document.body.clientLeft;
	    var _y = event.clientY + document.body.scrollTop - document.body.clientTop;

	    TranslatorIM.SL_L = _x;
	    TranslatorIM.SL_R = _x;
	    TranslatorIM.SL_T = _y;
	    TranslatorIM.SL_B = _y;
	    if(_y<265) {
		TranslatorIM.SL_NEST="BOTTOM";
		TranslatorIM.SL_T=TranslatorIM.SL_T+10;
		TranslatorIM.SL_B=TranslatorIM.SL_B+10;
	    }
	},

*/


	getSelectionCoords: function(e) {
	  var doc = FExtension.browserInject.getDocument();

	  try{
		  var range = doc.getSelection().getRangeAt(0);
		  var rect = range.getBoundingClientRect();

		  var l = Math.ceil(rect.left);
		  var t = Math.ceil(rect.top);
		  var r = Math.ceil(rect.right);
		  var b = Math.ceil(rect.bottom);


		  if(l==0 && t==0 && b==0 && r==0){
			if(TranslatorIM.SL_GLOBAL_X1>TranslatorIM.SL_GLOBAL_X2){
				l = TranslatorIM.SL_GLOBAL_X2;
				r = TranslatorIM.SL_GLOBAL_X1;
			} else {
				l = TranslatorIM.SL_GLOBAL_X1;
				r = TranslatorIM.SL_GLOBAL_X2;
			}

			if(TranslatorIM.SL_GLOBAL_Y1>TranslatorIM.SL_GLOBAL_Y2){
				t = TranslatorIM.SL_GLOBAL_Y2-document.body.scrollTop;
				b = TranslatorIM.SL_GLOBAL_Y1-document.body.scrollTop;
			} else {
				t = TranslatorIM.SL_GLOBAL_Y1-document.body.scrollTop;
				b = TranslatorIM.SL_GLOBAL_Y2-document.body.scrollTop;
			}
			t=t-8;
			b=b+8;
		  }



	//	  if(l!=t){

			  TranslatorIM.SL_L = l; 
			  TranslatorIM.SL_T = t;
			  TranslatorIM.SL_R = r;
			  TranslatorIM.SL_B = b;
			  if(t<265) TranslatorIM.SL_NEST="BOTTOM";
			  else TranslatorIM.SL_NEST="TOP";
			  var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
			  var deltab=window.innerHeight*1-140-b;
			  var deltat=t;


			  if(deltab>deltat && deltat<270)TranslatorIM.SL_NEST="BOTTOM";
			  else if(bodyScrollTop>270)TranslatorIM.SL_NEST="TOP";


			  if((bodyScrollTop+b)>(bodyScrollTop + window.innerHeight-200) && b-t> window.innerHeight-200 && t<260) TranslatorIM.SL_NEST="FLOAT";
			  TranslatorIM.SL_SID_PIN=TranslatorIM.SL_OnOff_PIN;
			  //TranslatorIM.SAVE_SES_PARAMS();
			  if(TranslatorIM.SL_FRAME==0){
			  	if(TranslatorIM.SL_NEST!="FLOAT" && TranslatorIM.SL_SID_PIN == "true") TranslatorIM.SL_NEST="FLOAT";
			  }

	//	  }

	 } catch(e){}
	 },

	 SL_JUMP: function (doc){
		setTimeout(function() {
			TranslatorIM.SL_bring_UP();
			TranslatorIM.SL_bring_DOWN();
        		if(TranslatorIM.SL_NEST!="FLOAT"){
				var SLdivField = doc.getElementById("SL_shadow_translator");

		 		if(TranslatorIM.SL_NEST=="TOP"){
		//			if(TranslatorIM.SL_MoveY.replace("px","") < 0){
				        	var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
						var tp = Math.abs((bodyScrollTop*1)+TranslatorIM.SL_T-(SLdivField.offsetHeight*1)-9);
						if(TranslatorIM.SL_SAVETEXT==0) SLdivField.style.top = tp +"px";
		//			}
				}
				TranslatorIM.WINDOW_and_BUBBLE_alignment(doc,SLdivField);
			} else {
			 	doc.getElementById("SL_arrow_up").style.display="none";
			}
			var e = window.event;
		}, 50);
	},




	WINDOW_and_BUBBLE_alignment: function(doc,SLdivField){
		if(TranslatorIM.SL_FRAME==1 && (TranslatorIM.GlobalBoxX+TranslatorIM.GlobalBoxY)>0){
			TranslatorIM.SL_NEST="";
			var OBJ = doc.getElementById('SL_pin');
			OBJ.className = "SL_pin_off";
			OBJ.title = FExtension.element(TranslatorIM.SL_LOC,"extPin_ttl");
			OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-off.png')+")";

			TranslatorIM.SL_SID_PIN="false";

	        	var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
			if(parseInt(TranslatorIM.SL_MoveX.replace("px",""))<0){
				var tp = Math.abs((bodyScrollTop*1)+TranslatorIM.SL_T-(SLdivField.offsetHeight*1)-9);
			}else{
				var tp = TranslatorIM.SL_MoveX;
				TranslatorIM.SL_MoveX="-10000px";
			}
			SLdivField.style.top = tp +"px";			

	        	var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
			if(parseInt(TranslatorIM.SL_MoveY.replace("px",""))<0){
				var lt = Math.abs((bodyScrollLeft*1)+((TranslatorIM.SL_L+TranslatorIM.SL_R)/2)-(SLdivField.offsetWidth*1)/2);
			}else{
				var lt = TranslatorIM.SL_MoveY;
				TranslatorIM.SL_MoveY="-10000px";
			}
			SLdivField.style.left = lt +"px";

			TranslatorIM.SL_arrows('up'); 
		} else {
	        	var bodyScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;	  	
        	        var Wy1 = bodyScrollTop;
	                var Wy2 = window.innerHeight + bodyScrollTop;
                	var By1 = parseInt(SLdivField.style.top.replace("px",""));
        	        var By2 = By1+SLdivField.offsetHeight;
			var DELTAy = 1;
			if (doc.body.offsetHeight > window.innerHeight)	var DELTAy = 5;
			if (By1 < Wy1) SLdivField.style.top = (Wy1+TranslatorIM.GlobalBoxY) +"px";
			if (By2 > Wy2) SLdivField.style.top = (Wy2-SLdivField.offsetHeight-DELTAy) +"px";

	        	var bodyScrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;	  	
        	        var Wx1 = bodyScrollLeft;
	                var Wx2 = window.innerWidth + bodyScrollLeft;
                	var Bx1 = parseInt(SLdivField.style.left.replace("px",""));
			if(TranslatorIM.SL_NEST == "FLOAT") Bx1 = TranslatorIM.GlobalBoxX;
	                var Bx2 = Bx1+SLdivField.offsetWidth;
			var DELTAx = 1;
			if (doc.body.offsetWidth < window.innerWidth)	var DELTAx = 25;
			var cnt=0;
			if (Bx1 < Wx1) {cnt++;SLdivField.style.left = (Wx1+TranslatorIM.GlobalBoxX+DELTAx) +"px";}
			if (Bx2 > Wx2) {cnt++;SLdivField.style.left = (Wx2-SLdivField.offsetWidth-DELTAx) +"px";}

			if(TranslatorIM.SL_NEST == "FLOAT"){
				if(cnt==0 && TranslatorIM.GlobalBoxX!=0){
					SLdivField.style.left = TranslatorIM.GlobalBoxX+"px";
				}
			}
		}

	},


	SL_arrows: function (st){
		var doc = FExtension.browserInject.getDocument();
		doc.getElementById('SL_arrow_up').style.display='block';
		doc.getElementById('SL_arrow_down').style.display='block';
	   	switch(st){
			case "up": doc.getElementById('SL_arrow_up').style.display='none'; break;
			case "down": doc.getElementById('SL_arrow_down').style.display='none'; break;
	                case "all": doc.getElementById('SL_arrow_up').style.display='none'; doc.getElementById('SL_arrow_down').style.display='none'; break;
	        }
	},


        SL_NotAllowed: function(){
	    var doc = FExtension.browserInject.getDocument();
		 if(doc.getElementById('SL_lng_from').value=="auto"){
			//doc.getElementById('SL_switch_b').title=TranslatorIM.SL_LOC("disabled");
			doc.getElementById('SL_switch_b').style.cursor='not-allowed';
		 }else{
			//doc.getElementById('SL_switch_b').title=TranslatorIM.SL_LOC("switch");
			doc.getElementById('SL_switch_b').style.cursor='pointer';
		 }
	},



	SL_WEB_PAGE_TRANSLATION_FROM_TB: function(st, act, tb, tip){       
		TranslatorIM.SL_set_LNG_TRIGGER("SL_LNG_TRIGGER",0);
		if(TranslatorIM.SL_wptGlobTip!=tip || TranslatorIM.SL_wptGlobTb != tb){
			ImTranslatorDataEvent.mousedown();
			setTimeout(function() {
				TranslatorIM.SL_WEB_PAGE_TRANSLATION(st,act);
			}, 100);
		}else TranslatorIM.SL_WEB_PAGE_TRANSLATION(st,act);
	},


	SL_WEB_PAGE_TRANSLATION_FROM_CM_AND_HK: function(st, act){       
		TranslatorIM.SL_set_LNG_TRIGGER("SL_LNG_TRIGGER",0);
		TranslatorIM.SL_WEB_PAGE_TRANSLATION(st,act);
	},


	SL_WPT: function(st){
                TranslatorIM.SL_WPT_DETECT_4_GB_CALLS();
		setTimeout(function() {
		    var SLIDL = setInterval(function(){
			if(TranslatorIM.SL_WPT_TRG_LNG) {
		                var url = window.location; 	  		  
				if(st==0) FExtension.browserInject.runtimeSendMessage({greeting: "wpt1:>"+url+"*"+TranslatorIM.SL_WPT_TRG_LNG}, function(response) {}); 
				else FExtension.browserInject.runtimeSendMessage({greeting: "wpt2:>"+url+"*"+TranslatorIM.SL_WPT_TRG_LNG}, function(response) {}); 
				TranslatorIM.SL_WPT_TRG_LNG="";
				clearInterval(SLIDL);
			}
 	            },5); 
		}, 500);	
	},




	SL_WEB_PAGE_TRANSLATION: function(st, act){       
		TranslatorIM.SL_getDATA();
		setTimeout(function() {
			TranslatorIM.SL_LoadGoogleTranslateWidget(TranslatorIM.SL_WPTsrclang,TranslatorIM.SL_wptGlobLang,st,act);
		}, 500);
	},


	SL_BUBBLE_FROM_CM: function(e){
	      	var doc = FExtension.browserInject.getDocument();
		TranslatorIM.SL_BBL_OBJ_OFF(0);
		TranslatorIM.SL_OBJ_BUILDER();
		TranslatorIM.getSelectionCoords(e);
		TranslatorIM.SL_ShowBalloon();
	},


        SL_runinlinerNOW: function(info, tab){
		runinliner();
	},



	MS: function(f,t,text,id){
        if(f=="auto" && TranslatorIM.SL_DETECT != "") f=TranslatorIM.SL_DETECT;
	TranslatorIM.SL_OTHER_PROVIDERS(text,id);
	},

	CUSTOM_LANGS: function(list){
		var OUT = "";
	        //list = list.replace(/&#160;/ig," ");
        	var list2 = TranslatorIM.SL_LNG_CUSTOM_LIST;

		if(list2=="all") OUT = list;
		else{
		    var L1 = list.split(",");
		    for(var i=0; i<L1.length; i++){
	     		var L1base = L1[i].split(":");
		     	var L1short = list2.split(",");
			for(var j=0; j<L1short.length; j++){
			   if(L1base[0] == L1short[j]) OUT=OUT+L1short[j]+":"+L1base[1]+",";
			}
		    }
 		    OUT = OUT.substring(0,OUT.length-1);		    
		}
		return OUT;
	},

	CleanUpAll: function(e){
	     try{
		var OBJ_ID = e.target.id;
		if(OBJ_ID.indexOf('SL_')==-1){
		    try{
		        var doc = FExtension.browserInject.getDocument();
		        for(var I = 0; I < doc.getElementsByTagName("iframe").length; I++){
                	    var ID = doc.getElementsByTagName("iframe")[I].id;
	                    if(ID!=""){
				if(doc.getElementById(ID).contentWindow.document.getElementById('SL_balloon_obj')) {
					doc.getElementById(ID).contentWindow.document.getElementById('SL_balloon_obj').remove();
					//window.frames[ID].document.getElementById('SL_balloon_obj').remove();
				}
			    }
			}
		    } catch(e){}
		}
	     } catch(e){}
	},

	TSgetSelectionCoords: function() {
 	    var doc = FExtension.browserInject.getDocument();
	    var sel = doc.selection, range, rect;
	    var x = 0, y = 0;
	    if (sel) {
	        if (sel.type != "Control") {
        	    range = sel.createRange();
	            range.collapse(true);
        	    x = range.boundingLeft;
	            y = range.boundingTop;
        	}
	    } else if (window.getSelection) {
        	sel = window.getSelection();
	        if (sel.rangeCount) {
        	    range = sel.getRangeAt(0).cloneRange();
		    if (range.getClientRects) {
	                range.collapse(true);
        	        if (range.getClientRects().length>0){
                	    rect = range.getClientRects()[0];
	                    x = rect.left;
        	            y = rect.top;
                	}
	            }
        	    // Fall back to inserting a temporary element
	            if (x == 0 && y == 0) {
        	        var span = doc.createElement("span");
                	if (span.getClientRects) {
	                    // Ensure span has dimensions and position by
        	            // adding a zero-width space character
                	    span.appendChild( doc.createTextNode("\u200b") );
	                    range.insertNode(span);
        	            rect = span.getClientRects()[0];
                	    x = rect.left;
	                    y = rect.top;
        	            var spanParent = span.parentNode;
                	    spanParent.removeChild(span);

	                    // Glue any broken text nodes back together
        	            spanParent.normalize();
                	}
	            }
        	}
	    }
	    return { x: x, y: y };
	},


    SL_LoadGoogleTranslateWidget: function (sourceLang, targetLang, trauto, act) {      

      var doc = FExtension.browserInject.getDocument();
      TranslatorIM.SL_getLNG_TMP("SL_G_WPT_TO");
      TranslatorIM.SL_WPT_DETECT(0);

/*
//OLD
      if(TranslatorIM.SL_wptGlobLangTmp!="" && TranslatorIM.SL_wptGlobLangTmp!=targetLang){
		targetLang=TranslatorIM.SL_wptGlobLangTmp;
      }
*/
//NEW
      if(TranslatorIM.SL_wptGlobLangTmp!=""){
		targetLang=TranslatorIM.SL_wptGlobLangTmp;
      }







      if(targetLang != TranslatorIM.SL_WPT_TEMP_LANG && TranslatorIM.SL_WPT_TEMP_LANG!="") targetLang=TranslatorIM.SL_WPT_TEMP_LANG;



      TranslatorIM.SL_RemoveExistingGoogleTranslateWidget();

	      if(act=="reset"){			
			TranslatorIM.SL_WPT_TEMP_LANG="";
			TranslatorIM.SL_DATA_LOADING_CASCADE();
			//TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",TranslatorIM.SL_wptGlobLang);
			TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",TranslatorIM.SL_WPT_TB_DEFAULT);
			TranslatorIM.SL_set_AUTO_TMP("SL_AUTO_TMP",1);
	      }


	      if(act=="reopen"){
			TranslatorIM.SL_GWPT_Show_Hide_tmp=1;
		      	TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",1);
	      }

	      if(act==undefined){
			TranslatorIM.SL_GWPT_Show_Hide_tmp=0;	
	      }



	      if(act=="hide"){		
			TranslatorIM.SL_GWPT_Show_Hide_tmp=0;
		      	TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",0);
	      }

	      if(act=="continue"){		
		      TranslatorIM.SL_getSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp");
	      }

	      if(TranslatorIM.SL_wptGlobAutoTmp == 0){
		      if(TranslatorIM.SL_WPT_TEMP_LANG=="" || TranslatorIM.SL_WPT_TEMP_LANG=="null" || TranslatorIM.SL_WPT_TEMP_LANG==undefined){
			  TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",TranslatorIM.SL_wptGlobLang);
		      }	else{
        	          if(targetLang!=TranslatorIM.SL_WPT_TEMP_LANG) targetLang=TranslatorIM.SL_WPT_TEMP_LANG;
		      }
	      }	
/*
	      if(act=="reset"){
		TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",targetLang);
	      }
*/
	      TranslatorIM.SL_WPT_LANG = targetLang;

	      var head = document.querySelector('HEAD');
	      var body = document.querySelector('BODY');
	      var trautoStr = trauto === '1' ? "true" : "false";

	      //By VK
	      trautoStr="true";
	      if(TranslatorIM.SL_WPT_IGRORE==1) trautoStr="false";
	      var uid = Math.floor(Math.random() * 1e16)

/*
	      if(TranslatorIM.SL_wptGlobAutoTmp!=1){
		      TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
		      var MENU = TranslatorIM.SL_LNG_LIST.split(",");
		      if(MENU.length>=TranslatorIM.SL_FAV_START){
			if(TranslatorIM.SL_FAV_LANGS_WPT!=""){
				var favArr=TranslatorIM.SL_FAV_LANGS_WPT.split(","); 
				targetLang=favArr[0];
			}
		      }	
	      }
*/

	      setTimeout(function() {


			/////////VK FLIP
		      	TranslatorIM.SL_getWPT_DET_LNG("SL_WPT_DET_LNG");
		      	if(TranslatorIM.WPTflip=="1"){
			      if(TranslatorIM.SL_WPT_TRG_LNG == targetLang && TranslatorIM.SL_WPT_FLAG==0){
			            	if(targetLang != TranslatorIM.SL_WPTsrclang){
			        	 	var tt = TranslatorIM.SL_WPTdstlang;
						targetLang = TranslatorIM.SL_WPTsrclang;
						sourceLang = tt;
					} else {
				 		targetLang = TranslatorIM.SL_WPTdstlang;
					}
			      }
		      	}
			//////;
			var SRC_ = sourceLang;
			if(SRC_=="srsl") SRC_ = "sr";
			if(SRC_=="tlsl") SRC_ = "tl";

			var TRG_ = targetLang;
			if(TRG_=="srsl") TRG_ = "sr";
			if(TRG_=="tlsl") TRG_ = "tl";

	      		TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(targetLang, '', 1, TranslatorIM.SL_FAV_LANGS_WPT, "WPT");
	      		TranslatorIM.SL_GET_WPT_DATA();
		      	var SL_JS_OB;
	      		SL_JS_OB = document.createElement('script');
	      		SL_JS_OB.type = "text/javascript";
	      		SL_JS_OB.className = "skiptranslate"; 
	      		SL_JS_OB.textContent =
	        		["function googleTrButton" + uid + "() {",
	        	 		'  var el = new google.translate.TranslateElement({',
				//      '    pageLanguage: "' + SRC_ + '", ',
		         		'    includedLanguages: "' + TRG_ + '", ',
	         			'    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,',
	        	 		'    autoDisplay: false,',
		         		'    multilanguagePage: true,',
		         		'    floatPosition: 0',
	         			'  });',
	        	 		'  el.onTurnOffLanguageClick = function() {',
		         		'    var event = document.createEvent("Event");',
		         		'    event.initEvent("te_disable_lang", true, true);',
	         			'    document.body.dispatchEvent(event);',
	        	 		'  };',
		         		'  el.showBanner(' + trautoStr + ');',
		         		'}'
	        		].join('\n');


		      FExtension.browserInject.runtimeSendMessage({greeting: "WPT_CURL:>"+targetLang}, function(response) {}); 

		      body.appendChild(SL_JS_OB);
		      if(window.location.host.indexOf("ebay.")!=-1) body.style.overflow="visible";

		      document.body.addEventListener('te_disable_lang', function(e) {
        		opera.extension.postMessage({
	        	  action: 'disableLang',
	        	  data: {
		            lang: targetLang
        		  }
		        });
		      }, false);

		      var translateElementScript = document.createElement('script');
		      translateElementScript.type = "text/javascript"
	              var theRegion ="com";
		      if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;
		      translateElementScript.src = '//translate.google.'+theRegion+'/translate_a/element.js?cb=googleTrButton' + uid + '&hl=' + TranslatorIM.SL_LOC;


		      body.appendChild(translateElementScript);

		      TranslatorIM.SL_getLNG_TMP("SL_G_WPT_TO");
		      TranslatorIM.SLWPT = setInterval(function(){

			if(top.window.frames[":0.container"]){
				if(top.window.frames[":0.container"].contentWindow.document.getElementById(':0.close')) {				
					clearInterval(TranslatorIM.SLWPT);
			      		var obs = document.getElementsByTagName('div');
				 	for (var i=0; i<obs.length; i++){
		        		  if(obs[i].className == "skiptranslate") obs[i].style.display="block"; 
					}
        				TranslatorIM.SL_Bar_Cover(targetLang,trauto);
				}
			}
		   	if(TranslatorIM.SL_get_TIP_TRIGGER("SL_wptGlobTipTmp") != 1){
				if(doc.getElementById("SL_fix"))head.removeChild(doc.getElementById("SL_fix"));
				var style_tip = document.createElement('style');
				style_tip.setAttribute('type', 'text/css');
				style_tip.setAttribute('id', 'SL_fix');
				style_tip.appendChild(document.createTextNode('.goog-tooltip, .goog-tooltip:hover{ display: none !important; }'));
				style_tip.appendChild(document.createTextNode('.goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }'));
				head.appendChild(style_tip);
				if(doc.getElementById("goog-gt-tt")) doc.getElementById("goog-gt-tt").style.marginLeft="-5000px";
			}else{
				if(doc.getElementById("SL_fix"))head.removeChild(doc.getElementById("SL_fix"));
				var style_tip = document.createElement('style');
				style_tip.setAttribute('type', 'text/css');
				style_tip.setAttribute('id', 'SL_fix');
				style_tip.appendChild(document.createTextNode('.goog-tooltip, .goog-tooltip:hover{ display: block !important; }'));
				style_tip.appendChild(document.createTextNode('.goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }'));
				head.appendChild(style_tip);
				if(doc.getElementById("goog-gt-tt")) doc.getElementById("goog-gt-tt").style.marginLeft="0px";
			}

		        FExtension.browserInject.runtimeSendMessage({greeting: "wptCM:>"+TranslatorIM.SL_WPT_TEMP_LANG}, function(response) {}); 
			TranslatorIM.SL_SAVE_TO_TH(sourceLang,targetLang);
			TranslatorIM.ACTIVATE_THEMEwpt(TranslatorIM.THEMEmode);

			if(doc.getElementById("SL_TBpatchid")) doc.getElementById("SL_TBpatchid").style.display="none";

	          },1000);                
		}, 500);
	//Allways DETECT on WPT run
        TranslatorIM.SL_WPT_DETECT_4_GB_CALLS();
    },


    SL_SAVE_TO_TH: function(sourceLang, targetLang){
	var SLnow = new Date();
	SLnow=SLnow.toString();
	var TMPtime=SLnow.split(" ");
	var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];      		
	var URL_host = document.location;
	FExtension.browserInject.runtimeSendMessage({greeting:"[wp]"+ URL_host + "~~" + URL_host + "~~" + sourceLang + "|" + targetLang + "~~"+ URL_host+"~~"+CurDT+"~~4^^"}, function(response) { });
    },


    SL_WPTmsg: function(text){
   	var doc = FExtension.browserInject.getDocument();
	var SL_MSG = doc.createElement("button");
	var SL_MSGid = doc.createAttribute("id");
	SL_MSGid.value = "SL_MSG";
        SL_MSG.setAttributeNode(SL_MSGid);
        SL_MSG.appendChild(doc.createTextNode(text));
        doc.body.appendChild(SL_MSG);
    },


    SL_WPT_DETECT_4_GB_CALLS: function(st){
	      	var rootTranslateNode = TranslatorIM.getRootNode();
	      	var analysisText = TranslatorIM.getAnalysisText(rootTranslateNode);
		TranslatorIM.SL_WPT_DODetection(analysisText);
    },

    SL_WPT_DETECT: function(st){
	var AcumStatus = TranslatorIM.SL_wptDp4*1 + TranslatorIM.SL_wptLp2*1;	
	var LHistStatus = 0;
	if(TranslatorIM.SL_wptLHist!="") LHistStatus = 1;
	if(st==2) {AcumStatus=1;LHistStatus=1;}
	if(st==0) {AcumStatus=0;LHistStatus=0;}
	if(AcumStatus>0 || LHistStatus == 1){
	      	var rootTranslateNode = TranslatorIM.getRootNode();
	      	var analysisText = TranslatorIM.getAnalysisText(rootTranslateNode);
		TranslatorIM.SL_WPT_DODetection(analysisText);
	}else{
		TranslatorIM.SL_DETLANG="skip";
		TranslatorIM.SL_WPT_LANG="skip";
	}
    },

    SL_Bar_Cover: function(targetLang,trauto){
   	var doc = FExtension.browserInject.getDocument();
	var r = doc.getElementsByClassName("goog-te-banner-frame");
	if(r[0]) r[0].style = "display:block !important";
	TranslatorIM.SL_getSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp");
        if(TranslatorIM.SL_GWPT_Show_Hide_tmp==0) TranslatorIM.SL_WPT_HIDDEN_MODE();
        TranslatorIM.SL_GMENU_BAR_LOADER(targetLang, trauto);
    },

    SL_RemoveExistingGoogleTranslateWidget: function() {
      var doc = FExtension.browserInject.getDocument();
      var ObFound = false;
      var theRegion = "com";
      if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;

      var TrScrs = document.querySelectorAll('script[src*="//translate.google.'+theRegion+'/"]');
      for (var i = 0; i < TrScrs.length; ++i) { ObFound = true; TrScrs[i].parentNode.removeChild(TrScrs[i]); }
      var TrObs = document.querySelectorAll('*[class~="skiptranslate"]');
      for (var i = 0; i < TrObs.length; ++i) { ObFound = true; TrObs[i].parentNode.removeChild(TrObs[i]); }
      if(ObFound) TranslatorIM.SL_HideExistingGoogleTranslateWidget(0);
      TranslatorIM.SL_CNT=0;
      if(doc.getElementById("SL_TBpatchid")) doc.getElementById("SL_TBpatchid").style.display="none";
    },

    SL_HideExistingGoogleTranslateWidget: function(st) {
        var bodyEl = document.querySelector('BODY');
        if(st==0) var H = 40;
        else      var H = 0;	
        var PosOnTop = parseInt(bodyEl.style.top || 0, 10) - H;
       	bodyEl.style.top = (PosOnTop > 0 ? PosOnTop : 0) + "px";
    },

    SL_WPT_HIDDEN_MODE: function(){
        var doc = FExtension.browserInject.getDocument();
	var obs = document.getElementsByTagName('div');
	var cnt = 0;
        for (var i=0; i<obs.length; i++){
	   if(obs[i].className=="skiptranslate") {
		cnt++;
		obs[i].style.display='none';
		doc.body.style.top='0px';
	   } 
	}
	if(cnt!=0){
		var M = doc.createElement("input");
		M.onclick = function(){
			TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",1);
			TranslatorIM.SL_SHOW_ORIGINAL();
			setTimeout(function() {
				TranslatorIM.SL_LoadGoogleTranslateWidget(TranslatorIM.SL_LOC,TranslatorIM.SL_wptGlobLang,TranslatorIM.SL_wptGlobAuto,"reopen");
			}, 100);

		};

		var trbtn = doc.getElementById('SL_WPT_SHOW');
		if(trbtn)	trbtn.parentNode.removeChild(trbtn);

	        if(!doc.getElementById("SL_WPT_SHOW")){
			var id = doc.createAttribute("id");
			id.value = "SL_WPT_SHOW";
			M.setAttributeNode(id);
			var ty = doc.createAttribute("type");
			ty.value = "button";
			M.setAttributeNode(ty);
			var st = doc.createAttribute("style");
			st.value = "outline:none !important;z-index:9999999;border:0px;position:fixed;top:0px;right:0px;background:transparent url("+FExtension.browserInject.getURL('content/img/util/show.png')+"); width:30px; height:25px;cursor:pointer;";

			var ttl = doc.createAttribute("title");
			ttl.value = FExtension.element(TranslatorIM.SL_LOC,"extwptTBshow");

			M.setAttributeNode(ttl);

			M.setAttributeNode(st);
	        	doc.body.appendChild(M);
		}
	}
    },

    SL_GMENU_BAR_LOADER: function(cur, trauto){

	if(cur=="") cur=TranslatorIM.SL_wptGlobLang;
   	var doc = FExtension.browserInject.getDocument();
	TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));

//	var MENU = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
	var MENU = TranslatorIM.SL_LNG_LIST.split(",");

	var SL_TB = doc.createElement("div");
	var SL_TBid = doc.createAttribute("id");
	SL_TBid.value = "SL_WPT_TB";
        SL_TB.setAttributeNode(SL_TBid);
	var SL_TBc = doc.createAttribute("style");
	SL_TBc.value = "background:#ffffff;z-index:9999999999;position:absolute;text-align:right;right:35px;margin-top: -28px;";
        SL_TB.setAttributeNode(SL_TBc);
	       	var OBtable = doc.createElement("table");
			SL_TB.appendChild(OBtable);

		        var OBtr = doc.createElement("tr");
		        OBtable.appendChild(OBtr); 

			        var OBtd1 = doc.createElement("td");        

					var SL_trto = doc.createElement("div");
					var SL_trtoid = doc.createAttribute("id");
					SL_trtoid.value = "SL_trto";
					SL_trto.setAttributeNode(SL_trtoid);
					SL_trto.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extCMTransPageTo")));
				        OBtd1.appendChild(SL_trto);

			        OBtr.appendChild(OBtd1);
			        var OBtd2 = doc.createElement("td");

	var M = doc.createElement("select");
	M.onchange = function(){
		TranslatorIM.SL_set_LNG_TRIGGER("SL_LNG_TRIGGER",1);
		TranslatorIM.SL_WPT_IGRORE=0;
		cur= this.value;
	        TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(cur, '', 1, TranslatorIM.SL_FAV_LANGS_WPT, "WPT");
		TranslatorIM.SL_G_RETRANSLATE(cur);
	};
	var id = doc.createAttribute("id");
	id.value = "SL_G_M_to";
	M.setAttributeNode(id);
	var st = doc.createAttribute("style");
	st.value = "width:115px;margin-left:5px;margin-top:-0px;";

	M.setAttributeNode(st);
        var thelang = cur;
        var cnt=0;
	for(var J=0; J < MENU.length; J++){
	    var CURlang3 = MENU[J].split(":");
	    if(CURlang3[0] == thelang) cnt++;
	}

        if(cnt==0 && TranslatorIM.SL_WPT_TEMP_LANG!="") {
		thelang = TranslatorIM.SL_WPT_TEMP_LANG;
		TranslatorIM.SL_WPT_TEMP_LANG="";
	}//else thelang = TranslatorIM.SL_wptGlobLang;
     	var SEL = 0
	if(MENU.length>=TranslatorIM.SL_FAV_START){
		var SL_FAV_LANGS_LONG = TranslatorIM.SL_ADD_LONG_NAMES(TranslatorIM.SL_FAV_LANGS_WPT);
       		if(SL_FAV_LANGS_LONG!=""){
			var favArr=SL_FAV_LANGS_LONG.split(","); 
			for(var J=0; J < favArr.length; J++){
			    var CURlang3 = favArr[J].split(":");
			    var OB_FAV = doc.createElement('option');
			    var v = doc.createAttribute("value");
			    v.value = CURlang3[0];
       			    if(J == 0){
				    var sel = doc.createAttribute("selected");
				    sel.value = "selected";
				    OB_FAV.setAttributeNode(sel);
				    SEL = 1;
				    TranslatorIM.SL_wptGlobLang=CURlang3[0];
			    }
       			    OB_FAV.setAttributeNode(v);
			    OB_FAV.appendChild(doc.createTextNode(CURlang3[1]));
			    M.appendChild(OB_FAV);
			}
			OB_FAV = doc.createElement('option');
			var d = doc.createAttribute("disabled");
			d.value = true;
			OB_FAV.setAttributeNode(d);
			var all = FExtension.element(TranslatorIM.SL_LOC,"extwptDAll");
		    	OB_FAV.appendChild(doc.createTextNode("-------- [ "+ all +" ] --------"));
                       	M.appendChild(OB_FAV);
		}
	}
	for(J=0; J < MENU.length; J++){
	    CURlang3 = MENU[J].split(":");
	    option = doc.createElement('option');
	    if(SEL == 0){	
		    if(CURlang3[0] == thelang){
			    var sel = doc.createAttribute("selected");
			    sel.value = "selected";
			    option.setAttributeNode(sel);
		    }
	   }
	   v = doc.createAttribute("value");
	   v.value = CURlang3[0];
	   option.setAttributeNode(v);
	   option.appendChild(doc.createTextNode(CURlang3[1]));
	   M.appendChild(option);
	}							                       

        OBtd2.appendChild(M);
	OBtr.appendChild(OBtd2);
        var OBtd3 = doc.createElement("td");					
	var SL_TBoptions = doc.createElement("div");
	var SL_TBoptionsid = doc.createAttribute("id");
	SL_TBoptionsid.value = "SL_TBoptions";
        SL_TBoptions.setAttributeNode(SL_TBoptionsid);
	var SL_TBoptionsst = doc.createAttribute("style");
	SL_TBoptionsst.value = "padding:7px;height:14px;background:#1186BB;text-align:center;color:#ffffff;margin-top:-0px;cursor:pointer;";
        SL_TBoptions.setAttributeNode(SL_TBoptionsst);
        SL_TBoptions.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extOptions")));
        OBtd3.appendChild(SL_TBoptions);
        OBtr.appendChild(OBtd3);

        var OBtd4 = doc.createElement("td");					
	var SL_Hide = doc.createElement("div");
	var SL_Hideid = doc.createAttribute("id");
	SL_Hideid.value = "SL_Hide";
        SL_Hide.setAttributeNode(SL_Hideid);
	var SL_Hidest = doc.createAttribute("style");
	SL_Hidest.value = "margin-top:-3px;margin-left:10px;border:0px;background-image:url("+FExtension.browserInject.getURL('content/img/util/hide.png')+"); width:15px; height:15px;cursor:pointer;";;
        SL_Hide.setAttributeNode(SL_Hidest);

	var ttl = doc.createAttribute("title");
	ttl.value = FExtension.element(TranslatorIM.SL_LOC,"extwptTBhide");

	SL_Hide.setAttributeNode(ttl);

        OBtd4.appendChild(SL_Hide);
        OBtr.appendChild(OBtd4);
        SL_TB.appendChild(OBtable);

	if(SL_TB){ 
	   try{
	      var win = top.window.frames[":0.container"].contentWindow;
	      var obs = win.document.getElementsByTagName('div');
        	for (var i=0; i<obs.length; i++){
	           if(obs[i].className=="goog-te-button" && i==8) {
			obs[i].style.display='none';
		   } else obs[i].style='padding-top:2px;border:0px;height:24px;background:#1186BB;z-index:1000;position:relative;border:0px;color:#ffffff;';
	        }
	        var style='border:0px;background:#1186BB;color:#ffffff;';
	        win.document.getElementById(':0.restore').style=style;
	        win.document.getElementById(':0.confirm').style=style;
	        win.document.getElementById(':0.cancel').style=style;
	        win.document.getElementById(':0.noAutoPopup').style=style;
	        win.document.body.style.background="#ffffff";

	      var obs = win.document.getElementsByTagName('a');
        	for (var i=0; i<obs.length; i++){
	           if(obs[i].className=="goog-te-menu-value") {
			obs[i].style='color:#4787ed';
		   }
	        }


	      var obs =	win.document.getElementById('options');
	      obs.appendChild(SL_TB);
              TranslatorIM.SL_WPT_ERROR=0;
	      win.document.getElementById('SL_TBoptions').addEventListener('mousedown', TranslatorIM.SL_WPT_OPTIONS_MENU,!0);
	      win.document.getElementById('SL_Hide').addEventListener('mousedown', TranslatorIM.SL_BAR_CLOSE,!0);
	      win.document.getElementById(':0.close').addEventListener('mousedown', TranslatorIM.SL_BAR_STOP,!1);
	      win.document.getElementById(':0.close').title=FExtension.element(TranslatorIM.SL_LOC,"extClearTr");
	      win.document.getElementById(':0.restore').addEventListener('mousedown', TranslatorIM.SL_WPT_OPTIONS_CLOSE,!1);
	      win.document.getElementById(':0.confirm').addEventListener('mousedown', TranslatorIM.SL_WPT_OPTIONS_CLOSE,!1);
	      win.document.getElementById(':0.cancel').addEventListener('mousedown', TranslatorIM.SL_WPT_OPTIONS_CLOSE,!1);
	      win.document.getElementById(':0.noAutoPopup').addEventListener('mousedown', TranslatorIM.SL_WPT_OPTIONS_CLOSE,!1);
	      win.document.getElementById(':0.noAutoPopup').style.display='none';  

	      TranslatorIM.DETERMIN_IF_LANGUAGE_IS_AVAILABLE(thelang);

	   } catch (e){}
	}            
	
    },

    DETERMIN_IF_LANGUAGE_IS_AVAILABLE: function(lng){
	try{
		var lngarr = LISTofLANGsets[0].split(",");
		var cnt = 0;
		if(lngarr.length>1 && lng!=""){
			for(var i=1; i<lngarr.length; i++){
				if(lngarr[i]==lng) cnt++;
			}
		} else cnt=1;
      		if(cnt==0){
			var LONG_NAME="";
			var MENU = TranslatorIM.SL_LNG_LIST.split(",");
			for(var J=0; J < MENU.length; J++){
			    var CURlang = MENU[J].split(":");		    
			    if(CURlang[0] == lng) LONG_NAME = CURlang[1];
			}

			TranslatorIM.InitiateWPT_target_lang(LONG_NAME);
        	        TranslatorIM.SL_WPT_ERROR=1;
	        }
	} catch(ex){}
    },

    DETERMIN_IF_LANGUAGE_IS_AVAILABLE_BBL: function(){
	try{
		var doc = FExtension.browserInject.getDocument();
		var T = doc.getElementById('SL_lng_to').value;
		var lngarr = LISTofLANGsets[0].split(",");
		var cnt = 0;
		if(lngarr.length>1 && T!=""){
			for(var i=1; i<lngarr.length; i++){
				if(lngarr[i]==T) cnt++;
			}
		}
		return(cnt);
	} catch(ex){}
    },

    SL_BAR_STOP: function(){
	var doc = FExtension.browserInject.getDocument();
	TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",2);
	TranslatorIM.SL_SHOW_ORIGINAL();
	TranslatorIM.SL_WPT_OPTIONS_CLOSE(0);
	if(TranslatorIM.SL_WPT_ERROR==1){
		setTimeout(function() {
		      doc.getElementById(":0.container").style.display="none";
		      doc.getElementById("SL_WPT_SHOW").style.display="none";
		}, 100);
	}
	if(doc.getElementById("SL_TBpatchid")) doc.getElementById("SL_TBpatchid").style.display="none";	
    },

    SL_BAR_CLOSE: function(){
	var doc = FExtension.browserInject.getDocument();
	TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",0);
	TranslatorIM.SL_SHOW_ORIGINAL();
	TranslatorIM.SL_WPT_OPTIONS_CLOSE(0);
	setTimeout(function() {
		TranslatorIM.SL_LoadGoogleTranslateWidget(TranslatorIM.SL_LOC,TranslatorIM.SL_wptGlobLang,TranslatorIM.SL_wptGlobAuto,"hide");
	}, 100);
	if(doc.getElementById("SL_TBpatchid")) doc.getElementById("SL_TBpatchid").style.display="none";
	//TranslatorIM.SL_G_RETRANSLATE(TranslatorIM.SL_WPT_LANG);
    },

    SL_WPT_OPTIONS_CLOSE: function(st){
 	var doc = FExtension.browserInject.getDocument();
 	if(doc.getElementById("SL_OPT_MENUid")) doc.getElementById("SL_OPT_MENUid").style.display='none';
 	if(doc.getElementById("SL_TBpatchid")) doc.getElementById("SL_TBpatchid").style.display='none';
	if(doc.getElementById("SL_WPT_SHOW") && st==0) doc.getElementById("SL_WPT_SHOW").style.display='none';	
    },




    SL_WPT_OPTIONS_MENU: function(st){
        //TranslatorIM.SL_SHOW_ORIGINAL();
        if(st!=2) st=1;

	TranslatorIM.SL_GWHOST = TranslatorIM.SL_GetHost();
	TranslatorIM.SL_WPT_OPTIONS_CLOSE();
 	var doc = FExtension.browserInject.getDocument();
	var obs = doc.getElementsByTagName('div');
	for (var i=0; i<obs.length; i++){
		if(obs[i].id == "SL_OPT_MENUcontainerid"){
			var list=document.getElementById("SL_OPT_MENUcontainerid");
			list.parentNode.removeChild(list);
		}
        }


/*
 	if(doc.getElementById("goog-gt-tt")){
		doc.getElementById("goog-gt-tt").innerHTML="";
		doc.getElementById("goog-gt-tt").style.marginLeft="-1000px";
	}
*/
 	if(doc.getElementById("goog-gt-")){
		doc.getElementById("goog-gt-").innerHTML="";
		doc.getElementById("goog-gt-").style.marginLeft="-5000px";
	}


	var SL_OPT_MENU = doc.createElement("div");
	var SL_OPT_MENUid = doc.createAttribute("id");
	SL_OPT_MENUid.value = "SL_OPT_MENUid";
        SL_OPT_MENU.setAttributeNode(SL_OPT_MENUid);
	var SL_OPT_MENUclass = doc.createAttribute("class");
	SL_OPT_MENUclass.value = "SL_OPT_MENU";
        SL_OPT_MENU.setAttributeNode(SL_OPT_MENUclass);

	 var SL_WPT_TABS = doc.createElement("div");
	 var id = doc.createAttribute("id");
	 id.value = "SL_WPT_TABS";
	 SL_WPT_TABS.setAttributeNode(id);

		var SL_WPT_TAB1div = doc.createElement("div");
		var id = doc.createAttribute("id");
		id.value = "SL_WPT_TAB1divid";
		SL_WPT_TAB1div.setAttributeNode(id);

		var SL_WPT_TAB1 = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "button";
		SL_WPT_TAB1.setAttributeNode(ty);
		var v = doc.createAttribute("value");
		v.value = FExtension.element(TranslatorIM.SL_LOC,"extwptDName");
		SL_WPT_TAB1.setAttributeNode(v);
		var SL_WPT_TAB1id = doc.createAttribute("id");
		SL_WPT_TAB1id.value = "SL_WPT_TAB1";
	        SL_WPT_TAB1.setAttributeNode(SL_WPT_TAB1id);

		var SL_WPT_TAB1cl = doc.createAttribute("class");
		SL_WPT_TAB1cl.value = "SL_WPT_TAB1";
	        SL_WPT_TAB1.setAttributeNode(SL_WPT_TAB1cl);

		var SL_WPT_TAB1st = doc.createAttribute("style");
		SL_WPT_TAB1st.value = "margin-left:0px;";
	        SL_WPT_TAB1.setAttributeNode(SL_WPT_TAB1st);
       	  SL_WPT_TAB1div.appendChild(SL_WPT_TAB1);

	  SL_WPT_TAB1div.onclick = function(){
		TranslatorIM.SL_WPT_OPTIONS_MENU(1);
	  };

       	 SL_WPT_TABS.appendChild(SL_WPT_TAB1div);

		var SL_WPT_TAB2div = doc.createElement("div");
		var id = doc.createAttribute("id");
		id.value = "SL_WPT_TAB2divid";
		SL_WPT_TAB2div.setAttributeNode(id);

		var SL_WPT_TAB2 = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "button";
		SL_WPT_TAB2.setAttributeNode(ty);
		var v = doc.createAttribute("value");
		v.value = FExtension.element(TranslatorIM.SL_LOC,"extwptLanguage");
		SL_WPT_TAB2.setAttributeNode(v);
		var SL_WPT_TAB2id = doc.createAttribute("id");
		SL_WPT_TAB2id.value = "SL_WPT_TAB2";
	        SL_WPT_TAB2.setAttributeNode(SL_WPT_TAB2id);

		var SL_WPT_TAB2cl = doc.createAttribute("class");
		SL_WPT_TAB2cl.value = "SL_WPT_TAB2";
	        SL_WPT_TAB2.setAttributeNode(SL_WPT_TAB2cl);

		var SL_WPT_TAB2st = doc.createAttribute("style");
		SL_WPT_TAB2st.value = "margin-left:0px;";
	        SL_WPT_TAB2.setAttributeNode(SL_WPT_TAB2st);
       	  SL_WPT_TAB2div.appendChild(SL_WPT_TAB2);
	  SL_WPT_TAB2div.onclick = function(){
		TranslatorIM.SL_WPT_OPTIONS_MENU(2);
	  };
         SL_WPT_TABS.appendChild(SL_WPT_TAB2div);
             //IMAGE for options
		var SL_WPT_TAB3div = doc.createElement("div");
		SL_WPT_TAB3div.onclick = function(){
		    TranslatorIM.OPEN_BG_OPTIONS("wpt");
		};
		var id = doc.createAttribute("id");
		id.value = "SL_WPT_TAB3divid";
		SL_WPT_TAB3div.setAttributeNode(id);

		var ti = doc.createAttribute("title");
		ti.value = FExtension.element(TranslatorIM.SL_LOC,'extOptions');
		SL_WPT_TAB3div.setAttributeNode(ti);

		var SL_WPT_TAB3st = doc.createAttribute("style");
		SL_WPT_TAB3st.value = "background-image:url("+FExtension.browserInject.getURL('content/img/util/settings.png')+"); width:21px; height:21px;opacity:0.6; margin-left:229px;margin-top:5px;cursor:pointer;position:absolute;";
	        SL_WPT_TAB3div.setAttributeNode(SL_WPT_TAB3st);

         SL_WPT_TABS.appendChild(SL_WPT_TAB3div);

             //IMAGE for help
		var SL_WPT_TAB4div = doc.createElement("div");
		SL_WPT_TAB4div.onclick = function(){
		    TranslatorIM.OPEN_BG_OPTIONS("hist");
		};
		var id = doc.createAttribute("id");
		id.value = "SL_WPT_TAB4divid";
		SL_WPT_TAB4div.setAttributeNode(id);

		var ti = doc.createAttribute("title");
		ti.value = FExtension.element(TranslatorIM.SL_LOC,'extHistory');
		SL_WPT_TAB4div.setAttributeNode(ti);

		var SL_WPT_TAB4st = doc.createAttribute("style");
		SL_WPT_TAB4st.value = "background-image:url("+FExtension.browserInject.getURL('content/img/util/history.png')+"); width:23px; height:21px;opacity:0.6; margin-left:256px;margin-top:5px;cursor:pointer;position:absolute;";
	        SL_WPT_TAB4div.setAttributeNode(SL_WPT_TAB4st);

         SL_WPT_TABS.appendChild(SL_WPT_TAB4div);

             //IMAGE for help
		var SL_WPT_TAB5div = doc.createElement("div");
		SL_WPT_TAB5div.onclick = function(){
		    window.open("https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/chrome-webpage-translation/","ImTranslator:Help");
		};
		var id = doc.createAttribute("id");
		id.value = "SL_WPT_TAB5divid";
		SL_WPT_TAB5div.setAttributeNode(id);

		var ti = doc.createAttribute("title");
		ti.value = FExtension.element(TranslatorIM.SL_LOC,'extHelp');
		SL_WPT_TAB5div.setAttributeNode(ti);

		var SL_WPT_TAB5st = doc.createAttribute("style");
		SL_WPT_TAB5st.value = "background-image:url("+FExtension.browserInject.getURL('content/img/util/help.png')+"); width:21px; height:21px;opacity:0.6; margin-left:286px;margin-top:5px;cursor:pointer;position:absolute;";
	        SL_WPT_TAB5div.setAttributeNode(SL_WPT_TAB5st);

         SL_WPT_TABS.appendChild(SL_WPT_TAB5div);

             //IMAGE for donate
		var SL_WPT_TAB6div = doc.createElement("div");
		SL_WPT_TAB6div.onclick = function(){
		    window.open("https://imtranslator.net"+_CGI+"&a=0","ImTranslator: Buy a coffee");
		};
		var id = doc.createAttribute("id");
		id.value = "SL_WPT_TAB6divid";
		SL_WPT_TAB6div.setAttributeNode(id);

		var ti = doc.createAttribute("title");
		ti.value = FExtension.element(TranslatorIM.SL_LOC,'extContribution_ttl');
		SL_WPT_TAB6div.setAttributeNode(ti);

		var SL_WPT_TAB6st = doc.createAttribute("style");
		SL_WPT_TAB6st.value = "background-image:url("+FExtension.browserInject.getURL('content/img/util/donate.png')+"); width:30px; height:21px;opacity:0.6; margin-left:313px;margin-top:5px;cursor:pointer;position:absolute;";
	        SL_WPT_TAB6div.setAttributeNode(SL_WPT_TAB6st);

         SL_WPT_TABS.appendChild(SL_WPT_TAB6div);



       	SL_OPT_MENU.appendChild(SL_WPT_TABS);

	var SL_OPT_MENUcontainer = doc.createElement("div");
	var SL_OPT_MENUcontainerid = doc.createAttribute("id");
	SL_OPT_MENUcontainerid.value = "SL_OPT_MENUcontainerid";
        SL_OPT_MENUcontainer.setAttributeNode(SL_OPT_MENUcontainerid);

	var SL_OPT_MENUcontainerdir = doc.createAttribute("dir");
	SL_OPT_MENUcontainerdir.value = "ltr";
        SL_OPT_MENUcontainer.setAttributeNode(SL_OPT_MENUcontainerdir);


	if(st==1) TranslatorIM.SL_WPT_CREATE_DOMAIN_TAB(SL_OPT_MENU);
	else TranslatorIM.SL_WPT_CREATE_LANGUAGE_TAB(SL_OPT_MENU);

//DEBUG
//	var MENU = doc.createElement("div");
//	var MENUid = doc.createAttribute("id");
//	MENUid.value = "info";
//      MENU.setAttributeNode(MENUid);
//      SL_OPT_MENU.appendChild(MENU);
//DEBUG
       	SL_OPT_MENUcontainer.appendChild(SL_OPT_MENU);

	var obs = doc.getElementsByTagName('div');
	      	for (var i=0; i<obs.length; i++){
		if(obs[i].className == "skiptranslate"){
			obs[i].appendChild(SL_OPT_MENUcontainer);
		}
	}


       	if(!doc.getElementById("SL_TBpatchid")){
		var SL_TBpatch = doc.createElement("div");
		var SL_TBpatchid = doc.createAttribute("id");
		SL_TBpatchid.value = "SL_TBpatchid";
		SL_TBpatch.appendChild(doc.createTextNode(" "));
       		SL_TBpatch.setAttributeNode(SL_TBpatchid);
		doc.body.appendChild(SL_TBpatch);
	}else doc.getElementById("SL_TBpatchid").style.display='block';

        if(doc.getElementById('SL_TBsave1')) doc.getElementById('SL_TBsave1').addEventListener('mousedown', TranslatorIM.SL_WPT_SAVE_D,!1);
        if(doc.getElementById('SL_TBsave2')) doc.getElementById('SL_TBsave2').addEventListener('mousedown', TranslatorIM.SL_WPT_SAVE_L,!1);
        if(st==2){
       		doc.getElementById("SL_WPT_TAB1divid").className="SL_WPT_TAB1divid_b";
       		doc.getElementById("SL_WPT_TAB2divid").className="SL_WPT_TAB2divid_b";
	}
//DEBUG
//	doc.getElementById("info").innerHTML="DOMAINS: "+TranslatorIM.SL_wptDHist +"<br>LANGS: " + TranslatorIM.SL_wptLHist;
//DEBUG

//	if(doc.getElementById("goog-gt-tt")) doc.getElementById("goog-gt-tt").style.display="block";
	if(doc.getElementById("goog-gt-")) doc.getElementById("goog-gt-").style.marginLeft="0px";

	TranslatorIM.ACTIVATE_THEMEwpt_dom(TranslatorIM.THEMEmode);
    },

    SL_SHOW_ORIGINAL: function(){
        if(top.window.frames[":0.container"]){
	      	var win = top.window.frames[":0.container"].contentWindow;
		if(win.document) win.document.getElementById(':0.restore').click();
	}
    },

    SL_WPT_SAVE_D: function(){
        TranslatorIM.SL_SHOW_ORIGINAL();
 	var doc = FExtension.browserInject.getDocument();
	doc.getElementById('SL_WPT_SAVE_LOAD').style.display = "block";

	//DOM param 0
	var D0 = TranslatorIM.SL_GWHOST;

	//DOM param 1
	var D1 = doc.getElementById('SL_wptSDName');
	if(D1.checked==true) D1="1";
	else D1="0";

	//DOM param 2
	var D2 = doc.getElementById("SL_wptTrTo").value;

	//DOM param 3
	var D3 = doc.getElementById('SL_Dautobox');
	if(D3.checked==true) D3="1";
	else D3="0";

	//DOM param 4
	var D4 = doc.getElementById('SL_Dtbbox');
	if(D4.checked==true) D4="1";
	else D4="0";

	//DOM param 5
	var D5 = doc.getElementById('SL_Dtipbox');
	if(D5.checked==true) D5="1";
	else D5="0";

        if(D2=="None") D3=0; 

	var PARAMS = "{"+D0+","+D1+","+D2+","+D3+","+D4+","+D5+"}";
	
	if(D4==0){
		TranslatorIM.SL_GWPT_Show_Hide_tmp=0;
		TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",0);
	}


	FExtension.browserInject.runtimeSendMessage({greeting: "SAVE_D:>"+PARAMS}, function(response) {});
	doc.getElementById('SL_WPT_SAVE_LOAD').style.display = "block";
	setTimeout(function() {
		doc.getElementById('SL_WPT_SAVE_LOAD').style.display = "none";
		TranslatorIM.SL_WPT_OPTIONS_CLOSE();
	        var win = top.window.frames[":0.container"].contentWindow;
//                TranslatorIM.SL_G_RETRANSLATE(win.document.getElementById("SL_G_M_to").value);
//VK
                if(D2!="" && D2!="None"){
			TranslatorIM.SL_WPT_TEMP_LANG=win.document.getElementById("SL_G_M_to").value;
			TranslatorIM.SL_WPT_IGRORE=0;
			if(D2=="All"){
				TranslatorIM.SL_G_RETRANSLATE(TranslatorIM.SL_wptGlobLang);
			} else {
				TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",D4);
				win.document.getElementById("SL_G_M_to").value=D2;
       		                TranslatorIM.SL_wptGlobLangTmp=D2;
				TranslatorIM.SL_G_RETRANSLATE(D2);
			}
		} else {
			TranslatorIM.SL_getDATA();
			TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",TranslatorIM.SL_WPTdstlang);
			TranslatorIM.SL_BAR_STOP();
			TranslatorIM.SL_RemoveExistingGoogleTranslateWidget();
		}

	}, 1000);
    },

    SL_WPT_SAVE_L: function(){
        TranslatorIM.SL_SHOW_ORIGINAL();

 	var doc = FExtension.browserInject.getDocument();
	doc.getElementById('SL_WPT_SAVE_LOAD').style.display = "block";

	//LNG param 0
	var L0 = doc.getElementById("SL_wptLang").value;

	//LNG param 1
	var L1 = doc.getElementById('SL_Lautobox');
	if(L1.checked==true) L1="1";
	else L1="0";

	//LNG param 2
	var L2 = doc.getElementById('SL_Ltbbox');
	if(L2.checked==true) L2="1";
	else L2="0";

	//LNG param 3
	var L3 = doc.getElementById('SL_Ltipbox');
	if(L3.checked==true) L3="1";
	else L3="0";


	var PARAMS = "{"+L0+","+L1+","+L2+","+L3+"}";
	FExtension.browserInject.runtimeSendMessage({greeting: "SAVE_L:>"+PARAMS}, function(response) {});

	setTimeout(function() {
		doc.getElementById('SL_WPT_SAVE_LOAD').style.display = "none";
		TranslatorIM.SL_getDATA();
		TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",TranslatorIM.SL_WPTdstlang);
		TranslatorIM.SL_BAR_STOP();

//		TranslatorIM.SL_LoadGoogleTranslateWidget(TranslatorIM.SL_LOC,TranslatorIM.SL_wptGlobLang,TranslatorIM.SL_wptGlobAuto,"continue");
		TranslatorIM.SL_LoadGoogleTranslateWidget(TranslatorIM.SL_LOC,TranslatorIM.SL_WPT_TEMP_LANG,TranslatorIM.SL_wptGlobAuto,"continue");
	}, 1000);
    },

    SL_GET_WPT_DATA: function(){
    	FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {
		if(response && response.farewell){
       			var theresponse = response.farewell.split("~");
			TranslatorIM.SL_FAV_MAX=theresponse[79];
			TranslatorIM.SL_FAV_LANGS_BBL=theresponse[80];
			TranslatorIM.SL_FAV_LANGS_IT=theresponse[81];
			TranslatorIM.SL_FAV_LANGS_WPT=theresponse[82];
			TranslatorIM.WPTflip=theresponse[83];
		}
       	});
    },

    SL_G_RETRANSLATE: function(cur){
        TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(cur, '', 1, TranslatorIM.SL_FAV_LANGS_WPT, "WPT");
	TranslatorIM.SL_WPT_TEMP_LANG = cur;
	TranslatorIM.SL_GET_WPT_DATA();
	TranslatorIM.SL_SHOW_ORIGINAL();
        TranslatorIM.SL_getSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp");
	setTimeout(function() {
		TranslatorIM.SL_getDATA();
		TranslatorIM.SL_WPT_OPTIONS_CLOSE();
        	var win = top.window.frames[":0.container"].contentWindow;
	 	var doc = FExtension.browserInject.getDocument();
 		var CUR_lang = cur;
		TranslatorIM.SL_WPT_FLAG=1;
	 	if(cur != win.document.getElementById("SL_G_M_to").value) CUR_lang = win.document.getElementById("SL_G_M_to").value;
		TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",TranslatorIM.SL_WPT_TEMP_LANG);
	        TranslatorIM.SL_LoadGoogleTranslateWidget(TranslatorIM.SL_LOC,cur,TranslatorIM.SL_wptGlobAuto,"continue");
		TranslatorIM.SL_WPT_FLAG=0;
	}, 100);
    },

    SL_getDATA: function(){
	  chrome.extension.sendMessage({greeting: "1"}, function(response) { TranslatorIM.SL_DATA_LOADING_CASCADE(); });
    },




    getAnalysisText: function (target) {
      var iterator = TranslatorIM.getIterator(target), textnode, analysisText = "";
      while ((textnode = iterator.nextNode())) {
        if(textnode.data.length>20){
	        analysisText += textnode.data + ". ";
        	if (analysisText.length >= 4096) {
	          break;
        	}
	}
      }
      return analysisText;
    },

    getIterator: function(root) {
      var doc = FExtension.browserInject.getDocument();
      var NodeFilter = window.NodeFilter,
          Node = window.Node,
          target = root || doc.body;

      return doc.createNodeIterator(target, NodeFilter.SHOW_TEXT, {
        acceptNode: function(node) {
          if (/^\s*$/.test(node.textContent) || node.parentNode.nodeType !== Node.ELEMENT_NODE || node.isChunked) {
            return NodeFilter.FILTER_REJECT;
          }
          while ((node = node.parentNode) !== target) {
            var tag = node ? node.nodeName : 'SCRIPT';
            if (TranslatorIM.invalidElements[tag]) {
              return NodeFilter.FILTER_REJECT;
            }
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }, false);
    },

    getRootNode: function() {
   	var doc = FExtension.browserInject.getDocument();
      var host = window.location.host;
      switch (host) {
      case 'twitter.com':
        return doc.querySelector(".js-tweet-text");
        break;
      case 'github.com':
        return doc.querySelector(".announce");
        break;
      case 'bitbucket.org':
        return doc.querySelector("#wiki");
        break;
      }
      return null;
    },





    SL_WPT_DODetection: function(myTransText) {

	  if(myTransText != "" && TranslatorIM.ONCE_DETECT == ""){
	     var resp = TranslatorIM.i18n_LanguageDetect(myTransText,1);
	     TranslatorIM.BBL_DETECT="";
	     TranslatorIM.SL_setWPT_DET_LNG("SL_WPT_DET_LNG",resp);
             TranslatorIM.SL_WPT_LANG=resp;
	     TranslatorIM.SL_DETLANG=resp;
             TranslatorIM.SL_WPT_TRG_LNG=resp;
	     if(resp == ""){
		    var num = Math.floor((Math.random() * SL_GEO.length)); 
		    var theRegion = SL_GEO[num];
		    var cntr = myTransText.split(" ");
                    var newTXT = truncStrByWord(myTransText,100);

		    var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";
		    var SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(newTXT)+"&sl=auto&tl=en&hl=en";


			    FExtension.browserInject.runtimeSendMessage({greeting: "DET_GOOGLE:>"+baseUrl+","+SL_Params}, function(response) {});

			    setTimeout(function(){
				    var SLIDL = setInterval(function(){
				           FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {

				             if(response && response.farewell){
					        var theresponse = response.farewell.split("~");
						TranslatorIM.BBL_DETECT=theresponse[51];

						clearInterval(SLIDL);
						if(TranslatorIM.BBL_DETECT!="" && TranslatorIM.BBL_DETECT!="<#>") {
							var resp = TranslatorIM.BBL_DETECT;
							TranslatorIM.BBL_DETECT="";
							TranslatorIM.SL_setWPT_DET_LNG("SL_WPT_DET_LNG",resp);
        	                                        TranslatorIM.SL_WPT_LANG=resp;
							TranslatorIM.SL_DETLANG=resp;
                        	                        TranslatorIM.SL_WPT_TRG_LNG=resp;
                                                        TranslatorIM.ONCE_DETECT = 1;
						        TranslatorIM.CNTR('2411',resp+"/"+resp, newTXT.length);

							TranslatorIM.SL_SETINTERVAL_ST=1;
			        	    	}else TranslatorIM.SL_WPT_Detector(myTransText);
					        TranslatorIM.ACTIVATE_THEMEwpt_lng(TranslatorIM.THEMEmode);
					     }
				           });
				    },50);  
 		            },500);  

	     }		
	  }	
	},


	SL_WPT_Detector: function(myTransText) {
		  var doc = FExtension.browserInject.getDocument();
		  if(myTransText!=""){
		    var theLIMIT = 100;
		    var newTXT = truncStrByWord(myTransText,theLIMIT);
		    var SLDImTranslator_url = TranslatorIM.ImTranslator_theurl+"ld.asp?tr=bl&text="+encodeURIComponent(newTXT);
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
				if(ajaxRequest.readyState == 4){
		                   var resp = ajaxRequest.responseText;
		                   if(resp!=""){     
					if(resp.indexOf('#|#')!=-1){
				 	  	var tmp=decodeURIComponent(resp);
						var tmp2 = tmp.split("#|#");
					  	resp=tmp2[0];

					        TranslatorIM.CNTRP('2411',resp+"/"+resp, newTXT.length);

						resp = resp.replace("zh","zh-CN")
						resp = resp.replace("zt","zh-TW")

						TranslatorIM.SL_setWPT_DET_LNG("SL_WPT_DET_LNG",resp);
                                                TranslatorIM.SL_WPT_LANG=resp;
						TranslatorIM.SL_DETLANG=resp;
                                                TranslatorIM.SL_WPT_TRG_LNG=resp;
                                                TranslatorIM.ONCE_DETECT = 1;
					}
				    }
				}
			}
			ajaxRequest.open("POST", SLDImTranslator_url, true);
			ajaxRequest.send(null); 
		  }
	},



	SL_GetLongName: function(code){
		var LANGSALL = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
		var LANGS = TranslatorIM.SL_LNG_LIST.split(",");


		for (var i = 0; i < LANGSALL.length; i++){
			var templang = LANGSALL[i].split(":");
			if(code == templang[0]){ 
				return (templang[1]);
			}
		}

	},

	SL_GetHost: function(){
		var HOST = top.location.host;
		HOST = HOST.replace(/^www\./i,"");
		TranslatorIM.SL_GWHOST = HOST;
		return HOST;
	},


	SL_GetMAINHost: function(){
	        if(TranslatorIM.SL_wptDp2!=1){
			var H = top.location.host.replace(/[a-z0-9][a-z0-9-]*\.[a-z]{2,6}$/i,"");
			var HOST = top.location.host.replace(H,"");
		}else HOST = top.location.host;
		HOST = HOST.replace(/^www\./i,"");
		if(TranslatorIM.SL_DETECTsubDomain() == true){
			if(top.location.host.indexOf(".co.")!=-1 || top.location.host.indexOf(".com.")!=-1) HOST = top.location.host;
		}
		return HOST;
	},

	SL_GetMAINHostName: function(){
		var H = top.location.host.replace(/[a-z0-9][a-z0-9-]*\.[a-z]{2,6}$/i,"");
		var HOST = top.location.host.replace(H,"");
		if(top.location.host.indexOf(".co.")!=-1 || top.location.host.indexOf(".com.")!=-1){
			HOST = top.location.host;
			HOST = HOST.replace(/^www\./i,"");
		}
		var NEWHOST="";
		if(TranslatorIM.SL_DETECTsubDomain() == true){
			var arr = top.location.host.split(".");
			for(var i=1; i < arr.length; i++){
				if(i < arr.length-1) NEWHOST = NEWHOST+arr[i]+".";
				else NEWHOST = NEWHOST+arr[i];
			}	
			HOST = NEWHOST;
		}
		return HOST;
	},


    	SL_getDParams: function(){
        	var OUTarr = new Array("","");
		TranslatorIM.SL_GWHOST = TranslatorIM.SL_GetHost();
		var Dmass = new Array(TranslatorIM.SL_GWHOST,0,TranslatorIM.SL_WPTdstlang,TranslatorIM.SL_wptGlobAuto,TranslatorIM.SL_wptGlobTb,TranslatorIM.SL_wptGlobTip);
		if(TranslatorIM.SL_wptDHist.indexOf(TranslatorIM.SL_GWHOST) !=-1){
			var Darr1 = TranslatorIM.SL_wptDHist.split(":");

			for(var i=0; i<Darr1.length; i++){
				var Darr2 = Darr1[i].replace(/{|}/ig,"");
				var Darr3 = Darr2.split(",")
				if(Darr3[0] == TranslatorIM.SL_GWHOST){
					Dmass = Darr2.split(",");
				}
			}

		} else {
			var MH = TranslatorIM.SL_GetMAINHost();
			if(TranslatorIM.SL_wptDHist.indexOf(MH) !=-1){
				var Darr1 = TranslatorIM.SL_wptDHist.split(":");
				for(var i=0; i<Darr1.length; i++){
					var Darr2 = Darr1[i].replace(/{|}/ig,"");
					var Darr3 = Darr2.split(",")				
					if(Darr3[0] == MH && Darr3[1] == 1){
						Dmass = Darr2.split(",");
					}
				}
			}

		}
		var cnt=0;
		var Lmass = new Array(TranslatorIM.SL_DETLANG,TranslatorIM.SL_wptGlobAuto,TranslatorIM.SL_wptGlobTb,TranslatorIM.SL_wptGlobTip);
		if(TranslatorIM.SL_wptLHist.indexOf(TranslatorIM.SL_DETLANG) !=-1){
			var Larr1 = TranslatorIM.SL_wptLHist.split(":");
			for(var i=0; i<Larr1.length; i++){
				var Larr2 = Larr1[i].replace(/{|}/ig,"");
				if(Larr2.indexOf(TranslatorIM.SL_DETLANG)!=-1){
					Lmass = Larr2.split(",");
					cnt++;
				}
			}
		}
		if(cnt==0){
			if(TranslatorIM.SL_wptLHist.indexOf("All") !=-1){
				var Larr1 = TranslatorIM.SL_wptLHist.split(":");
				for(var i=0; i<Larr1.length; i++){
					var Larr2 = Larr1[i].replace(/{|}/ig,"");
					if(Larr2.indexOf("All")!=-1){
						Lmass = Larr2.split(",");
					}
				}
			}
		}

		OUTarr[0] = Dmass;
		OUTarr[1] = Lmass;

		return(OUTarr);
	},

        SL_INIT_PARAMS: function(){
	        var params = TranslatorIM.SL_getDParams();
		TranslatorIM.SL_wptDp1=params[0][0];
		TranslatorIM.SL_wptDp2=params[0][1];
		TranslatorIM.SL_wptDp3=params[0][2];
		TranslatorIM.SL_wptDp4=params[0][3];
		TranslatorIM.SL_wptDp5=params[0][4];
		TranslatorIM.SL_wptDp6=params[0][5];

		TranslatorIM.SL_wptLp1=params[1][0];
		TranslatorIM.SL_wptLp2=params[1][1];
		TranslatorIM.SL_wptLp3=params[1][2];
		TranslatorIM.SL_wptLp4=params[1][3];
	},

	SL_DefaultFromDB: function(){
	        //Param 1
		TranslatorIM.SL_wptGlobLangTmp = TranslatorIM.SL_GetProperLanguage(TranslatorIM.SL_wptDp3, TranslatorIM.SL_GWHOST);
                TranslatorIM.SL_wptGlobLang = TranslatorIM.SL_wptGlobLangTmp;
	        //Param 2
		TranslatorIM.SL_wptGlobAutoTmp = TranslatorIM.SL_wptDp4;
		if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!="undefined"){
			if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!=TranslatorIM.SL_wptDp4) TranslatorIM.SL_wptGlobAutoTmp = TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP");
		} else TranslatorIM.SL_set_AUTO_TMP("SL_AUTO_TMP",TranslatorIM.SL_wptDp4);
	        //Param 3
		TranslatorIM.SL_WPT_SHOWHIDE_CONSTRUCTOR(TranslatorIM.SL_wptDp5);
	        //Param 4
		TranslatorIM.SL_wptGlobTipTmp = TranslatorIM.SL_wptDp6;
		//TranslatorIM.SL_set_TIP_TRIGGER("SL_wptGlobTipTmp",TranslatorIM.SL_wptDp6);
	},


	SL_FromHistory: function(THE_HOST){
		var tmp1D = TranslatorIM.SL_wptDHist.split(":");
		for (var i=0; i<tmp1D.length; i++){
			var tmp2D = tmp1D[i].replace(/{|}/ig,"");
			tmp2D = tmp2D.split(",");
			if(tmp2D[0] == THE_HOST){
				if(tmp2D[1]==1){
					TranslatorIM.SL_D_List = TranslatorIM.SL_D_List + tmp2D[0] +",";
		 		        //Param 1
					TranslatorIM.SL_wptGlobLangTmp = TranslatorIM.SL_GetProperLanguage(tmp2D[2], THE_HOST);
		                	TranslatorIM.SL_wptGlobLang = TranslatorIM.SL_wptGlobLangTmp;
					TranslatorIM.SL_wptDp3=tmp2D[2];
	 			        //Param 2
					TranslatorIM.SL_wptGlobAutoTmp = tmp2D[3];
	                                TranslatorIM.SL_wptDp4 = tmp2D[3];
					if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!="undefined"){
						if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!=TranslatorIM.SL_wptDp4) TranslatorIM.SL_wptGlobAutoTmp = TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP");
					} else TranslatorIM.SL_set_AUTO_TMP("SL_AUTO_TMP",TranslatorIM.SL_wptDp4);
		 		        //Param 3
					TranslatorIM.SL_WPT_SHOWHIDE_CONSTRUCTOR(tmp2D[4]);
	 			        //Param 4
					TranslatorIM.SL_set_TIP_TRIGGER("SL_wptGlobTipTmp",tmp2D[5]);
					TranslatorIM.SL_wptGlobTipTmp = tmp2D[5];
        	                        TranslatorIM.SL_wptDp6 = tmp2D[5];
					TranslatorIM.SL_NONE_HANDLER();
					return true;
				} else TranslatorIM.SL_DefaultFromDB();
			} 
		}
		return false
	},

	SL_FromHistorySubst: function(THE_HOST){
		var tmp1D = TranslatorIM.SL_wptDHist.split(":");
		for (var i=0; i<tmp1D.length; i++){
			var tmp2D = tmp1D[i].replace(/{|}/ig,"");
			tmp2D = tmp2D.split(",");

			if(tmp2D[0] == THE_HOST){
				TranslatorIM.SL_D_List = TranslatorIM.SL_D_List + tmp2D[0] +",";
	 		        //Param 1
				TranslatorIM.SL_wptGlobLangTmp = TranslatorIM.SL_GetProperLanguage(tmp2D[2], THE_HOST);
	                	TranslatorIM.SL_wptGlobLang = TranslatorIM.SL_wptGlobLangTmp;
				TranslatorIM.SL_wptDp3=tmp2D[2];
 			        //Param 2
				TranslatorIM.SL_wptGlobAutoTmp = tmp2D[3];

                                TranslatorIM.SL_wptDp4 = tmp2D[3];
				if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!="undefined"){
					if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!=TranslatorIM.SL_wptDp4) TranslatorIM.SL_wptGlobAutoTmp = TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP");
				} else TranslatorIM.SL_set_AUTO_TMP("SL_AUTO_TMP",TranslatorIM.SL_wptDp4);
	 		        //Param 3
				TranslatorIM.SL_WPT_SHOWHIDE_CONSTRUCTOR(tmp2D[4]);
 			        //Param 4
				TranslatorIM.SL_set_TIP_TRIGGER("SL_wptGlobTipTmp",tmp2D[5]);
				TranslatorIM.SL_wptGlobTipTmp = tmp2D[5];
       	                        TranslatorIM.SL_wptDp6 = tmp2D[5];
				return true;
			}
		}
		return false;
	},

        SL_NONE_HANDLER: function(){
                TranslatorIM.SL_WPT_IGRORE=0;
		if(TranslatorIM.SL_wptDp3=="None") TranslatorIM.SL_WPT_IGRORE=1;
        },

	
	SL_DATA_LOADING_CASCADE: function(){
 		TranslatorIM.SL_INIT_PARAMS();
		//CASCADE: 1 level                
		var MH = TranslatorIM.SL_GetMAINHostName();
                if(TranslatorIM.SL_IS_SUBDOMAIN==true){
	 		if(TranslatorIM.SL_wptDHist.indexOf(TranslatorIM.SL_GWHOST)!=-1){
				if(TranslatorIM.SL_FromHistorySubst(TranslatorIM.SL_GWHOST)==true) return true;
			} else {
		 		if(TranslatorIM.SL_wptDHist.indexOf(MH)!=-1){
					if(TranslatorIM.SL_FromHistory(MH)==true) return true;
			        }  
			} 	
			//TranslatorIM.SL_DefaultFromDB();
		} else {
	 		if(TranslatorIM.SL_wptDHist.indexOf(MH)!=-1){
				if(TranslatorIM.SL_FromHistorySubst(MH)==true) return true;
			}// else TranslatorIM.SL_DefaultFromDB();
		}


		//CASCADE: 2 level
		if(TranslatorIM.SL_wptLp1!="skip"){
			TranslatorIM.SL_WPT_SKIP=1;
			var tmp1D = TranslatorIM.SL_wptLHist.split(":");
			for (var i=0; i<tmp1D.length; i++){
				var tmp2D = tmp1D[i].replace(/{|}/ig,"");
				tmp2D = tmp2D.split(",");
				TranslatorIM.SL_L_List = TranslatorIM.SL_L_List + tmp2D[0] +",";
			}
			
 		        //Param 1
			TranslatorIM.SL_wptGlobLangTmp = TranslatorIM.SL_WPTdstlang;
        	        TranslatorIM.SL_wptGlobLang = TranslatorIM.SL_wptGlobLangTmp;
	        	//Param 2
			TranslatorIM.SL_wptGlobAutoTmp = TranslatorIM.SL_wptLp2;
			if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!="undefined"){
				if(TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP")!=TranslatorIM.SL_wptLp2) TranslatorIM.SL_wptGlobAutoTmp = TranslatorIM.SL_get_AUTO_TMP("SL_AUTO_TMP");
			} else TranslatorIM.SL_set_AUTO_TMP("SL_AUTO_TMP",TranslatorIM.SL_wptLp2);

 		        //Param 3
			if(TranslatorIM.SL_wptLp1=="All") TranslatorIM.SL_wptGlobTbTmp = TranslatorIM.SL_wptLp3;
			TranslatorIM.SL_WPT_SHOWHIDE_CONSTRUCTOR(TranslatorIM.SL_wptLp3);

 			//Param 4
			TranslatorIM.SL_set_TIP_TRIGGER("SL_wptGlobTipTmp",TranslatorIM.SL_wptLp4);
			TranslatorIM.SL_wptGlobTipTmp = TranslatorIM.SL_wptLp4;
			return true;
		}


		//CASCADE: 3 level (defaults from DB)

		if(TranslatorIM.SL_WPT_SKIP==1){
			TranslatorIM.SL_wptGlobLangTmp = TranslatorIM.SL_WPTdstlang;
        	        TranslatorIM.SL_wptGlobLang = TranslatorIM.SL_wptGlobLangTmp;        		
			TranslatorIM.SL_WPT_SHOWHIDE_CONSTRUCTOR(TranslatorIM.SL_wptGlobTbTmp);	
		} else {
			TranslatorIM.SL_wptGlobLangTmp = TranslatorIM.SL_WPTdstlang;
        	        TranslatorIM.SL_wptGlobLang = TranslatorIM.SL_wptGlobLangTmp;        		
			TranslatorIM.SL_WPT_SHOWHIDE_CONSTRUCTOR(TranslatorIM.SL_wptDp5);
       			TranslatorIM.SL_wptGlobTipTmp = TranslatorIM.SL_wptDp6;
			TranslatorIM.SL_set_TIP_TRIGGER("SL_wptGlobTipTmp",TranslatorIM.SL_wptDp6);
		}
	        return false;
	},


	SL_WPT_SHOWHIDE_CONSTRUCTOR: function(ob){
		TranslatorIM.SL_WPT_TB_DEFAULT=ob;
		if(ob==0) {
			if(TranslatorIM.SL_GWPT_Show_Hide_tmp==0) TranslatorIM.SL_WPT_HIDDEN_MODE();
			else TranslatorIM.SL_GWPT_Show_Hide_tmp = ob;
		}
		var tmp = TranslatorIM.SL_getSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp");

		if(tmp==null || tmp==undefined || tmp==2) {
			TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",ob);
//By VK: Vova's request
			TranslatorIM.SL_wptGlobTbTmp = TranslatorIM.SL_wptGlobTb;
//			TranslatorIM.SL_wptGlobTbTmp = ob;

		} else TranslatorIM.SL_wptGlobTbTmp = tmp;
	},



	SL_WPT_CREATE_DOMAIN_TAB: function(SL_OPT_MENU){
 	var doc = FExtension.browserInject.getDocument();
//-Domain items
	var tmn = doc.createElement("font");
        var title = doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extwptDName")+": ");
        tmn.appendChild(title);
	var span = doc.createElement("span");
        var title = doc.createTextNode(TranslatorIM.SL_GWHOST);
        span.appendChild(title);
	var cl = doc.createAttribute("style");
	cl.value = "color:#1186BB !important";
	span.setAttributeNode(cl);
	var id = doc.createAttribute("id");
	id.value = "SL_domain";
	span.setAttributeNode(id);

        tmn.appendChild(span);
        SL_OPT_MENU.appendChild(tmn);
	var SL_TBbr = doc.createElement("br");
       	SL_OPT_MENU.appendChild(SL_TBbr);
       	//-Subdomain patch
       	   if(TranslatorIM.SL_IS_SUBDOMAIN==true){
		var SL_wptSDNamePatch = doc.createElement("div");
		var SL_wptSDNamePatchid = doc.createAttribute("id");
		SL_wptSDNamePatchid.value = "SL_wptSDNamePatch";
	        SL_wptSDNamePatch.setAttributeNode(SL_wptSDNamePatchid);
		SL_wptSDNamePatch.appendChild(doc.createTextNode(" "));
	       	SL_OPT_MENU.appendChild(SL_wptSDNamePatch);
	   }
	//-Subdomain item
		var SL_wptSDName = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "checkbox";
		SL_wptSDName.setAttributeNode(ty);
		var SL_wptSDNameid = doc.createAttribute("id");
		SL_wptSDNameid.value = "SL_wptSDName";
	        SL_wptSDName.setAttributeNode(SL_wptSDNameid);
        	if(TranslatorIM.SL_wptDp2==1){
			var SL_ch1 = doc.createAttribute("checked");
			SL_ch1.value = "true";
		        SL_wptSDName.setAttributeNode(SL_ch1);
		}
        	SL_OPT_MENU.appendChild(SL_wptSDName);
		var span = doc.createElement("span");
        	var title = doc.createTextNode(" "+FExtension.element(TranslatorIM.SL_LOC,"extwptSDName"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);
		//------------
		var SL_TBbr = doc.createElement("br");
       		SL_OPT_MENU.appendChild(SL_TBbr);
		//------------
	//-Translate to X item
		var span = doc.createElement("span");
	        var title = doc.createTextNode(" "+FExtension.element(TranslatorIM.SL_LOC,"extwptTrTo"));
	        span.appendChild(title);
	        SL_OPT_MENU.appendChild(span);
		var SL_wptTrTo = doc.createElement("select");
		var SL_wptTrToid = doc.createAttribute("id");
		SL_wptTrToid.value = "SL_wptTrTo";
	        SL_wptTrTo.setAttributeNode(SL_wptTrToid);
		var SL_wptTrTost = doc.createAttribute("style");
		SL_wptTrTost.value = "margin-left:5px;";
	        SL_wptTrTo.setAttributeNode(SL_wptTrTost);

	        var locNone = FExtension.element(TranslatorIM.SL_LOC,'extwptDNone');
	        var locAll = FExtension.element(TranslatorIM.SL_LOC,'extwptDAll');

		TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
		var MENU = ("None:"+locNone + ",All:" + locAll +","+FExtension.element(TranslatorIM.SL_LOC,'extLanguages')).split(",");

//		if(TranslatorIM.SL_wptDp3!="") TranslatorIM.SL_wptDp3 = TranslatorIM.SL_wptGlobLang;


		for(var J=0; J < MENU.length; J++){
		    var CURlang3 = MENU[J].split(":");
		    var option = doc.createElement('option');
		    var v = doc.createAttribute("value");
		    v.value = CURlang3[0];
		    option.setAttributeNode(v);

		    if(v.value==TranslatorIM.SL_wptGlobLang){
			var s = doc.createAttribute("selected");
			s.value="true";
			option.setAttributeNode(s);
			switch(TranslatorIM.SL_wptGlobLang){
			  case "None": CURlang3[1]=locNone; break;
			  case "All": CURlang3[1]=locAll; break;
			  default: CURlang3[1]=TranslatorIM.SL_GetLongName(TranslatorIM.SL_wptGlobLang); break;
			}

		    }                 
		    option.appendChild(doc.createTextNode(CURlang3[1]));
		    SL_wptTrTo.appendChild(option);
		}

        	SL_OPT_MENU.appendChild(SL_wptTrTo);
		//------------
		var SL_TBbr = doc.createElement("br");
       		SL_OPT_MENU.appendChild(SL_TBbr);
		//------------
	//-Domain always item
		var SL_Dautobox = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "checkbox";
		SL_Dautobox.setAttributeNode(ty);
		var SL_Dautoboxid = doc.createAttribute("id");
		SL_Dautoboxid.value = "SL_Dautobox";
	        SL_Dautobox.setAttributeNode(SL_Dautoboxid);
        	if(TranslatorIM.SL_wptDp4==1){
			var SL_TBch2 = doc.createAttribute("checked");
			SL_TBch2.value = "true";
		        SL_Dautobox.setAttributeNode(SL_TBch2);
		}
        	SL_OPT_MENU.appendChild(SL_Dautobox);
		var span = doc.createElement("span");
        	var title = doc.createTextNode(" " + FExtension.element(TranslatorIM.SL_LOC,"extwptDAlways"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);
		//------------
		var SL_TBbr = doc.createElement("br");
        	SL_OPT_MENU.appendChild(SL_TBbr);
		//------------
	//-Domain toolbar item 
		var SL_Dtbbox = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "checkbox";
		SL_Dtbbox.setAttributeNode(ty);
		var SL_Dtbboxid = doc.createAttribute("id");
		SL_Dtbboxid.value = "SL_Dtbbox";
	        SL_Dtbbox.setAttributeNode(SL_Dtbboxid);
        	if(TranslatorIM.SL_wptDp5==1){
			var SL_TBch3 = doc.createAttribute("checked");
			SL_TBch3.value = "true";
		        SL_Dtbbox.setAttributeNode(SL_TBch3);
		}
        	SL_OPT_MENU.appendChild(SL_Dtbbox);
		var span = doc.createElement("span");
        	var title = doc.createTextNode(" " + FExtension.element(TranslatorIM.SL_LOC,"extwptDTb"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);
		//------------
		var SL_TBbr = doc.createElement("br");
        	SL_OPT_MENU.appendChild(SL_TBbr);
		//------------
	//-Domain tip item 
		var SL_Dtipbox = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "checkbox";
		SL_Dtipbox.setAttributeNode(ty);
		var SL_Dtipboxid = doc.createAttribute("id");
		SL_Dtipboxid.value = "SL_Dtipbox";
	        SL_Dtipbox.setAttributeNode(SL_Dtipboxid);
        	if(TranslatorIM.SL_wptDp6=="1"){
			var SL_TBch4 = doc.createAttribute("checked");
			SL_TBch4.value = "true";
		        SL_Dtipbox.setAttributeNode(SL_TBch4);
		}
        	SL_OPT_MENU.appendChild(SL_Dtipbox);
		var span = doc.createElement("span");
        	var title = doc.createTextNode(" " + FExtension.element(TranslatorIM.SL_LOC,"extwptDOrTip"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);
		//------------
		var SL_TBhr = doc.createElement("div");
		var cl = doc.createAttribute("class");
		cl.value = "SL_hr";
		SL_TBhr.setAttributeNode(cl);
		SL_OPT_MENU.appendChild(SL_TBhr);
		//------------
//--Save button
		var SL_TBsave = doc.createElement("input");
		var SL_TBsaveid = doc.createAttribute("id");
		SL_TBsaveid.value = "SL_TBsave1";
        	SL_TBsave.setAttributeNode(SL_TBsaveid);

		var ty = doc.createAttribute("type");
		ty.value = "button";
		SL_TBsave.setAttributeNode(ty);

	       	SL_TBsave.value = FExtension.element(TranslatorIM.SL_LOC,"extSaveButton");
        	SL_OPT_MENU.appendChild(SL_TBsave);

		var SL_TBload = doc.createElement("div");
		var SL_TBloadid = doc.createAttribute("id");
		SL_TBloadid.value = "SL_WPT_SAVE_LOAD";
	        SL_TBload.setAttributeNode(SL_TBloadid);
		var SL_TBloadst = doc.createAttribute("style");
		var BG = FExtension.browserInject.getURL('content/img/util/loading.gif');
		SL_TBloadst.value = "background-image:url("+BG+");height:36px;width:36px;position:absolute;margin-left:150px;margin-top:-115px;display:none;z-index:999999999999;opacity: 0.5;";
	        SL_TBload.setAttributeNode(SL_TBloadst);

      

        	SL_OPT_MENU.appendChild(SL_TBload);

	},

	SL_WPT_CREATE_LANGUAGE_TAB: function(SL_OPT_MENU){
 	var doc = FExtension.browserInject.getDocument();
//-Language items
	//-Language item
		var span = doc.createElement("span");
	        var title = doc.createTextNode(" "+FExtension.element(TranslatorIM.SL_LOC,"extwptTrFrom"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);

		var SL_wptLang = doc.createElement("select");
		var SL_wptLangid = doc.createAttribute("id");
		SL_wptLangid.value = "SL_wptLang";
	        SL_wptLang.setAttributeNode(SL_wptLangid);
		var SL_wptLangst = doc.createAttribute("style");
		SL_wptLangst.value = "margin-left:5px;opacity:0.2;";
	        SL_wptLang.setAttributeNode(SL_wptLangst);
	        // Option 0
		var Op0 = doc.createElement("option");
		var v = doc.createAttribute("value");
		v.value = "All";
		Op0.setAttributeNode(v);
		Op0.appendChild(doc.createTextNode(FExtension.element(TranslatorIM.SL_LOC,"extwptLAll")));
		SL_wptLang.appendChild(Op0);

		SL_wptLang.onchange = function(){
			TranslatorIM.SL_SL_WPT_LANG_OPT_RESET();
		};

		TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
		var MENU = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
		for(var J=0; J < MENU.length; J++){
		    var CURlang3 = MENU[J].split(":");
		    var option = doc.createElement('option');
		    if(TranslatorIM.SL_wptLp1=="" || TranslatorIM.SL_wptLp1=="skip") TranslatorIM.SL_wptLp1 = TranslatorIM.SL_DETLANG;
		    v = doc.createAttribute("value");
		    v.value = CURlang3[0];
		    if(v.value == TranslatorIM.SL_wptLp1){
			var s = doc.createAttribute("selected");
			s.value="true";
			option.setAttributeNode(s);
			CURlang3[1]=TranslatorIM.SL_GetLongName(TranslatorIM.SL_wptLp1);
		    }	
		    option.setAttributeNode(v);
		    option.appendChild(doc.createTextNode(CURlang3[1]));
//		    option.appendChild(doc.createTextNode(TranslatorIM.SL_GetLongName(TranslatorIM.SL_WPT_TRG_LNG)));

		    SL_wptLang.appendChild(option);
		}

        	SL_OPT_MENU.appendChild(SL_wptLang);
		//------------
		var SL_TBbr = doc.createElement("br");
       		SL_OPT_MENU.appendChild(SL_TBbr);
		//------------
	//-Language always item
		var SL_Lautobox = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "checkbox";
		SL_Lautobox.setAttributeNode(ty);
		var SL_Lautoboxid = doc.createAttribute("id");
		SL_Lautoboxid.value = "SL_Lautobox";
	        SL_Lautobox.setAttributeNode(SL_Lautoboxid);
        	if(TranslatorIM.SL_wptLp2==1){
			var SL_TBch1 = doc.createAttribute("checked");
			SL_TBch1.value = "true";
		        SL_Lautobox.setAttributeNode(SL_TBch1);
		}
        	SL_OPT_MENU.appendChild(SL_Lautobox);
		var span = doc.createElement("span");
        	var title = doc.createTextNode(" " + FExtension.element(TranslatorIM.SL_LOC,"extwptLAlways"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);
		//------------
		var SL_TBbr = doc.createElement("br");
        	SL_OPT_MENU.appendChild(SL_TBbr);
		//------------
	//-Language toolbar item 
		var SL_Ltbbox = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "checkbox";
		SL_Ltbbox.setAttributeNode(ty);
		var SL_Ltbboxid = doc.createAttribute("id");
		SL_Ltbboxid.value = "SL_Ltbbox";
	        SL_Ltbbox.setAttributeNode(SL_Ltbboxid);
        	if(TranslatorIM.SL_wptLp3==1){
			var SL_TBch0 = doc.createAttribute("checked");
			SL_TBch0.value = "true";
		        SL_Ltbbox.setAttributeNode(SL_TBch0);
		}
        	SL_OPT_MENU.appendChild(SL_Ltbbox);
		var span = doc.createElement("span");
        	var title = doc.createTextNode(" " + FExtension.element(TranslatorIM.SL_LOC,"extwptLTb"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);
		//------------
		var SL_TBbr = doc.createElement("br");
        	SL_OPT_MENU.appendChild(SL_TBbr);
		//------------
	//-Language tip item 
		var SL_Ltipbox = doc.createElement("input");
		var ty = doc.createAttribute("type");
		ty.value = "checkbox";
		SL_Ltipbox.setAttributeNode(ty);
		var SL_Ltipboxid = doc.createAttribute("id");
		SL_Ltipboxid.value = "SL_Ltipbox";
	        SL_Ltipbox.setAttributeNode(SL_Ltipboxid);

        	if(TranslatorIM.SL_wptLp4==1){
			var SL_TBch4 = doc.createAttribute("checked");
			SL_TBch4.value = "true";
		        SL_Ltipbox.setAttributeNode(SL_TBch4);
		}
        	SL_OPT_MENU.appendChild(SL_Ltipbox);
		var span = doc.createElement("span");
        	var title = doc.createTextNode(" " + FExtension.element(TranslatorIM.SL_LOC,"extwptLOrTip"));
	        span.appendChild(title);
        	SL_OPT_MENU.appendChild(span);
		//------------
		var SL_TBbr = doc.createElement("br");
        	SL_OPT_MENU.appendChild(SL_TBbr);
		//------------

//------------
		//------------
		var SL_TBhr = doc.createElement("div");
		var cl = doc.createAttribute("class");
		cl.value = "SL_hr";
		SL_TBhr.setAttributeNode(cl);
		SL_OPT_MENU.appendChild(SL_TBhr);
		//------------
//--Save button
		var SL_TBsave = doc.createElement("input");
		var SL_TBsaveid = doc.createAttribute("id");
		SL_TBsaveid.value = "SL_TBsave2";
        	SL_TBsave.setAttributeNode(SL_TBsaveid);

		var ty = doc.createAttribute("type");
		ty.value = "button";
		SL_TBsave.setAttributeNode(ty);

	       	SL_TBsave.value = FExtension.element(TranslatorIM.SL_LOC,"extSaveButton");
        	SL_OPT_MENU.appendChild(SL_TBsave);

		var SL_TBload = doc.createElement("div");
		var SL_TBloadid = doc.createAttribute("id");
		SL_TBloadid.value = "SL_WPT_SAVE_LOAD";
	        SL_TBload.setAttributeNode(SL_TBloadid);
		var SL_TBloadst = doc.createAttribute("style");
		var BG = FExtension.browserInject.getURL('content/img/util/loading.gif');
		SL_TBloadst.value = "background-image:url("+BG+");height:36px;width:36px;position:absolute;margin-left:150px;margin-top:-115px;display:none;z-index:999999999999;opacity: 0.5;";
	        SL_TBload.setAttributeNode(SL_TBloadst);

        	SL_OPT_MENU.appendChild(SL_TBload);

//		TranslatorIM.SL_WPT_DETECT(2);
		setTimeout(function() {
 			doc.getElementById('SL_WPT_SAVE_LOAD').style.display = "block";
			setTimeout(function() {
			  var SL_WPTOPTid = setInterval(function(){
				if(TranslatorIM.SL_WPT_LANG!="") {
		        	        doc.getElementById("SL_wptLang").style.opacity="1";
					TranslatorIM.SL_wptLp1=TranslatorIM.SL_WPT_LANG;
					clearInterval(SL_WPTOPTid);
					doc.getElementById("SL_wptLang").value=TranslatorIM.SL_wptLp1;
					TranslatorIM.SL_SL_WPT_LANG_OPT_RESET();
					doc.getElementById('SL_WPT_SAVE_LOAD').style.display = "none";
				}
			    },5);  
			}, 5);    
		}, 1);    

	},

	SL_DETECTsubDomain: function() {
	 	var doc = FExtension.browserInject.getDocument();
		var url = doc.location.host;
		// IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
		url = url.replace(new RegExp(/^\s+/),""); // START
		url = url.replace(new RegExp(/\s+$/),""); // END
 
		// IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
		url = url.replace(new RegExp(/\\/g),"/");
 
		// IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
		url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
 
		// IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
		url = url.replace(new RegExp(/^www\./i),"");
 
		// REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
		url = url.replace(new RegExp(/\/(.*)/),"");
 
		// REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
		if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
		      url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");
 
		// REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
		} else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
		      url = url.replace(new RegExp(/\.[a-z]{2,4}$/i),"");
		}
 
		// CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING
		var subDomain = (url.match(new RegExp(/\./g))) ? true : false;
		return(subDomain);
 
	},

	SL_GetProperLanguage: function(lng,mh){
		var out=lng;
		if(TranslatorIM.SL_WPT_TEMP_LANG=="") TranslatorIM.SL_WPT_TEMP_LANG=lng;
		if(TranslatorIM.SL_get_LNG_TRIGGER("SL_LNG_TRIGGER")!=1) TranslatorIM.SL_WPT_TEMP_LANG=lng;
		if(TranslatorIM.SL_WPT_TEMP_LANG == lng){
			TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
			var MENU = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
			var tmp = TranslatorIM.SL_wptDHist.split(":");
			var cnt=0;
			for (var i=0; i<tmp.length; i++){
				var tmp2 = tmp[i].replace(/{|}/ig,"");
				tmp2 = tmp2.split(",");
				if(tmp2[0]==mh){
				   for (var j=0; j<MENU.length; j++){
					var arr = MENU[j].split(":");
					if(arr[0]==lng){j=10000;i=100000; cnt++;}
				   }
				}
			}
			if(cnt==0) out = TranslatorIM.SL_WPTdstlang;
		} else out = TranslatorIM.SL_WPT_TEMP_LANG;
		TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",out);
                TranslatorIM.SL_WPT_IGRORE=0;
		if(TranslatorIM.SL_wptDp3=="None") TranslatorIM.SL_WPT_IGRORE=1;
		return out;
	},

	SL_SL_WPT_LANG_OPT_RESET: function(){
	 	var doc = FExtension.browserInject.getDocument();
	        var cur = doc.getElementById("SL_wptLang").value;
		var Lmass = new Array(cur,0,TranslatorIM.SL_wptGlobTb,TranslatorIM.SL_wptGlobTip);
		var Larr1 = TranslatorIM.SL_wptLHist.split(":");
		for(var i=0; i<Larr1.length; i++){
			var Larr2 = Larr1[i].replace(/{|}/ig,"");
			if(Larr2.indexOf(cur) !=-1){
				Lmass = Larr2.split(",");
			}
		}
                if(Lmass[1]==1) doc.getElementById("SL_Lautobox").checked = true;
		else doc.getElementById("SL_Lautobox").checked = false;
                if(Lmass[2]==1) doc.getElementById("SL_Ltbbox").checked = true;
		else doc.getElementById("SL_Ltbbox").checked = false;
                if(Lmass[3]==1) doc.getElementById("SL_Ltipbox").checked = true;
		else doc.getElementById("SL_Ltipbox").checked = false;
	},

    	SL_getWPT_DET_LNG: function(cname){
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0){
		  var resp = c.substring(name.length,c.length);
		  TranslatorIM.SL_WPT_DET_LNG = resp; 
		  return resp;
		}
	    }
    	},

    	SL_setWPT_DET_LNG: function(cname, cvalue, exdays) {
	    var s = ""; 
	    if(String(document.location).indexOf('https:')!=-1) s=" secure;"; 
	    document.cookie = cname + "=" + cvalue + "; path=/;"+s;
	    TranslatorIM.SL_WPT_DET_LNG = cvalue; 
    	},

    	SL_getLNG_TMP: function(cname){
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0){
		  var resp = c.substring(name.length,c.length);
		  TranslatorIM.SL_WPT_TEMP_LANG = resp; 
		  return resp;
		}
	    }
    	},

    	SL_setLNG_TMP: function(cname, cvalue, exdays) {
	    var s = ""; 
	    if(String(document.location).indexOf('https:')!=-1) s=" secure;"; 
	    document.cookie = cname + "=" + cvalue + "; path=/;"+s;
	    TranslatorIM.SL_WPT_TEMP_LANG = cvalue; 
    	},


	SL_setSHOW_HIDE_TB_TMP: function(cname, cvalue, exdays) {
	    var s = ""; 
	    if(String(document.location).indexOf('https:')!=-1) s=" secure;"; 
	    document.cookie = cname + "=" + cvalue + "; path=/;"+s;
	},


	SL_getSHOW_HIDE_TB_TMP: function(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0){
		 var resp = c.substring(name.length,c.length);
		 TranslatorIM.SL_GWPT_Show_Hide=resp;
		 TranslatorIM.SL_GWPT_Show_Hide_tmp=resp;
		 return resp;
		}
	    }
	},

	SL_set_TIP_TRIGGER: function(cname, cvalue, exdays) {
	    var s = ""; 
	    if(String(document.location).indexOf('https:')!=-1) s=" secure;"; 
	    document.cookie = cname + "=" + cvalue + "; path=/;"+s;
	},


	SL_get_TIP_TRIGGER: function(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0){
		 return c.substring(name.length,c.length);
		}
	    }
	},



	SL_set_LNG_TRIGGER: function(cname, cvalue, exdays) {
	    var s = ""; 
	    if(String(document.location).indexOf('https:')!=-1) s=" secure;"; 
	    document.cookie = cname + "=" + cvalue + "; path=/;"+s;
	},


	SL_get_LNG_TRIGGER: function(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0){
		 return c.substring(name.length,c.length);
		}
	    }
	},

	SL_set_AUTO_TMP: function(cname, cvalue, exdays) {
	    var s = ""; 
	    if(String(document.location).indexOf('https:')!=-1) s=" secure;"; 
	    document.cookie = cname + "=" + cvalue + "; path=/;"+s;
	},


	SL_get_AUTO_TMP: function(cname) {
            var resp = TranslatorIM.SL_wptGlobAutoTmp;
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0){
	         var resp = c.substring(name.length,c.length);
	         if(resp=="undefined") resp = TranslatorIM.SL_wptGlobAutoTmp;
		 else TranslatorIM.SL_wptGlobAutoTmp=resp;
		 if(resp==0){
			TranslatorIM.SL_setSHOW_HIDE_TB_TMP("SL_GWPT_Show_Hide_tmp",2);
		 }
		 return resp;
		}
	    }
	 return resp;
	},

	SL_IS_DOMAIN_IN_THE_LIST: function(DOMAINS,HOST){
	    var DLIST = DOMAINS.split(",");
	    for(var i=0; i<(DLIST.length-1); i++){
	     	if(DLIST[i]==HOST) return 1;
	    }
	    return 0;
	},

	GOOGLE_TTS_backup: function(speechText,TTSlang){	        
	     	var doc = FExtension.browserInject.getDocument();
		TranslatorIM.synth.cancel();

			var voices = TranslatorIM.synth.getVoices();
			const utterance = new SpeechSynthesisUtterance();
			var LNG="";
			TranslatorIM.TheNewLang=TTSlang;
			switch(TTSlang){
			 	case "zt":LNG = "zh-HK"; break;
			 	case "zh":LNG = "zh-TW"; break;
//			 	case "en":LNG = "en-GB|Male"; break;
			 	case "en":LNG = "en-US"; break;
			 	case "de":LNG = "de-DE"; break;
			 	case "hi":LNG = "hi-IN"; break;
			 	case "id":LNG = "id-ID"; break;
			 	case "it":LNG = "it-IT"; break;
			 	case "nl":LNG = "nl-NL"; break;
			 	case "pl":LNG = "pl-PL"; break;
			 	case "es":LNG = "es-US"; break;

			 	case "ru":LNG = "ru-RU"; break;
			 	case "ja":LNG = "ja-JP"; break;
			 	case "ko":LNG = "ko-KR"; break;
			 	case "fr":LNG = "fr-FR"; break;
			 	case "pt":LNG = "pt-BR"; break;

			}

                        

			for (var a=0; a<voices.length; a++){
			    if(LNG.indexOf("|")!=-1){
				var ARR=LNG.split("|");
				if(ARR[0]==voices[a].lang && voices[a].name.indexOf(ARR[1])!=-1){
					utterance.voice = voices[a];
				}
			    }else{
				if(LNG==voices[a].lang){
					utterance.voice = voices[a];
				}
			    }
			}
			var SP = 1.0;

			var PLANSHET = doc.getElementById("SL_player2");
		 	PLANSHET.style.display='block';
		        var ext = FExtension.browserInject;
		 	var PLAYER = "<div id='PL_lbplayer'><table width='50' colspan='3' style='padding:6px;' bgcolor='#fff'><tr><td width=20><div id='SL_controls' class='SL_pause'></div></td><td width=5></td><td align='left' width=20><div id='SL_volume' class='SL_volume'></div></td></tr></table></div>";
			PLANSHET.innerHTML=PLAYER;
	            	doc.getElementById('SL_volume').style.background='url('+ext.getURL('content/img/util/volume.png')+')';
	            	doc.getElementById('SL_controls').style.background='url('+ext.getURL('content/img/util/pause.png')+')';


			TranslatorIM.TheNewText = speechText;

			utterance.text = speechText;
			utterance.rate = SP;
                        if(TranslatorIM.TTSvolume==null || TranslatorIM.TTSvolume=="undefined" || TranslatorIM.TTSvolume=="") TranslatorIM.SL_setTMPdata("TTSvolume",TranslatorIM.TheVolume);
			utterance.volume = TranslatorIM.TTSvolume*1/10;


			utterance.addEventListener('end', TranslatorIM.handleSpeechEvent);
			utterance.addEventListener('pause', TranslatorIM.handleSpeechPause);
			utterance.addEventListener('resume', TranslatorIM.handleSpeechResume);

			TranslatorIM.synth.speak(utterance);
                        TranslatorIM.handleSpeechSetVolume();
			setTimeout(function() {
				doc.getElementById("SL_alert100").style.display="block";				
			}, 500);

	},

	handleSpeechPause: function(){
		var doc = FExtension.browserInject.getDocument();
		var ext = FExtension.browserInject;
            	doc.getElementById('SL_controls').style.background='url('+ext.getURL('content/img/util/play.png')+')';
		doc.getElementById("SL_controls").className="SL_play";			
	},

	handleSpeechResume: function(){
		var doc = FExtension.browserInject.getDocument();
		var ext = FExtension.browserInject;
            	doc.getElementById('SL_controls').style.background='url('+ext.getURL('content/img/util/pause.png')+')';
		doc.getElementById("SL_controls").className="SL_pause";
		TranslatorIM.Reload();
	},

	handleSpeechEvent: function(){
		var doc = FExtension.browserInject.getDocument();
		var ext = FExtension.browserInject;
            	doc.getElementById('SL_controls').style.background='url('+ext.getURL('content/img/util/play.png')+')';
		doc.getElementById("SL_controls").className="SL_play";
	},

	handleSpeechVolume: function(){
	   var doc = FExtension.browserInject.getDocument();
		var ext = FExtension.browserInject;
		if(doc.getElementById("SL_volume").className=="SL_novolume"){
			doc.getElementById('SL_volume').style.background='url('+ext.getURL('content/img/util/volume.png')+')';
			doc.getElementById("SL_volume").className="SL_volume";
			TranslatorIM.SL_setTMPdata("TTSvolume",TranslatorIM.TheVolume);
		} else {
			doc.getElementById('SL_volume').style.background='url('+ext.getURL('content/img/util/novolume.png')+')';
			doc.getElementById("SL_volume").className="SL_novolume";
			TranslatorIM.SL_setTMPdata("TTSvolume",1);
		}
	},

	handleSpeechSetVolume: function(){
	   var doc = FExtension.browserInject.getDocument();
		var ext = FExtension.browserInject;
		if(TranslatorIM.TTSvolume!=TranslatorIM.TheVolume){
			doc.getElementById('SL_volume').style.background='url('+ext.getURL('content/img/util/novolume.png')+')';
			doc.getElementById("SL_volume").className="SL_novolume";
		}else{
			doc.getElementById('SL_volume').style.background='url('+ext.getURL('content/img/util/volume.png')+')';
			doc.getElementById("SL_volume").className="SL_volume";
		}
	},

	Reload: function(ob){
	    var doc = FExtension.browserInject.getDocument();
	    TranslatorIM.synth.cancel();    
	    TranslatorIM.GOOGLE_TTS_backup(TranslatorIM.TheNewText,TranslatorIM.TheNewLang);
	},

	PPB_tts_icon: function (T,resp){
		var doc = FExtension.browserInject;
	   	var doc2 = doc.getDocument();
		var resptmp = resp;
		if(TranslatorIM.SL_ALLvoices.indexOf(T)!=-1){
			var ttsurl=FExtension.browserInject.getURL('content/img/util/tts.png');
			if(T=="ar" || T=="iw" || T=="fa" || T=="yi" || T=="ur" || T=="ps" || T=="sd" || T=="ckb" || T=="ug" || T=="dv" || T=="prs"){
				var tmpTTSicn='<div class="PPB_voice2" title="'+FExtension.element(TranslatorIM.SL_LOC,"extListen_ttl")+'" id="SL_BBL_VOICE" style="background: url('+FExtension.browserInject.getURL("content/img/util/tts.png")+');" lang="'+doc2.getElementById("SL_lng_to").value+'">&nbsp;</div>';
				resptmp = tmpTTSicn+"<div style='margin-right:20px;line-height:19px;'>"+resptmp+"</div>";
			} else {
				var tmpTTSicn='<div class="PPB_voice1" title="'+FExtension.element(TranslatorIM.SL_LOC,"extListen_ttl")+'" id="SL_BBL_VOICE" style="background: url('+FExtension.browserInject.getURL("content/img/util/tts.png")+');" lang="'+doc2.getElementById("SL_lng_to").value+'">&nbsp;</div>';
				resptmp = tmpTTSicn+"<div style='margin-left:20px;line-height:19px;'>"+resptmp+"</div>";
			}
		}

		return resptmp;

	},

	AUTOhandler: function(doc,AUTO,DetLang){
		var LNGlist = FExtension.element(TranslatorIM.SL_LOC,'extLanguages');
		var LNGS = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
		for(var I=0; I<LNGS.length; I++){
			var LN = LNGS[I].split(":");
		 	if(LN[0]==DetLang){
				doc.getElementById('SL_lng_from').title=FExtension.element(TranslatorIM.SL_LOC,'extDetected') + " " + LN[1];
				break;
			}
		}			
		var autopattern = "auto";
		if(AUTO != true ) autopattern = "XautoX";
		return autopattern;
	},
	
	ACTIVATE_THEMEwpt_lng: function (st){
	 	if(st==1){
	 	        var bg = "#191919";
			var doc = FExtension.browserInject.getDocument();
			var SL_lng = doc.getElementById("SL_wptLang");
			for(var j=0; j<SL_lng.options.length; j++) SL_lng.options[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}
	},

	ACTIVATE_THEMEwpt_dom: function (st){
	 	if(st==1){
	 	        var bg = "#191919";
			var doc = FExtension.browserInject.getDocument();
			if(doc.getElementById("SL_OPT_MENUid")) doc.getElementById("SL_OPT_MENUid").style.filter=TranslatorIM.SL_DARK;
			if(doc.getElementById("SL_TBpatchid")) doc.getElementById("SL_TBpatchid").style.filter=TranslatorIM.SL_DARK;
			if(doc.getElementById("SL_TBsave1")) doc.getElementById("SL_TBsave1").style.filter=TranslatorIM.SL_DARK;
			if(doc.getElementById("SL_TBsave2")) doc.getElementById("SL_TBsave2").style.filter=TranslatorIM.SL_DARK;
			if(doc.getElementById("SL_WPT_TAB1")) doc.getElementById("SL_WPT_TAB1").style.filter=TranslatorIM.SL_DARK;
			if(doc.getElementById("SL_WPT_TAB2")) doc.getElementById("SL_WPT_TAB2").style.filter=TranslatorIM.SL_DARK;
			if(doc.getElementById("SL_domain")) doc.getElementById("SL_domain").style.filter=TranslatorIM.SL_DARK;
			var SL_lng = doc.getElementById("SL_wptTrTo");
			for(var j=0; j<SL_lng.options.length; j++) SL_lng.options[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}
	},

	ACTIVATE_THEMEwpt: function (st){
	 	if(st==1){
	 	        var bg = "#191919";
			var doc = FExtension.browserInject.getDocument();
			if(doc.getElementById(":0.container")) doc.getElementById(":0.container").style.filter=TranslatorIM.SL_DARK;
		      	var win = top.window.frames[":0.container"].contentWindow;
			var hrefs = win.document.getElementsByClassName('goog-te-button');
			for(var i=0; i<hrefs.length; i++) hrefs[i].setAttribute("style", "filter:"+TranslatorIM.SL_DARK);
			var hrefs = win.document.getElementsByClassName("goog-logo-link");
			for(var i=0; i<hrefs.length; i++) hrefs[i].style.filter=TranslatorIM.SL_DARK;
			win.document.getElementById("SL_TBoptions").style.filter=TranslatorIM.SL_DARK;
			var SL_lng = win.document.getElementById("SL_G_M_to");
			for(var j=0; j<SL_lng.options.length; j++) SL_lng.options[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}
	},

	ACTIVATE_THEMEbbl: function (st){
	 	if(st==1){
	 	        var bg = "#191919";
			var doc = FExtension.browserInject.getDocument();
		        if(doc.getElementById("SL_shadow_translator")){
			doc.getElementById("SL_shadow_translator").style.filter=TranslatorIM.SL_DARK;

			var SL_lng = doc.getElementsByClassName("SL_lngs");
			for(var i=0; i<SL_lng.length; i++) {
				for(var j=0; j<SL_lng[i].options.length; j++) SL_lng[i].options[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			}

			var hrefs = doc.getElementsByClassName("SL_options");
			for(var i=0; i<hrefs.length; i++) hrefs[i].setAttribute("style", "filter:"+TranslatorIM.SL_DARK);
			var hrefs = doc.getElementsByClassName("_ALNK");
			for(var i=0; i<hrefs.length; i++) hrefs[i].setAttribute("style", "filter:"+TranslatorIM.SL_DARK);

//			var hrefs = doc.getElementsByClassName("skiptranslate");
//			for(var i=0; i<hrefs.length; i++) hrefs[i].setAttribute("style", "filter:"+TranslatorIM.SL_DARK);

			doc.getElementById("SL_PN0").style.filter=(TranslatorIM.SL_DARK-90);
                        doc.getElementById("SL_PN1").style.filter=(TranslatorIM.SL_DARK-90);
			doc.getElementById("SL_PN2").style.filter=(TranslatorIM.SL_DARK-90);
			//doc.getElementById("SL_PN3").style.filter=(TranslatorIM.SL_DARK-90);

			setTimeout(function() {
				var lbl = doc.getElementsByClassName("SL_BL_LABLE_ON");	
				for(var i=0; i<lbl.length; i++) {
					var ind = lbl[i].id.replace("SL_P","");
					if(lbl[i].id.indexOf(ind)!=-1) doc.getElementById("SL_PN"+ind).style.filter=TranslatorIM.SL_LIGHT;
				}
			}, 700);
			}
		}
	},

	SL_YANDEX: function(text,f,t){
	     	var doc = FExtension.browserInject.getDocument();
	     	var doc2 = FExtension.browserInject;

        	f = f.replace("zh-CN","zh");
        	f = f.replace("jw","jv");
	        f = f.replace("iw","he");
		f = f.replace("srsl","sr");
        	f = f.replace("tlsl","tl");

	        t = t.replace("zh-CN","zh");
	        t = t.replace("jw","jv");
        	t = t.replace("iw","he");
		t = t.replace("srsl","sr");
        	t = t.replace("tlsl","tl");


                if(text.length<=TranslatorIM.SL_Balloon_translation_limit) text = TranslatorIM.truncStrByWord(text,TranslatorIM.SL_Balloon_translation_limit);
                if(text!=""){
		        var dir = f+"-"+t;
			if(f=="auto") dir = t;
		        FExtension.browserInject.runtimeSendMessage({greeting: "TR_YANDEX:>"+dir+","+encodeURIComponent(text)}, function(response) {});
			setTimeout(function(){
			    var SLIDL = setInterval(function(){
			           FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {
			             if(response && response.farewell){
				        var theresponse = response.farewell.split("~");
					TranslatorIM.BBL_RESULT=theresponse[52];
					if(TranslatorIM.BBL_RESULT!="") {
						text = TranslatorIM.BBL_RESULT;
						TranslatorIM.BBL_RESULT="";
						clearInterval(SLIDL);
						//text=text.replace(/#/ig,"'");
					    	if(text!="" && text!="<#>"){
							TranslatorIM.SL_temp_result = text;
							//text=text.replace(/@/ig,'<br>');
	       					        var resptmp = TranslatorIM.PPB_tts_icon(t,text);

							setTimeout(function() {
					 			var nmr = text.trim().split(" ").length;
								if(nmr > 1) TranslatorIM.CNTR('2222',f+"/"+t, text.length);
								else TranslatorIM.CNTR('2232',f+"/"+t, text.length);
							}, 100);

			        			doc.getElementById('SL_shadow_translation_result').innerHTML=resptmp.replace(/\\n/ig,'<br>');
							doc.getElementById('SL_shadow_translation_result2').innerHTML=resptmp.replace(/\\n/ig,'<br>');
			                		doc.getElementById('SL_shadow_translation_result').style.direction = "ltr";
							doc.getElementById('SL_shadow_translation_result').style.textAlign = "left";
				

							if(t == "ar" || t == "he" || t == "fa" || t == "yi" || t == "ur" || t == "ps" || t == "sd" || t == "ckb" || t == "ug" || t == "dv" || t == "prs"){
								doc.getElementById('SL_shadow_translation_result').style.direction = "rtl";
								doc.getElementById('SL_shadow_translation_result').style.textAlign = "right";
							}
				       		        TranslatorIM.SL_JUMP(doc);
							setTimeout(function() {	
								var HID=2;
							        if (TranslatorIM.SL_TH_2 == 1){
					     				var doc2 = FExtension.browserInject;
									var SLnow = new Date();
									SLnow = SLnow.toString();
									var TMPtime = SLnow.split(" ");
									var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];
		        			                	var LNGfrom = f;
						                        if(f=="auto" || doc.getElementById("SL_locer").checked == false) var LNGfrom = TranslatorIM.LNGforHISTORY;
									if(TranslatorIM.SL_WRONGLANGUAGEDETECTED==1) LNGfrom="auto";
                	                        			text=text.replace(/~/ig," ");
								        text=text.replace(/\^/g,"@");
								        var DICT = TranslatorIM.BL_T_PROV;
									if(TranslatorIM.SL_MODE==1) DICT = TranslatorIM.BL_D_PROV;
									doc2.runtimeSendMessage({greeting:"[b]" + TranslatorIM.SL_TEMP_TEXT + "~~" + text + "~~" + LNGfrom + "|" + t + "~~"+ doc.location+"~~"+CurDT+"~~"+HID+"~~"+DICT[0]+"^^"}, function(response) {
										if(response){ }
									});
								}
							}, 500);
					    	}else{
							var msg = "Due to too many requests coming from your IP address, access to the free Yandex Translator has been temporarily disabled. Please try again later.";
			                		doc.getElementById('SL_shadow_translation_result').innerHTML=msg;
			                		doc.getElementById('SL_shadow_translation_result2').innerHTML=msg;
					    	}
						doc.getElementById('SL_loading').style.display = 'none';
			            }
				}
			      });
			    },50);  
 		         },50);  
		}
	},

	SL_BBL_OBJ_OFF: function(st){		
	     	var doc = FExtension.browserInject.getDocument();
		TranslatorIM.CONTROL_SUM="";
		if (st == 0){ 
			if(TranslatorIM.SL_SAVETEXT == 0){
				if(doc.getElementById("SL_balloon_obj")) doc.body.removeChild (doc.getElementById("SL_balloon_obj"));			
			}
		} else{
			if(doc.getElementById("SL_balloon_obj")) doc.body.removeChild (doc.getElementById("SL_balloon_obj"));			
		}
	},

	BBL_IfMouseIsInside: function(e){
		var doc = FExtension.browserInject.getDocument();
		var st = 0;
		var THEobj = doc.getElementById('SL_shadow_translator');
		if(THEobj){
			var divRect = THEobj.getBoundingClientRect();
			if (e.clientX >= (divRect.left-20) && e.clientX <= divRect.right && e.clientY >= divRect.top && e.clientY <= divRect.bottom) st=1;
		}
		return(st);
	},

	InitiateIT_target_lang: function(){
	     	var doc = FExtension.browserInject.getDocument();
	        var container = doc.body;
	        if(FExtension.browserInject.getSelectionText()!=""){
                  if(container){
		          var ext = FExtension.browserInject;
			  var theObj = doc.getElementById("SL_MENU");
                          if(theObj) theObj.parentNode.removeChild(theObj);
			  var OB = doc.createElement('div');
			  var id = doc.createAttribute("id");
			  id.value = "SL_MENU";
		          OB.setAttributeNode(id);
			  var cl = doc.createAttribute("class");
			  cl.value = "skiptranslate";
		          OB.setAttributeNode(cl);

        		  container.appendChild (OB);
                          var OB2="";
		          var act = "";
			  var MENU = TranslatorIM.SL_LNG_LIST.split(",");
			  var splt = 0;
		     	  if(MENU.length>=TranslatorIM.SL_FAV_START){
				  var SL_FAV_LANGS_LONG = TranslatorIM.SL_ADD_LONG_NAMES(TranslatorIM.SL_FAV_LANGS_IT);
				  if(SL_FAV_LANGS_LONG!=""){
					var favArr=SL_FAV_LANGS_LONG.split(","); 
					for(var I=0; I < favArr.length; I++){
					    var CURlang = favArr[I].split(":");
					    act = "";
					    if (I==0) {
						act=" selected ";
					        TranslatorIM.SL_langDst_bbl2 = CURlang[0];
						TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(CURlang[0], '', 1, TranslatorIM.SL_FAV_LANGS_IT, "IT");
					    }
					    OB2 = OB2 + "<option " + act +" value='"+CURlang[0]+"'>"+CURlang[1]+"</option>";
					}
					var all = FExtension.element(TranslatorIM.SL_LOC,"extwptDAll");
				        OB2 = OB2 + "<option disabled value=''>-------- [ "+ all +" ] --------</option>";
				  }
				  splt=1;
			  }

			  TranslatorIM.SL_LNG_LIST = TranslatorIM.CUSTOM_LANGS(FExtension.element(TranslatorIM.SL_LOC,'extLanguages'));
			  var MENU = TranslatorIM.SL_LNG_LIST.split(",");
			  for(var J=0; J < MENU.length; J++){
			    CURlang = MENU[J].split(":");
			    if(splt == 1 ){
				    if(SL_FAV_LANGS_LONG==""){
					    var act2 = "";
					    if(TranslatorIM.SL_langDst_it == CURlang[0] ) act2=" selected ";
				    }
			    } else { 
				    var act2 = "";
				    if(TranslatorIM.SL_langDst_it == CURlang[0] ) act2=" selected ";
			    }
			    OB2 = OB2 + "<option "+ act2 +" value='"+CURlang[0]+"'>"+CURlang[1]+"</option>";
			  }
			  var OBCLOSE = "<div src='#'  title='"+FExtension.element(TranslatorIM.SL_LOC,'extClose')+"' id='SL_MENU_CLOSE'></div>";
			  var OBMENU = "<select id='SL_IT_MENU'>" + OB2 + "</select>";
			  var OBLINKS = "<div id='SL_MENU_LINKS' align=center><a id='SL_MENU_LINK_OPT' href='"+FExtension.browserInject.getURL('content/html/options/options.html?it')+"' target='_blank'>"+FExtension.element(TranslatorIM.SL_LOC,"extOptions")+"</a> : <a id='SL_MENU_LINK_HIS' href='"+FExtension.browserInject.getURL('content/html/options/options.html?hist')+"' target='_blank'>"+FExtension.element(TranslatorIM.SL_LOC,"extHistory")+"</a></div>";
			  doc.getElementById("SL_MENU").innerHTML=OBCLOSE+"<span id='SL_MENU_TTL'>" + FExtension.element(TranslatorIM.SL_LOC,"extSeTa")+"</span><br>"+OBMENU + OBLINKS ;
		  	  doc.getElementById('SL_MENU_CLOSE').style.background='url('+ext.getURL('content/img/util/close.png')+')';
		  	  doc.getElementById('SL_IT_MENU').style.background='#fff url('+ext.getURL('content/img/util/select.png')+')  no-repeat 100% 0';

		  }
		}
	},




	InitiateWPT_target_lang: function(LN){
	     	var doc = FExtension.browserInject.getDocument();
	        var container = doc.body;
                  if(container){
		          var ext = FExtension.browserInject;
			  var OB = doc.createElement('div');
			  var id = doc.createAttribute("id");
			  id.value = "SL_MENU_WPT";
		          OB.setAttributeNode(id);
			  var cl = doc.createAttribute("class");
			  cl.value = "skiptranslate";
		          OB.setAttributeNode(cl);

        		  container.appendChild (OB);
                          var msg = "<b>'"+LN+"'</b><br>" + FExtension.element(TranslatorIM.SL_LOC,"extnotsupported");
                          //var msg = "Google Translate does not support<br> '<b>"+LN+"</b>' language yet";

			  var OBCLOSE = "<div src='#' title='"+FExtension.element(TranslatorIM.SL_LOC,'extClose')+"' id='SL_WPT_MENU_CLOSE'></div>";
			  doc.getElementById("SL_MENU_WPT").innerHTML=OBCLOSE+"<div id='SL_MENU_TTL' style='margin-top:10px;'>" + msg + "</div><br>";
		  	  doc.getElementById('SL_WPT_MENU_CLOSE').style.background='url('+ext.getURL('content/img/util/close.png')+')';
		  }
	},


	CloseIT_target_lang: function(){
	     	var doc = FExtension.browserInject.getDocument();
		var theObj = doc.getElementById("SL_MENU");
                if(theObj) theObj.parentNode.removeChild(theObj);
	},

	SL_IT_retranslate: function(){
	     	var doc = FExtension.browserInject.getDocument();
		FExtension.browserInject.runtimeSendMessage({greeting: "SES_IT:>" + doc.getElementById("SL_IT_MENU").value}, function(response) {}); 
		TranslatorIM.SL_langDst_it=doc.getElementById("SL_IT_MENU").value;
	        TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(TranslatorIM.SL_langDst_it, '', 1, TranslatorIM.SL_FAV_LANGS_IT, "IT");
		runinliner();
		TranslatorIM.SL_ONETIMERUN=1;
		TranslatorIM.CloseIT_target_lang();
	},

	SL_IT_retranslate_and_close: function(){
	     	var doc = FExtension.browserInject.getDocument();
		runinliner();
		TranslatorIM.SL_ONETIMERUN=1;
		TranslatorIM.CloseIT_target_lang();
	},

	SAVE_SES_PARAMS: function(){
	     	var doc = FExtension.browserInject.getDocument();
//		if(doc.getElementById("SL_balloon_obj")) {
			//if(TranslatorIM.SL_langDst!=TranslatorIM.SL_langDst_bbl2) doc.getElementById("SL_lng_to").value=TranslatorIM.SL_langDst_bbl2;
			var dofrom = doc.getElementById("SL_lng_from").value;
			var doto = doc.getElementById("SL_lng_to").value;
/*
			if(TranslatorIM.FlippedByAuto == 1){
				var dofrom = TranslatorIM.SL_langSrc;
				var doto = TranslatorIM.SL_langDst;
			}
*/
			if(doto == "") doto = TranslatorIM.SL_langDst;
			FExtension.browserInject.runtimeSendMessage({greeting: "SES:>" + dofrom +","+doto+","+TranslatorIM.SL_FONT_SID+","+TranslatorIM.SL_SID_PIN+","+doc.getElementById('SL_locer').checked+","+TranslatorIM.SL_OnOff_BTN2}, function(response) {}); 

//		}
	},

	i18n_LanguageDetect: function(text, st){
   		var lng="";
   		if(st==1){	
	  	      if(text.length>1){
				chrome.i18n.detectLanguage(text, function(result) {
					lng = result.languages[0].language;
				});
				if(lng=="zh") lng = "zh-CN";
				if(lng=="zh-Hant") lng = "zh-TW";
			}
		
			if(lng !=""){
				var LANGSALL = FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",");
				var cntr = 0;
       			        for (var i=0;i<LANGSALL.length;i++){
					var templang = LANGSALL[i].split(":");
		   			if(templang[0]==lng) cntr++;
				}
				if(cntr==0) lng="";
			}
		}
	
                TranslatorIM.ONCE_DETECT = 1;
		TranslatorIM.SL_WPT_LANG=lng;
	    	return lng;
	},

	CNTR: function(id,dir,nmb){
	    FExtension.browserInject.runtimeSendMessage({greeting: "CNTR:>"+id+","+dir+","+nmb}, function(response) {}); 
	},

	CNTRP: function(id,dir,nmb){
	    FExtension.browserInject.runtimeSendMessage({greeting: "CNTRP:>"+id+","+dir+","+nmb}, function(response) {}); 
	},

	SL_ADD_LONG_NAMES: function(codes){
		var OUT = "";
		var MENU = TranslatorIM.SL_LNG_LIST.split(",");
		var FAV = codes.split(",");
		for (var i=0; i<FAV.length; i++){
			var MARKER = 0;
			for (var j=0; j<MENU.length; j++){
				var M = MENU[j].split(":");
				if(FAV[i] == M[0]){
					OUT = OUT + M[0] + ":" + M[1];
					MARKER=1;
				}
			}
			if(MARKER==1){
				if(i <= FAV.length) OUT = OUT + ","
			}
		}
		if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
		return OUT;	
	},

	SL_SAVE_FAVORITE_LANGUAGES: function(ln, ob, st, TR, TP){
		var OUT = "";
		var OUT2 = "";
		if(TR.indexOf(ln)!=-1){
			TR = TR.replace(ln+",",""); 
			if(TR.indexOf(",")==-1) TR = TR.replace(ln,""); 
		}

		OUT = ln + ",";	
		var ARR = TR.split(",");
		for (var i = 0; i < ARR.length; i++){
		 	OUT = OUT + ARR[i]+",";
		}
		if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
		var TMP = OUT.split(",");
		if(TMP.length > TranslatorIM.SL_FAV_MAX) {
			for (var j = 0; j < TMP.length-1; j++){
			 	OUT2 = OUT2 + TMP[j]+",";
			}		
			OUT = OUT2 
		}
		if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
		FExtension.browserInject.runtimeSendMessage({greeting: "FAV_"+TP+":>" + OUT}, function(response) {}); 

		if(st == 0){
			if(OUT!=""){
				var MENU = TranslatorIM.SL_LNG_LIST.split(",");
				if(MENU.length>=TranslatorIM.SL_FAV_START){
					TranslatorIM.SL_REBUILD_TARGET_LANGUAGE_MENU(OUT,ob);
				}
			}
		}

	},

	SL_REBUILD_TARGET_LANGUAGE_MENU: function (FAV, ob){
		var doc = FExtension.browserInject.getDocument();
		var MENU = TranslatorIM.SL_LNG_LIST.split(",");
		if(MENU.length>=TranslatorIM.SL_FAV_START){
        	        doc.getElementById(ob).innerText="";
			var SEL = 0;
			if(FAV!=""){
                        	FAV = TranslatorIM.SL_ADD_LONG_NAMES(FAV);
				var favArr=FAV.split(","); 
				for(var J=0; J < favArr.length; J++){
				    var CURlang = favArr[J].split(":");
				    var OB_FAV = doc.createElement('option');

				    var v = doc.createAttribute("value");				    		
				    v.value = CURlang[0];
				    OB_FAV.setAttributeNode(v);

				    if(J == 0){
					    var sel = doc.createAttribute("selected");
					    sel.value = "selected";
					    OB_FAV.setAttributeNode(sel);
					    TranslatorIM.SL_langDst = CURlang[0];
					    SEL = 1;	
				    }

				    OB_FAV.appendChild(doc.createTextNode(CURlang[1]));
				    doc.getElementById(ob).appendChild(OB_FAV);
				}
				OB_FAV = doc.createElement('option');
				var d = doc.createAttribute("disabled");
				d.value = true;
				OB_FAV.setAttributeNode(d);
				var all = FExtension.element(TranslatorIM.SL_LOC,"extwptDAll");
			    	OB_FAV.appendChild(doc.createTextNode("-------- [ "+ all +" ] --------"));
			    	doc.getElementById(ob).appendChild(OB_FAV);
			}
			var tmp =favArr[0].split(":");
		        var thelang = tmp[0];
			for(J=0; J < MENU.length; J++){
			    CURlang = MENU[J].split(":");
			    var option = doc.createElement('option');
			    if(SEL == 0){
				    if(CURlang[0] == thelang){
					    var sel = doc.createAttribute("selected");
					    sel.value = "selected";
					    option.setAttributeNode(sel);
				    }
			    }
			    v = doc.createAttribute("value");
			    v.value = CURlang[0];
			    option.setAttributeNode(v);
			    option.appendChild(doc.createTextNode(CURlang[1]));
			    doc.getElementById(ob).appendChild(option);
			}
		} else {
			doc.getElementById(ob).innerText="";
		        var thelang = TranslatorIM.SL_langDst;
			if(TranslatorIM.SL_langDst!="" && TranslatorIM.SL_SID_TO=="") thelang = TranslatorIM.SL_langDst_bbl2;
			for(J=0; J < MENU.length; J++){
			    CURlang = MENU[J].split(":");
			    var option = doc.createElement('option');
			    if(CURlang[0] == thelang){
				    var sel = doc.createAttribute("selected");
				    sel.value = "selected";
				    option.setAttributeNode(sel);
			    }
			    v = doc.createAttribute("value");
			    v.value = CURlang[0];
			    option.setAttributeNode(v);
			    option.appendChild(doc.createTextNode(CURlang[1]));
			    doc.getElementById(ob).appendChild(option);
			}

		}
	},

	OPEN_BG_OPTIONS: function(st){
		FExtension.browserInject.runtimeSendMessage({greeting: "OPEN_O:>"+st}, function(response) {});
        },

	CloseAnyOpenTranslator: function(){
	        if(top.window.frames[":0.container"]){
		      	var win = top.window.frames[":0.container"].contentWindow;
			if(win.document){
				win.document.getElementById(':0.close').click();
				TranslatorIM.SL_BAR_STOP();
			}
		}
	},

	closeWPT_ERROR_MSG: function(){
		document.getElementById("SL_MENU_WPT").style.display='none';
	},

	NoProvidersAlert: function(){
		var doc = FExtension.browserInject.getDocument();
		var T = doc.getElementById('SL_lng_to').value;
	   	var msg = FExtension.element(TranslatorIM.SL_LOC,"extLPNotSupported");
	   	var selectDst = doc.getElementById('SL_lng_to');
	   	var selectedDstIndex = selectDst.selectedIndex;
	   	var selectedDstText = selectDst.options[selectedDstIndex].text; 

	   	var selectSrc = doc.getElementById('SL_lng_from');
	   	var selectedSrcIndex = selectSrc.selectedIndex;
	   	var selectedSrcText = selectSrc.options[selectedSrcIndex].text; 

	   	msg = msg.replace("XXX",selectedSrcText);
	   	msg = msg.replace("YYY",selectedDstText);

	   	doc.getElementById('SL_shadow_translation_result').style.visibility="visible";
	   	doc.getElementById('SL_shadow_translation_result2').style.visibility="visible";

	   	doc.getElementById('SL_shadow_translation_result').innerHTML="<div align=center style='color:red;margin-top:20px;'>"+msg+"</div>";
	   	doc.getElementById('SL_shadow_translation_result2').innerHTML="<div align=center style='color:red;margin-top:20px;'>"+msg+"</div>";
	   	TranslatorIM.SL_SAVE_FAVORITE_LANGUAGES(T, 'SL_lng_to', 0, TranslatorIM.SL_FAV_LANGS_BBL, "BBL");
	}
}


if(FExtension.browser.isLocalStoragePreset()){
	TranslatorIM.init();
}else{
	var appcontent = window.document.getElementById("appcontent");
	appcontent.addEventListener("DOMContentLoaded", function(){
		TranslatorIM.init();
       		init();
	}, false);
}


window.addEventListener("DOMContentLoaded", TranslatorIM.SL_GOOGLE_WPT(), false);

}catch(e){
//	TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError2"));
}


