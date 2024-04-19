'use strict';
var SL_DARK="invert(95%)";

var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages'));

(function(){GEBI("SRV0").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV0"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV0").addEventListener("mouseout",function(){NoneColor(0);},!1); } )();
(function(){GEBI("SRV0").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();


(function(){GEBI("SRV1").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){NoneColor(1);},!1); } )();
(function(){GEBI("SL_del1").addEventListener("click",function(){SL_DEL_AUTO(1);},!1);} )();
(function(){GEBI("SRV1").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV2").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV2"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV2").addEventListener("mouseout",function(){NoneColor(2);},!1); } )();
(function(){GEBI("SRV2").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();
(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

(function(){GEBI("SL_HK0").addEventListener("click",function(){ SL_HIDE_HK("SL_HK0","SL_HIDE0");},!1); } )();
(function(){GEBI("SL_HK1").addEventListener("click",function(){ SL_HIDE_HK("SL_HK1","SL_HIDE1");},!1); } )();
(function(){GEBI("SL_HK2").addEventListener("click",function(){ SL_HIDE_HK("SL_HK2","SL_HIDE2");},!1); } )();

(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();

(function(){GEBI("SL_OtherTr").addEventListener("click",function(){ SL_SHOWHIDEPROVIDERS(); },!1); } )();
(function(){window.addEventListener("mousemove",function(){NoneColor(1);},!1);} )();

(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

(function(){GEBI("reset_all0").addEventListener("click",function(){ RESET_ALL_HK(0);},!1);} )();
(function(){GEBI("reset_all1").addEventListener("click",function(){ RESET_ALL_HK(1);},!1);} )();
(function(){GEBI("reset_all2").addEventListener("click",function(){ RESET_ALL_HK(2);},!1);} )();

(function(){window.addEventListener("mousemove",function(){
	BUILD_RESET_ICN(0);
	BUILD_RESET_ICN(1);
	BUILD_RESET_ICN(2);
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
	var OB = GEBI('SL_langSrc_tr');
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

	var OB3 = GEBI('SL_langDst_tr');
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
	GEBI('SL_TR_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTR_op')));
	GEBI('SL_DetSoLaAu').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetSoLaAu')));
	GEBI('SL_enable_dict').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extEnable_Dict')));
	GEBI('SL_showBW').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extShowBW')));
	GEBI('SL_ChFS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extChFS')));
	GEBI('SL_FS_small').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFS_small')));
	GEBI('SL_FS_large').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFS_large')));
	GEBI('SL_HotKeys').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_TOMS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTOMS')));
	GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extInvTr')));
	GEBI('SL_EnTH').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extEnTH')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTrHist')));
	GEBI('SL_OptTrBut').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptTrBut')));
	GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
	GEBI('SL_SaveText_gt').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveText')));
	GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLangs')+":"));
	GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCustomize')));
	GEBI('SL_LIST_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIST_TR_PR')));
	GEBI('SL_SET_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSET_TR_PR')));
	GEBI('SL_SHOWHIDE_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSHOWHIDE_TR_PR')));

	GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
	GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
	GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));

	switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/opera-imtranslator-options/"; break;
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/chrome-imtranslator-options/"; break;
	 default      : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/";break;
	}
	PR_BUILDER("SL_ALL_PROVIDERS_GT");
	ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}

function INIT(){
  ACTIVATE_MENU_ELEMENT(1);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");

  var mySL_langSrc_tr = FExtension.store.get("SL_langSrc");
  var mySL_langSrc_trSelect = GEBI("SL_langSrc_tr");                                                         
  for (var i = 0; i < mySL_langSrc_trSelect.options.length; i++) {
    var mySL_langSrc_trOption = mySL_langSrc_trSelect.options[i];
    if (mySL_langSrc_trOption.value == mySL_langSrc_tr) {
      mySL_langSrc_trOption.selected = "true";
      break;
    }
  }

  var mySL_langDst_tr = FExtension.store.get("SL_langDst");
  var mySL_langDst_trSelect = GEBI("SL_langDst_tr");
  for (var i = 0; i < mySL_langDst_trSelect.options.length; i++) {
    var mySL_langDst_trOption = mySL_langDst_trSelect.options[i];
    if (mySL_langDst_trOption.value == mySL_langDst_tr) {
      mySL_langDst_trOption.selected = "true";
      break;
    }
  }


  var SL_TH_1 = FExtension.store.get("SL_TH_1");
  if(SL_TH_1=="1")  GEBI("SL_TH_1").checked = true;
  else GEBI("SL_TH_1").checked = false;

  var SL_global_lng = FExtension.store.get("SL_global_lng");
  if(SL_global_lng=="true")  GEBI("SL_global_lng").checked = true;
  else GEBI("SL_global_lng").checked = false;

  var SL_no_detect = FExtension.store.get("SL_no_detect");
  if(SL_no_detect=="true")  GEBI("SL_no_detect").checked = true;
  else GEBI("SL_no_detect").checked = false;

  var SL_dict = FExtension.store.get("SL_dict");
  if(SL_dict=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  var SL_OtherTr = FExtension.store.get("SL_other_gt");
  if(SL_OtherTr=="1"){
	GEBI("SL_OtherTr").checked = true;
  }else{
	GEBI("SL_OtherTr").checked = false;
  }	

  var SL_pr_gt = FExtension.store.get("SL_pr_gt");
  if(SL_pr_gt=="1") GEBI("SL_pr_gt").checked = true;
  else	GEBI("SL_pr_gt").checked = false;
  SL_SHOWHIDEPROVIDERS();


  var mySL_show_back = FExtension.store.get("SL_BACK_VIEW");
  if(mySL_show_back==1)  GEBI("SL_show_back").checked = true;
  else GEBI("SL_show_back").checked = false;

  var mySL_Fontsize = FExtension.store.get("SL_Fontsize");
  var mySL_FontsizeSelect = GEBI("SL_Fontsize");
  for (var i = 0; i < mySL_FontsizeSelect.options.length; i++) {
    var mySL_FontsizeOption = mySL_FontsizeSelect.options[i];
    if (mySL_FontsizeOption.value == mySL_Fontsize) {
      mySL_FontsizeOption.selected = "true";
      break;
    }
  }

  // Hotkeys block

  var mySL_HKset = FExtension.store.get("SL_HKset").split("|");
  var mySL_HK = mySL_HKset[2];
  if(mySL_HK=="true")  GEBI("SL_HK1").checked = true;
  else GEBI("SL_HK1").checked = false;

  var mySL_HKset_inv = FExtension.store.get("SL_HKset_inv").split("|");
  var mySL_HK_inv = mySL_HKset_inv[2];
  if(mySL_HK_inv=="true")  GEBI("SL_HK2").checked = true;
  else GEBI("SL_HK2").checked = false;

  if(FExtension.store.get("SL_HK_gt1")!=""){
	GEBI('SRV1').value=FExtension.store.get("SL_HK_gt1");
  } else {
	GEBI('SRV1').placeholder="Not set";
  }
  GEBI('SRV2').value=FExtension.store.get("SL_HK_gt2");

  if(FExtension.store.get("SL_HK_btnbox")=="true") GEBI('SL_HK0').checked=true;
  else GEBI('SL_HK0').checked=false;
  GEBI('SRV0').value=FExtension.store.get("SL_HK_btn");

  SL_HIDE_HK("SL_HK0","SL_HIDE0");
  SL_HIDE_HK("SL_HK1","SL_HIDE1");
  SL_HIDE_HK("SL_HK2","SL_HIDE2");

  if(FExtension.store.get("SL_SaveText_box_gt")==1) GEBI('SL_SaveText_box_gt').checked=true;
  else GEBI('SL_SaveText_box_gt').checked=false;

  var SL_THEMEmode = FExtension.store.get("THEMEmode");
  if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
  else GEBI("SL_THEME").value = 1;
  save_options(1);
}

function save_options(st) {
 setTimeout(function() {

  var SL_select_S = GEBI("SL_langSrc_tr");
  var SL_select_T = GEBI("SL_langDst_tr");
  var SL_select_FS = GEBI("SL_Fontsize");
 
   if(SL_select_S.value!=SL_select_T.value){
	   if(GEBI("SL_TH_1").checked==true) FExtension.store.set("SL_TH_1", "1");
	   else FExtension.store.set("SL_TH_1", "0");

   

	        if(GEBI("SL_pr_gt").checked==true){
		   SAVE_LIST_PROVIDERS_SYN("SL_ALL_PROVIDERS_GT","SL_ALL_PROVIDERS_BBL");
		   FExtension.store.set("SL_pr_gt", "1");
		   FExtension.store.set("SL_pr_bbl", "1");
		        if(GEBI("SL_OtherTr").checked == true) {
				FExtension.store.set("SL_other_bbl", "1");
				FExtension.store.set("SL_other_gt", "1");
		        }else{
				FExtension.store.set("SL_other_bbl", "0");
				FExtension.store.set("SL_other_gt", "0");
			}
	   	} else {
	   	   SAVE_LIST_PROVIDERS("SL_ALL_PROVIDERS_GT");
		   FExtension.store.set("SL_pr_gt", "0");
		   FExtension.store.set("SL_pr_bbl", "0");
		        if(GEBI("SL_OtherTr").checked == true) {
				FExtension.store.set("SL_other_gt", "1");
		        }else{
				FExtension.store.set("SL_other_gt", "0");
			}
	   	}

//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
//==============================

		var SL_langSrc_tr = SL_select_S.children[SL_select_S.selectedIndex].value;
		FExtension.store.set("SL_langSrc", SL_langSrc_tr);

		FExtension.store.set("SL_langSrc2",SL_langSrc_tr);

		var SL_langDst_tr = SL_select_T.children[SL_select_T.selectedIndex].value;
		FExtension.store.set("SL_langDst", SL_langDst_tr);
		FExtension.store.set("SL_langDst2", SL_langDst_tr);
		FExtension.store.set("SL_WPT_TEMP_LANG", SL_langDst_tr);			

		FExtension.store.set("SL_no_detect", GEBI("SL_no_detect").checked);
	
		var SL_langDst_name = SL_select_T.children[SL_select_T.selectedIndex].text;
		FExtension.store.set("SL_langDst_name", SL_langDst_name);

 	        var SL_Fontsize = SL_select_FS.children[SL_select_FS.selectedIndex].value;
	        FExtension.store.set("SL_Fontsize", SL_Fontsize);
	        FExtension.store.set("SL_Fontsize2", SL_Fontsize);

		FExtension.store.set("SL_dict", GEBI("SL_dictionary").checked);
		FExtension.store.set("SL_show_back", GEBI("SL_show_back").checked);
		FExtension.store.set("SL_show_back2", GEBI("SL_show_back").checked);

		if(GEBI("SL_show_back").checked==true)	FExtension.store.set("SL_BACK_VIEW",1);
		else	FExtension.store.set("SL_BACK_VIEW",2);


		var SL_HKset = 3;
	        SL_HKset = SL_HKset + "|" + GET_CODE(SL_HK_SPLIT("SRV2",2));
	   	SL_HKset = SL_HKset + "|" + GEBI("SL_HK1").checked;	
		FExtension.store.set("SL_HKset", SL_HKset);

		FExtension.store.set("SL_HKset_inv", "3|90|"+GEBI("SL_HK2").checked);

		if(GEBI('SRV1').value!="")	FExtension.store.set("SL_HK_gt1", GEBI('SRV1').value);
		else FExtension.store.set("SL_HK_gt1", "");
		FExtension.store.set("SL_HK_gt2", GEBI('SRV2').value);

		FExtension.store.set("SL_HK_btn", GEBI('SRV0').value);
		if(GEBI('SL_HK0').checked==true) FExtension.store.set("SL_HK_btnbox", "true");
		else FExtension.store.set("SL_HK_btnbox", "false");

		FExtension.store.set("SL_Flag", "FALSE");

		if(GEBI('SL_SaveText_box_gt').checked==true) FExtension.store.set("SL_SaveText_box_gt",1);
		else FExtension.store.set("SL_SaveText_box_gt",0);


	   if(GEBI("SL_global_lng").checked==true){
		   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng").checked);
	
		   FExtension.store.set("SL_langSrc", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc2", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_bbl", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_wpt", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_it", SL_select_S.children[SL_select_S.selectedIndex].value);
	
		   FExtension.store.set("SL_langDst", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst2", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_bbl", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_wpt", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_it", SL_select_T.children[SL_select_T.selectedIndex].value);

		   FExtension.store.set("SL_no_detect", GEBI("SL_no_detect").checked);
		   FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect").checked);
		   FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect").checked);

		   FExtension.store.set("SL_langDst_name", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_wpt", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_bbl", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_it", SL_select_T.children[SL_select_T.selectedIndex].text);

		   var IDS = document.getElementById("SL_langDst_tr").value;
		   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_IMT");
		   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_BBL");
		   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_IT");
   		   SL_SAVE_FAVORITE_LANGUAGES(IDS, "SL_FAV_LANGS_WPT");
	   	} else {		   
	   	   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng").checked);
		   SL_SAVE_FAVORITE_LANGUAGES(document.getElementById("SL_langDst_tr").value, "SL_FAV_LANGS_IMT");
	           FExtension.store.set("SL_langDst_name", SL_select_T.children[SL_select_T.selectedIndex].text);
	   	}

                RESET_TEMPS_TO_DEFAULT();
                FExtension.bg.ImTranslatorBG.PREPARE_RCM_CONTENT();
	 	FExtension.bg.ImTranslatorBG.SL_WorkingSet();
	        FExtension.bg.FExtension.browser.refreshSettings();

		FExtension.bg.ImTranslatorBG.DIC_TRIGGER = 0;
		ACTIVATE_THEME(FExtension.store.get("THEMEmode"));

		if(GEBI('autohotkeys')){
		  var frame = GEBI('autohotkeys');
		  if(frame)	frame.parentNode.removeChild(frame);
		}

		localStorage["WINDOW_WIDTH"] = 555;
		localStorage["WINDOW_HEIGHT"] = 670; //540;
	    	localStorage["WINDOW_TOP"] = ((screen.height - localStorage["WINDOW_HEIGHT"] ) / 2);
	    	localStorage["WINDOW_LEFT"]= (( screen.width - localStorage["WINDOW_WIDTH"] ) / 2 );



   }else{ 
	  alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extS_T_L_diff'));
   }
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
			var SL_lngSrc_opt = GEBI("SL_langSrc_tr").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_lngSrc_opt = GEBI("SL_langDst_tr").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_fnt_opt = GEBI("SL_Fontsize").getElementsByTagName("option");
			for(var j=0; j<SL_fnt_opt.length; j++) SL_fnt_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}, 1000);
		
		if(GEBI("item-0")) GEBI("item-0").style.borderRight="10px solid "+clr;	
		if(GEBI("item-1")) GEBI("item-1").style.borderRight="10px solid "+clr;
		if(GEBI("item-2")) GEBI("item-2").style.borderRight="10px solid "+clr;
		if(GEBI("item-3")) GEBI("item-3").style.borderRight="10px solid "+clr;
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
         case 0: st = 'SL_HK_btn'; break;
         case 1: st = 'SL_HK_gt1'; break;
         case 2: st = 'SL_HK_gt2'; break;
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
	GEBI("SRV"+id).value=FExtension.store.get(st);
}

