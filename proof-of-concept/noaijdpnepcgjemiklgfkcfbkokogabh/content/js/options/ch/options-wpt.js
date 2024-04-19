'use strict';
var SL_DARK="invert(95%)";

var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages'));

(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();

(function(){GEBI("SRV6").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV6"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV6").addEventListener("mouseout",function(){NoneColor(6);},!1); } )();
(function(){GEBI("SRV6").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV7").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV7"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV7").addEventListener("mouseout",function(){NoneColor(7);},!1); } )();
(function(){GEBI("SRV7").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV12").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV12"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV12").addEventListener("mouseout",function(){NoneColor(12);},!1); } )();
(function(){GEBI("SRV12").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV13").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV13"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV13").addEventListener("mouseout",function(){NoneColor(13);},!1); } )();
(function(){GEBI("SRV13").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SL_HK6").addEventListener("click",function(){ SL_HIDE_HK("SL_HK6","SL_HIDE6");},!1); } )();
(function(){GEBI("SL_HK7").addEventListener("click",function(){ SL_HIDE_HK("SL_HK7","SL_HIDE7");},!1); } )();
(function(){GEBI("SL_HK12").addEventListener("click",function(){ SL_HIDE_HK("SL_HK12","SL_HIDE12");},!1); } )();
(function(){GEBI("SL_HK13").addEventListener("click",function(){ SL_HIDE_HK("SL_HK13","SL_HIDE13");},!1); } )();

(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();
(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();

(function(){GEBI("SL_wptReset1").addEventListener("click",function(){ SL_RESET(1); },!1); } )();
(function(){GEBI("SL_wptReset2").addEventListener("click",function(){ SL_RESET(2); },!1); } )();

(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

(function(){GEBI("reset_all6").addEventListener("click",function(){ RESET_ALL_HK(6);},!1);} )();
(function(){GEBI("reset_all7").addEventListener("click",function(){ RESET_ALL_HK(7);},!1);} )();
(function(){GEBI("reset_all12").addEventListener("click",function(){ RESET_ALL_HK(12);},!1);} )();
(function(){GEBI("reset_all13").addEventListener("click",function(){ RESET_ALL_HK(13);},!1);} )();

(function(){window.addEventListener("mousemove",function(){
	BUILD_RESET_ICN(6);
	BUILD_RESET_ICN(7);
	BUILD_RESET_ICN(12);
	BUILD_RESET_ICN(13);
},!1);} )();

(function(){window.addEventListener("click",function(event){
	SL_MSG_HANDLER(event);
},!1);} )();


//AUTOSAVE BLOCK
window.addEventListener('change',function(e){
	save_options(0);
},!1);
//AUTOSAVE BLOCK


(function(){
    window.addEventListener('load',function(){
	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	var OB = GEBI('SL_langSrc_wpt');
	if(FExtension.store.get("SL_LNG_LIST").indexOf("auto")!=-1 || FExtension.store.get("SL_LNG_LIST")=="all"){
		var OB1 = document.createElement('option');
		var v = document.createAttribute("value");
		v.value = "auto";
		OB1.setAttributeNode(v);
		OB1.appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetect_language_from_box')));
		OB.appendChild(OB1); 
	}
	var SL_TMP = SL_Languages.split(",");
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    var v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    //OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB.appendChild(OB2);
	}

	var OB3 = GEBI('SL_langDst_wpt');
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    //OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB3.appendChild(OB2);
	}
	INIT();
    },!1);
})();
function CONSTRUCTOR(){
	GEBI('SL_BG_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSLBG_op')));
	GEBI('SL_setLS4allTr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSLsetLS4allTr')));
	GEBI('SLSeSo').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSeSo')));
	GEBI('SLSeTa').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSeTa')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTrHist')));
	GEBI('SL_WpTH').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWpTH')));
	GEBI('SL_sc').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
	GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLangs')+":"));
	GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCustomize')));
	GEBI('SL_wptttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADV')));
	GEBI('SL_wptDAlways').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptDAlways')));
	GEBI('SL_wptDTb').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptDTb')));
	GEBI('SL_wptDOrTip').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptDOrTip')));
	GEBI('SL_wptDReset').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptDReset')));
	GEBI('SL_wptLReset').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptLReset')));
	GEBI('SL_wptReset1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptReset')));
	GEBI('SL_wptReset2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptReset')));
	GEBI('SL_SH_OR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot')));
	GEBI('SL_CL_TR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct')));
	GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
	GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
	GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));
	GEBI('SL_WPTflip').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSwitch_languages_ttl')));
	GEBI('SL_TR_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTR_op')));
	switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/opera-webpage-translation-options/"; break;
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/webpage-translation-options/"; break;
	 default      : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/";break;
	}
	ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}



function INIT(){
  ACTIVATE_MENU_ELEMENT(4);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
	var mySL_langSrc_wpt = FExtension.store.get("SL_langSrc_wpt");
	var mySL_langSrcSelect_wpt = GEBI("SL_langSrc_wpt");
	for (var i = 0; i < mySL_langSrcSelect_wpt.options.length; i++) {
		var mySL_langSrcOption_wpt = mySL_langSrcSelect_wpt.options[i];
		if (mySL_langSrcOption_wpt.value == mySL_langSrc_wpt) {
			mySL_langSrcOption_wpt.selected = "true";
			break;
		}
	}

	var mySL_langDst_wpt = FExtension.store.get("SL_langDst_wpt");
	var mySL_langDstSelect_wpt = GEBI("SL_langDst_wpt");
	for (var i = 0; i < mySL_langDstSelect_wpt.options.length; i++) {
		var mySL_langDstOption_wpt = mySL_langDstSelect_wpt.options[i];
		if (mySL_langDstOption_wpt.value == mySL_langDst_wpt) {
			mySL_langDstOption_wpt.selected = "true";
			break;
		}
	}

	var SL_TH_3 = FExtension.store.get("SL_TH_3");
	if(SL_TH_3=="1")  GEBI("SL_TH_3").checked = true;
	else GEBI("SL_TH_3").checked = false;

	var SL_global_lng_wpt = FExtension.store.get("SL_global_lng_wpt");
	if(SL_global_lng_wpt=="true")  GEBI("SL_global_lng_wpt").checked = true;
	else GEBI("SL_global_lng_wpt").checked = false;


        var SL_THEMEmode = FExtension.store.get("THEMEmode");
	if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
	else GEBI("SL_THEME").value = 1;



  var tempTIP = FExtension.store.get("SL_wptGlobTip");
  if(tempTIP=="1") GEBI("SL_SOOOM").checked=true;
  else GEBI("SL_SOOOM").checked=false;

  var tempTB = FExtension.store.get("SL_wptGlobTb");
  if(tempTB=="1") GEBI("SL_Toolbar").checked=true;
  else GEBI("SL_Toolbar").checked=false;




  var tempHK6 = FExtension.store.get("SL_HK_wptbox1");
  if(tempHK6=="true") GEBI("SL_HK6").checked=true;
  else GEBI("SL_HK6").checked=false;
  
  GEBI("SRV6").value=FExtension.store.get("SL_HK_wpt1");

  var tempHK7 = FExtension.store.get("SL_HK_wptbox2");
  if(tempHK7=="true") GEBI("SL_HK7").checked=true;
  else 	 GEBI("SL_HK7").checked=false;

  GEBI("SRV7").value=FExtension.store.get("SL_HK_wpt2");

  var tempHK12 = FExtension.store.get("SL_HK_SObox_wpt");
  if(tempHK12=="true") GEBI("SL_HK12").checked=true;
  else 	 GEBI("SL_HK12").checked=false;

  GEBI("SRV12").value=FExtension.store.get("SL_HK_SO_wpt");

  var tempHK13 = FExtension.store.get("SL_HK_CTbox_wpt");
  if(tempHK13=="true") GEBI("SL_HK13").checked=true;
  else 	 GEBI("SL_HK13").checked=false;

  GEBI("SRV13").value=FExtension.store.get("SL_HK_CT_wpt").replace("Escape", "Esc");

  var WPTflip = FExtension.store.get("WPTflip");
  if(WPTflip=="1")  GEBI("WPTflip").checked = true;
  else GEBI("WPTflip").checked = false;


  SL_HIDE_HK("SL_HK6","SL_HIDE6");
  SL_HIDE_HK("SL_HK7","SL_HIDE7");
  SL_HIDE_HK("SL_HK12","SL_HIDE12");
  SL_HIDE_HK("SL_HK13","SL_HIDE13");

  save_options(1);
}

function save_options(st) {
 setTimeout(function() {
	var SL_select_S_wpt = GEBI("SL_langSrc_wpt");
	var SL_select_T_wpt = GEBI("SL_langDst_wpt");

	if(SL_select_S_wpt.value!=SL_select_T_wpt.value){

		if(GEBI("SL_TH_3").checked==true) FExtension.store.set("SL_TH_3","1");
		else FExtension.store.set("SL_TH_3", "0");

		if(GEBI("SL_global_lng_wpt").checked==true){
			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_wpt").checked);

			FExtension.store.set("SL_langSrc", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			FExtension.store.set("SL_langSrc2", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			FExtension.store.set("SL_langSrc_bbl", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			FExtension.store.set("SL_langSrc_wpt", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			FExtension.store.set("SL_langSrc_it", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);

			FExtension.store.set("SL_langDst", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			FExtension.store.set("SL_langDst2", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			FExtension.store.set("SL_langDst_bbl", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			FExtension.store.set("SL_langDst_wpt", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			FExtension.store.set("SL_langDst_it", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);

			var IDS = document.getElementById("SL_langDst_wpt").value;
	   		SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_IMT");
	   		SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_BBL");
	   		SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_IT");
	   		SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_WPT");

		} else {
			SL_SAVE_FAVORITE_LANGUAGES(document.getElementById("SL_langDst_wpt").value, "SL_FAV_LANGS_WPT");
			FExtension.store.set("SL_langDst_name_wpt", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_wpt").checked);
		}	

		RESET_TEMPS_TO_DEFAULT();

		var SL_langSrc_wpt = SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value;
		FExtension.store.set("SL_langSrc_wpt", SL_langSrc_wpt);
		
		var SL_langDst_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value;
		FExtension.store.set("SL_langDst_wpt", SL_langDst_wpt);
		FExtension.store.set("SL_WPT_TEMP_LANG", SL_langDst_wpt);


		
		var SL_langDst_name_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text;
		FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_wpt);

                FExtension.store.set("SL_HK_wptbox1", GEBI("SL_HK6").checked);
                FExtension.store.set("SL_HK_wptbox2", GEBI("SL_HK7").checked);
                FExtension.store.set("SL_HK_SObox_wpt", GEBI("SL_HK12").checked);
                FExtension.store.set("SL_HK_CTbox_wpt", GEBI("SL_HK13").checked);

                FExtension.store.set("SL_HK_wpt1", GEBI("SRV6").value);
                FExtension.store.set("SL_HK_wpt2", GEBI("SRV7").value);
                FExtension.store.set("SL_HK_SO_wpt", GEBI("SRV12").value);
                FExtension.store.set("SL_HK_CT_wpt", GEBI("SRV13").value);

                if(GEBI("SL_SOOOM").checked==true) FExtension.store.set("SL_wptGlobTip", "1");
                else FExtension.store.set("SL_wptGlobTip", "0");

                if(GEBI("SL_Toolbar").checked==true) {
			FExtension.store.set("SL_wptGlobTb", "1");
                }else{
			FExtension.store.set("SL_wptGlobTb", "0");
		}

		if(GEBI("WPTflip").checked==true)  FExtension.store.set("WPTflip",1);
		else FExtension.store.set("WPTflip",0);

//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
//==============================

		if(GEBI("SL_global_lng_wpt").checked==true){
			FExtension.store.set("SL_langDst_name", SL_langDst_name_wpt);
			FExtension.store.set("SL_langDst_name_bbl", SL_langDst_name_wpt);
			FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_wpt);
			FExtension.store.set("SL_langDst_name_it", SL_langDst_name_wpt);
		}

//		FExtension.store.set("SL_Flag", "FALSE");
                FExtension.bg.ImTranslatorBG.PREPARE_RCM_CONTENT();
	 	FExtension.bg.ImTranslatorBG.SL_WorkingSet();
	        FExtension.bg.FExtension.browser.refreshSettings();

		if(GEBI('autohotkeys')){
		  var frame = GEBI('autohotkeys');
		}

	}else alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extS_T_L_diff'));
 }, 100);
}

function GEBI(id){ return document.getElementById(id);}





function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}

function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  CONSTRUCTOR();
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  parent.frames["menu"].location.reload();
  location.reload();
}

function SL_RESET(st){
  GEBI("SL_reset"+st).style.display="block";
  if(st==1) FExtension.store.set("SL_wptDHist","");
  else FExtension.store.set("SL_wptLHist","");
  setTimeout(function() {
	GEBI("SL_reset"+st).style.display="none";
  }, 1000);
}

function SL_SAVE_THEME(){
  FExtension.store.set("THEMEmode", GEBI("SL_THEME").value);
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  location.reload();
}

function ACTIVATE_THEME(st){
 	if(st==1){
		var bg="#191919";
		var clr="#BF7D44";
		var clr_deact="#BDBDBD";
		GEBI("SL_translate_container").style.filter=SL_DARK;
		GEBI("SL_wptReset1").style.filter=SL_DARK;
		GEBI("SL_wptReset2").style.filter=SL_DARK;
		var LBLS = document.getElementsByClassName("SL_BG_op");
		for(var i=0; i<LBLS.length; i++) LBLS[i].style.color=clr;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;

		setTimeout(function() {
			var SL_lngSrc_opt = GEBI("SL_langSrc_wpt").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_lngSrc_opt = GEBI("SL_langDst_wpt").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}, 1000);

		GEBI("SL_AUTOKEYS").style.filter=SL_DARK;	
	}
}

function SL_SAVE_FAVORITE_LANGUAGES(ln, TR){
	var OUT = "";
	var OUT2 = "";
	var SL_FAV_LANGS = FExtension.store.get(TR);
	var SL_FAV_MAX = FExtension.store.get("SL_FAV_MAX");
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


function BUILD_RESET_ICN(ob){
	GEBI("reset_all"+ob).title="Reset to default";
}

function SL_DEL_AUTO(ob){
	GEBI("SRV"+ob).value = "Auto Translate"; 
	GEBI("SRV"+ob).placeholder = "Auto Translate"; 
        GEBI("MSG"+ob).style.visibility="hidden";
	save_options(0);
}                          


function RESET_ALL_HK(id){
        var st = "";
        switch (id){
         case 6: st = 'SL_HK_wpt1'; break;
         case 7: st = 'SL_HK_wpt2'; break;
         case 12: st = 'SL_HK_SO_wpt'; break;
         case 13: st = 'SL_HK_CT_wpt'; break;
	}
	for(var i=0; i<PACK_PARAMS.length; i++){
		var tmp = PACK_PARAMS[i].split(";");
		var curDBname = tmp[0];
		var curDBparam = tmp[1];
		var DBparam = FExtension.store.get(curDBname);
		if(curDBname == st){
			FExtension.store.set(curDBname, curDBparam);			
			GEBI("MSG"+id).style.visibility="hidden";
		}
	}
	var newParam = FExtension.store.get(st);
	newParam = newParam.replace("Escape","Esc");
	GEBI("SRV"+id).value=newParam;

}

