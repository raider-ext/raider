'use strict';
var SL_DARK="invert(95%)";

var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages'));

(function(){GEBI("SRV5").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV5"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV5").addEventListener("mouseout",function(){NoneColor(5);},!1); } )();
(function(){GEBI("SL_del5").addEventListener("click",function(){SL_DEL_AUTO(5);},!1);} )();
(function(){GEBI("SRV5").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV6").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV6"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV6").addEventListener("mouseout",function(){NoneColor(6);},!1); } )();
(function(){GEBI("SRV6").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SL_ENABLE").addEventListener("click",function(){SL_Enable_ImTranslator_Bubble_SYNCHRO();},!1);} )();

(function(){GEBI("SLX").addEventListener("keyup",function(){Coord(this);},!1);} )();
(function(){GEBI("SLY").addEventListener("keyup",function(){Coord(this);},!1);} )();

(function(){GEBI("SLX").addEventListener("click",function(){if(this.value==0)this.value="";},!1);} )();
(function(){GEBI("SLY").addEventListener("click",function(){if(this.value==0)this.value="";},!1);} )();
(function(){GEBI("SLX").addEventListener("mouseout",function(){ReSettler(this);},!1);} )();
(function(){GEBI("SLY").addEventListener("mouseout",function(){ReSettler(this);},!1);} )();

(function(){GEBI("DELAY").addEventListener("keyup",function(){Delay(this);},!1);} )();
(function(){GEBI("DELAY").addEventListener("click",function(){if(this.value==0)this.value="";},!1);} )();
(function(){GEBI("DELAY").addEventListener("mouseout",function(){ReSettler(this);},!1);} )();

(function(){GEBI("timing").addEventListener("keyup",function(){Timing(this);},!1);} )();
(function(){GEBI("timing").addEventListener("click",function(){if(this.value==0)this.value="";},!1);} )();
(function(){GEBI("timing").addEventListener("mouseout",function(){ReSettler(this);},!1);} )();


(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();
(function(){GEBI("SL_translation_mos_bbl").addEventListener("click",function(){ SL_HIDE_HK("SL_translation_mos_bbl","SL_HIDE5");},!1); } )();
(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();
(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_translation_mos_bbl2").addEventListener("click",function(){ CLOSER(); },!1); } )();
(function(){GEBI("SL_OtherTr").addEventListener("click",function(){ SL_SHOWHIDEPROVIDERS(); },!1); } )();
(function(){window.addEventListener("mousemove",function(){NoneColor(5);},!1);} )();
(function(){window.addEventListener("mousemove",function(){NoneColor(6);},!1);} )();
(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

(function(){window.addEventListener("mouseover",function(){ToolTip(event,1);},!1);} )();

(function(){GEBI("reset_all5").addEventListener("click",function(){ RESET_ALL_HK(5);},!1);} )();
(function(){GEBI("reset_all6").addEventListener("click",function(){ RESET_ALL_HK(6);},!1);} )();

(function(){window.addEventListener("mousemove",function(){
	BUILD_RESET_ICN(5);
	BUILD_RESET_ICN(6);
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
	var OB = GEBI('SL_langSrc_bbl');
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
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB.appendChild(OB2);
	}

	var OB3 = GEBI('SL_langDst_bbl');
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
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
	GEBI('SL_DetSoLaAu').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetSoLaAu')));
	GEBI('SL_TR_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTR_op')));
	GEBI('SL_enable_dict').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extEnable_Dict')));
	GEBI('SL_enable').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extEnable')));
	GEBI('SL_Pin').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extPin_ttl')));
	GEBI('SL_STB').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSTB')));
	GEBI('SL_TOMS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTOMS')));
	GEBI('SL_ChFS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extChFS')));
	GEBI('SL_FS_small').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFS_small')));
	GEBI('SL_FS_large').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFS_large')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTrHist')));
	GEBI('SL_BblTH').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extBblTH')));
	GEBI('SL_DBL').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDBLclick')));
	GEBI('SL_HotKeys').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_CLOSE').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClose')));
	GEBI('SLDuring').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDuring')));
	GEBI('SLSeconds').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSeconds')));
	GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
	GEBI('SL_SaveText_bbl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveText')));
	GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLangs')+":"));
	GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCustomize')));
	GEBI('SL_LIST_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIST_TR_PR')));
	GEBI('SL_SET_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSET_TR_PR')));
	GEBI('SL_SHOWHIDE_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSHOWHIDE_TR_PR')));
	GEBI('SL_FORSE').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFORSE')));

	GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
	GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
	GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));

	switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/opera-bubble-translator-options/"; break;
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/bubble-translator-options/"; break;
	 default      : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/";break;
	}
	PR_BUILDER("SL_ALL_PROVIDERS_BBL");
	ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}




function INIT(){
  ACTIVATE_MENU_ELEMENT(3);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
  var mySL_langSrc_bbl = FExtension.store.get("SL_langSrc_bbl");
  var mySL_langSrcSelect_bbl = GEBI("SL_langSrc_bbl");
  for (var i = 0; i < mySL_langSrcSelect_bbl.options.length; i++) {
    var mySL_langSrcOption_bbl = mySL_langSrcSelect_bbl.options[i];
    if (mySL_langSrcOption_bbl.value == mySL_langSrc_bbl) {
      mySL_langSrcOption_bbl.selected = "true";
      break;
    }
  }

  var mySL_langDst_bbl = FExtension.store.get("SL_langDst_bbl");
  var mySL_langDstSelect_bbl = GEBI("SL_langDst_bbl");
  for (var i = 0; i < mySL_langDstSelect_bbl.options.length; i++) {
    var mySL_langDstOption_bbl = mySL_langDstSelect_bbl.options[i];
    if (mySL_langDstOption_bbl.value == mySL_langDst_bbl) {
      mySL_langDstOption_bbl.selected = "true";
      break;
    }
  }


  var SL_FORSE = FExtension.store.get("FORSEbubble");
  if(SL_FORSE=="1")  GEBI("SL_FORSE_bbl").checked = true;
  else GEBI("SL_FORSE_bbl").checked = false;


  var SL_TH_2 = FExtension.store.get("SL_TH_2");
  if(SL_TH_2=="1")  GEBI("SL_TH_2").checked = true;
  else GEBI("SL_TH_2").checked = false;


  var SL_ENABLE = FExtension.store.get("SL_ENABLE");
  if(SL_ENABLE=="true")  GEBI("SL_ENABLE").checked = true;
  else GEBI("SL_ENABLE").checked = false;

  var SL_global_lng_bbl = FExtension.store.get("SL_global_lng_bbl");
  if(SL_global_lng_bbl=="true")  GEBI("SL_global_lng_bbl").checked = true;
  else GEBI("SL_global_lng_bbl").checked = false;

  var SL_no_detect_bbl = FExtension.store.get("SL_no_detect_bbl");
  if(SL_no_detect_bbl=="true")  GEBI("SL_no_detect_bbl").checked = true;
  else GEBI("SL_no_detect_bbl").checked = false;

  var mySL_Fontsize_bbl = FExtension.store.get("SL_Fontsize_bbl");
  var mySL_FontsizeSelect_bbl = GEBI("SL_Fontsize_bbl");
  for (var i = 0; i < mySL_FontsizeSelect_bbl.options.length; i++) {
    var mySL_FontsizeOption_bbl = mySL_FontsizeSelect_bbl.options[i];
    if (mySL_FontsizeOption_bbl.value == mySL_Fontsize_bbl) {
      mySL_FontsizeOption_bbl.selected = "true";
      break;
    }
  }


  var SL_OtherTr = FExtension.store.get("SL_other_bbl");
  if(SL_OtherTr=="1"){
	GEBI("SL_OtherTr").checked = true;
  }else{
	GEBI("SL_OtherTr").checked = false;
  }	

  var SL_pr_bbl = FExtension.store.get("SL_pr_bbl");
  if(SL_pr_bbl=="1") GEBI("SL_pr_bbl").checked = true;
  else	GEBI("SL_pr_bbl").checked = false;
  SL_SHOWHIDEPROVIDERS();


  var SL_dict = FExtension.store.get("SL_dict_bbl");
  if(SL_dict=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  var SL_translation_mos_bbl = FExtension.store.get("SL_translation_mos_bbl");
  if(SL_translation_mos_bbl=="true")  GEBI("SL_translation_mos_bbl").checked = true;
  else GEBI("SL_translation_mos_bbl").checked = false;

  var SL_translation_mos_bbl2 = FExtension.store.get("SL_HK_bb2box");
  if(SL_translation_mos_bbl2=="true"){
	GEBI("SL_translation_mos_bbl2").checked = true;
	GEBI("SL_HIDE6").style.display="none";
  }else{
	GEBI("SL_translation_mos_bbl2").checked = false;
	GEBI("SL_HIDE6").style.display="block";
  }	

  var SL_pin_bbl = FExtension.store.get("SL_pin_bbl");
  if(SL_pin_bbl=="true")  GEBI("SL_pin_bbl").checked = true;
  else GEBI("SL_pin_bbl").checked = false;

  var SL_DBL_bbl = FExtension.store.get("SL_DBL_bbl");
  if(SL_DBL_bbl=="true")  GEBI("SL_DBL_bbl").checked = true;
  else GEBI("SL_DBL_bbl").checked = false;

  var SL_show_button_bbl = FExtension.store.get("SL_show_button_bbl");
  if(SL_show_button_bbl=="true")  GEBI("SL_show_button_bbl").checked = true;
  else GEBI("SL_show_button_bbl").checked = false;

  if(FExtension.store.get("SL_HK_bb1")!=""){
	GEBI('SRV5').value=FExtension.store.get("SL_HK_bb1");
  } else {
	GEBI('SRV5').placeholder="Not set";
  }


  GEBI('SRV6').value=FExtension.store.get("SL_HK_bb2").replace("Escape","Esc");



  if(FExtension.store.get("SL_SaveText_box_bbl")==1) GEBI('SL_SaveText_box_bbl').checked=true;
  else GEBI('SL_SaveText_box_bbl').checked=false;


  var SL_TIMING = FExtension.store.get("SL_Timing");
  GEBI("timing").value=SL_TIMING;

  var SL_DELAY = FExtension.store.get("SL_Delay");
  GEBI("DELAY").value=SL_DELAY;

  var SL_X = FExtension.store.get("SL_BTN_X");
  GEBI("SLX").value=SL_X;

  var SL_Y = FExtension.store.get("SL_BTN_Y");
  GEBI("SLY").value=SL_Y;

  SL_HIDE_HK("SL_translation_mos_bbl","SL_HIDE5");

  var SL_THEMEmode = FExtension.store.get("THEMEmode");
  if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
  else GEBI("SL_THEME").value = 1;



  SL_Enable_ImTranslator_Bubble_SYNCHRO();
  save_options(1);
}

function save_options(st) {
 setTimeout(function() {
  var SL_select_S_bbl = GEBI("SL_langSrc_bbl");
  var SL_select_T_bbl = GEBI("SL_langDst_bbl");
  var SL_select_FS_bbl = GEBI("SL_Fontsize_bbl");

  if(SL_select_S_bbl.value!=SL_select_T_bbl.value){

   if(GEBI("SL_TH_2").checked==true) FExtension.store.set("SL_TH_2", "1");
   else FExtension.store.set("SL_TH_2","0");


        if(GEBI("SL_pr_bbl").checked==true){
	   SAVE_LIST_PROVIDERS_SYN("SL_ALL_PROVIDERS_BBL","SL_ALL_PROVIDERS_GT");
	   FExtension.store.set("SL_pr_bbl", "1");
	   FExtension.store.set("SL_pr_gt", "1");
	        if(GEBI("SL_OtherTr").checked == true) {
			FExtension.store.set("SL_other_bbl", "1");
			FExtension.store.set("SL_other_gt", "1");
	        }else{
			FExtension.store.set("SL_other_bbl", "0");
			FExtension.store.set("SL_other_gt", "0");
		}
   	} else {
   	   SAVE_LIST_PROVIDERS("SL_ALL_PROVIDERS_BBL");
	   FExtension.store.set("SL_pr_bbl", "0");
	   FExtension.store.set("SL_pr_gt", "0");
	        if(GEBI("SL_OtherTr").checked == true) {
			FExtension.store.set("SL_other_bbl", "1");
	        }else{
			FExtension.store.set("SL_other_bbl", "0");
		}
   	}

	var SL_langSrc_bbl = SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value;
	FExtension.store.set("SL_langSrc_bbl", SL_langSrc_bbl);

	var SL_langDst_bbl = SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value;
	FExtension.store.set("SL_langDst_bbl", SL_langDst_bbl);
	FExtension.store.set("SL_WPT_TEMP_LANG", SL_langDst_bbl);		

	FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect_bbl").checked);

	FExtension.store.set("SL_ENABLE", GEBI("SL_ENABLE").checked);

	var SL_langDst_name_bbl = SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].text;
	FExtension.store.set("SL_langDst_name_bbl", SL_langDst_name_bbl);

        FExtension.store.set("SL_dict_bbl", GEBI("SL_dictionary").checked);
        FExtension.store.set("SL_DBL_bbl", GEBI("SL_DBL_bbl").checked);
	
	if(String(GEBI('SRV5').value)!="None")	FExtension.store.set("SL_HK_bb1", GEBI('SRV5').value);
	else FExtension.store.set("SL_HK_bb1", "");

	FExtension.store.set("SL_HK_bb2", GEBI('SRV6').value.replace("Esc","Escape"));


	if(GEBI('SL_SaveText_box_bbl').checked==true) FExtension.store.set("SL_SaveText_box_bbl",1);
	else FExtension.store.set("SL_SaveText_box_bbl",0);

	if(GEBI('SL_FORSE_bbl').checked==true) FExtension.store.set("FORSEbubble",1);
	else FExtension.store.set("FORSEbubble",0);

//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
//==============================
	

        if(GEBI("SL_global_lng_bbl").checked==true){

	   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_bbl").checked);

	   FExtension.store.set("SL_langSrc", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langSrc_bbl", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langSrc_wpt", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langSrc_it", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);

	   FExtension.store.set("SL_langDst", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langDst_bbl", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langDst_wpt", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langDst_it", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);


	   FExtension.store.set("SL_no_detect", GEBI("SL_no_detect_bbl").checked);
	   FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect_bbl").checked);
	   FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect_bbl").checked);

	   FExtension.store.set("SL_langDst_name", SL_langDst_name_bbl);
	   FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_bbl);
	   FExtension.store.set("SL_langDst_name_bbl", SL_langDst_name_bbl);
	   FExtension.store.set("SL_langDst_name_it", SL_langDst_name_bbl);



	   var IDS = document.getElementById("SL_langDst_bbl").value;
	   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_IMT");
	   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_BBL");
	   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_IT");
  	   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_WPT");

        } else {
	   SL_SAVE_FAVORITE_LANGUAGES(document.getElementById("SL_langDst_bbl").value, "SL_FAV_LANGS_BBL");
	   FExtension.store.set("SL_langDst_name_bbl", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].text);
	   
	   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_bbl").checked);

        }	

        RESET_TEMPS_TO_DEFAULT();


	FExtension.store.set("SL_Flag", "FALSE");
        FExtension.bg.ImTranslatorBG.PREPARE_RCM_CONTENT();
 	FExtension.bg.ImTranslatorBG.SL_WorkingSet();
        FExtension.bg.FExtension.browser.refreshSettings();
	if(GEBI("SL_ENABLE").checked==false) FExtension.bg.ImTranslatorBG.SL_callbackRequestToChangeRightClickMenu(0);
	else FExtension.bg.ImTranslatorBG.SL_callbackRequestToChangeRightClickMenu(1);




   var SL_Fontsize_bbl = SL_select_FS_bbl.children[SL_select_FS_bbl.selectedIndex].value;
   FExtension.store.set("SL_Fontsize_bbl", SL_Fontsize_bbl);
   FExtension.store.set("SL_Fontsize_bbl2", "");


   var SL_translation_mos_bbl = GEBI("SL_translation_mos_bbl").checked;
   FExtension.store.set("SL_translation_mos_bbl", SL_translation_mos_bbl);

   var SL_translation_mos_bbl2 = GEBI("SL_translation_mos_bbl2").checked;
   FExtension.store.set("SL_HK_bb2box", SL_translation_mos_bbl2);



   var SL_pin_bbl = GEBI("SL_pin_bbl").checked;
   FExtension.store.set("SL_pin_bbl", SL_pin_bbl);
   FExtension.store.set("SL_pin_bbl2",FExtension.store.get("SL_pin_bbl"));

   var SL_show_button_bbl = GEBI("SL_show_button_bbl").checked;
   FExtension.store.set("SL_show_button_bbl", SL_show_button_bbl);

   if(GEBI("DELAY").value!="-" && GEBI("DELAY").value!="") FExtension.store.set("SL_Delay",GEBI("DELAY").value);
   else {
	FExtension.store.set("SL_Delay",0);
	GEBI("DELAY").value=0;
   }	

   if(GEBI("timing").value!="-" && GEBI("timing").value!="") FExtension.store.set("SL_Timing",GEBI("timing").value);
   else {
	FExtension.store.set("SL_Timing",0);
	GEBI("timing").value=0;
   }	

   if(GEBI("SLX").value!="-" && GEBI("SLX").value!="") FExtension.store.set("SL_BTN_X",GEBI("SLX").value);
   else {
	FExtension.store.set("SL_BTN_X",0);
	GEBI("SLX").value=0;
   }	
   if(GEBI("SLY").value!="-" && GEBI("SLY").value!="") FExtension.store.set("SL_BTN_Y",GEBI("SLY").value);
   else {
	FExtension.store.set("SL_BTN_Y",0);
	GEBI("SLY").value=0;
   }	

   ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
   if(GEBI('autohotkeys')){
	  var frame = GEBI('autohotkeys');
	  if(frame)	frame.parentNode.removeChild(frame);
   }

  }else alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extS_T_L_diff'));
 }, 100);
}

function GEBI(id){ return document.getElementById(id);}






function SL_Enable_ImTranslator_Bubble_SYNCHRO(){
    if(GEBI("SL_ENABLE").checked == false) GEBI('SL_ENJECT').style.color='red';
    else GEBI('SL_ENJECT').style.color='black';
}

function Timing(ob){
  if(ob.value!=""){
	 ob.value = ob.value.replace(/[^0-9]+/g, '');
	 if(ob.value[2]=="-") ob.value = ob.value[0]+ob.value[1];
	 for (var i=0;i<ob.value.length;i++){
	   var temp=ob.value.substring(i,i+1);
	   if(ob.value>99) ob.value=ob.value[0]+ob.value[1];
	 }
	 ob.value = ob.value*1;
  }
}

function Delay(ob){
  if(ob.value!=""){
 	ob.value = ob.value.replace(/[^0-9]+/g, '');
	for (var i=0;i<ob.value.length;i++){
	   var temp=ob.value.substring(i,i+1);
	   if(ob.value>9) ob.value=ob.value[0];
	}
	ob.value = ob.value*1;
  }	
}

function Coord(ob){
  if(ob.value!=""){
	 ob.value = ob.value.replace(/[^0-9-]+/g, '');
	 if(ob.value[2]=="-") ob.value = ob.value[0]+ob.value[1];
	 for (var i=0;i<ob.value.length;i++){
	      var temp=ob.value.substring(i,i+1);
	      if(ob.value>99){
        	ob.value=ob.value[0]+ob.value[1];
	      }
	 }
	 if(ob.value.indexOf("-")==-1) ob.value=ob.value*1;
	 else {
	    if(ob.value[0]!="-") ob.value = ob.value.replace("-","");
	 }
	 if(ob.value.length==1 && ob.value[0]=="-") ob.value = "-";	
 	 ob.value = ob.value.replace(/--/gi, '-');

	ob.value = ob.value.replace("00","0")
	ob.value = ob.value.replace("-0","0")
  }
}

function ReSettler(ob){
  if(ob.value=="" || ob.value=="-") ob.value=0;
}



function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}

function SL_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function CLOSER(){
   if(GEBI("SL_translation_mos_bbl2").checked == false){
	GEBI("SL_HIDE6").style.display="block";
   }else{
	GEBI("SL_HIDE6").style.display="none";
   }
}



function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  CONSTRUCTOR();
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  parent.frames["menu"].location.reload();
  location.reload();
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
		var LBLS = document.getElementsByClassName("SL_BG_op");
		for(var i=0; i<LBLS.length; i++) LBLS[i].style.color=clr;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;
		var E = document.getElementsByClassName("SLMSG");
		for(var j=0; j<E.length; j++) E[j].style.filter=SL_DARK;


		setTimeout(function() {
			var SL_lngSrc_opt = GEBI("SL_langSrc_bbl").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_lngSrc_opt = GEBI("SL_langDst_bbl").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_fnt_opt = GEBI("SL_Fontsize_bbl").getElementsByTagName("option");
			for(var j=0; j<SL_fnt_opt.length; j++) SL_fnt_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");

		}, 1000);

		if(GEBI("item-0")) GEBI("item-0").style.borderRight="10px solid "+clr;	
		if(GEBI("item-1")) GEBI("item-1").style.borderRight="10px solid "+clr;
		if(GEBI("item-2")) GEBI("item-2").style.borderRight="10px solid "+clr;
		if(GEBI("item-3")) GEBI("item-3").style.borderRight="10px solid "+clr;
		
		GEBI("SL_AUTOKEYS").style.filter=SL_DARK;	
	}
}

function ToolTip(e,st){
 if(e.target.className=="info"){
	var div = GEBI(e.target.id);
	var divOffset = offset(div);
	console.log(divOffset.left, divOffset.top);
	
 }	
}	

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
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
         case 5: st = 'SL_HK_bb1'; break;
         case 6: st = 'SL_HK_bb2'; break;
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

